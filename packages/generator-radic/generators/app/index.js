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
                .ask.checkbox('generators', 'Select generators to run', ['node', 'git'])
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZ2VuZXJhdG9ycy9hcHAvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsbURBQTRDO0FBRzVDLE1BQU0sWUFBYSxTQUFRLG1CQUFTO0lBTTFCLFNBQVM7O1lBQ1gsSUFBSSxDQUFDLE9BQU8sSUFBRyxNQUFNLElBQUk7aUJBQ3BCLEdBQUcsQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLDBCQUEwQixFQUFFLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO2lCQUN2RSxHQUFHLENBQUMsTUFBTSxFQUFTLENBQUEsQ0FBQztRQUM3QixDQUFDO0tBQUE7SUFFRCxPQUFPO1FBQ0gsSUFBSSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNuQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsR0FBRyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDMUMsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0NBRUo7QUFDRCxpQkFBUyxZQUFZLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2VuZXJhdG9yIGZyb20gJy4uLy4uL2xpYi9HZW5lcmF0b3InO1xuXG5cbmNsYXNzIEFwcEdlbmVyYXRvciBleHRlbmRzIEdlbmVyYXRvciB7XG5cbiAgICBwcm90ZWN0ZWQgYW5zd2Vyczp7XG4gICAgICAgIGdlbmVyYXRvcnM6c3RyaW5nW11cbiAgICB9XG5cbiAgICBhc3luYyBwcm9tcHRpbmcoKXtcbiAgICAgICAgdGhpcy5hbnN3ZXJzID0gYXdhaXQgdGhpc1xuICAgICAgICAgICAgLmFzay5jaGVja2JveCgnZ2VuZXJhdG9ycycsICdTZWxlY3QgZ2VuZXJhdG9ycyB0byBydW4nLCBbJ25vZGUnLCAnZ2l0J10pXG4gICAgICAgICAgICAuYXNrLnByb21wdCgpIGFzIGFueTtcbiAgICB9XG5cbiAgICB3cml0aW5nKCkge1xuICAgICAgICB0aGlzLmxvZygnbWV0aG9kIDEganVzdCByYW4nLCB0aGlzLmRldGVybWluZUFwcG5hbWUoKSk7XG4gICAgICAgIHRoaXMuYW5zd2Vycy5nZW5lcmF0b3JzLmZvckVhY2gobmFtZSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvc2VXaXRoKCdyYWRpYzonICsgbmFtZSwge30pO1xuICAgICAgICB9KVxuICAgIH1cblxufVxuZXhwb3J0ID0gQXBwR2VuZXJhdG9yXG4iXX0=