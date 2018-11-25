import { basename, dirname, extname, relative, resolve } from 'path';
import { existsSync, Stats, statSync } from 'fs';
import { Directory } from './Directory';


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

export abstract class FSItem<T extends FSItemOptions = FSItemOptions> {
    cwd: string = process.cwd();
    path: string
    base: string

    protected _directory: Directory

    constructor(opts: T | string) {
        let isstr = typeof opts === 'string';
        this.path = isstr ? resolve(opts as any) : resolve((opts as any).path)
        this.cwd  = (opts as any).cwd || process.cwd();
        this.base = resolve((opts as any).base || this.dirname)
    }

    abstract copy(path: string): FSItem<T>

    abstract move(path: string): this;

    basePath(...path: string[]) {return resolve(this.base, ...path)}

    exists(): boolean { return existsSync(this.path) }

    get dirname(): string {return dirname(this.path)}

    get extname(): string {return extname(this.path)}

    get filename(): string {return basename(this.path)}

    get basename(): string {return basename(this.path, this.extname)}

    get relative(): string {return relative(this.base, this.path)}

    get relativeDir(): string {return dirname(relative(this.base, this.path))}

    get stat(): Stats { return statSync(this.path)}

    get directory(): Directory {
        if ( ! this._directory ) {
            this._directory = new Directory({ path: this.dirname });
        }
        return this._directory
    }
}
