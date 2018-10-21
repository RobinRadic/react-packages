// import * as webpack from 'webpack';
// import * as BaseConfig from 'webpack-chain';
// import { LoaderOptions } from 'webpack-chain';
// import * as WriteFile from 'write-file-webpack-plugin';
// import * as ForkTsChecker from 'fork-ts-checker-webpack-plugin';
// import * as FriendlyErrors from 'friendly-errors-webpack-plugin';
// import * as WebpackBar from 'webpackbar'
// import * as path from 'path';
// import { TransformOptions } from 'babel-core';
// import { merge } from 'lodash';
// import * as Clean from 'clean-webpack-plugin'
// import * as OptimizeCss from 'optimize-css-assets-webpack-plugin';
// import * as MiniCssExtract from 'mini-css-extract-plugin'
// import { HandleCSSLoader } from './build/css-utils';
// import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
// import * as VisualizerPlugin from 'webpack-visualizer-plugin'
// import { parse } from 'dotenv';
// import { readFileSync } from 'fs';
// import { BundleSizeAnalyzerPlugin } from './build/plugins/BundleSizeAnalyzerPlugin';
//
//
// const AntdScssTheme     = require('antd-scss-theme-plugin');
// const tsImportFactory   = require('ts-import-plugin');
// const resolve           = (...args) => path.resolve(__dirname, ...args);
// const mode: string      = process.env.NODE_ENV ? process.env.NODE_ENV : 'development';
// const isDev             = mode === 'development';
// const isProd            = mode === 'production';
// const PKG: any          = require('./package.json')
// const tsconfig          = resolve('tsconfig.json');
// export const outputPath = resolve(mode === 'development' ? 'dev' : 'resources');
// const babelOptions      = (overrides: TransformOptions = {}) => merge(<TransformOptions>{
//     comments: ! isProd,
//     compact : isProd,
//     minified: isProd,
//     presets : [ 'env', 'react-app' ],
//     plugins : [
//         // [ 'import', { libraryName: 'antd', style: true } ],
//         [ 'import', {
//             libraryName            : 'lodash',
//             libraryDirectory       : '',
//             camel2DashComponentName: false
//         } ]
//
//     ]
// }, overrides);
//
// class Chain extends BaseConfig {
//     addLoader = (ruleName: string, loaderName: string, options: LoaderOptions = {}) => chain.module.rule(ruleName).use(loaderName).loader(loaderName).options(options).end()
// }
//
// const chain = new Chain();
//
// process.env.NODE_ENV = mode;
//
//
// chain
//     .set('mode', mode)
//     .devtool('cheap-module-source-map')
//     .target('web')
//     .node.merge({ setImmediate: false, dgram: 'empty', fs: 'empty', net: 'empty', tls: 'empty', child_process: 'empty' }).end();
//
// chain.entry('main')
//     .add(require.resolve('babel-polyfill'))
//     .add(resolve('theme/index.tsx'));
//
// chain.output
//     .path(outputPath)
//     .pathinfo(true)
//     .filename('js/[name].js')
//     .chunkFilename('js/[name].js');
//
// chain.resolve
//     .symlinks(true)
//     .extensions.merge([ '.js', '.vue', '.json', '.ts', '.tsx', '.styl', '.less', '.scss', '.stylus', '.css', '.mjs', '.web.ts', '.ts', '.web.tsx', '.tsx', '.web.js', '.js', '.json', '.web.jsx', '.jsx' ]).end()
//     .mainFields.merge([ 'module', 'browser', 'main' ]).end()
//     .mainFiles.merge([ 'index', 'index.ts', 'index.tsx' ]).end()
//     .modules.merge([ resolve('theme'), 'node_modules' ]).end()
//     .alias
//     .set('lodash', 'lodash-es')
//
//     /** @see https://github.com/ant-design/ant-design/issues/12011 */
//     .set('@ant-design/icons/lib/dist$', resolve('theme/icon.ts'));
//
// chain.resolveLoader
//     .modules.merge([ 'node_modules' ]).end()
//     .extensions.merge([ '.js', '.json', '.ts' ]).end();
//
// chain.when(isProd, chain => {
//     chain.devtool(false);
//     chain.performance
//         .maxAssetSize(1024 * 1024 * 1024 * 10)
//         .maxEntrypointSize(1024 * 1024 * 1024 * 10)
//         .hints('error');
//     chain.optimization
//         .minimize(false)
// }, chain => {
//     chain.optimization.minimize(false);
//     chain.performance.hints(false);
//     chain.devServer
//         .contentBase([ outputPath ])
//         .historyApiFallback(true)
//         .hot(true)
//         .inline(true)
//         .progress(true)
//         .quiet(true)
//         .stats('errors-only');
// });
//
// chain.module.set('strictExportPresence', true);
//
// //region:script loaders
// chain.module
//     .rule('ts')
//     .test(/\.(ts|tsx)$/)
//     .include.add(resolve('theme')).end()
//     .exclude.add(/node_modules/).end();
//
// chain.addLoader('ts', 'babel-loader', babelOptions({ plugins: [ 'react-hot-loader/babel' ] }));
// chain.addLoader('ts', 'ts-loader', { // context: __dirname, logLevel       : 'info',logInfoToStdOut: true,
//     logLevel             : 'info',
//     logInfoToStdOut      : true,
//     transpileOnly        : true,
//     getCustomTransformers: () => ({
//         before: [
//             tsImportFactory([
//                 // { libraryName: 'antd', style: true }, // @todo: 'libraryDirectory' with es bugged out, using lib works. difference???
//                 { libraryName: 'antd', libraryDirectory: 'es', style: true },// in dev we load the whole less file, so we can easily fiddle around with our own theme variables files
//                 { style: false, libraryName: 'lodash', libraryDirectory: null, camel2DashComponentName: false }
//             ]) ]
//     }),
//     compilerOptions      : { module: 'esnext', target: 'es5' },
//     configFile           : tsconfig
// });
//
// chain.addLoader('js', 'babel-loader', babelOptions({ compact: false }))
//     .test(/\.(js|jsx|mjs)$/)
//     .include.add(resolve('theme')).end()
//     .exclude.add(/node_modules/);
// //endregion
//
// //region:style loaders
// const styleLoaders   = new HandleCSSLoader({
//     styleLoader: 'style-loader',
//     sourceMap  : isProd,
//     postcss    : {
//         plugins: [
//             require('autoprefixer'),
//             require('cssnext'),
//             require('postcss-nested')
//         ]
//     },
//     cssLoader  : 'css-loader?importLoaders=1',
//     minimize   : isProd,
//     extract    : isProd,
//     cssModules : false
// });
// const styleLoaderMap = {
//     css   : styleLoaders.css([ /\.css$/ ]),
//     less  : styleLoaders.with({ antd: true }).less([ /\.less$/ ], { javascriptEnabled: true }, { cssLoaderOptions: { importLoaders: 1 } }),
//     scss  : styleLoaders.with({ antd: true }).scss([ /\.scss$/ ], {}, { cssLoaderOptions: { importLoaders: 1 } }),
//     styl  : styleLoaders.styl([ /\.styl$/ ]),
//     stylus: styleLoaders.stylus([ /\.stylus$/ ])
// };
// const a              = 'a';
// Object.keys(styleLoaderMap).forEach(key => chain.module.rule(key).merge(styleLoaderMap[ key ]))
// //endregion
//
// //region:asset loaders
// chain.addLoader('fonts', 'file-loader', {
//     name      : '[name].[ext]',
//     publicPath: `/fonts/`,
//     outputPath: 'fonts/'
// }).test(/\.*\.(woff2?|woff|eot|ttf|otf)(\?.*)?$/)
//
// chain.addLoader('images', 'file-loader', {
//     name      : '[name].[ext]',
//     publicPath: `/img/`,
//     outputPath: 'img/'
// }).test(/\.*\.(png|jpe?g|gif|svg)(\?.*)?$/)
// //endregion
//
// //region:plugins
// chain.plugin('antd').use(AntdScssTheme, [ resolve('theme/styles/antd/theme.scss') ]);
//
// chain.plugin('clean').use(Clean, [ [ '*/js', '*/css', '*/bundle-*.*' ], { root: outputPath, verbose: true } ])
//
// chain.plugin('write-file').use(WriteFile, [ { useHashIndex: false } ])
//
// chain.plugin('bar').use(WebpackBar, [ { profile: isDev, compiledIn: isDev } ])
//
// chain.plugin('loader-options').use(webpack.LoaderOptionsPlugin, [ { options: {} } ])
//
// chain.plugin('friendly-errors').use(FriendlyErrors, [ {
//     compilationSuccessInfo: isProd ? {} : {
//         messages: [ 'Build success' ]
//     },
//     onErrors              : function (severity, errors) {
//         console.error(severity, errors)
//     },
//     clearConsole          : false,
//     logLevel              : true,
//     additionalFormatters  : [],
//     additionalTransformers: []
// } ]);
//
// chain.plugin('define-plugin').use(webpack.DefinePlugin, [ {
//     'process.env': {
//         NODE_ENV: `"${mode}"`
//     },
//     'DEV'        : mode === 'development',
//     'PROD'       : mode === 'production',
//     'TEST'       : mode === 'testing',
//     PKG,
//     'APP_VERSION': PKG.version,
//     ENV          : parse(readFileSync(resolve('.env'), 'utf8'))
// } ])
//
// chain.when(isProd, chain => chain.plugin('css-extract').use(MiniCssExtract, [ {
//     filename     : 'css/[name]_[id].css?[hash]',
//     chunkFilename: 'css/[name]_[id].css?[chunkhash]'
// } ]))
//
// chain.when(isProd, chain => chain.plugin('css-optimize').use(OptimizeCss, [ {
//     assetNameRegExp    : /\.css$/g,
//     cssProcessor       : require('cssnano'),
//     cssProcessorOptions: { discardComments: { removeAll: true } },
//     canPrint           : true
// } ]))
//
// chain.when(isProd, chain => chain.plugin('bundle-analyzer').use(BundleAnalyzerPlugin, [ <BundleAnalyzerPlugin.Options> {
//     analyzerMode  : 'static',
//     openAnalyzer  : false,
//     reportFilename: 'bundle-analyzer.html'
// } ]))
//
// chain.when(isProd, chain => chain.plugin('bundle-size-analyzer').use(BundleSizeAnalyzerPlugin, [ 'bundle-size.txt' ]))
//
// chain.when(isProd, chain => chain.plugin('bundle-visualizer').use(VisualizerPlugin, [ { filename: 'bundle-visualizer.html' } ]))
// //endregion
//
// const config = chain.toConfig();
//
// config.plugins.push(new ForkTsChecker({
//     async: false,
//     watch: resolve('theme'),
//     tsconfig
// }))
//
// export { chain, config, Chain }
// export default config;
