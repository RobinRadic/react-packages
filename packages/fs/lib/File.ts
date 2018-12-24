import { existsSync, readFileSync, writeFileSync } from 'fs';
import { dirname, resolve } from 'path';
import { mkdirpSync } from 'fs-extra';
import { FSItem, FSItemOptions } from './FSItem';
import { Directory } from './Directory';


export interface FileOptions extends FSItemOptions {
}

export class File<T extends FSItemOptions = FSItemOptions> extends FSItem<T> {
    protected _content: string
    protected _originalContent: string
    protected _directory: Directory

    constructor(opts: string | T) {
        super(opts);
    }

    /**
     * Copies this file to the given destination. The returned value is a new instance of this class
     *
     * @param dest
     */
    public copy(dest: string): File<T> {
        let file     = new File(dest);
        file.content = this.content;
        return file.save()
    }

    /**
     * Moves this file to the given destination and updates this instance's path properties.
     *
     * @param dest
     */
    public move(dest: string): this {
        this.path = resolve(dest);
        return this.save();
    }

    /**
     * Checks if the file actually exists. If not then it will create a empty file.
     * If you pass along data in the parameter it will use that to create the the file with
     *
     * @param {string} content=[optional] - it will use this to create the the file with
     *
     */
    ensure(content: string = ''): this {
        if ( ! this.exists() ) {
            if ( ! this._content ) {
                this._originalContent = content;
                this._content         = content;
            }
            this.save();
        }
        return this;
    }

    /**
     * Saves the current file along with its content
     */
    save(): this { return this.writeTo(this.path); }

    /**
     * Writes the current content of the file to another location. This will return a new instance
     *
     * @param path
     */
    writeTo(path: string): this {
        path = resolve(path);
        if ( ! existsSync(dirname(path)) ) {
            mkdirpSync(dirname(path))
        }
        writeFileSync(path, this.content, 'utf8')
        return this;
    }

    set content(content: string) {this._content = content};

    get content(): string {
        if ( ! this._content ) {
            if ( ! existsSync(this.path) ) {
                throw new Error('Could not open document at path ' + this.path)
            }
            this._originalContent = readFileSync(this.path, 'utf8')
            this._content         = this._originalContent
        }
        return this._content;
    }

    get directory(): Directory {
        if ( ! this._directory ) {
            this._directory = new Directory(this.dirname);
        }
        return this._directory
    }
}
