import * as glob from 'glob';
import { dirname, resolve } from 'path';
import { existsSync, readFileSync } from 'fs';
import { PackageInfo } from './interfaces';

export function getJSONFile<T>(...path: string[]): T {
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

export function getPackages(packageGlobs: string[]): PackageInfo[] {
    let packages: PackageInfo[] = []
    packageGlobs.forEach(packageGlob => {
        packages.push(...glob.sync(resolve(packageGlob, 'package.json')).map(file => ({
            location: dirname(file),
            package : require(file)
        })))
    })
    return packages;
}
