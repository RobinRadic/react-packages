import { FSItem, FSItemOptions } from './FSItem';
import { resolve } from 'path';
import { existsSync } from 'fs';
import { copySync, mkdirpSync } from 'fs-extra';
import glob, { IOptions } from 'glob';

export interface DirectoryOptions extends FSItemOptions {
}

export class Directory<T extends DirectoryOptions = DirectoryOptions> extends FSItem<T> {

    public copy(dest: string): Directory<T> {
        dest = resolve(dest);
        copySync(this.path, dest, {
            errorOnExist: true,
            recursive   : true
        })
        return new Directory(dest);
    }

    public move(dest: string): this {
        dest = resolve(dest)
        if ( existsSync(dest) ) {
            throw new Error('Cannot move directory, the destination already exists at ' + dest)
        }
        this.path = dest;
        mkdirpSync(this.path);
        return this;
    }

    public glob(patterns: string[], options: IOptions = {}) {
        let paths: string[] = [];
        patterns.forEach(pattern => paths.push(...glob.sync(pattern, options)));
        return paths
    }

    public contains(path: string) {
        return existsSync(resolve(this.path, path))
    }

}
