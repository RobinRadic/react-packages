import * as webpack from 'webpack';
import * as WriteFile from 'write-file-webpack-plugin';
import * as FriendlyErrors from 'friendly-errors-webpack-plugin';
import * as WebpackBar from 'webpackbar'
import * as Clean from 'clean-webpack-plugin'
import OptimizeCss from 'optimize-css-assets-webpack-plugin';
import * as MiniCssExtract from 'mini-css-extract-plugin'
import * as VisualizerPlugin from 'webpack-visualizer-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { Chain } from './Chain';
import { BundleSizeAnalyzerPlugin } from '../plugins';

function addAntdPlugin(chain: Chain, themeScssFilePath: string) {
    const AntdScssTheme = require('antd-scss-theme-plugin');
    chain.plugin('antd').use(AntdScssTheme, [ themeScssFilePath ]);
}

function addWriteFilePlugin(chain: Chain) {
    chain.plugin('write-file').use(WriteFile, [ { useHashIndex: false } ])
}

function addDefinePlugin(chain: Chain, extraDefinitions = {}) {
    let { isDev, isProd } = chain
    let mode              = chain.get('mode');
    chain.plugin('define-plugin').use(webpack.DefinePlugin, [ {
        'process.env': {
            NODE_ENV: `"${mode}"`
        },
        'DEV'        : mode === 'development',
        'PROD'       : mode === 'production',
        'TEST'       : mode === 'testing',
        ...extraDefinitions
        // PKG,
        // 'APP_VERSION': PKG.version,
        // ENV          : parse(readFileSync(resolve('.env'), 'utf8'))
    } ])
}

function addCleanPlugin(chain: Chain, globs: string[] = [ '*/js', '*/css', '*/bundle-*.*' ]) {
    chain.plugin('clean').use(Clean, [ globs, { root: chain.outPath(), verbose: true } ])
}

function addCliPlugins(chain: Chain) {
    let { isDev, isProd } = chain

    chain.plugin('bar').use(WebpackBar, [ { profile: isDev, compiledIn: isDev } ])

    chain.plugin('loader-options').use(webpack.LoaderOptionsPlugin, [ { options: {} } ])

    chain.plugin('friendly-errors').use(FriendlyErrors, [ {
        compilationSuccessInfo: isProd ? {} : {
            messages: [ 'Build success' ]
        },
        onErrors              : function (severity, errors) {
            console.error(severity, errors)
        },
        clearConsole          : false,
        logLevel              : true,
        additionalFormatters  : [],
        additionalTransformers: []
    } ]);
}

function addCssExtractPlugins(chain: Chain, when?: boolean) {
    chain.when(when, chain => chain.plugin('css-extract').use(MiniCssExtract, [ {
        filename     : 'css/[name]_[id].css?[hash]',
        chunkFilename: 'css/[name]_[id].css?[chunkhash]'
    } ]))
}

function addOptimizerPlugins(chain: Chain, when?: boolean) {
    chain.when(when, chain => chain.plugin('css-optimize').use(OptimizeCss, [ {
        assetNameRegExp    : /\.css$/g,
        cssProcessor       : require('cssnano'),
        cssProcessorOptions: { discardComments: { removeAll: true } },
        canPrint           : true
    } ]))
}

function addAnalyzerPlugins(chain: Chain, when?: boolean) {

    chain.when(when, chain => chain.plugin('bundle-analyzer').use(BundleAnalyzerPlugin, [ <BundleAnalyzerPlugin.Options> {
        analyzerMode  : 'static',
        openAnalyzer  : false,
        reportFilename: 'bundle-analyzer.html'
    } ]))

    chain.when(when, chain => chain.plugin('bundle-size-analyzer').use(BundleSizeAnalyzerPlugin, [ 'bundle-size.txt' ]))

    chain.when(when, chain => chain.plugin('bundle-visualizer').use(VisualizerPlugin, [ { filename: 'bundle-visualizer.html' } ]))
}

export function initPlugins(chain: Chain) {

    return {
        addAntdPlugin,
        addWriteFilePlugin,
        addDefinePlugin,
        addCleanPlugin,
        addCliPlugins,
        addCssExtractPlugins,
        addOptimizerPlugins,
        addAnalyzerPlugins
    }
}
