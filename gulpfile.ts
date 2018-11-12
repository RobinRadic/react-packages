import { Gulpclass, Task } from 'gulpclass';
import * as gulp from 'gulp';
import * as PackageGraph from '@lerna/package-graph'
import { execSync, ExecSyncOptionsWithStringEncoding } from 'child_process';
import { merge } from 'lodash';

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


@Gulpclass(gulp)
export class Gulpfile {

    @Task('package-graph')
    async mergeJson() {
        this.dev();
        let $grap = new PackageGraph(require('./package.json'))

    }

    @Task('build:tools') buildTools() { cmds.buildTools(); }

    @Task('build:generator') buildGenerator() { cmds.buildGenerator(); }

    @Task('build:react-site') buildReactSite() { cmds.buildReactSite(); }

    protected dev() {
        process.env.NODE_ENV = 'development'
        // setSettingEnv('dev')
        // this.settings = getSettings();
        return this;
    }

    protected dist() {
        process.env.NODE_ENV = 'production'
        // setSettingEnv('dist')
        // this.settings = getSettings();
        return this;
    }
}
