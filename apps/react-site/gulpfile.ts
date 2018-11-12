// noinspection ES6UnusedImports
import { mixin, utils } from '@radic/build-tools'
import { Gulpclass, GulpEnvMixin, Task } from '@radic/build-tools-gulp';
import { build, GulpWebpackMixin, serve } from '@radic/build-tools-webpack';
import * as path from 'path';
import * as gulp from 'gulp';


const resolve = (...args) => path.resolve(__dirname, ...args)

export interface Gulpfile extends GulpEnvMixin, GulpWebpackMixin {}

@Gulpclass(gulp)
@mixin(GulpEnvMixin)
@mixin(GulpWebpackMixin)
export class Gulpfile {

    @Task('prod:serve')
    async prodServe() {
        this.prod()
        await this.serve();
    }

    @Task('prod:build')
    async prodBuild() {
        this.prod();
        await this.build();
        await this.purify();
        this.reportBundleSize();
        this.minify();
        this.reportFileSizes();
    }

    @Task('dev:serve')
    async devServe() {
        this.dev()
        await this.serve();
    }

    @Task('dev:build')
    async devBuild() {
        this.dev()
        let chain = this.webpack.chain;
        let r     = require;

        let a = chain
        await this.build();
    }

    protected async serve() {
        return serve(this.chain);
    }

    protected async build() {
        return build(this.webpack.chain);
    }

    protected get webpack() {
        if ( ! this.runnedEnv ) throw new Error('First set env before getting webpack config');
        return require('./webpack.config');
    }
}
