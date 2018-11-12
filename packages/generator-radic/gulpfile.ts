import { gulp, Gulpclass, Task } from '@radic/build-tools-gulp';
import { execSync, ExecSyncOptionsWithStringEncoding } from 'child_process';
import { merge } from 'lodash';
import { find } from 'globule';
import { resolve } from 'path';
import { copySync } from 'fs-extra';

const exec = (cmd: string, options: Partial<ExecSyncOptionsWithStringEncoding> = {}) => {
    return execSync(cmd, merge(<ExecSyncOptionsWithStringEncoding>{
        encoding: 'utf8',
        stdio   : 'inherit'
    }, options))
}

@Gulpclass()
export class Gulpfile {

    async compile() {
        return exec(resolve(__dirname, 'node_modules/.bin/tsc'), { cwd: __dirname })
    }

    async copyTemplates() {
        return find('src/generators/*/templates').map(path => {
            let destPath = resolve(__dirname, path.split('/').splice(1).join('/'));
            path         = resolve(__dirname, path);
            copySync(path, destPath);
            return destPath
        })
    }

    @Task('build') async build() {
        await this.compile();
        return this.copyTemplates();
    }

    @Task('watch') watch() {
        this.build();
        gulp.watch([ 'src/**/*.ts', 'src/generators/*/templates/**/*' ], [ 'build' ])
    }
}
