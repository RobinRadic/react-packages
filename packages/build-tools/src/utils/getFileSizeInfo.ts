import { readFileSync, statSync } from 'fs-extra';
import { Stats } from 'fs';

declare namespace Filesize {

    export interface SiJedecBits {
        b?: string;
        Kb?: string;
        Mb?: string;
        Gb?: string;
        Tb?: string;
        Pb?: string;
        Eb?: string;
        Zb?: string;
        Yb?: string;
    }

    export interface SiJedecBytes {
        B?: string;
        KB?: string;
        MB?: string;
        GB?: string;
        TB?: string;
        PB?: string;
        EB?: string;
        ZB?: string;
        YB?: string;
    }

    type SiJedec = SiJedecBits & SiJedecBytes & { [name: string]: string };

    export interface Options {
        /**
         * Enables bit sizes, default is false
         */
        bits?: boolean;
        /**
         * Number base, default is 2
         */
        base?: number;
        /**
         * Decimal place, default is 2
         */
        round?: number;
        /**
         * Output of function (array, exponent, object, or string), default is string
         */
        output?: string;
        /**
         * Dictionary of SI/JEDEC symbols to replace for localization, defaults to english if no match is found
         * @deprecated: use 'symbols'
         */
        suffixes?: SiJedec;
        /**
         * Dictionary of SI/JEDEC symbols to replace for localization, defaults to english if no match is found
         */
        symbols?: SiJedec;
        /**
         * Specifies the SI suffix via exponent, e.g. 2 is MB for bytes, default is -1
         */
        exponent?: number;
        /**
         *  Enables unix style human readable output, e.g ls -lh, default is false
         */
        unix?: boolean;
        /**
         * Character between the result and suffix, default is " "
         */
        spacer?: string;
    }

    export interface IFilesize {
        (bytes: number): string;
        (bytes: number, options: Options): string;
    }
}


const gzipsize = require('gzip-size');
const filesize = require('filesize');

export interface FileSizeInfo {
    stats: Stats
    size: string
    gzipSize: string
}

export function getFileSizeInfo($filePath:string, fileSizeOptions?: Filesize.Options): FileSizeInfo {
    let content  = readFileSync($filePath);
    let stats    = statSync($filePath);
    let size     = filesize(stats.size);
    let gzipSize = filesize(gzipsize.sync(content));
    return { stats, size, gzipSize };
}