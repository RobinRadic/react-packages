"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FSItem_1 = require("./FSItem");
const path_1 = require("path");
const fs_1 = require("fs");
const fs_extra_1 = require("fs-extra");
const glob_1 = __importDefault(require("glob"));
class Directory extends FSItem_1.FSItem {
    constructor(opts) {
        super(opts);
    }
    copy(dest) {
        dest = path_1.resolve(dest);
        fs_extra_1.copySync(this.path, dest, {
            errorOnExist: true,
            recursive: true
        });
        return new Directory(dest);
    }
    move(dest) {
        dest = path_1.resolve(dest);
        if (fs_1.existsSync(dest)) {
            throw new Error('Cannot move directory, the destination already exists at ' + dest);
        }
        this.path = dest;
        fs_extra_1.mkdirpSync(this.path);
        return this;
    }
    glob(patterns, options = {}) {
        let paths = [];
        patterns.forEach(pattern => paths.push(...glob_1.default.sync(pattern, options)));
        return paths;
    }
    contains(path) {
        return fs_1.existsSync(path_1.resolve(this.path, path));
    }
    get directory() {
        if (!this._directory) {
            this._directory = new Directory(this.dirname);
        }
        return this._directory;
    }
}
exports.Directory = Directory;
//# sourceMappingURL=Directory.js.map