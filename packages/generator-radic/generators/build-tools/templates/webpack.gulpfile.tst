import { mixin } from '@radic/build-tools'
import { gulp, Gulpclass, GulpEnvMixin, GulpInteractiveMixin, Task } from '@radic/build-tools-gulp'
import { build, GulpWebpackMixin, serve } from '@radic/build-tools-webpack'

export interface Gulpfile extends GulpEnvMixin, GulpInteractiveMixin, GulpWebpackMixin {}

@Gulpclass(gulp)
@mixin(GulpEnvMixin)
@mixin(GulpInteractiveMixin)
@mixin(GulpWebpackMixin)
export class Gulpfile {
    @Task('default')
    async default() {
        let choice = await this.list('Select task', [ 'dev:build', 'prod:build' ]);
        if ( choice === 'dev:build' ) {
            return this.devBuild();
        } else if ( choice === 'prod:build' ) {
            return this.prodBuild();
        }
    }

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
        await this.build();
    }

    protected async serve() {
        return serve(this.webpack.chain);
    }

    protected async build() {
        return build(this.webpack.chain);
    }

    protected get webpack() {
        if ( ! this.runnedEnv ) throw new Error('First set env before getting webpack config');
        return require('./webpack.config');
    }
}
