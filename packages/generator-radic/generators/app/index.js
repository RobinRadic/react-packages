"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const Generator_1 = require("../../lib/Generator");
class AppGenerator extends Generator_1.default {
    prompting() {
        return __awaiter(this, void 0, void 0, function* () {
            this.answers = (yield this
                .ask.checkbox('generators', 'Select generators to run', ['node', 'git', 'build-tools'])
                .ask.prompt());
        });
    }
    writing() {
        this.log('method 1 just ran', this.determineAppname());
        this.answers.generators.forEach(name => {
            this.composeWith('radic:' + name, {});
        });
    }
}
module.exports = AppGenerator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZ2VuZXJhdG9ycy9hcHAvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsbURBQTRDO0FBRzVDLE1BQU0sWUFBYSxTQUFRLG1CQUFTO0lBTTFCLFNBQVM7O1lBQ1gsSUFBSSxDQUFDLE9BQU8sSUFBRyxNQUFNLElBQUk7aUJBQ3BCLEdBQUcsQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLDBCQUEwQixFQUFFLENBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxhQUFhLENBQUUsQ0FBQztpQkFDeEYsR0FBRyxDQUFDLE1BQU0sRUFBUyxDQUFBLENBQUM7UUFDN0IsQ0FBQztLQUFBO0lBRUQsT0FBTztRQUNILElBQUksQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDbkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEdBQUcsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzFDLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztDQUVKO0FBRUQsaUJBQVMsWUFBWSxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdlbmVyYXRvciBmcm9tICcuLi8uLi9saWIvR2VuZXJhdG9yJztcblxuXG5jbGFzcyBBcHBHZW5lcmF0b3IgZXh0ZW5kcyBHZW5lcmF0b3Ige1xuXG4gICAgcHJvdGVjdGVkIGFuc3dlcnM6IHtcbiAgICAgICAgZ2VuZXJhdG9yczogc3RyaW5nW11cbiAgICB9XG5cbiAgICBhc3luYyBwcm9tcHRpbmcoKSB7XG4gICAgICAgIHRoaXMuYW5zd2VycyA9IGF3YWl0IHRoaXNcbiAgICAgICAgICAgIC5hc2suY2hlY2tib3goJ2dlbmVyYXRvcnMnLCAnU2VsZWN0IGdlbmVyYXRvcnMgdG8gcnVuJywgWyAnbm9kZScsICdnaXQnLCAnYnVpbGQtdG9vbHMnIF0pXG4gICAgICAgICAgICAuYXNrLnByb21wdCgpIGFzIGFueTtcbiAgICB9XG5cbiAgICB3cml0aW5nKCkge1xuICAgICAgICB0aGlzLmxvZygnbWV0aG9kIDEganVzdCByYW4nLCB0aGlzLmRldGVybWluZUFwcG5hbWUoKSk7XG4gICAgICAgIHRoaXMuYW5zd2Vycy5nZW5lcmF0b3JzLmZvckVhY2gobmFtZSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvc2VXaXRoKCdyYWRpYzonICsgbmFtZSwge30pO1xuICAgICAgICB9KVxuICAgIH1cblxufVxuXG5leHBvcnQgPSBBcHBHZW5lcmF0b3JcbiJdfQ==