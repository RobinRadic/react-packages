/// <reference types="node" />
import * as Base from 'yeoman-generator';
import { Ask } from './Ask';
import { ExecSyncOptionsWithStringEncoding } from 'child_process';
export interface Priorities {
}
export declare abstract class Generator extends Base {
    private _ask;
    readonly ask: Ask;
    protected exec(cmd: string, options?: ExecSyncOptionsWithStringEncoding): string;
}
export declare namespace Generator {
    interface Blabla {
        foo: string;
    }
}
export default Generator;
