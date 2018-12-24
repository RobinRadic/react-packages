"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
const path_1 = require("path");
const File_1 = require("./File");
const Directory_1 = require("./Directory");
exports.make = (path, base, cwd) => (utils_1.isFile(path_1.resolve(path)) ? new File_1.File({ path, base, cwd }) : new Directory_1.Directory({ path, base, cwd }));
exports.file = (path, base, cwd) => new File_1.File({ path, base, cwd });
exports.directory = (path, base, cwd) => new Directory_1.Directory({ path, base, cwd });
//# sourceMappingURL=factories.js.map