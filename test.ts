// the package at the given path
// using the


import { resolve } from 'path';
import { existsSync, readFileSync, writeFileSync } from 'fs';
import { copySync, emptyDirSync, mkdirpSync, removeSync } from 'fs-extra';
import { execSync } from 'child_process';
import { merge } from 'lodash';


interface Options {
    packagePath: string
    from: string
    tmpPath: string
    npmScript: string
    copy?: string[]
    packageJsonOverrides?: any
}

type PackagesOptions = Record<string, Options>;

function buildPackage(options: Options) {
    options = merge(<Options>{
        packageJsonOverrides: {},
        copy                : [ 'README.md' ],
        npmScript           : 'prod:build',
        from                : 'dist'
    }, options)

    let { packagePath, tmpPath, npmScript, copy, from, packageJsonOverrides } = options
    packagePath                                                               = resolve(packagePath);
    tmpPath                                                                   = resolve(tmpPath);
    let packageJsonPath                                                       = resolve(packagePath, 'package.json');
    if ( ! existsSync(packageJsonPath) ) {
        throw new Error('Could not find package.json file in the given location')
    }
    if ( existsSync(tmpPath) ) {
        emptyDirSync(tmpPath)
        removeSync(tmpPath)
    }
    mkdirpSync(tmpPath)
    execSync('yarn ' + npmScript, { cwd: packagePath })
    copySync(resolve(packagePath, from), tmpPath, { recursive: true, overwrite: true });
    if ( copy ) {
        copy.forEach(file => copySync(resolve(packagePath, file), resolve(tmpPath, file)))
    }
    let pkg              = JSON.parse(readFileSync(packageJsonPath, 'utf8'));
    packageJsonOverrides = packageJsonOverrides || {};
    pkg                  = merge(pkg, packageJsonOverrides)
    writeFileSync(resolve(tmpPath, 'package.json'), JSON.stringify(pkg, null, 4), 'utf8')
}

const packages: PackagesOptions = {
    'build-tools': {
        packagePath         : 'packages/build-tools',
        tmpPath             : 'builds/build-tools',
        npmScript           : 'prod:build',
        from                : 'dist',
        copy                : [
            'README.md'
        ],
        packageJsonOverrides: {
            'main'       : 'index.js',
            'module'     : 'index.js',
            'jsnext:main': 'index.js',
            'typings'    : 'index.d.ts'
        }
    },
    'fs'         : {
        packagePath         : 'packages/fs',
        tmpPath             : 'builds/fs',
        npmScript           : 'prod:build',
        from                : 'dist',
        copy                : [
            'README.md'
        ],
        packageJsonOverrides: {
            'main'       : 'index.js',
            'module'     : 'index.js',
            'jsnext:main': 'index.js',
            'typings'    : 'index.d.ts'
        }
    }
}


buildPackage(packages.fs);
let a = 'a';
