import ts from 'typescript';
import { OutputOptionsFile, rollup, RollupFileOptions } from 'rollup';
import typescriptPlugin from 'rollup-plugin-typescript2';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import { uglify } from 'rollup-plugin-uglify';
import external from 'rollup-plugin-peer-deps-external'
import url from 'rollup-plugin-url'
import postcss from 'rollup-plugin-postcss-modules';
import { Gulpclass, Task } from 'gulpclass';
import gulp from 'gulp';
import { merge } from 'lodash';
import pkg from './package.json'

const dev  = 'development';
const prod = 'production';
const env  = (process.env.NODE_ENV === prod || process.env.NODE_ENV === dev) ? process.env.NODE_ENV : dev;

const defaultOptions: RollupFileOptions = {
    plugins : [
        external(),
        postcss({
            modules         : true,
            writeDefinitions: true
        }),
        url(),
        replace({ 'process.env.NODE_ENV': JSON.stringify(env) }),
        resolve(),
        commonjs({
            include     : 'node_modules/**',
            namedExports: {
                'node_modules/react-dom/index.js': [
                    'render'
                ],
                'node_modules/react/index.js'    : [
                    'Component',
                    'PropTypes',
                    'createElement'
                ]
            }
        }),
        typescriptPlugin({
            cacheRoot       : require('temp-dir') + '/.rpt2_cache',
            typescript      : ts,
            tsconfig        : 'src/tsconfig.json',
            tsconfigOverride: {
                compilerOptions: <ts.CompilerOptions>{
                    lib        : [ 'es2017', 'dom' ],
                    declaration: true,
                    sourceMap  : true
                }
            }
        })
    ],
    input   : './src/index.tsx',
    external: [
        'react',
        'prop-types',
        'hoist-non-react-statics',
        'typestyle',
        'react-typestyle'
    ]
};

const defaultOutputOptions: OutputOptionsFile = {
    exports  : 'named',
    sourcemap: true
};

@Gulpclass(gulp)
export class Gulp {
    @Task('build')
    async build() {
        const bundle = await rollup({
            ...defaultOptions
        })
        await bundle.write({
            ...defaultOutputOptions,
            file  : pkg.main,
            format: 'cjs'
        })
        await bundle.write({
            ...defaultOutputOptions,
            file  : pkg.module,
            format: 'es'
        })
    }

}
