export type EnvName = 'production' | 'development' | 'testing';

export class EnvMixin {
    protected runnedEnv: boolean = false;

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
        return this
    }
}
