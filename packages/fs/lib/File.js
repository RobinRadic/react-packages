"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path_1 = require("path");
const fs_extra_1 = require("fs-extra");
const FSItem_1 = require("./FSItem");
const Directory_1 = require("./Directory");
class File extends FSItem_1.FSItem {
    constructor(opts) {
        super(opts);
    }
    /**
     * Copies this file to the given destination. The returned value is a new instance of this class
     *
     * @param dest
     */
    copy(dest) {
        let file = new File(dest);
        file.content = this.content;
        return file.save();
    }
    /**
     * Moves this file to the given destination and updates this instance's path properties.
     *
     * @param dest
     */
    move(dest) {
        this.path = path_1.resolve(dest);
        return this.save();
    }
    /**
     * Checks if the file actually exists. If not then it will create a empty file.
     * If you pass along data in the parameter it will use that to create the the file with
     *
     * @param {string} content=[optional] - it will use this to create the the file with
     *
     */
    ensure(content = '') {
        if (!this.exists()) {
            if (!this._content) {
                this._originalContent = content;
                this._content = content;
            }
            this.save();
        }
        return this;
    }
    /**
     * Saves the current file along with its content
     */
    save() { return this.writeTo(this.path); }
    /**
     * Writes the current content of the file to another location. This will return a new instance
     *
     * @param path
     */
    writeTo(path) {
        path = path_1.resolve(path);
        if (!fs_1.existsSync(path_1.dirname(path))) {
            fs_extra_1.mkdirpSync(path_1.dirname(path));
        }
        fs_1.writeFileSync(path, this.content, 'utf8');
        return this;
    }
    set content(content) { this._content = content; }
    ;
    get content() {
        if (!this._content) {
            if (!fs_1.existsSync(this.path)) {
                throw new Error('Could not open document at path ' + this.path);
            }
            this._originalContent = fs_1.readFileSync(this.path, 'utf8');
            this._content = this._originalContent;
        }
        return this._content;
    }
    get directory() {
        if (!this._directory) {
            this._directory = new Directory_1.Directory(this.dirname);
        }
        return this._directory;
    }
}
exports.File = File;
//# sourceMappingURL=File.js.map