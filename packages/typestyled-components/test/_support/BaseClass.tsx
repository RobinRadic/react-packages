declare const __mocha_context__:any

import { context } from 'mocha-typescript'

let mochaStaticContext = null
let mochaContext       = null

export abstract class BaseClass {
    @context static mochaStatic;
    @context mocha;


    public static before() {
        (global as any).__mocha_context__ = mochaStaticContext = this.mochaStatic;
    }

    public before() {
        (global as any).__mocha_context__ = mochaContext = this.mocha;
    }

    public after() {
        // ...
    }

    public static after() {
        // ...
    }
}


export function getMochaContext() {
    return mochaContext ? mochaContext : mochaStaticContext;
}
