import { Chain, enableHMR, modifyDevServerForExternal, prepareDevServer } from '../config';
import { utils } from '@radic/build-tools';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';


export async function preServe(chain: Chain, host: string = 'localhost', defaultPort: number = 8336) {
    const port = await utils.choosePort(host, 8336);
    prepareDevServer(chain, host, port);
    enableHMR(chain)
}

export async function startServer(chain: Chain) {
    let host = chain.data.get<string>('host');
    let port = chain.data.get<number>('port');
    let url  = chain.data.get('url');

    console.log('Starting dev-server @ ', url);

    const config   = chain.toConfig();
    const compiler = webpack(config);
    const server   = new WebpackDevServer(compiler, config.devServer);

    return new Promise((res, rej) => {
        const app = server.listen(port, host, (err: Error) => {
            if ( err ) return rej(err);
            console.log(`Server started @ ${url}`)
            res();
        });
    })
}


export async function serve(chain: Chain, host: string = 'localhost', defaultPort: number = 8336) {
    await preServe(chain, host, defaultPort);
    return startServer(chain)
}

export async function serveExternal(chain: Chain, contentBase: string, host: string = 'localhost', defaultPort: number = 8336) {
    await preServe(chain, host, defaultPort);
    modifyDevServerForExternal(chain, contentBase);
    console.log(`Configured DevServer for external use. \n You can use it on another server after adding: <script src="${chain.data.get('url')}/js/main.js"></script> at the bottom of the output.`);
    return startServer(chain)

}
