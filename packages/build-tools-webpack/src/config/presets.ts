import { Chain } from './Chain';
import * as webpack from 'webpack';

export const wppresets = {}

/*

    const hostname = 'pyradic.dev';
    const port     = await utils.choosePort(hostname, 8336);
    const url      = `http://${hostname}:${port}`;
 */

export function prepareDevServer(chain: Chain, host: string, port: number) {
    const url = `http://${host}:${port}`;
    chain.data.merge({ host, port, url })

    chain.output.publicPath(url + '/');

    chain.devServer
        .contentBase([ chain.outPath() ])
        .historyApiFallback(true)
        .inline(true)
        .progress(true)
        .quiet(true)
        .stats('errors-only')
        .host(host)
        .port(port)
        .headers({ 'Access-Control-Allow-Origin': '*' })
        .public(url + '/')
        .publicPath('/')
        .set('before', app => app.use(require('morgan')(':method :url :status :res[content-length] - :response-time ms')))

}

export function enableHMR(chain: Chain) {
    if ( ! chain.data.has('url') ) {
        throw new Error('Can not run "enableHMR". run "prepareDevServer" first');
    }
    chain.devServer
        .hot(true);

    chain.entry('main')
        .prepend('webpack-dev-server/client?' + chain.data.get('url'))
        .prepend('webpack/hot/only-dev-server')
    // .prepend('react-hot-loader');

    chain.plugin('hmr').use(webpack.HotModuleReplacementPlugin);

}


export function modifyDevServerForExternal(chain: Chain, contentBase: string) {
    chain.devServer
        .contentBase(contentBase)  //resolve(__dirname, '../../../public')
        .watchContentBase(true)
        .set('disableHostCheck', true)
        .quiet(false)
}
