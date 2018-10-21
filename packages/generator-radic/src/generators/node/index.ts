import { Generator } from '../../lib';
import * as ts from 'typescript'
import { getLatestVersion } from '../../lib/utils';

class NodeGenerator extends Generator {

    pkg: Partial<IPackageJSON> = {}

    async prompting() {
        let answers = await this
            .ask.input('name', 'App name', this.determineAppname())
            .ask.input('description', 'Description', 'A node application')
            .ask.input('license', 'License', 'MIT')

            .ask.list('transpiler', 'Use transpiler?', [ 'typescript', 'babel', 'none' ], 'typescript')
            .ask.confirm('node_typings', 'Add @types/node?', true).when('transpiler', 'typescript')
            .ask.confirm('tests', 'Include testing?', true)
            .ask.list('test_framework', 'Testing framework', [ 'jest', 'mocha', 'skip' ], 'mocha').when('tests', true)
            .ask
            .prompt();

        this.config.set('node', answers);

    }

    async writing() {
        let { transpiler, tests, test_framework, name, description, license } = this.config.get('node');

        this.pkg          = {
            name, description, license,
            main           : 'lib/index.js',
            devDependencies: {},
            dependencies   : {}
        }
        let ext           = transpiler === 'typescript' ? 'ts' : 'js';
        let useTranspiler = transpiler !== 'none'

        if ( transpiler === 'typescript' ) {
            await this._typescript();
        } else if ( transpiler === 'babel' ) {

        }
        this.fs.extendJSON(this.destinationPath('package.json'), this.pkg);

        this.fs.copy(this.templatePath('.npmignore'), this.destinationPath('.npmignore'))
        this.fs.copy(this.templatePath('lib/index.js'), this.destinationPath('lib/index.js'))

        let fileName = useTranspiler ? 'index.es.js' : 'index.js'
        this.fs.copy(this.templatePath(`src/${fileName}`), this.destinationPath(`test/index.${ext}`))
        if ( tests ) {
            this.fs.copy(this.templatePath(`test/${fileName}`), this.destinationPath(`test/index.${ext}`))
        }
    }

    async _typescript() {
        let { tests, test_framework, node_typings } = this.config.get('node');

        await this._addDevDependency('typescript')
        await this._addDevDependency('ts-node')

        this.fs.extendJSON(this.destinationPath('tsconfig.json'), {
            compilerOptions: <ts.CompilerOptions> {
                target                : ts.ScriptTarget.ES5,
                module                : ts.ModuleKind.CommonJS,
                moduleResolution      : ts.ModuleResolutionKind.NodeJs,
                lib                   : [ 'es2017' ],
                emitDecoratorMetadata : true,
                experimentalDecorators: true,
                inlineSourceMap       : true,
                typeRoots: [
                    "node_modules/@types",
                    "types"
                ]
            },
            include: [
                "src/**/*",
                "test/**/*",
                "types"
            ]
        });

        if ( tests ) {
            await this._addDevDependency('nyc')
            if ( test_framework === 'mocha' ) {
                this.fs.copy(this.templatePath('types/mocha.dts'), this.destinationPath('types/mocha.d.ts'))
                await this._addDevDependency('mocha', true)
                await this._addDevDependency('mocha-typescript')
                await this._addDevDependency('sinon', true)
                await this._addDevDependency('chai', true)
                await this._addDevDependency('sinon-chai', true)
            } else if ( test_framework === 'jest' ) {
                await this._addDevDependency('jest', true)
                await this._addDevDependency('ts-jest', true)
            }
        }

        if ( node_typings ) {
            await this._addDevDependency('@types/node');
        }

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
}

export = NodeGenerator
