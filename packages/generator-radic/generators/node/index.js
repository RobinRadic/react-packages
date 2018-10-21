"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const lib_1 = require("../../lib");
const ts = require("typescript");
const utils_1 = require("../../lib/utils");
class NodeGenerator extends lib_1.Generator {
    constructor() {
        super(...arguments);
        this.pkg = {};
    }
    prompting() {
        return __awaiter(this, void 0, void 0, function* () {
            let answers = yield this
                .ask.input('name', 'App name', this.determineAppname())
                .ask.input('description', 'Description', 'A node application')
                .ask.input('license', 'License', 'MIT')
                .ask.list('transpiler', 'Use transpiler?', ['typescript', 'babel', 'none'], 'typescript')
                .ask.confirm('node_typings', 'Add @types/node?', true).when('transpiler', 'typescript')
                .ask.confirm('tests', 'Include testing?', true)
                .ask.list('test_framework', 'Testing framework', ['jest', 'mocha', 'skip'], 'mocha').when('tests', true)
                .ask
                .prompt();
            this.config.set('node', answers);
        });
    }
    writing() {
        return __awaiter(this, void 0, void 0, function* () {
            let { transpiler, tests, test_framework, name, description, license } = this.config.get('node');
            this.pkg = {
                name, description, license,
                main: 'lib/index.js',
                devDependencies: {},
                dependencies: {}
            };
            let ext = transpiler === 'typescript' ? 'ts' : 'js';
            let useTranspiler = transpiler !== 'none';
            if (transpiler === 'typescript') {
                yield this._typescript();
            }
            else if (transpiler === 'babel') {
            }
            this.fs.extendJSON(this.destinationPath('package.json'), this.pkg);
            this.fs.copy(this.templatePath('.npmignore'), this.destinationPath('.npmignore'));
            this.fs.copy(this.templatePath('lib/index.js'), this.destinationPath('lib/index.js'));
            let fileName = useTranspiler ? 'index.es.js' : 'index.js';
            this.fs.copy(this.templatePath(`src/${fileName}`), this.destinationPath(`test/index.${ext}`));
            if (tests) {
                this.fs.copy(this.templatePath(`test/${fileName}`), this.destinationPath(`test/index.${ext}`));
            }
        });
    }
    _typescript() {
        return __awaiter(this, void 0, void 0, function* () {
            let { tests, test_framework, node_typings } = this.config.get('node');
            yield this._addDevDependency('typescript');
            yield this._addDevDependency('ts-node');
            this.fs.extendJSON(this.destinationPath('tsconfig.json'), {
                compilerOptions: {
                    target: ts.ScriptTarget.ES5,
                    module: ts.ModuleKind.CommonJS,
                    moduleResolution: ts.ModuleResolutionKind.NodeJs,
                    lib: ['es2017'],
                    emitDecoratorMetadata: true,
                    experimentalDecorators: true,
                    inlineSourceMap: true,
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
            if (tests) {
                yield this._addDevDependency('nyc');
                if (test_framework === 'mocha') {
                    this.fs.copy(this.templatePath('types/mocha.dts'), this.destinationPath('types/mocha.d.ts'));
                    yield this._addDevDependency('mocha', true);
                    yield this._addDevDependency('mocha-typescript');
                    yield this._addDevDependency('sinon', true);
                    yield this._addDevDependency('chai', true);
                    yield this._addDevDependency('sinon-chai', true);
                }
                else if (test_framework === 'jest') {
                    yield this._addDevDependency('jest', true);
                    yield this._addDevDependency('ts-jest', true);
                }
            }
            if (node_typings) {
                yield this._addDevDependency('@types/node');
            }
        });
    }
    install() {
        this.yarnInstall();
    }
    _addDevDependency(packageName, withType = false) {
        return __awaiter(this, void 0, void 0, function* () {
            this.pkg.devDependencies[packageName] = '^' + (yield utils_1.getLatestVersion(packageName));
            if (withType) {
                this.pkg.devDependencies['@types/' + packageName] = '^' + (yield utils_1.getLatestVersion('@types/' + packageName));
            }
        });
    }
    _addDependency(packageName, withType = false) {
        return __awaiter(this, void 0, void 0, function* () {
            this.pkg.dependencies[packageName] = '^' + (yield utils_1.getLatestVersion(packageName));
            if (withType) {
                this.pkg.devDependencies['@types/' + packageName] = '^' + (yield utils_1.getLatestVersion('@types/' + packageName));
            }
        });
    }
}
module.exports = NodeGenerator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZ2VuZXJhdG9ycy9ub2RlL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLG1DQUFzQztBQUN0QyxpQ0FBZ0M7QUFDaEMsMkNBQW1EO0FBRW5ELE1BQU0sYUFBYyxTQUFRLGVBQVM7SUFBckM7O1FBRUksUUFBRyxHQUEwQixFQUFFLENBQUE7SUFpSG5DLENBQUM7SUEvR1MsU0FBUzs7WUFDWCxJQUFJLE9BQU8sR0FBRyxNQUFNLElBQUk7aUJBQ25CLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztpQkFDdEQsR0FBRyxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsYUFBYSxFQUFFLG9CQUFvQixDQUFDO2lCQUM3RCxHQUFHLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsS0FBSyxDQUFDO2lCQUV0QyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxpQkFBaUIsRUFBRSxDQUFFLFlBQVksRUFBRSxPQUFPLEVBQUUsTUFBTSxDQUFFLEVBQUUsWUFBWSxDQUFDO2lCQUMxRixHQUFHLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsRUFBRSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLFlBQVksQ0FBQztpQkFDdEYsR0FBRyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsSUFBSSxDQUFDO2lCQUM5QyxHQUFHLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLG1CQUFtQixFQUFFLENBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLENBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQztpQkFDekcsR0FBRztpQkFDSCxNQUFNLEVBQUUsQ0FBQztZQUVkLElBQUks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VyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVLLGlCQUFpQixDQUFDLFdBQW1CLEVBQUUsV0FBb0IsS0FBSzs7WUFDbEUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUUsV0FBVyxDQUFFLEdBQUcsR0FBRyxJQUFHLE1BQU0sd0JBQWdCLENBQUMsV0FBVyxDQUFDLENBQUEsQ0FBQTtZQUNuRixJQUFLLFFBQVEsRUFBRztnQkFDWixJQUFJLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBRSxTQUFTLEdBQUcsV0FBVyxDQUFFLEdBQUcsR0FBRyxJQUFHLE1BQU0sd0JBQWdCLENBQUMsU0FBUyxHQUFHLFdBQVcsQ0FBQyxDQUFBLENBQUE7YUFDOUc7UUFDTCxDQUFDO0tBQUE7SUFFSyxjQUFjLENBQUMsV0FBbUIsRUFBRSxXQUFvQixLQUFLOztZQUMvRCxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBRSxXQUFXLENBQUUsR0FBRyxHQUFHLElBQUcsTUFBTSx3QkFBZ0IsQ0FBQyxXQUFXLENBQUMsQ0FBQSxDQUFBO1lBQ2hGLElBQUssUUFBUSxFQUFHO2dCQUNaLElBQUksQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFFLFNBQVMsR0FBRyxXQUFXLENBQUUsR0FBRyxHQUFHLElBQUcsTUFBTSx3QkFBZ0IsQ0FBQyxTQUFTLEdBQUcsV0FBVyxDQUFDLENBQUEsQ0FBQTthQUM5RztRQUNMLENBQUM7S0FBQTtDQUNKO0FBRUQsaUJBQVMsYUFBYSxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2VuZXJhdG9yIH0gZnJvbSAnLi4vLi4vbGliJztcbmltcG9ydCAqIGFzIHRzIGZyb20gJ3R5cGVzY3JpcHQnXG5pbXBvcnQgeyBnZXRMYXRlc3RWZXJzaW9uIH0gZnJvbSAnLi4vLi4vbGliL3V0aWxzJztcblxuY2xhc3MgTm9kZUdlbmVyYXRvciBleHRlbmRzIEdlbmVyYXRvciB7XG5cbiAgICBwa2c6IFBhcnRpYWw8SVBhY2thZ2VKU09OPiA9IHt9XG5cbiAgICBhc3luYyBwcm9tcHRpbmcoKSB7XG4gICAgICAgIGxldCBhbnN3ZXJzID0gYXdhaXQgdGhpc1xuICAgICAgICAgICAgLmFzay5pbnB1dCgnbmFtZScsICdBcHAgbmFtZScsIHRoaXMuZGV0ZXJtaW5lQXBwbmFtZSgpKVxuICAgICAgICAgICAgLmFzay5pbnB1dCgnZGVzY3JpcHRpb24nLCAnRGVzY3JpcHRpb24nLCAnQSBub2RlIGFwcGxpY2F0aW9uJylcbiAgICAgICAgICAgIC5hc2suaW5wdXQoJ2xpY2Vuc2UnLCAnTGljZW5zZScsICdNSVQnKVxuXG4gICAgICAgICAgICAuYXNrLmxpc3QoJ3RyYW5zcGlsZXInLCAnVXNlIHRyYW5zcGlsZXI/JywgWyAndHlwZXNjcmlwdCcsICdiYWJlbCcsICdub25lJyBdLCAndHlwZXNjcmlwdCcpXG4gICAgICAgICAgICAuYXNrLmNvbmZpcm0oJ25vZGVfdHlwaW5ncycsICdBZGQgQHR5cGVzL25vZGU/JywgdHJ1ZSkud2hlbigndHJhbnNwaWxlcicsICd0eXBlc2NyaXB0JylcbiAgICAgICAgICAgIC5hc2suY29uZmlybSgndGVzdHMnLCAnSW5jbHVkZSB0ZXN0aW5nPycsIHRydWUpXG4gICAgICAgICAgICAuYXNrLmxpc3QoJ3Rlc3RfZnJhbWV3b3JrJywgJ1Rlc3RpbmcgZnJhbWV3b3JrJywgWyAnamVzdCcsICdtb2NoYScsICdza2lwJyBdLCAnbW9jaGEnKS53aGVuKCd0ZXN0cycsIHRydWUpXG4gICAgICAgICAgICAuYXNrXG4gICAgICAgICAgICAucHJvbXB0KCk7XG5cbiAgICAgICAgdGhpcy5jb25maWcuc2V0KCdub2RlJywgYW5zd2Vycyk7XG5cbiAgICB9XG5cbiAgICBhc3luYyB3cml0aW5nKCkge1xuICAgICAgICBsZXQgeyB0cmFuc3BpbGVyLCB0ZXN0cywgdGVzdF9mcmFtZXdvcmssIG5hbWUsIGRlc2NyaXB0aW9uLCBsaWNlbnNlIH0gPSB0aGlzLmNvbmZpZy5nZXQoJ25vZGUnKTtcblxuICAgICAgICB0aGlzLnBrZyAgICAgICAgICA9IHtcbiAgICAgICAgICAgIG5hbWUsIGRlc2NyaXB0aW9uLCBsaWNlbnNlLFxuICAgICAgICAgICAgbWFpbiAgICAgICAgICAgOiAnbGliL2luZGV4LmpzJyxcbiAgICAgICAgICAgIGRldkRlcGVuZGVuY2llczoge30sXG4gICAgICAgICAgICBkZXBlbmRlbmNpZXMgICA6IHt9XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGV4dCAgICAgICAgICAgPSB0cmFuc3BpbGVyID09PSAndHlwZXNjcmlwdCcgPyAndHMnIDogJ2pzJztcbiAgICAgICAgbGV0IHVzZVRyYW5zcGlsZXIgPSB0cmFuc3BpbGVyICE9PSAnbm9uZSdcblxuICAgICAgICBpZiAoIHRyYW5zcGlsZXIgPT09ICd0eXBlc2NyaXB0JyApIHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuX3R5cGVzY3JpcHQoKTtcbiAgICAgICAgfSBlbHNlIGlmICggdHJhbnNwaWxlciA9PT0gJ2JhYmVsJyApIHtcblxuICAgICAgICB9XG4gICAgICAgIHRoaXMuZnMuZXh0ZW5kSlNPTih0aGlzLmRlc3RpbmF0aW9uUGF0aCgncGFja2FnZS5qc29uJyksIHRoaXMucGtnKTtcblxuICAgICAgICB0aGlzLmZzLmNvcHkodGhpcy50ZW1wbGF0ZVBhdGgoJy5ucG1pZ25vcmUnKSwgdGhpcy5kZXN0aW5hdGlvblBhdGgoJy5ucG1pZ25vcmUnKSlcbiAgICAgICAgdGhpcy5mcy5jb3B5KHRoaXMudGVtcGxhdGVQYXRoKCdsaWIvaW5kZXguanMnKSwgdGhpcy5kZXN0aW5hdGlvblBhdGgoJ2xpYi9pbmRleC5qcycpKVxuXG4gICAgICAgIGxldCBmaWxlTmFtZSA9IHVzZVRyYW5zcGlsZXIgPyAnaW5kZXguZXMuanMnIDogJ2luZGV4LmpzJ1xuICAgICAgICB0aGlzLmZzLmNvcHkodGhpcy50ZW1wbGF0ZVBhdGgoYHNyYy8ke2ZpbGVOYW1lfWApLCB0aGlzLmRlc3RpbmF0aW9uUGF0aChgdGVzdC9pbmRleC4ke2V4dH1gKSlcbiAgICAgICAgaWYgKCB0ZXN0cyApIHtcbiAgICAgICAgICAgIHRoaXMuZnMuY29weSh0aGlzLnRlbXBsYXRlUGF0aChgdGVzdC8ke2ZpbGVOYW1lfWApLCB0aGlzLmRlc3RpbmF0aW9uUGF0aChgdGVzdC9pbmRleC4ke2V4dH1gKSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIF90eXBlc2NyaXB0KCkge1xuICAgICAgICBsZXQgeyB0ZXN0cywgdGVzdF9mcmFtZXdvcmssIG5vZGVfdHlwaW5ncyB9ID0gdGhpcy5jb25maWcuZ2V0KCdub2RlJyk7XG5cbiAgICAgICAgYXdhaXQgdGhpcy5fYWRkRGV2RGVwZW5kZW5jeSgndHlwZXNjcmlwdCcpXG4gICAgICAgIGF3YWl0IHRoaXMuX2FkZERldkRlcGVuZGVuY3koJ3RzLW5vZGUnKVxuXG4gICAgICAgIHRoaXMuZnMuZXh0ZW5kSlNPTih0aGlzLmRlc3RpbmF0aW9uUGF0aCgndHNjb25maWcuanNvbicpLCB7XG4gICAgICAgICAgICBjb21waWxlck9wdGlvbnM6IDx0cy5Db21waWxlck9wdGlvbnM+IHtcbiAgICAgICAgICAgICAgICB0YXJnZXQgICAgICAgICAgICAgICAgOiB0cy5TY3JpcHRUYXJnZXQuRVM1LFxuICAgICAgICAgICAgICAgIG1vZHVsZSAgICAgICAgICAgICAgICA6IHRzLk1vZHVsZUtpbmQuQ29tbW9uSlMsXG4gICAgICAgICAgICAgICAgbW9kdWxlUmVzb2x1dGlvbiAgICAgIDogdHMuTW9kdWxlUmVzb2x1dGlvbktpbmQuTm9kZUpzLFxuICAgICAgICAgICAgICAgIGxpYiAgICAgICAgICAgICAgICAgICA6IFsgJ2VzMjAxNycgXSxcbiAgICAgICAgICAgICAgICBlbWl0RGVjb3JhdG9yTWV0YWRhdGEgOiB0cnVlLFxuICAgICAgICAgICAgICAgIGV4cGVyaW1lbnRhbERlY29yYXRvcnM6IHRydWUsXG4gICAgICAgICAgICAgICAgaW5saW5lU291cmNlTWFwICAgICAgIDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0eXBlUm9vdHM6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJub2RlX21vZHVsZXMvQHR5cGVzXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZXNcIlxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpbmNsdWRlOiBbXG4gICAgICAgICAgICAgICAgXCJzcmMvKiovKlwiLFxuICAgICAgICAgICAgICAgIFwidGVzdC8qKi8qXCIsXG4gICAgICAgICAgICAgICAgXCJ0eXBlc1wiXG4gICAgICAgICAgICBdXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICggdGVzdHMgKSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLl9hZGREZXZEZXBlbmRlbmN5KCdueWMnKVxuICAgICAgICAgICAgaWYgKCB0ZXN0X2ZyYW1ld29yayA9PT0gJ21vY2hhJyApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZzLmNvcHkodGhpcy50ZW1wbGF0ZVBhdGgoJ3R5cGVzL21vY2hhLmR0cycpLCB0aGlzLmRlc3RpbmF0aW9uUGF0aCgndHlwZXMvbW9jaGEuZC50cycpKVxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuX2FkZERldkRlcGVuZGVuY3koJ21vY2hhJywgdHJ1ZSlcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLl9hZGREZXZEZXBlbmRlbmN5KCdtb2NoYS10eXBlc2NyaXB0JylcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLl9hZGREZXZEZXBlbmRlbmN5KCdzaW5vbicsIHRydWUpXG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5fYWRkRGV2RGVwZW5kZW5jeSgnY2hhaScsIHRydWUpXG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5fYWRkRGV2RGVwZW5kZW5jeSgnc2lub24tY2hhaScsIHRydWUpXG4gICAgICAgICAgICB9IGVsc2UgaWYgKCB0ZXN0X2ZyYW1ld29yayA9PT0gJ2plc3QnICkge1xuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuX2FkZERldkRlcGVuZGVuY3koJ2plc3QnLCB0cnVlKVxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuX2FkZERldkRlcGVuZGVuY3koJ3RzLWplc3QnLCB0cnVlKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCBub2RlX3R5cGluZ3MgKSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLl9hZGREZXZEZXBlbmRlbmN5KCdAdHlwZXMvbm9kZScpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBpbnN0YWxsKCkge1xuICAgICAgICB0aGlzLnlhcm5JbnN0YWxsKCk7XG4gICAgfVxuXG4gICAgYXN5bmMgX2FkZERldkRlcGVuZGVuY3kocGFja2FnZU5hbWU6IHN0cmluZywgd2l0aFR5cGU6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgICAgICB0aGlzLnBrZy5kZXZEZXBlbmRlbmNpZXNbIHBhY2thZ2VOYW1lIF0gPSAnXicgKyBhd2FpdCBnZXRMYXRlc3RWZXJzaW9uKHBhY2thZ2VOYW1lKVxuICAgICAgICBpZiAoIHdpdGhUeXBlICkge1xuICAgICAgICAgICAgdGhpcy5wa2cuZGV2RGVwZW5kZW5jaWVzWyAnQHR5cGVzLycgKyBwYWNrYWdlTmFtZSBdID0gJ14nICsgYXdhaXQgZ2V0TGF0ZXN0VmVyc2lvbignQHR5cGVzLycgKyBwYWNrYWdlTmFtZSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIF9hZGREZXBlbmRlbmN5KHBhY2thZ2VOYW1lOiBzdHJpbmcsIHdpdGhUeXBlOiBib29sZWFuID0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy5wa2cuZGVwZW5kZW5jaWVzWyBwYWNrYWdlTmFtZSBdID0gJ14nICsgYXdhaXQgZ2V0TGF0ZXN0VmVyc2lvbihwYWNrYWdlTmFtZSlcbiAgICAgICAgaWYgKCB3aXRoVHlwZSApIHtcbiAgICAgICAgICAgIHRoaXMucGtnLmRldkRlcGVuZGVuY2llc1sgJ0B0eXBlcy8nICsgcGFja2FnZU5hbWUgXSA9ICdeJyArIGF3YWl0IGdldExhdGVzdFZlcnNpb24oJ0B0eXBlcy8nICsgcGFja2FnZU5hbWUpXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCA9IE5vZGVHZW5lcmF0b3JcbiJdfQ==