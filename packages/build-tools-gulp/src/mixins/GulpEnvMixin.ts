import { utils } from '@radic/build-tools';

export type EnvName = 'production' | 'development' | 'testing';

export class GulpEnvMixin {
    protected runnedEnv: boolean = false;
    protected ENV: any           = null

    protected loadDotEnv(path?: string): any {
        if ( this.ENV ) {
            throw new Error('cannot load .env again.')
        }
        return this.ENV = utils.loadEnv(path)
    }

    protected dev(errorOnRunned = true): this { return this.setNodeEnv('development', errorOnRunned); }

    protected prod(errorOnRunned = true): this { return this.setNodeEnv('production', errorOnRunned); }

    protected test(errorOnRunned = true): this { return this.setNodeEnv('testing', errorOnRunned); }

    protected setNodeEnv(env: EnvName, errorOnRunned = true) {
        if ( this.runnedEnv ) {
            if ( ! errorOnRunned ) return this;
            throw new Error('Cannot set env twice');
        }
        process.env.NODE_ENV = env
        this.runnedEnv       = true;
        if ( typeof this[ 'afterSetEnv' ] === 'function' ) {
            this[ 'afterSetEnv' ]();
        }
        return this
    }
}
