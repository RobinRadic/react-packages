import { merge } from 'lodash';
import { Chain, InitBaseOptions } from './Chain';

export function initBase(options: InitBaseOptions): Chain {
    options = merge({}, options, <InitBaseOptions>{
        sourceDir: 'src',
        outputDir: options.mode === 'development' ? 'dev' : 'dist',
        entryName: 'main'
    })


    const chain = new Chain(options);

    chain
        .set('mode', options.mode)
        .devtool('cheap-module-source-map')
        .target('web')
        .node.merge({ setImmediate: false, dgram: 'empty', fs: 'empty', net: 'empty', tls: 'empty', child_process: 'empty' }).end();

    chain.entry(options.entryName)
        .add('babel-polyfill')
        .add(chain.srcPath(options.entryFileName));

    chain.output
        .path(chain.outPath())
        .pathinfo(true)
        .filename('js/[name].js')
        .chunkFilename('js/chunk.[name].js');

    chain.resolve
        .symlinks(true)
        .extensions.merge([ '.js', '.vue', '.json', '.web.ts', '.ts', '.web.tsx', '.tsx', '.styl', '.less', '.scss', '.stylus', '.css', '.mjs', '.web.js', '.json', '.web.jsx', '.jsx' ]).end()
        .mainFields.merge([ 'module', 'browser', 'main' ]).end()
        .mainFiles.merge([ 'index', 'index.ts', 'index.tsx' ]).end()
        .modules.merge([ 'node_modules' ]).end()
    // .alias
    // .set('lodash', 'lodash-es');

    chain.resolveLoader
        .modules.merge([ 'node_modules' ]).end()
        .extensions.merge([ '.js', '.json', '.ts' ]).end();


    return chain;
}


