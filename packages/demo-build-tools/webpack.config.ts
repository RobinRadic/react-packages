import { initBase, initLoaders, initPlugins } from '@radic/build-tools-webpack'
import { resolve } from 'path';


const chain = initBase({
    mode         : 'development',
    entryFileName: 'index.ts'
});


const loaders = initLoaders(chain);
loaders.extendGlobalBabelOptions({ plugins: [ 'react-app' ] })
loaders.addJavascriptLoader(chain);
loaders.addTypescriptLoader(chain, resolve('tsconfig.json'));
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
export { chain, config }
