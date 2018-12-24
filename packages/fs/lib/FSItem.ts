import { basename, dirname, extname, relative, resolve } from 'path';
import { existsSync, Stats, statSync } from 'fs';


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

export class FSItem<T extends FSItemOptions = FSItemOptions> {
    cwd: string
    path: string
    base: string


    constructor(opts: T | string) {
        let isstr = typeof opts === 'string';
        this.path = isstr ? resolve(opts as any) : resolve((opts as any).path)
        this.cwd  = (opts as any).cwd || process.cwd();
        this.base = resolve((opts as any).base || this.dirname)
    }

    copy(path: string): FSItem<T> {
        throw new Error('not implemetedd')
    }

    move(path: string): this {
        throw new Error('not implemetedd')
    }

    basePath(...path: string[]) {return resolve(this.base, ...path)}

    exists(): boolean { return existsSync(this.path) }

    get dirname(): string {return dirname(this.path)}

    get extname(): string {return extname(this.path)}

    get filename(): string {return basename(this.path)}

    get basename(): string {return basename(this.path, this.extname)}

    get relative(): string {return relative(this.base, this.path)}

    get relativeDir(): string {return dirname(relative(this.base, this.path))}

    get stat(): Stats { return statSync(this.path)}

}
