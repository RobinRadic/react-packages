import { Chain } from '../config';
import webpack from 'webpack';

export async function build(chain: Chain) {
    const config   = chain.toConfig();
    const compiler = webpack(config);
    return new Promise((res, rej) => {
        compiler.run((err, stat) => {
            if ( err ) throw err;
            setTimeout(() => res(true), 1500)
        })
    })
}
