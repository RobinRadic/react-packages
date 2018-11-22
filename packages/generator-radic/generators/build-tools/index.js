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
const lodash_1 = require("lodash");
class BuildToolsGenerator extends lib_1.Generator {
    constructor() {
        super(...arguments);
        this.tools = {
            gulp: false,
            webpack: false,
            monorepo: false
        };
    }
    prompting() {
        return __awaiter(this, void 0, void 0, function* () {
            (yield this.checkbox('Select build tools', ['gulp', 'webpack', 'monorepo'])).forEach(option => this.tools[option] = true);
            if (this.tools.gulp) {
            }
            if (this.tools.webpack) {
                /*
                react?
                antd?
                 */
            }
            if (this.tools.monorepo) {
                let monorepoType = yield this.list('Monorepo type', ['lerna', 'yarn', 'both'], { default: 'both' });
            }
            this.config.set('build_tools', this.tools);
        });
    }
    writing() {
        return __awaiter(this, void 0, void 0, function* () {
            this.pkg = this.fs.readJSON(this.destinationPath('package.json'), {
                devDependencies: {},
                dependencies: {},
                scripts: {}
            });
            yield this._addDevDependency('@radic/build-tools');
            if (this.tools.gulp) {
                this.fs.copy(this.templatePath('.env'), this.destinationPath('.env'));
                this.fs.copy(this.templatePath('.env'), this.destinationPath('.env.example'));
                this._addScripts({
                    'gulp': 'gulp',
                    'dev:build': 'gulp dev:build',
                    'prod:build': 'gulp prod:build'
                });
                yield this._addDevDependency('@radic/build-tools-gulp');
                if (this.tools.webpack) {
                    this._addScripts({
                        'dev:serve': 'gulp dev:serve',
                        'prod:serve': 'gulp prod:serve'
                    });
                    this.fs.copy(this.templatePath('webpack.gulpfile.tst'), this.destinationPath('gulpfile.ts'));
                }
                else {
                    this.fs.copy(this.templatePath('gulpfile.tst'), this.destinationPath('gulpfile.ts'));
                }
            }
            if (this.tools.webpack) {
                this._addScripts({ 'webpack': 'webpack' });
                yield this._addDevDependency('@radic/build-tools-webpack');
                this.fs.copy(this.templatePath('webpack.config.tst'), this.destinationPath('webpack.config.ts'));
            }
            if (this.tools.monorepo) {
                yield this._addDevDependency('@radic/build-tools-monorepo');
                let monorepoType = yield this.list('Monorepo type', ['lerna', 'yarn', 'both'], { default: 'both' });
            }
            this.fs.extendJSON(this.destinationPath('package.json'), this.pkg);
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
    _addScripts(scripts) {
        lodash_1.merge(this.pkg.scripts, scripts);
    }
}
module.exports = BuildToolsGenerator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZ2VuZXJhdG9ycy9idWlsZC10b29scy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxtQ0FBc0M7QUFDdEMsMkNBQW1EO0FBQ25ELG1DQUErQjtBQUUvQixNQUFNLG1CQUFvQixTQUFRLGVBQVM7SUFBM0M7O1FBR0ksVUFBSyxHQUlEO1lBQ0EsSUFBSSxFQUFNLEtBQUs7WUFDZixPQUFPLEVBQUcsS0FBSztZQUNmLFFBQVEsRUFBRSxLQUFLO1NBQ2xCLENBQUE7SUFvRkwsQ0FBQztJQWpGUyxTQUFTOztZQUNYLENBQUMsTUFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLG9CQUFvQixFQUFFLENBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxVQUFVLENBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBRSxNQUFNLENBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQztZQUM5SCxJQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFHO2FBRXRCO1lBQ0QsSUFBSyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRztnQkFDdEI7OzttQkFHRzthQUNOO1lBQ0QsSUFBSyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRztnQkFDdkIsSUFBSSxZQUFZLEdBQUcsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQTthQUN4RztZQUVELElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDL0MsQ0FBQztLQUFBO0lBRUssT0FBTzs7WUFDVCxJQUFJLENBQUMsR0FBRyxHQUFH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LENBQUEsQ0FBQTtZQUNuRixJQUFLLFFBQVEsRUFBRztnQkFDWixJQUFJLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBRSxTQUFTLEdBQUcsV0FBVyxDQUFFLEdBQUcsR0FBRyxJQUFHLE1BQU0sd0JBQWdCLENBQUMsU0FBUyxHQUFHLFdBQVcsQ0FBQyxDQUFBLENBQUE7YUFDOUc7UUFDTCxDQUFDO0tBQUE7SUFFSyxjQUFjLENBQUMsV0FBbUIsRUFBRSxXQUFvQixLQUFLOztZQUMvRCxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBRSxXQUFXLENBQUUsR0FBRyxHQUFHLElBQUcsTUFBTSx3QkFBZ0IsQ0FBQyxXQUFXLENBQUMsQ0FBQSxDQUFBO1lBQ2hGLElBQUssUUFBUSxFQUFHO2dCQUNaLElBQUksQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFFLFNBQVMsR0FBRyxXQUFXLENBQUUsR0FBRyxHQUFHLElBQUcsTUFBTSx3QkFBZ0IsQ0FBQyxTQUFTLEdBQUcsV0FBVyxDQUFDLENBQUEsQ0FBQTthQUM5RztRQUNMLENBQUM7S0FBQTtJQUVELFdBQVcsQ0FBQyxPQUErQjtRQUN2QyxjQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUE7SUFDcEMsQ0FBQztDQUVKO0FBRUQsaUJBQVMsbUJBQW1CLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHZW5lcmF0b3IgfSBmcm9tICcuLi8uLi9saWInO1xuaW1wb3J0IHsgZ2V0TGF0ZXN0VmVyc2lvbiB9IGZyb20gJy4uLy4uL2xpYi91dGlscyc7XG5pbXBvcnQgeyBtZXJnZSB9IGZyb20gJ2xvZGFzaCc7XG5cbmNsYXNzIEJ1aWxkVG9vbHNHZW5lcmF0b3IgZXh0ZW5kcyBHZW5lcmF0b3Ige1xuICAgIHBrZzogUGFydGlhbDxJUGFja2FnZUpTT04+XG5cbiAgICB0b29sczoge1xuICAgICAgICBndWxwOiBib29sZWFuXG4gICAgICAgIHdlYnBhY2s6IGJvb2xlYW5cbiAgICAgICAgbW9ub3JlcG86IGJvb2xlYW5cbiAgICB9ID0ge1xuICAgICAgICBndWxwICAgIDogZmFsc2UsXG4gICAgICAgIHdlYnBhY2sgOiBmYWxzZSxcbiAgICAgICAgbW9ub3JlcG86IGZhbHNlXG4gICAgfVxuXG5cbiAgICBhc3luYyBwcm9tcHRpbmcoKSB7XG4gICAgICAgIChhd2FpdCB0aGlzLmNoZWNrYm94KCdTZWxlY3QgYnVpbGQgdG9vbHMnLCBbICdndWxwJywgJ3dlYnBhY2snLCAnbW9ub3JlcG8nIF0pKS5mb3JFYWNoKG9wdGlvbiA9PiB0aGlzLnRvb2xzWyBvcHRpb24gXSA9IHRydWUpO1xuICAgICAgICBpZiAoIHRoaXMudG9vbHMuZ3VscCApIHtcblxuICAgICAgICB9XG4gICAgICAgIGlmICggdGhpcy50b29scy53ZWJwYWNrICkge1xuICAgICAgICAgICAgLypcbiAgICAgICAgICAgIHJlYWN0P1xuICAgICAgICAgICAgYW50ZD9cbiAgICAgICAgICAgICAqL1xuICAgICAgICB9XG4gICAgICAgIGlmICggdGhpcy50b29scy5tb25vcmVwbyApIHtcbiAgICAgICAgICAgIGxldCBtb25vcmVwb1R5cGUgPSBhd2FpdCB0aGlzLmxpc3QoJ01vbm9yZXBvIHR5cGUnLCBbICdsZXJuYScsICd5YXJuJywgJ2JvdGgnIF0sIHsgZGVmYXVsdDogJ2JvdGgnIH0pXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNvbmZpZy5zZXQoJ2J1aWxkX3Rvb2xzJywgdGhpcy50b29scyk7XG4gICAgfVxuXG4gICAgYXN5bmMgd3JpdGluZygpIHtcbiAgICAgICAgdGhpcy5wa2cgPSB0aGlzLmZzLnJlYWRKU09OKHRoaXMuZGVzdGluYXRpb25QYXRoKCdwYWNrYWdlLmpzb24nKSwge1xuICAgICAgICAgICAgZGV2RGVwZW5kZW5jaWVzOiB7fSxcbiAgICAgICAgICAgIGRlcGVuZGVuY2llcyAgIDoge30sXG4gICAgICAgICAgICBzY3JpcHRzICAgICAgICA6IHt9XG4gICAgICAgIH0pXG4gICAgICAgIGF3YWl0IHRoaXMuX2FkZERldkRlcGVuZGVuY3koJ0ByYWRpYy9idWlsZC10b29scycpO1xuICAgICAgICBpZiAoIHRoaXMudG9vbHMuZ3VscCApIHtcbiAgICAgICAgICAgIHRoaXMuZnMuY29weSh0aGlzLnRlbXBsYXRlUGF0aCgnLmVudicpLCB0aGlzLmRlc3RpbmF0aW9uUGF0aCgnLmVudicpKTtcbiAgICAgICAgICAgIHRoaXMuZnMuY29weSh0aGlzLnRlbXBsYXRlUGF0aCgnLmVudicpLCB0aGlzLmRlc3RpbmF0aW9uUGF0aCgnLmVudi5leGFtcGxlJykpO1xuICAgICAgICAgICAgdGhpcy5fYWRkU2NyaXB0cyh7XG4gICAgICAgICAgICAgICAgJ2d1bHAnICAgICAgOiAnZ3VscCcsXG4gICAgICAgICAgICAgICAgJ2RldjpidWlsZCcgOiAnZ3VscCBkZXY6YnVpbGQnLFxuICAgICAgICAgICAgICAgICdwcm9kOmJ1aWxkJzogJ2d1bHAgcHJvZDpidWlsZCdcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBhd2FpdCB0aGlzLl9hZGREZXZEZXBlbmRlbmN5KCdAcmFkaWMvYnVpbGQtdG9vbHMtZ3VscCcpO1xuICAgICAgICAgICAgaWYgKCB0aGlzLnRvb2xzLndlYnBhY2sgKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fYWRkU2NyaXB0cyh7XG4gICAgICAgICAgICAgICAgICAgICdkZXY6c2VydmUnIDogJ2d1bHAgZGV2OnNlcnZlJyxcbiAgICAgICAgICAgICAgICAgICAgJ3Byb2Q6c2VydmUnOiAnZ3VscCBwcm9kOnNlcnZlJ1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgdGhpcy5mcy5jb3B5KHRoaXMudGVtcGxhdGVQYXRoKCd3ZWJwYWNrLmd1bHBmaWxlLnRzdCcpLCB0aGlzLmRlc3RpbmF0aW9uUGF0aCgnZ3VscGZpbGUudHMnKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZnMuY29weSh0aGlzLnRlbXBsYXRlUGF0aCgnZ3VscGZpbGUudHN0JyksIHRoaXMuZGVzdGluYXRpb25QYXRoKCdndWxwZmlsZS50cycpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggdGhpcy50b29scy53ZWJwYWNrICkge1xuICAgICAgICAgICAgdGhpcy5fYWRkU2NyaXB0cyh7ICd3ZWJwYWNrJzogJ3dlYnBhY2snIH0pXG4gICAgICAgICAgICBhd2FpdCB0aGlzLl9hZGREZXZEZXBlbmRlbmN5KCdAcmFkaWMvYnVpbGQtdG9vbHMtd2VicGFjaycpO1xuXG4gICAgICAgICAgICB0aGlzLmZzLmNvcHkodGhpcy50ZW1wbGF0ZVBhdGgoJ3dlYnBhY2suY29uZmlnLnRzdCcpLCB0aGlzLmRlc3RpbmF0aW9uUGF0aCgnd2VicGFjay5jb25maWcudHMnKSk7XG5cbiAgICAgICAgfVxuICAgICAgICBpZiAoIHRoaXMudG9vbHMubW9ub3JlcG8gKSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLl9hZGREZXZEZXBlbmRlbmN5KCdAcmFkaWMvYnVpbGQtdG9vbHMtbW9ub3JlcG8nKTtcbiAgICAgICAgICAgIGxldCBtb25vcmVwb1R5cGUgPSBhd2FpdCB0aGlzLmxpc3QoJ01vbm9yZXBvIHR5cGUnLCBbICdsZXJuYScsICd5YXJuJywgJ2JvdGgnIF0sIHsgZGVmYXVsdDogJ2JvdGgnIH0pXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5mcy5leHRlbmRKU09OKHRoaXMuZGVzdGluYXRpb25QYXRoKCdwYWNrYWdlLmpzb24nKSwgdGhpcy5wa2cpO1xuICAgIH1cblxuICAgIGluc3RhbGwoKSB7XG4gICAgICAgIHRoaXMueWFybkluc3RhbGwoKTtcbiAgICB9XG5cbiAgICBhc3luYyBfYWRkRGV2RGVwZW5kZW5jeShwYWNrYWdlTmFtZTogc3RyaW5nLCB3aXRoVHlwZTogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgICAgIHRoaXMucGtnLmRldkRlcGVuZGVuY2llc1sgcGFja2FnZU5hbWUgXSA9ICdeJyArIGF3YWl0IGdldExhdGVzdFZlcnNpb24ocGFja2FnZU5hbWUpXG4gICAgICAgIGlmICggd2l0aFR5cGUgKSB7XG4gICAgICAgICAgICB0aGlzLnBrZy5kZXZEZXBlbmRlbmNpZXNbICdAdHlwZXMvJyArIHBhY2thZ2VOYW1lIF0gPSAnXicgKyBhd2FpdCBnZXRMYXRlc3RWZXJzaW9uKCdAdHlwZXMvJyArIHBhY2thZ2VOYW1lKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgX2FkZERlcGVuZGVuY3kocGFja2FnZU5hbWU6IHN0cmluZywgd2l0aFR5cGU6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgICAgICB0aGlzLnBrZy5kZXBlbmRlbmNpZXNbIHBhY2thZ2VOYW1lIF0gPSAnXicgKyBhd2FpdCBnZXRMYXRlc3RWZXJzaW9uKHBhY2thZ2VOYW1lKVxuICAgICAgICBpZiAoIHdpdGhUeXBlICkge1xuICAgICAgICAgICAgdGhpcy5wa2cuZGV2RGVwZW5kZW5jaWVzWyAnQHR5cGVzLycgKyBwYWNrYWdlTmFtZSBdID0gJ14nICsgYXdhaXQgZ2V0TGF0ZXN0VmVyc2lvbignQHR5cGVzLycgKyBwYWNrYWdlTmFtZSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9hZGRTY3JpcHRzKHNjcmlwdHM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4pIHtcbiAgICAgICAgbWVyZ2UodGhpcy5wa2cuc2NyaXB0cywgc2NyaXB0cylcbiAgICB9XG5cbn1cblxuZXhwb3J0ID0gQnVpbGRUb29sc0dlbmVyYXRvclxuIl19