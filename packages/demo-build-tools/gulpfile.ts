import { mixin } from '@radic/build-tools'
import { Gulpclass, GulpEnvMixin, Task } from '@radic/build-tools-gulp'
import { build, GulpWebpackMixin, serve } from '@radic/build-tools-webpack';


export interface Gulpfile extends GulpEnvMixin, GulpWebpackMixin {}

@Gulpclass()
@mixin(GulpEnvMixin)
@mixin(GulpWebpackMixin)
export class Gulpfile {

    @Task('dev:serve')
    async devServe() {
        this.dev();
        await this.serve();
    }

    @Task('prod:build')
    async prodBuild() {
        this.prod();
        await this.build();
    }

    protected async serve() {
        return serve(this.chain);
    }

    protected async build() {
        return build(this.chain);
    }

    protected get webpack() {
        if ( ! this.runnedEnv ) throw new Error('First set env before getting webpack config');
        return require('./webpack.config');
    }
}
