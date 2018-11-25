///<reference types="mocha"/>
import { Context, Suite, Test } from 'mocha';
import { context } from 'mocha-typescript'

let mochaStaticContext: Context = null
let mochaContext: Context       = null

export abstract class BaseClass {
    @context static mochaStatic: Context;
    @context mocha: Context;


    public static before() {
        (global as any).__mocha_context__ = mochaStaticContext = this.mochaStatic as any;
        require('snap-shot-it')
    }

    public before() {
        (global as any).__mocha_context__ = mochaContext = this.mocha as any;
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
