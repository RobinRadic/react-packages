import { initBase, initLoaders, initPlugins } from '@radic/build-tools-webpack'
import { resolve } from 'path';
const ForkTsChecker = require('fork-ts-checker-webpack-plugin');


const chain = initBase({
    mode         : 'development',
    entryFileName: 'index.ts'
});


const loaders = initLoaders(chain);
loaders.extendGlobalBabelOptions({ plugins: [ 'react-app' ] })
loaders.addJavascriptLoader(chain);
let tsconfig = resolve('tsconfig.json');
loaders.addTypescriptLoader(chain, tsconfig);
loaders.addBabelToTypescriptLoader(chain)
loaders.addTypescriptImportFactories(chain, [
    { libraryName: 'antd', libraryDirectory: 'es', style: true },
    { style: false, libraryName: 'lodash', libraryDirectory: null, camel2DashComponentName: false }
])

chain.when(chain.isDev, chain => chain.getLoader('ts', 'babel-loader').options(
    loaders.extendGlobalBabelOptions({ plugins: [ 'react-hot-loader/babel' ] }) as any
));

const plugins = initPlugins(chain);
plugins.addWriteFilePlugin(chain)
plugins.addDefinePlugin(chain)
plugins.addCleanPlugin(chain)
plugins.addCliPlugins(chain)
plugins.addCssExtractPlugins(chain, chain.isProd)
plugins.addOptimizerPlugins(chain, chain.isProd)
plugins.addAnalyzerPlugins(chain, chain.isProd)
plugins.addCleanPlugin(chain)

const config = chain.toConfig();
config.plugins.push(new ForkTsChecker({
    async: false,
    watch: resolve('theme'),
    tsconfig
}))
export { chain, config }
