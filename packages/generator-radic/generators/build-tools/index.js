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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZ2VuZXJhdG9ycy9idWlsZC10b29scy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxtQ0FBc0M7QUFDdEMsMkNBQW1EO0FBQ25ELG1DQUErQjtBQUUvQixNQUFNLG1CQUFvQixTQUFRLGVBQVM7SUFBM0M7O1FBR0ksVUFBSyxHQUlEO1lBQ0EsSUFBSSxFQUFNLEtBQUs7WUFDZixPQUFPLEVBQUcsS0FBSztZQUNmLFFBQVEsRUFBRSxLQUFLO1NBQ2xCLENBQUE7SUFrRkwsQ0FBQztJQS9FUyxTQUFTOztZQUNYLENBQUMsTUFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLG9CQUFvQixFQUFFLENBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxVQUFVLENBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBRSxNQUFNLENBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQztZQUM5SCxJQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFHO2FBRXRCO1lBQ0QsSUFBSyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRztnQkFDdEI7OzttQkFHRzthQUNOO1lBQ0QsSUFBSyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRztnQkFDdkIsSUFBSSxZQUFZLEdBQUcsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQTthQUN4RztRQUNMLENBQUM7S0FBQTtJQUVLLE9BQU87O1lBQ1QsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxFQUFFO2dCQUM5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UyxHQUFHLFdBQVcsQ0FBRSxHQUFHLEdBQUcsSUFBRyxNQUFNLHdCQUFnQixDQUFDLFNBQVMsR0FBRyxXQUFXLENBQUMsQ0FBQSxDQUFBO2FBQzlHO1FBQ0wsQ0FBQztLQUFBO0lBRUssY0FBYyxDQUFDLFdBQW1CLEVBQUUsV0FBb0IsS0FBSzs7WUFDL0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUUsV0FBVyxDQUFFLEdBQUcsR0FBRyxJQUFHLE1BQU0sd0JBQWdCLENBQUMsV0FBVyxDQUFDLENBQUEsQ0FBQTtZQUNoRixJQUFLLFFBQVEsRUFBRztnQkFDWixJQUFJLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBRSxTQUFTLEdBQUcsV0FBVyxDQUFFLEdBQUcsR0FBRyxJQUFHLE1BQU0sd0JBQWdCLENBQUMsU0FBUyxHQUFHLFdBQVcsQ0FBQyxDQUFBLENBQUE7YUFDOUc7UUFDTCxDQUFDO0tBQUE7SUFFRCxXQUFXLENBQUMsT0FBK0I7UUFDdkMsY0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFBO0lBQ3BDLENBQUM7Q0FFSjtBQUVELGlCQUFTLG1CQUFtQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2VuZXJhdG9yIH0gZnJvbSAnLi4vLi4vbGliJztcbmltcG9ydCB7IGdldExhdGVzdFZlcnNpb24gfSBmcm9tICcuLi8uLi9saWIvdXRpbHMnO1xuaW1wb3J0IHsgbWVyZ2UgfSBmcm9tICdsb2Rhc2gnO1xuXG5jbGFzcyBCdWlsZFRvb2xzR2VuZXJhdG9yIGV4dGVuZHMgR2VuZXJhdG9yIHtcbiAgICBwa2c6IFBhcnRpYWw8SVBhY2thZ2VKU09OPlxuXG4gICAgdG9vbHM6IHtcbiAgICAgICAgZ3VscDogYm9vbGVhblxuICAgICAgICB3ZWJwYWNrOiBib29sZWFuXG4gICAgICAgIG1vbm9yZXBvOiBib29sZWFuXG4gICAgfSA9IHtcbiAgICAgICAgZ3VscCAgICA6IGZhbHNlLFxuICAgICAgICB3ZWJwYWNrIDogZmFsc2UsXG4gICAgICAgIG1vbm9yZXBvOiBmYWxzZVxuICAgIH1cblxuXG4gICAgYXN5bmMgcHJvbXB0aW5nKCkge1xuICAgICAgICAoYXdhaXQgdGhpcy5jaGVja2JveCgnU2VsZWN0IGJ1aWxkIHRvb2xzJywgWyAnZ3VscCcsICd3ZWJwYWNrJywgJ21vbm9yZXBvJyBdKSkuZm9yRWFjaChvcHRpb24gPT4gdGhpcy50b29sc1sgb3B0aW9uIF0gPSB0cnVlKTtcbiAgICAgICAgaWYgKCB0aGlzLnRvb2xzLmd1bHAgKSB7XG5cbiAgICAgICAgfVxuICAgICAgICBpZiAoIHRoaXMudG9vbHMud2VicGFjayApIHtcbiAgICAgICAgICAgIC8qXG4gICAgICAgICAgICByZWFjdD9cbiAgICAgICAgICAgIGFudGQ/XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgfVxuICAgICAgICBpZiAoIHRoaXMudG9vbHMubW9ub3JlcG8gKSB7XG4gICAgICAgICAgICBsZXQgbW9ub3JlcG9UeXBlID0gYXdhaXQgdGhpcy5saXN0KCdNb25vcmVwbyB0eXBlJywgWyAnbGVybmEnLCAneWFybicsICdib3RoJyBdLCB7IGRlZmF1bHQ6ICdib3RoJyB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgd3JpdGluZygpIHtcbiAgICAgICAgdGhpcy5wa2cgPSB0aGlzLmZzLnJlYWRKU09OKHRoaXMuZGVzdGluYXRpb25QYXRoKCdwYWNrYWdlLmpzb24nKSwge1xuICAgICAgICAgICAgZGV2RGVwZW5kZW5jaWVzOiB7fSxcbiAgICAgICAgICAgIGRlcGVuZGVuY2llcyAgIDoge30sXG4gICAgICAgICAgICBzY3JpcHRzICAgICAgICA6IHt9XG4gICAgICAgIH0pXG4gICAgICAgIGF3YWl0IHRoaXMuX2FkZERldkRlcGVuZGVuY3koJ0ByYWRpYy9idWlsZC10b29scycpO1xuICAgICAgICBpZiAoIHRoaXMudG9vbHMuZ3VscCApIHtcbiAgICAgICAgICAgIHRoaXMuZnMuY29weSh0aGlzLnRlbXBsYXRlUGF0aCgnLmVudicpLCB0aGlzLmRlc3RpbmF0aW9uUGF0aCgnLmVudicpKTtcbiAgICAgICAgICAgIHRoaXMuZnMuY29weSh0aGlzLnRlbXBsYXRlUGF0aCgnLmVudicpLCB0aGlzLmRlc3RpbmF0aW9uUGF0aCgnLmVudi5leGFtcGxlJykpO1xuICAgICAgICAgICAgdGhpcy5fYWRkU2NyaXB0cyh7XG4gICAgICAgICAgICAgICAgJ2d1bHAnICAgICAgOiAnZ3VscCcsXG4gICAgICAgICAgICAgICAgJ2RldjpidWlsZCcgOiAnZ3VscCBkZXY6YnVpbGQnLFxuICAgICAgICAgICAgICAgICdwcm9kOmJ1aWxkJzogJ2d1bHAgcHJvZDpidWlsZCdcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBhd2FpdCB0aGlzLl9hZGREZXZEZXBlbmRlbmN5KCdAcmFkaWMvYnVpbGQtdG9vbHMtZ3VscCcpO1xuICAgICAgICAgICAgaWYgKCB0aGlzLnRvb2xzLndlYnBhY2sgKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fYWRkU2NyaXB0cyh7XG4gICAgICAgICAgICAgICAgICAgICdkZXY6c2VydmUnIDogJ2d1bHAgZGV2OnNlcnZlJyxcbiAgICAgICAgICAgICAgICAgICAgJ3Byb2Q6c2VydmUnOiAnZ3VscCBwcm9kOnNlcnZlJ1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgdGhpcy5mcy5jb3B5KHRoaXMudGVtcGxhdGVQYXRoKCd3ZWJwYWNrLmd1bHBmaWxlLnRzdCcpLCB0aGlzLmRlc3RpbmF0aW9uUGF0aCgnZ3VscGZpbGUudHMnKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZnMuY29weSh0aGlzLnRlbXBsYXRlUGF0aCgnZ3VscGZpbGUudHN0JyksIHRoaXMuZGVzdGluYXRpb25QYXRoKCdndWxwZmlsZS50cycpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggdGhpcy50b29scy53ZWJwYWNrICkge1xuICAgICAgICAgICAgdGhpcy5fYWRkU2NyaXB0cyh7ICd3ZWJwYWNrJzogJ3dlYnBhY2snIH0pXG4gICAgICAgICAgICBhd2FpdCB0aGlzLl9hZGREZXZEZXBlbmRlbmN5KCdAcmFkaWMvYnVpbGQtdG9vbHMtd2VicGFjaycpO1xuXG4gICAgICAgICAgICB0aGlzLmZzLmNvcHkodGhpcy50ZW1wbGF0ZVBhdGgoJ3dlYnBhY2suY29uZmlnLnRzdCcpLCB0aGlzLmRlc3RpbmF0aW9uUGF0aCgnd2VicGFjay5jb25maWcudHMnKSk7XG5cbiAgICAgICAgfVxuICAgICAgICBpZiAoIHRoaXMudG9vbHMubW9ub3JlcG8gKSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLl9hZGREZXZEZXBlbmRlbmN5KCdAcmFkaWMvYnVpbGQtdG9vbHMtbW9ub3JlcG8nKTtcbiAgICAgICAgICAgIGxldCBtb25vcmVwb1R5cGUgPSBhd2FpdCB0aGlzLmxpc3QoJ01vbm9yZXBvIHR5cGUnLCBbICdsZXJuYScsICd5YXJuJywgJ2JvdGgnIF0sIHsgZGVmYXVsdDogJ2JvdGgnIH0pXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5mcy5leHRlbmRKU09OKHRoaXMuZGVzdGluYXRpb25QYXRoKCdwYWNrYWdlLmpzb24nKSwgdGhpcy5wa2cpO1xuICAgIH1cblxuICAgIGluc3RhbGwoKSB7XG4gICAgICAgIHRoaXMueWFybkluc3RhbGwoKTtcbiAgICB9XG5cbiAgICBhc3luYyBfYWRkRGV2RGVwZW5kZW5jeShwYWNrYWdlTmFtZTogc3RyaW5nLCB3aXRoVHlwZTogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgICAgIHRoaXMucGtnLmRldkRlcGVuZGVuY2llc1sgcGFja2FnZU5hbWUgXSA9ICdeJyArIGF3YWl0IGdldExhdGVzdFZlcnNpb24ocGFja2FnZU5hbWUpXG4gICAgICAgIGlmICggd2l0aFR5cGUgKSB7XG4gICAgICAgICAgICB0aGlzLnBrZy5kZXZEZXBlbmRlbmNpZXNbICdAdHlwZXMvJyArIHBhY2thZ2VOYW1lIF0gPSAnXicgKyBhd2FpdCBnZXRMYXRlc3RWZXJzaW9uKCdAdHlwZXMvJyArIHBhY2thZ2VOYW1lKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgX2FkZERlcGVuZGVuY3kocGFja2FnZU5hbWU6IHN0cmluZywgd2l0aFR5cGU6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgICAgICB0aGlzLnBrZy5kZXBlbmRlbmNpZXNbIHBhY2thZ2VOYW1lIF0gPSAnXicgKyBhd2FpdCBnZXRMYXRlc3RWZXJzaW9uKHBhY2thZ2VOYW1lKVxuICAgICAgICBpZiAoIHdpdGhUeXBlICkge1xuICAgICAgICAgICAgdGhpcy5wa2cuZGV2RGVwZW5kZW5jaWVzWyAnQHR5cGVzLycgKyBwYWNrYWdlTmFtZSBdID0gJ14nICsgYXdhaXQgZ2V0TGF0ZXN0VmVyc2lvbignQHR5cGVzLycgKyBwYWNrYWdlTmFtZSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9hZGRTY3JpcHRzKHNjcmlwdHM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4pIHtcbiAgICAgICAgbWVyZ2UodGhpcy5wa2cuc2NyaXB0cywgc2NyaXB0cylcbiAgICB9XG5cbn1cblxuZXhwb3J0ID0gQnVpbGRUb29sc0dlbmVyYXRvclxuIl19