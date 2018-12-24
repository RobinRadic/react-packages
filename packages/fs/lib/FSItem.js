"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const fs_1 = require("fs");
class FSItem {
    constructor(opts) {
        let isstr = typeof opts === 'string';
        this.path = isstr ? path_1.resolve(opts) : path_1.resolve(opts.path);
        this.cwd = opts.cwd || process.cwd();
        this.base = path_1.resolve(opts.base || this.dirname);
    }
    copy(path) {
        throw new Error('not implemetedd');
    }
    move(path) {
        throw new Error('not implemetedd');
    }
    basePath(...path) { return path_1.resolve(this.base, ...path); }
    exists() { return fs_1.existsSync(this.path); }
    get dirname() { return path_1.dirname(this.path); }
    get extname() { return path_1.extname(this.path); }
    get filename() { return path_1.basename(this.path); }
    get basename() { return path_1.basename(this.path, this.extname); }
    get relative() { return path_1.relative(this.base, this.path); }
    get relativeDir() { return path_1.dirname(path_1.relative(this.base, this.path)); }
    get stat() { return fs_1.statSync(this.path); }
}
exports.FSItem = FSItem;
//# sourceMappingURL=FSItem.js.map