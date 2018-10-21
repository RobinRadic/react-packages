import * as globule from 'globule'; //= require('globule');

import { basename } from 'path';
import { getFileSizeInfo } from './getFileSizeInfo';

export function reportFileSizes(fileGlobs: string[], options: { returnOutput?: boolean, customReporter?: (file: { name: string, path: string, size: string, gzipSize: string }) => void } = {}) {
    // const filePaths: string[] = globule.find.apply(globule, [ fileGlobs, <FindOptions>{} ]);

    let filePaths: string[] = globule.find(fileGlobs)
    let output: string[]    = [];

    filePaths.forEach(filePath => {
        let fileName = basename(filePath);
        let sizeInfo = getFileSizeInfo(filePath);
        if ( typeof options.customReporter === 'function' ) {
            options.customReporter({ name: fileName, path: filePath, size: sizeInfo.size, gzipSize: sizeInfo.gzipSize });
            return;
        }
        output.push([
            ` - ${fileName}\n`,
            `      ${sizeInfo.size} / ${sizeInfo.gzipSize}\n`,
            `\n`
        ].join(''))
    })

    if ( options.returnOutput ) {
        return output.join('');
    }

    console.log(output.join(''));

}