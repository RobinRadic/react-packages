/// <reference types="node" />
import * as Base from 'yeoman-generator';
import { Ask } from './Ask';
import { ExecSyncOptionsWithStringEncoding } from 'child_process';
import { Question } from 'inquirer';
export interface Priorities {
}
export declare abstract class Generator extends Base {
    private _ask;
    readonly ask: Ask;
    protected exec(cmd: string, options?: ExecSyncOptionsWithStringEncoding): string;
    protected inquire<T>(message: string, type?: string, options?: Question): Promise<T>;
    protected input(message: string, defaultValue?: string, options?: Question): Promise<boolean>;
    protected confirm(message: string, defaultValue?: boolean, options?: Question): Promise<boolean>;
    protected checkbox(message: string, choices: Question['choices'], options?: Question): Promise<string[]>;
    protected list(message: string, choices: Question['choices'], options?: Question): Promise<string>;
}
export declare namespace Generator {
    interface Blabla {
        foo: string;
    }
}
export default Generator;
