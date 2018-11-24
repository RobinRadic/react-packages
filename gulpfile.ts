import { Gulpclass, Task } from 'gulpclass';
import * as gulp from 'gulp';
import { WatchEvent } from 'gulp';
import { execSync, ExecSyncOptionsWithStringEncoding } from 'child_process';
import { merge } from 'lodash';
import { mixin, utils } from './packages/build-tools';
import { GulpEnvMixin, GulpInteractiveMixin } from './packages/build-tools-gulp';
import { Monorepo, Package } from './packages/build-tools-monorepo';

const each = <T>(items: T[], fn: (item: T) => void) => items.reduce((promise, item) => promise.then(() => fn(item)), Promise.resolve());

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

    @Task('version') version() { return this.versionPackages()}

    @Task('test') test() { return this.testPackages()}

    @Task('pick')
    @Task('default')
    async pick() {
        let choices  = [ 'build', 'publish', 'version','test' ];
        let task     = await this.list('Select option', choices);
        let packages = await this.selectPackages(true);

        if ( task === 'build' ) {
            await this.buildPackages(packages);
        } else if ( task === 'publish' ) {
            await this.publishPackages(packages);
        } else if ( task === 'version' ) {
            await this.versionPackages(packages);
        } else if ( task === 'test' ) {
            await this.testPackages(packages);
        }
    }

    protected async testPackages(packages?: Package[]) {
        packages = packages || await this.selectPackages(true);
        each(packages, async (pkg) => {
            this.testPackage(pkg);
        });
    }

    protected async versionPackages(packages?: Package[]) {
        packages = packages || await this.selectPackages(true);
        each(packages, async (pkg) => {
            let choice = await this.list(`Select a new version for ${pkg.name} (currently ${pkg.version}) `, utils.getVersionBumpChoices(pkg.version));
            pkg.extend({ version: choice }).write();
            // cb();
        });
    }

    protected async buildPackages(packages?: Package[]) {
        packages = packages || await this.selectPackages(true);
        each(packages, async (pkg) => {
            await this.buildPackage(pkg);
            // cb();
        })
    }


    protected async publishPackages(packages?: Package[]) {
        packages    = packages || await this.selectPackages(true);
        let choices = [ 'no', 'all', 'ask' ];
        let forceOn = await this.list('Force publish on', choices, { default: 'no' })
        each(packages, async (pkg) => {
            let force = forceOn === 'all';
            if ( forceOn === 'ask' ) {
                force = await this.confirm('Force publish ' + pkg.name, false)
            }
            await this.publishPackage(pkg, force);
            // cb();
        })
    }

    protected async watchPackages(packages?: Package[]) {
        packages = packages || await this.selectPackages(true);
        packages.forEach(pkg => {
            gulp.watch(pkg.getPath('src/**/*.ts'), (event: WatchEvent) => {
                return this.buildPackage(pkg)
            })
        })
    }

    protected async publishPackage(pkg: Package, force: boolean = false) {
        let cmd = 'npm publish';
        if ( force ) { cmd += ' --force'; }
        exec(cmd, { cwd: pkg.location });
    }

    protected async buildPackage(pkg: Package, cmd: string = 'prod:build') {
        cmds.run(cmd, pkg.name)
    }

    protected async testPackage(pkg: Package, cmd: string = 'test') {
        cmds.run(cmd, pkg.name)
    }

    protected async selectPackages(multi: boolean = true): Promise<Package[]> {
        let choices  = monorepo.packages.map(pkg => pkg.name);
        let packages = await this.inquire<any>('Select packages', multi ? 'checkbox' : 'list', { choices })
        return multi ? packages.map(pkg => monorepo.getPackage(pkg)) : [ monorepo.getPackage(packages) ];
    }
}
