import { FSItem, FSItemOptions } from './FSItem';
import { Directory } from './Directory';
export interface FileOptions extends FSItemOptions {
}
export declare class File<T extends FSItemOptions = FSItemOptions> extends FSItem<T> {
    protected _content: string;
    protected _originalContent: string;
    protected _directory: Directory;
    constructor(opts: string | T);
    /**
     * Copies this file to the given destination. The returned value is a new instance of this class
     *
     * @param dest
     */
    copy(dest: string): File<T>;
    /**
     * Moves this file to the given destination and updates this instance's path properties.
     *
     * @param dest
     */
    move(dest: string): this;
    /**
     * Checks if the file actually exists. If not then it will create a empty file.
     * If you pass along data in the parameter it will use that to create the the file with
     *
     * @param {string} content=[optional] - it will use this to create the the file with
     *
     */
    ensure(content?: string): this;
    /**
     * Saves the current file along with its content
     */
    save(): this;
    /**
     * Writes the current content of the file to another location. This will return a new instance
     *
     * @param path
     */
    writeTo(path: string): this;
    content: string;
    readonly directory: Directory;
}
