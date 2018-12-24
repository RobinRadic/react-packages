/// <reference types="node" />
import { Stats } from 'fs';
export interface FSItemOptions {
    /**
     * Full path to the file.
     */
    path?: string;
    /**
     * The current working directory of the file. Default: process.cwd()
     */
    cwd?: string;
    /**
     * Used for relative pathing. Typically where a glob starts. Default: options.cwd
     */
    base?: string;
}
export declare class FSItem<T extends FSItemOptions = FSItemOptions> {
    cwd: string;
    path: string;
    base: string;
    constructor(opts: T | string);
    copy(path: string): FSItem<T>;
    move(path: string): this;
    basePath(...path: string[]): string;
    exists(): boolean;
    readonly dirname: string;
    readonly extname: string;
    readonly filename: string;
    readonly basename: string;
    readonly relative: string;
    readonly relativeDir: string;
    readonly stat: Stats;
}
