import { Chain } from './Chain';
import { TransformOptions } from 'babel-core';
import { merge } from 'lodash';
import { Options } from 'ts-import-plugin/lib';
import { LoaderOptions } from 'webpack-chain';
import { resolve } from 'path';

const tsImportFactory = require('ts-import-plugin');

let babelOptions: TransformOptions = {}

function extendGlobalBabelOptions(options: TransformOptions) {
    merge(babelOptions, options);
}

function createBabelOptionsFromGlobal(chain: Chain, options: TransformOptions): TransformOptions {
    return merge({}, babelOptions, options);
}

function addJavascriptLoader(chain: Chain) {
    chain.addLoader('js', 'babel-loader', babelOptions)
        .test(/\.(js|jsx|mjs)$/)
        .include.add(chain.srcPath()).end()
        .exclude.add(/node_modules/);
}

function addJavascriptImportFactories(chain: Chain, factories: Options[]) {
    chain.getLoader('js', 'babel-loader').tap((options: TransformOptions) => {
        options.plugins.push(...factories.map(factory => [ 'import', factory ]))
        return options
    })
}

function addTypescriptLoader(chain: Chain, tsconfig?: string) {
    tsconfig = tsconfig ? tsconfig : resolve('tsconfig.json');
    chain.module
        .rule('ts')
        .test(/\.(ts|tsx)$/)
        .include.add(chain.srcPath()).end()
        .exclude.add(/node_modules/).end()
        .use('ts-loader')
        .loader('ts-loader')
        .options({
            logLevel       : 'info',
            logInfoToStdOut: true,
            transpileOnly  : true,
            compilerOptions: { module: 'esnext', target: 'es5' },
            configFile     : tsconfig
        })


    // chain
    //     .plugin('fork-ts-checkers')
    //     .use(ForkTsChecker as any)
    //     .init(ForkTsChecker => new ForkTsChecker({
    //         async: false,
    //         watch: chain.srcPath(),
    //         tsconfig
    //     }))
}

function tapTypescriptLoaderOptions(chain: Chain, f: (options: LoaderOptions) => LoaderOptions) {
    chain.getLoader('ts', 'ts-loader').tap(f);
}

function addBabelToTypescriptLoader(chain: Chain) {
    chain.module.rule('ts').use('babel-loader').loader('babel-loader').before('ts-loader').options(babelOptions);
}

function addTypescriptImportFactories(chain: Chain, factories: Options[]) {
    chain.getLoader('ts', 'ts-loader').tap(options => {
        options.getCustomTransformers = () => ({
            before: [ tsImportFactory(factories) ]
        });
        return options;
    })
}

export function initLoaders(chain: Chain) {

    babelOptions = {
        comments: ! chain.isProd,
        compact : chain.isProd,
        minified: chain.isProd,
        presets : [ 'env' ], //, 'react-app' ],
        plugins : []
    }

    chain.module.set('strictExportPresence', true);

    return {
        extendGlobalBabelOptions,
        createBabelOptionsFromGlobal,

        addJavascriptLoader,
        addJavascriptImportFactories,

        addTypescriptLoader,
        tapTypescriptLoaderOptions,
        addBabelToTypescriptLoader,
        addTypescriptImportFactories
    }
}


//region:style loaders
//
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
//endregion
