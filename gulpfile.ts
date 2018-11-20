import { Gulpclass, Task } from 'gulpclass';
import * as gulp from 'gulp';
import { WatchEvent } from 'gulp';
import { execSync, ExecSyncOptionsWithStringEncoding } from 'child_process';
import { merge } from 'lodash';
import { mixin } from './packages/build-tools';
import { GulpEnvMixin, GulpInteractiveMixin } from './packages/build-tools-gulp';
import { Monorepo, PackageInfo } from './packages/build-tools-monorepo';
import { each } from 'async';
import { resolve } from 'path';

const monorepo                       = new Monorepo({ cwd: __dirname });
const exec                           = (cmd: string, options: Partial<ExecSyncOptionsWithStringEncoding> = {}) => {
    execSync(cmd, merge(<ExecSyncOptionsWithStringEncoding>{
        encoding: 'utf8',
        stdio   : 'inherit'
    }, options))
}
const execAll                        = (cmds: string[], options: Partial<ExecSyncOptionsWithStringEncoding> = {}) => cmds.forEach(cmd => exec(cmd, options))
const execAllPrefix                  = (prefix: string, cmds: string[], options: Partial<ExecSyncOptionsWithStringEncoding> = {}) => cmds.forEach(cmd => exec(prefix + cmd, options))
const cmds: Record<string, Function> = {};
cmds.exec                            = (name: string, scope?: string) => exec(`yarn lerna exec ${name} ${scope ? '--scope=' + scope : ''}`)
cmds.run                             = (name: string, scope?: string) => exec(`yarn lerna run ${name} ${scope ? '--scope=' + scope : ''}`)
cmds.build                           = (env: 'dev' | 'prod', name: string) => exec(`yarn lerna run ${env}:build --scope=${name}`)
cmds.buildTools                      = () => execAllPrefix('yarn lerna run prod:build --scope=', [ '@radic/build-tools', '@radic/build-tools-gulp', '@radic/build-tools-rollup', '@radic/build-tools-webpack' ])
cmds.buildGenerator                  = () => cmds.run('build', 'generator-radic')
cmds.buildReactSite                  = (env: 'dev' | 'prod' = 'dev') => cmds.run(env + ':build', 'react-site')

export interface Gulpfile extends GulpEnvMixin, GulpInteractiveMixin {}

@Gulpclass(gulp)
@mixin(GulpEnvMixin)
@mixin(GulpInteractiveMixin)
export class Gulpfile {
    @Task('build:tools') buildTools() { cmds.buildTools(); }

    @Task('build:generator') buildGenerator() { cmds.buildGenerator(); }

    @Task('build:react-site') buildReactSite() { cmds.buildReactSite(); }

    @Task('build') build() { return this.buildPackages()}

    @Task('publish') publish() { return this.publishPackages()}

    @Task('watch') watch() { return this.watchPackages()}

    @Task('pick')
    @Task('default')
    async pick() {
        let choices  = [ 'build', 'publish', 'test' ];
        let task     = await this.list('Select option', choices);
        let packages = await this.selectPackages(true);

        if ( task === 'build' ) {
            await this.buildPackages(packages);
        } else if ( task === 'publish' ) {
            await this.publishPackages(packages);
        }
    }

    protected async buildPackages(packages?: PackageInfo[]) {
        if ( ! Array.isArray(packages) ) {
            packages = await this.selectPackages(true);
        }
        each(packages, async (pkg, cb) => {
            await this.buildPackage(pkg);
            cb();
        })
    }


    protected async publishPackages(packages?: PackageInfo[]) {
        packages    = packages || await this.selectPackages(true);
        let choices = [ 'no', 'all', 'ask' ];
        let forceOn = await this.list('Force publish on', choices, { default: 'no' })
        each(packages, async (pkg, cb) => {
            let force = forceOn === 'all';
            if ( forceOn === 'ask' ) {
                force = await this.confirm('Force publish ' + pkg.package.name, false)
            }
            await this.publishPackage(pkg, force);
            cb();
        })
    }

    protected async watchPackages(packages?: PackageInfo[]) {
        packages = packages || await this.selectPackages(true);
        packages.forEach(pkg => {
            gulp.watch(resolve(pkg.location, 'src/**/*.ts'), (event: WatchEvent) => {
                return this.buildPackage(pkg)
            })
        })
    }

    protected async publishPackage(pkg: PackageInfo, force: boolean = false) {
        let cmd = 'npm publish';
        if ( force ) { cmd += ' --force'; }
        exec(cmd, { cwd: pkg.location });
    }

    protected async buildPackage(pkg: PackageInfo, cmd: string = 'prod:build') {
        cmds.run(cmd, pkg.package.name)
    }

    protected async selectPackages(multi: boolean = true): Promise<PackageInfo[]> {
        let choices  = monorepo.packages.map(pkg => pkg.package.name);
        let packages = await this.inquire<any>('Select packages', multi ? 'checkbox' : 'list', { choices })
        return multi ? packages.map(pkg => monorepo.getPackage(pkg)) : [ monorepo.getPackage(packages) ];
    }
}
