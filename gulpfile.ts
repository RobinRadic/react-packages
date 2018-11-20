import { Gulpclass, Task } from 'gulpclass';
import * as gulp from 'gulp';
import * as PackageGraph from '@lerna/package-graph'
import { execSync, ExecSyncOptionsWithStringEncoding } from 'child_process';
import { merge } from 'lodash';
import * as inquirer from 'inquirer';
import { Question } from 'inquirer';
import * as glob from 'glob';
import { dirname, resolve } from 'path';
import { mixin } from './packages/build-tools/src/decorators/mixin';
import { GulpEnvMixin } from './packages/build-tools-gulp/src/mixins/GulpEnvMixin';
import { each } from 'async';

type Package = { name: string, path: string }
const exec                           = (cmd: string, options: Partial<ExecSyncOptionsWithStringEncoding> = {}) => {
    execSync(cmd, merge(<ExecSyncOptionsWithStringEncoding>{
        encoding: 'utf8',
        stdio   : 'inherit'
    }, options))
}
const execAll                        = (cmds: string[], options: Partial<ExecSyncOptionsWithStringEncoding> = {}) => cmds.forEach(cmd => exec(cmd, options))
const execAllPrefix                  = (prefix: string, cmds: string[], options: Partial<ExecSyncOptionsWithStringEncoding> = {}) => cmds.forEach(cmd => exec(prefix + cmd, options))
const cmds: Record<string, Function> = {};
cmds.run                             = (name: string, scope?: string) => exec(`yarn lerna run ${name} ${scope ? '--scope=' + scope : ''}`)
cmds.build                           = (env: 'dev' | 'prod', name: string) => exec(`yarn lerna run ${env}:build --scope=${name}`)
cmds.buildTools                      = () => execAllPrefix('yarn lerna run prod:build --scope=', [ '@radic/build-tools', '@radic/build-tools-gulp', '@radic/build-tools-rollup', '@radic/build-tools-webpack' ])
cmds.buildGenerator                  = () => cmds.run('build', 'generator-radic')
cmds.buildReactSite                  = (env: 'dev' | 'prod' = 'dev') => cmds.run(env + ':build', 'react-site')

export interface Gulpfile extends GulpEnvMixin {}

@Gulpclass(gulp)
@mixin(GulpEnvMixin)
export class Gulpfile {

    @Task('package-graph')
    async mergeJson() {
        this.dev();
        let $grap = new PackageGraph((await this.getPackages()).map(pkg => pkg.pkg))

    }

    @Task('build:tools') buildTools() { cmds.buildTools(); }

    @Task('build:generator') buildGenerator() { cmds.buildGenerator(); }

    @Task('build:react-site') buildReactSite() { cmds.buildReactSite(); }

    @Task('publish')
    async publish() {
        let packages = await this.selectPackages();

        packages.forEach(pkg => {
            try {
                exec('npm publish', { cwd: pkg.path });
            } catch {}
        });
    }

    protected async getPackages(): Promise<{ path: string, pkg: any }[]> {
        return new Promise<any[]>((res, rej) => {
            glob(resolve('packages/*/package.json'), (err, files) => {
                if ( err ) return rej(err);
                res(files.map(file => {
                    return {
                        path: dirname(file),
                        pkg : require(file)
                    }
                }))
            })
        });
    }

    protected async getPackage(name: string): Promise<{ path: string, pkg: any }> {
        let pkgs = await this.getPackages()
        return pkgs.find(pkg => pkg.pkg.name === name);
    }

    protected async selectPackages(multi: boolean = true): Promise<Package[]> {
        let pkgs     = await this.getPackages()
        let choices  = pkgs.map(pkg => pkg.pkg.name);
        let packages = await this.ask<any>('Select packages', multi ? 'checkbox' : 'list', { choices })

        return multi ? packages.map(name => ({
            name,
            path: pkgs.find(pkg => pkg.pkg.name === name).path
        })) : [ packages ];
    }

    @Task('pick')
    async pick() {
        let choices  = [ 'build', 'publish', 'test' ];
        let task     = await this.ask('Select option', 'list', { choices });
        let packages = await this.selectPackages(true);

        each(packages, async (pkg, cb) => {
            if ( task === 'publish' ) {
                let force = await this.ask<boolean>('Force publish ' + pkg.name, 'confirm', { default: false })
                await this.publishPackage(pkg, force);
                cb();
            }
        })
    }

    protected publishPackage(pkg: Package, force: boolean = false) {
        let cmd = 'npm whoami';
        if ( force ) { cmd += ' --force'; }
        // exec(cmd, { cwd: pkg.path });
        cmds.run('publish', pkg.name)
    }

    protected async ask<T>(message: string, type: string = 'input', options: Question = {}): Promise<T> {
        options     = { name: 'question', message, type, ...options }
        let answers = await inquirer.prompt(options);
        return answers[ options.name ];
    }
}
