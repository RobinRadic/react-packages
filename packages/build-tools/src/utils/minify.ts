import { readFileSync, writeFileSync } from 'fs';
import { basename } from 'path';
import { find } from 'globule';

export function minify(
    fileGlobs: string[],
    minifyOptions: any                               = {},
    overrides: any                                   = {},
    filePathReplacerFn: (filePath: string) => string = (filePath: string) => filePath.replace(/\.js$/, '.min.js')
): string[] {
    let filePaths = find(fileGlobs);
    console.log(`Starting minify on ${filePaths.length} files`)
    return filePaths.map(filePath => {
        let code         = readFileSync(filePath, 'utf8')
        let minified     = require('babel-minify')(code, minifyOptions, {
            comments: false,
            ...overrides
        });
        let destFilePath = filePathReplacerFn(filePath);
        writeFileSync(destFilePath, minified.code, 'utf8')
        console.log(`minified: ${basename(filePath)} > ${basename(destFilePath)}`);
        return destFilePath
    });

}
