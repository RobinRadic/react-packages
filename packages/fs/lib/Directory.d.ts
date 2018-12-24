import { FSItem, FSItemOptions } from './FSItem';
import { IOptions } from 'glob';
export interface DirectoryOptions extends FSItemOptions {
}
export declare class Directory<T extends DirectoryOptions = DirectoryOptions> extends FSItem<T> {
    protected _directory: Directory;
    constructor(opts: string | T);
    copy(dest: string): Directory<T>;
    move(dest: string): this;
    glob(patterns: string[], options?: IOptions): string[];
    contains(path: string): boolean;
    readonly directory: Directory;
}
