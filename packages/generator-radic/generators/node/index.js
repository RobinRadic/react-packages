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
                    target: 'es5',
                    module: 'commonjs',
                    moduleResolution: 'node',
                    lib: ['es2015', 'es2016', 'es2017'],
                    emitDecoratorMetadata: true,
                    experimentalDecorators: true,
                    inlineSourceMap: true,
                    typeRoots: [
                        'node_modules/@types',
                        'types'
                    ]
                },
                include: [
                    'src/**/*',
                    'test/**/*',
                    'types'
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZ2VuZXJhdG9ycy9ub2RlL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLG1DQUFzQztBQUV0QywyQ0FBbUQ7QUFFbkQsTUFBTSxhQUFjLFNBQVEsZUFBUztJQUFyQzs7UUFFSSxRQUFHLEdBQTBCLEVBQUUsQ0FBQTtJQWlIbkMsQ0FBQztJQS9HUyxTQUFTOztZQUNYLElBQUksT0FBTyxHQUFHLE1BQU0sSUFBSTtpQkFDbkIsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsVUFBVSxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO2lCQUN0RCxHQUFHLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRSxhQUFhLEVBQUUsb0JBQW9CLENBQUM7aUJBQzdELEdBQUcsQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxLQUFLLENBQUM7aUJBRXRDLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLGlCQUFpQixFQUFFLENBQUUsWUFBWSxFQUFFLE9BQU8sRUFBRSxNQUFNLENBQUUsRUFBRSxZQUFZLENBQUM7aUJBQzFGLEdBQUcsQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLGtCQUFrQixFQUFFLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsWUFBWSxDQUFDO2lCQUN0RixHQUFHLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxJQUFJLENBQUM7aUJBQzlDLEdBQUcsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsbUJBQW1CLEVBQUUsQ0FBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sQ0FBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDO2lCQUN6RyxHQUFHO2lCQUNILE1BQU0sRUFBRSxDQUFDO1lBRWQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRXJDLENBQUM7S0FBQTtJQUVLLE9BQU87O1lBQ1QsSUFBSSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7WUFFaEcsSUFBSSxDQUFDLEdBQUcsR0FBWTtnQkFDaEIsSUFBSSxFQUFFLFdBQVcsRUFBRSxPQUFPO2dCQUMxQixJQUFJLEVBQWEsY0FBYztnQkFDL0IsZUFBZSxFQUFFLEVBQUU7Z0JBQ25CLFlBQVksRUFBSyxFQUFFO2FBQ3RCLENBQUE7WUFDRCxJQUFJLEdBQUcsR0FBYSxVQUFVLEtBQUssWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUM5RCxJQUFJLGFBQWEsR0FBRyxVQUFVLEtBQUssTUFBTSxDQUFBO1lBRXpDLElBQUssVUFBVSxLQUFLLFlBQVksRUFBRztnQkFDL0IsTUFBTSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7YUFDNUI7aUJBQU0sSUFBSyxVQUFVLEtBQUssT0FBTyxFQUFHO2FBRXBDO1lBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFFbkUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUE7WUFDakYsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUE7WUFFckYsSUFBSSxRQUFRLEdBQUcsYUFBYSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQTtZQUN6RCxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFBO1lBQzdGLElBQUssS0FBSyxFQUFHO2dCQUNULElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUE7YUFDakc7UUFDTCxDQUFDO0tBQUE7SUFFSyxXQUFXOztZQUNiLElBQUksRUFBRSxLQUFLLEVBQUUsY0FBYyxFQUFFLFlBQVksRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBRXRFLE1BQU0sSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksQ0FBQyxDQUFBO1lBQzFDLE1BQU0sSUFBSSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxDQUFBO1lBRXZDLElBQUksQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsZUFBZSxDQUFDLEVBQUU7Z0JBQ3RELGVBQWUsRUFBNkI7b0JBQ3hDLE1BQU0sRUFBa0IsS0FBSztvQkFDN0IsTUFBTSxFQUFrQixVQUFVO29CQUNsQyxnQkFBZ0IsRUFBUSxNQUFNO29CQUM5QixHQUFHLEVBQXFCLENBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUU7b0JBQ3hELHFCQUFxQixFQUFHLElBQUk7b0JBQzVCLHNCQUFzQixFQUFFLElBQUk7b0JBQzVCLGVBQWUsRUFBUyxJQUFJO29CQUM1QixTQUFTLEVBQWU7d0JBQ3BCLHFCQUFxQjt3QkFDckIsT0FBTztxQkFDVjtpQkFDSjtnQkFDRCxPQUFPLEVBQVU7b0JBQ2IsVUFBVTtvQkFDVixXQUFXO29CQUNYLE9BQU87aUJBQ1Y7YUFDSixDQUFDLENBQUM7WUFFSCxJQUFLLEtBQUssRUFBRztnQkFDVCxNQUFNLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsQ0FBQTtnQkFDbkMsSUFBSyxjQUFjLEtBQUssT0FBTyxFQUFHO29CQUM5QixJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGlCQUFpQixDQUFDLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUE7b0JBQzVGLE1BQU0sSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQTtvQkFDM0MsTUFBTSxJQUFJLENBQUMsaUJBQWlCLENBQUMsa0JBQWtCLENBQUMsQ0FBQTtvQkFDaEQsTUFBTSxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFBO29CQUMzQyxNQUFNLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUE7b0JBQzFDLE1BQU0sSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQTtpQkFDbkQ7cUJBQU0sSUFBSyxjQUFjLEtBQUssTUFBTSxFQUFHO29CQUNwQyxNQUFNLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUE7b0JBQzFDLE1BQU0sSUFBSSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQTtpQkFDaEQ7YUFDSjtZQUVELElBQUssWUFBWSxFQUFHO2dCQUNoQixNQUFNLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLENBQUMsQ0FBQzthQUMvQztRQUVMLENBQUM7S0FBQTtJQUVELE9BQU87UUFDSCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVLLGlCQUFpQixDQUFDLFdBQW1CLEVBQUUsV0FBb0IsS0FBSzs7WUFDbEUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUUsV0FBVyxDQUFFLEdBQUcsR0FBRyxJQUFHLE1BQU0sd0JBQWdCLENBQUMsV0FBVyxDQUFDLENBQUEsQ0FBQTtZQUNuRixJQUFLLFFBQVEsRUFBRztnQkFDWixJQUFJLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBRSxTQUFTLEdBQUcsV0FBVyxDQUFFLEdBQUcsR0FBRyxJQUFHLE1BQU0sd0JBQWdCLENBQUMsU0FBUyxHQUFHLFdBQVcsQ0FBQyxDQUFBLENBQUE7YUFDOUc7UUFDTCxDQUFDO0tBQUE7SUFFSyxjQUFjLENBQUMsV0FBbUIsRUFBRSxXQUFvQixLQUFLOztZQUMvRCxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBRSxXQUFXLENBQUUsR0FBRyxHQUFHLElBQUcsTUFBTSx3QkFBZ0IsQ0FBQyxXQUFXLENBQUMsQ0FBQSxDQUFBO1lBQ2hGLElBQUssUUFBUSxFQUFHO2dCQUNaLElBQUksQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFFLFNBQVMsR0FBRyxXQUFXLENBQUUsR0FBRyxHQUFHLElBQUcsTUFBTSx3QkFBZ0IsQ0FBQyxTQUFTLEdBQUcsV0FBVyxDQUFDLENBQUEsQ0FBQTthQUM5RztRQUNMLENBQUM7S0FBQTtDQUNKO0FBRUQsaUJBQVMsYUFBYSxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2VuZXJhdG9yIH0gZnJvbSAnLi4vLi4vbGliJztcbmltcG9ydCAqIGFzIHRzIGZyb20gJ3R5cGVzY3JpcHQnXG5pbXBvcnQgeyBnZXRMYXRlc3RWZXJzaW9uIH0gZnJvbSAnLi4vLi4vbGliL3V0aWxzJztcblxuY2xhc3MgTm9kZUdlbmVyYXRvciBleHRlbmRzIEdlbmVyYXRvciB7XG5cbiAgICBwa2c6IFBhcnRpYWw8SVBhY2thZ2VKU09OPiA9IHt9XG5cbiAgICBhc3luYyBwcm9tcHRpbmcoKSB7XG4gICAgICAgIGxldCBhbnN3ZXJzID0gYXdhaXQgdGhpc1xuICAgICAgICAgICAgLmFzay5pbnB1dCgnbmFtZScsICdBcHAgbmFtZScsIHRoaXMuZGV0ZXJtaW5lQXBwbmFtZSgpKVxuICAgICAgICAgICAgLmFzay5pbnB1dCgnZGVzY3JpcHRpb24nLCAnRGVzY3JpcHRpb24nLCAnQSBub2RlIGFwcGxpY2F0aW9uJylcbiAgICAgICAgICAgIC5hc2suaW5wdXQoJ2xpY2Vuc2UnLCAnTGljZW5zZScsICdNSVQnKVxuXG4gICAgICAgICAgICAuYXNrLmxpc3QoJ3RyYW5zcGlsZXInLCAnVXNlIHRyYW5zcGlsZXI/JywgWyAndHlwZXNjcmlwdCcsICdiYWJlbCcsICdub25lJyBdLCAndHlwZXNjcmlwdCcpXG4gICAgICAgICAgICAuYXNrLmNvbmZpcm0oJ25vZGVfdHlwaW5ncycsICdBZGQgQHR5cGVzL25vZGU/JywgdHJ1ZSkud2hlbigndHJhbnNwaWxlcicsICd0eXBlc2NyaXB0JylcbiAgICAgICAgICAgIC5hc2suY29uZmlybSgndGVzdHMnLCAnSW5jbHVkZSB0ZXN0aW5nPycsIHRydWUpXG4gICAgICAgICAgICAuYXNrLmxpc3QoJ3Rlc3RfZnJhbWV3b3JrJywgJ1Rlc3RpbmcgZnJhbWV3b3JrJywgWyAnamVzdCcsICdtb2NoYScsICdza2lwJyBdLCAnbW9jaGEnKS53aGVuKCd0ZXN0cycsIHRydWUpXG4gICAgICAgICAgICAuYXNrXG4gICAgICAgICAgICAucHJvbXB0KCk7XG5cbiAgICAgICAgdGhpcy5jb25maWcuc2V0KCdub2RlJywgYW5zd2Vycyk7XG5cbiAgICB9XG5cbiAgICBhc3luYyB3cml0aW5nKCkge1xuICAgICAgICBsZXQgeyB0cmFuc3BpbGVyLCB0ZXN0cywgdGVzdF9mcmFtZXdvcmssIG5hbWUsIGRlc2NyaXB0aW9uLCBsaWNlbnNlIH0gPSB0aGlzLmNvbmZpZy5nZXQoJ25vZGUnKTtcblxuICAgICAgICB0aGlzLnBrZyAgICAgICAgICA9IHtcbiAgICAgICAgICAgIG5hbWUsIGRlc2NyaXB0aW9uLCBsaWNlbnNlLFxuICAgICAgICAgICAgbWFpbiAgICAgICAgICAgOiAnbGliL2luZGV4LmpzJyxcbiAgICAgICAgICAgIGRldkRlcGVuZGVuY2llczoge30sXG4gICAgICAgICAgICBkZXBlbmRlbmNpZXMgICA6IHt9XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGV4dCAgICAgICAgICAgPSB0cmFuc3BpbGVyID09PSAndHlwZXNjcmlwdCcgPyAndHMnIDogJ2pzJztcbiAgICAgICAgbGV0IHVzZVRyYW5zcGlsZXIgPSB0cmFuc3BpbGVyICE9PSAnbm9uZSdcblxuICAgICAgICBpZiAoIHRyYW5zcGlsZXIgPT09ICd0eXBlc2NyaXB0JyApIHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuX3R5cGVzY3JpcHQoKTtcbiAgICAgICAgfSBlbHNlIGlmICggdHJhbnNwaWxlciA9PT0gJ2JhYmVsJyApIHtcblxuICAgICAgICB9XG4gICAgICAgIHRoaXMuZnMuZXh0ZW5kSlNPTih0aGlzLmRlc3RpbmF0aW9uUGF0aCgncGFja2FnZS5qc29uJyksIHRoaXMucGtnKTtcblxuICAgICAgICB0aGlzLmZzLmNvcHkodGhpcy50ZW1wbGF0ZVBhdGgoJy5ucG1pZ25vcmUnKSwgdGhpcy5kZXN0aW5hdGlvblBhdGgoJy5ucG1pZ25vcmUnKSlcbiAgICAgICAgdGhpcy5mcy5jb3B5KHRoaXMudGVtcGxhdGVQYXRoKCdsaWIvaW5kZXguanMnKSwgdGhpcy5kZXN0aW5hdGlvblBhdGgoJ2xpYi9pbmRleC5qcycpKVxuXG4gICAgICAgIGxldCBmaWxlTmFtZSA9IHVzZVRyYW5zcGlsZXIgPyAnaW5kZXguZXMuanMnIDogJ2luZGV4LmpzJ1xuICAgICAgICB0aGlzLmZzLmNvcHkodGhpcy50ZW1wbGF0ZVBhdGgoYHNyYy8ke2ZpbGVOYW1lfWApLCB0aGlzLmRlc3RpbmF0aW9uUGF0aChgdGVzdC9pbmRleC4ke2V4dH1gKSlcbiAgICAgICAgaWYgKCB0ZXN0cyApIHtcbiAgICAgICAgICAgIHRoaXMuZnMuY29weSh0aGlzLnRlbXBsYXRlUGF0aChgdGVzdC8ke2ZpbGVOYW1lfWApLCB0aGlzLmRlc3RpbmF0aW9uUGF0aChgdGVzdC9pbmRleC4ke2V4dH1gKSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIF90eXBlc2NyaXB0KCkge1xuICAgICAgICBsZXQgeyB0ZXN0cywgdGVzdF9mcmFtZXdvcmssIG5vZGVfdHlwaW5ncyB9ID0gdGhpcy5jb25maWcuZ2V0KCdub2RlJyk7XG5cbiAgICAgICAgYXdhaXQgdGhpcy5fYWRkRGV2RGVwZW5kZW5jeSgndHlwZXNjcmlwdCcpXG4gICAgICAgIGF3YWl0IHRoaXMuX2FkZERldkRlcGVuZGVuY3koJ3RzLW5vZGUnKVxuXG4gICAgICAgIHRoaXMuZnMuZXh0ZW5kSlNPTih0aGlzLmRlc3RpbmF0aW9uUGF0aCgndHNjb25maWcuanNvbicpLCB7XG4gICAgICAgICAgICBjb21waWxlck9wdGlvbnM6IDx0cy5Db21waWxlck9wdGlvbnMgfCBhbnk+IHtcbiAgICAgICAgICAgICAgICB0YXJnZXQgICAgICAgICAgICAgICAgOiAnZXM1JyxcbiAgICAgICAgICAgICAgICBtb2R1bGUgICAgICAgICAgICAgICAgOiAnY29tbW9uanMnLFxuICAgICAgICAgICAgICAgIG1vZHVsZVJlc29sdXRpb24gICAgICA6ICdub2RlJyxcbiAgICAgICAgICAgICAgICBsaWIgICAgICAgICAgICAgICAgICAgOiBbICdlczIwMTUnLCAnZXMyMDE2JywgJ2VzMjAxNycgXSxcbiAgICAgICAgICAgICAgICBlbWl0RGVjb3JhdG9yTWV0YWRhdGEgOiB0cnVlLFxuICAgICAgICAgICAgICAgIGV4cGVyaW1lbnRhbERlY29yYXRvcnM6IHRydWUsXG4gICAgICAgICAgICAgICAgaW5saW5lU291cmNlTWFwICAgICAgIDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0eXBlUm9vdHMgICAgICAgICAgICAgOiBbXG4gICAgICAgICAgICAgICAgICAgICdub2RlX21vZHVsZXMvQHR5cGVzJyxcbiAgICAgICAgICAgICAgICAgICAgJ3R5cGVzJ1xuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpbmNsdWRlICAgICAgICA6IFtcbiAgICAgICAgICAgICAgICAnc3JjLyoqLyonLFxuICAgICAgICAgICAgICAgICd0ZXN0LyoqLyonLFxuICAgICAgICAgICAgICAgICd0eXBlcydcbiAgICAgICAgICAgIF1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKCB0ZXN0cyApIHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuX2FkZERldkRlcGVuZGVuY3koJ255YycpXG4gICAgICAgICAgICBpZiAoIHRlc3RfZnJhbWV3b3JrID09PSAnbW9jaGEnICkge1xuICAgICAgICAgICAgICAgIHRoaXMuZnMuY29weSh0aGlzLnRlbXBsYXRlUGF0aCgndHlwZXMvbW9jaGEuZHRzJyksIHRoaXMuZGVzdGluYXRpb25QYXRoKCd0eXBlcy9tb2NoYS5kLnRzJykpXG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5fYWRkRGV2RGVwZW5kZW5jeSgnbW9jaGEnLCB0cnVlKVxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuX2FkZERldkRlcGVuZGVuY3koJ21vY2hhLXR5cGVzY3JpcHQnKVxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuX2FkZERldkRlcGVuZGVuY3koJ3Npbm9uJywgdHJ1ZSlcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLl9hZGREZXZEZXBlbmRlbmN5KCdjaGFpJywgdHJ1ZSlcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLl9hZGREZXZEZXBlbmRlbmN5KCdzaW5vbi1jaGFpJywgdHJ1ZSlcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIHRlc3RfZnJhbWV3b3JrID09PSAnamVzdCcgKSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5fYWRkRGV2RGVwZW5kZW5jeSgnamVzdCcsIHRydWUpXG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5fYWRkRGV2RGVwZW5kZW5jeSgndHMtamVzdCcsIHRydWUpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIG5vZGVfdHlwaW5ncyApIHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuX2FkZERldkRlcGVuZGVuY3koJ0B0eXBlcy9ub2RlJyk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGluc3RhbGwoKSB7XG4gICAgICAgIHRoaXMueWFybkluc3RhbGwoKTtcbiAgICB9XG5cbiAgICBhc3luYyBfYWRkRGV2RGVwZW5kZW5jeShwYWNrYWdlTmFtZTogc3RyaW5nLCB3aXRoVHlwZTogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgICAgIHRoaXMucGtnLmRldkRlcGVuZGVuY2llc1sgcGFja2FnZU5hbWUgXSA9ICdeJyArIGF3YWl0IGdldExhdGVzdFZlcnNpb24ocGFja2FnZU5hbWUpXG4gICAgICAgIGlmICggd2l0aFR5cGUgKSB7XG4gICAgICAgICAgICB0aGlzLnBrZy5kZXZEZXBlbmRlbmNpZXNbICdAdHlwZXMvJyArIHBhY2thZ2VOYW1lIF0gPSAnXicgKyBhd2FpdCBnZXRMYXRlc3RWZXJzaW9uKCdAdHlwZXMvJyArIHBhY2thZ2VOYW1lKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgX2FkZERlcGVuZGVuY3kocGFja2FnZU5hbWU6IHN0cmluZywgd2l0aFR5cGU6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgICAgICB0aGlzLnBrZy5kZXBlbmRlbmNpZXNbIHBhY2thZ2VOYW1lIF0gPSAnXicgKyBhd2FpdCBnZXRMYXRlc3RWZXJzaW9uKHBhY2thZ2VOYW1lKVxuICAgICAgICBpZiAoIHdpdGhUeXBlICkge1xuICAgICAgICAgICAgdGhpcy5wa2cuZGV2RGVwZW5kZW5jaWVzWyAnQHR5cGVzLycgKyBwYWNrYWdlTmFtZSBdID0gJ14nICsgYXdhaXQgZ2V0TGF0ZXN0VmVyc2lvbignQHR5cGVzLycgKyBwYWNrYWdlTmFtZSlcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0ID0gTm9kZUdlbmVyYXRvclxuIl19