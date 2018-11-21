import { Generator } from '../../lib';
import { getLatestVersion } from '../../lib/utils';
import { merge } from 'lodash';

class BuildToolsGenerator extends Generator {
    pkg: Partial<IPackageJSON>

    tools: {
        gulp: boolean
        webpack: boolean
        monorepo: boolean
    } = {
        gulp    : false,
        webpack : false,
        monorepo: false
    }


    async prompting() {
        (await this.checkbox('Select build tools', [ 'gulp', 'webpack', 'monorepo' ])).forEach(option => this.tools[ option ] = true);
        if ( this.tools.gulp ) {

        }
        if ( this.tools.webpack ) {
            /*
            react?
            antd?
             */
        }
        if ( this.tools.monorepo ) {
            let monorepoType = await this.list('Monorepo type', [ 'lerna', 'yarn', 'both' ], { default: 'both' })
        }
    }

    async writing() {
        this.pkg = this.fs.readJSON(this.destinationPath('package.json'), {
            devDependencies: {},
            dependencies   : {},
            scripts        : {}
        })
        await this._addDevDependency('@radic/build-tools');
        if ( this.tools.gulp ) {
            this.fs.copy(this.templatePath('.env'), this.destinationPath('.env'));
            this.fs.copy(this.templatePath('.env'), this.destinationPath('.env.example'));
            this._addScripts({
                'gulp'      : 'gulp',
                'dev:build' : 'gulp dev:build',
                'prod:build': 'gulp prod:build'
            })
            await this._addDevDependency('@radic/build-tools-gulp');
            if ( this.tools.webpack ) {
                this._addScripts({
                    'dev:serve' : 'gulp dev:serve',
                    'prod:serve': 'gulp prod:serve'
                })
                this.fs.copy(this.templatePath('webpack.gulpfile.tst'), this.destinationPath('gulpfile.ts'));
            } else {
                this.fs.copy(this.templatePath('gulpfile.tst'), this.destinationPath('gulpfile.ts'));
            }
        }

        if ( this.tools.webpack ) {
            this._addScripts({ 'webpack': 'webpack' })
            await this._addDevDependency('@radic/build-tools-webpack');

            this.fs.copy(this.templatePath('webpack.config.tst'), this.destinationPath('webpack.config.ts'));

        }
        if ( this.tools.monorepo ) {
            await this._addDevDependency('@radic/build-tools-monorepo');
            let monorepoType = await this.list('Monorepo type', [ 'lerna', 'yarn', 'both' ], { default: 'both' })
        }
        this.fs.extendJSON(this.destinationPath('package.json'), this.pkg);
    }

    install() {
        this.yarnInstall();
    }

    async _addDevDependency(packageName: string, withType: boolean = false) {
        this.pkg.devDependencies[ packageName ] = '^' + await getLatestVersion(packageName)
        if ( withType ) {
            this.pkg.devDependencies[ '@types/' + packageName ] = '^' + await getLatestVersion('@types/' + packageName)
        }
    }

    async _addDependency(packageName: string, withType: boolean = false) {
        this.pkg.dependencies[ packageName ] = '^' + await getLatestVersion(packageName)
        if ( withType ) {
            this.pkg.devDependencies[ '@types/' + packageName ] = '^' + await getLatestVersion('@types/' + packageName)
        }
    }

    _addScripts(scripts: Record<string, string>) {
        merge(this.pkg.scripts, scripts)
    }

}

export = BuildToolsGenerator
