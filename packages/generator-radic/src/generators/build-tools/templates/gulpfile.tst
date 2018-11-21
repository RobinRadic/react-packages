import { mixin } from '@radic/build-tools'
import { gulp, Gulpclass, GulpEnvMixin, GulpInteractiveMixin, Task } from '@radic/build-tools-gulp'

export interface Gulpfile extends GulpEnvMixin, GulpInteractiveMixin {}

@Gulpclass(gulp)
@mixin(GulpEnvMixin)
@mixin(GulpInteractiveMixin)
export class Gulpfile {
    @Task('dev:build') devBuild() {
        this.dev()
    }

    @Task('prod:build') prodBuild() {
        this.prod()
    }

    @Task('default')
    async default() {
        let choice = await this.list('Select task', [ 'dev:buid', 'prod:build' ]);
        if ( choice === 'dev:build' ) {
            return this.devBuild();
        } else if ( choice === 'prod:build' ) {
            return this.prodBuild();
        }
    }
}
