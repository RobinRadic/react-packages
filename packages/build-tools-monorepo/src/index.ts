import { resolve } from 'path';
import { merge } from 'lodash';
import { existsSync, readFileSync } from 'fs';
import { IPackageJSON } from '@radic/build-tools';

function getJSONFile<T>(...path: string[]): T {
    let resolvedPath = resolve(...path);
    if ( ! existsSync(resolvedPath) ) {
        throw new Error('File does not exist at ' + path);
    }
    try {
        return require(resolvedPath);
    } catch {
        return JSON.parse(readFileSync(resolvedPath, 'utf8'));
    }
}

export interface BootstrapOptions {
    cwd?: string
}

export function bootstrap(options: BootstrapOptions) {
    options = merge<BootstrapOptions, BootstrapOptions>({
        cwd: process.cwd()
    }, options)

    getJSONFile<IPackageJSON>(options.cwd, 'package.json')

    require(resolve())


    resolve(options.cwd, 'lerna.json')
}
