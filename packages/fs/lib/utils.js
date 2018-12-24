"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
exports.isFile = (path) => fs_1.existsSync(path) && !fs_1.lstatSync(path).isDirectory();
exports.isDirectory = (path) => fs_1.existsSync(path) && fs_1.lstatSync(path).isDirectory();
exports.resolvePathOptions = (path, base, cwd) => {
    cwd = cwd || process.cwd();
    if (!base) {
        base = cwd;
    }
};
//# sourceMappingURL=utils.js.map