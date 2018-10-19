import { Gulpclass, Task } from 'gulpclass';
import * as gulp from 'gulp';
import { resolve } from 'path';
import * as PackageGraph from '@lerna/package-graph'

@Gulpclass(gulp)
export class Gulpfile {

    @Task('package-graph')
    async mergeJson() {
        this.dev();
        let $grap = new PackageGraph(require('./package.json'))

    }




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
