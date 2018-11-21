import { Chain, HandleCSSLoader, initBase, initLoaders, initPlugins } from '@radic/build-tools-webpack'
import { resolve } from 'path';

const ForkTsChecker = require('fork-ts-checker-webpack-plugin');

const p = require('babel-polyfill');

const chain: Chain = initBase({
    mode         : process.env.NODE_ENV as any,
    entryFileName: 'index.tsx',
    sourceDir    : resolve(__dirname, 'src'),
    outputDir    : resolve(__dirname, process.env.NODE_ENV === 'development' ? 'dev' : 'prod')
});

const { isDev, isProd } = chain;
chain.resolve.alias
    .set('lodash', 'lodash-es')
    /** @see https://github.com/ant-design/ant-design/issues/12011 */
    .set('@ant-design/icons/lib/dist$', chain.srcPath('icon.ts'));

chain.resolve.modules.add(chain.srcPath());

// chain.resolve.modules.merge([ chain.srcPath(), resolve(__dirname, '../../node_modules') ]);
// chain.resolveLoader.modules.merge([ resolve(__dirname, '../../node_modules') ]).end()

const loaders = initLoaders(chain);
loaders.extendGlobalBabelOptions({ presets: [ 'env', 'react-app' ] })
let tsconfig = resolve(__dirname, 'tsconfig.json');
loaders.addTypescriptLoader(chain, tsconfig);
loaders.tapTypescriptLoaderOptions(chain, options => {
    options.compilerOptions.module = 'es2015'
    options.compilerOptions.target = 'es6'
    return options;
})
loaders.addBabelToTypescriptLoader(chain)
loaders.addJavascriptLoader(chain);

loaders.addTypescriptImportFactories(chain, [
    { libraryName: 'antd', libraryDirectory: 'es', style: true },
    { style: false, libraryName: 'lodash', libraryDirectory: null, camel2DashComponentName: false }
])
chain.when(chain.isDev, chain => chain.getLoader('ts', 'babel-loader').options(
    loaders.createBabelOptionsFromGlobal(chain, { plugins: [ 'react-hot-loader/babel' ] }) as any
));


const styleLoaders   = new HandleCSSLoader({
    styleLoader: 'style-loader',
    sourceMap  : isProd,
    postcss    : { plugins: [ require('autoprefixer'), require('cssnext'), require('postcss-nested') ] },
    cssLoader  : 'css-loader?importLoaders=1',
    minimize   : isProd,
    extract    : isProd,
    cssModules : false
});
const styleLoaderMap = {
    css   : styleLoaders.css([ /\.css$/ ]),
    less  : styleLoaders.with({ antd: true }).less([ /\.less$/ ], { javascriptEnabled: true }, { cssLoaderOptions: { importLoaders: 1 } }),
    scss  : styleLoaders.with({ antd: true }).scss([ /\.scss$/ ], {}, { cssLoaderOptions: { importLoaders: 1 } }),
    styl  : styleLoaders.styl([ /\.styl$/ ]),
    stylus: styleLoaders.stylus([ /\.stylus$/ ])
};
Object.keys(styleLoaderMap).forEach(key => chain.module.rule(key).merge(styleLoaderMap[ key ]))
chain.addLoader('fonts', 'file-loader', {
    name      : '[name].[ext]',
    publicPath: `/fonts/`,
    outputPath: 'fonts/'
}).test(/\.*\.(woff2?|woff|eot|ttf|otf)(\?.*)?$/)

chain.addLoader('images', 'file-loader', {
    name      : '[name].[ext]',
    publicPath: `/img/`,
    outputPath: 'img/'
}).test(/\.*\.(png|jpe?g|gif|svg)(\?.*)?$/)


const plugins = initPlugins(chain);
plugins.addAntdPlugin(chain, resolve(__dirname, 'src/styles/antd/theme.scss'))
plugins.addWriteFilePlugin(chain)
plugins.addDefinePlugin(chain)
plugins.addCleanPlugin(chain)
plugins.addCliPlugins(chain)
plugins.addCssExtractPlugins(chain, chain.isProd)
plugins.addOptimizerPlugins(chain, chain.isProd)
plugins.addAnalyzerPlugins(chain, chain.isProd)
plugins.addCleanPlugin(chain)


const config = chain.toConfig();

chain.onToConfig(config => {
    config.plugins.push(new ForkTsChecker({
        async: false,
        watch: chain.srcPath(),
        tsconfig
    }));
    return config;
})

export { chain, config }
