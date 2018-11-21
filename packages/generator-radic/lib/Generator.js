"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Base = require("yeoman-generator");
const Ask_1 = require("./Ask");
const child_process_1 = require("child_process");
class Generator extends Base {
    constructor() {
        super(...arguments);
        this._ask = new Ask_1.Ask(this);
    }
    get ask() { return this._ask; }
    exec(cmd, options) {
        return child_process_1.execSync(cmd, Object.assign({ cwd: this.destinationPath(), encoding: 'utf8' }, options));
    }
    inquire(message, type = 'input', options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            options = Object.assign({ name: 'question', message, type }, options);
            let answers = yield this.prompt([options]);
            return answers.question;
        });
    }
    input(message, defaultValue, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.inquire(message, 'input', Object.assign({ default: defaultValue }, options));
        });
    }
    confirm(message, defaultValue = false, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.inquire(message, 'confirm', Object.assign({ default: defaultValue }, options));
        });
    }
    checkbox(message, choices, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.inquire(message, 'checkbox', Object.assign({ choices }, options));
        });
    }
    list(message, choices, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.inquire(message, 'list', Object.assign({ choices }, options));
        });
    }
}
exports.Generator = Generator;
exports.default = Generator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2VuZXJhdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2xpYi9HZW5lcmF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHlDQUF5QztBQUN6QywrQkFBNEI7QUFDNUIsaURBQTRFO0FBYzVFLE1BQXNCLFNBQVUsU0FBUSxJQUFJO0lBQTVDOztRQUNZLFNBQUksR0FBRyxJQUFJLFNBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQWdDaEMsQ0FBQztJQS9CRyxJQUFXLEdBQUcsS0FBUyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUEsQ0FBQSxDQUFDO0lBRTlCLElBQUksQ0FBQyxHQUFXLEVBQUUsT0FBMkM7UUFDbkUsT0FBTyx3QkFBUSxDQUFDLEdBQUcsa0JBQ2YsR0FBRyxFQUFPLElBQUksQ0FBQyxlQUFlLEVBQUUsRUFDaEMsUUFBUSxFQUFFLE1BQU0sSUFDYixPQUFPLEVBQ1osQ0FBQTtJQUNOLENBQUM7SUFFZSxPQUFPLENBQUksT0FBZSxFQUFFLE9BQWUsT0FBTyxFQUFFLFVBQW9CLEVBQUU7O1lBQ3RGLE9BQU8sbUJBQVMsSUFBSSxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsSUFBSSxJQUFLLE9BQU8sQ0FBRSxDQUFBO1lBQzdELElBQUksT0FBTyxHQUFHLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFFLE9BQU8sQ0FBRSxDQUFDLENBQUM7WUFDN0MsT0FBTyxPQUFPLENBQUMsUUFBUSxDQUFDO1FBQzVCLENBQUM7S0FBQTtJQUVlLEtBQUssQ0FBQyxPQUFlLEVBQUUsWUFBcUIsRUFBRSxVQUFvQixFQUFFOztZQUNoRixPQUFPLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBVSxPQUFPLEVBQUUsT0FBTyxrQkFBSSxPQUFPLEVBQUUsWUFBWSxJQUFLLE9BQU8sRUFBRyxDQUFBO1FBQy9GLENBQUM7S0FBQTtJQUVlLE9BQU8sQ0FBQyxPQUFlLEVBQUUsZUFBd0IsS0FBSyxFQUFFLFVBQW9CLEVBQUU7O1lBQzFGLE9BQU8sTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFVLE9BQU8sRUFBRSxTQUFTLGtCQUFJLE9BQU8sRUFBRSxZQUFZLElBQUssT0FBTyxFQUFHLENBQUE7UUFDakcsQ0FBQztLQUFBO0lBRWUsUUFBUSxDQUFDLE9BQWUsRUFBRSxPQUE0QixFQUFFLFVBQW9CLEVBQUU7O1lBQzFGLE9BQU8sTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFXLE9BQU8sRUFBRSxVQUFVLGtCQUFJLE9BQU8sSUFBSyxPQUFPLEVBQUcsQ0FBQTtRQUNyRixDQUFDO0tBQUE7SUFFZSxJQUFJLENBQUMsT0FBZSxFQUFFLE9BQTRCLEVBQUUsVUFBb0IsRUFBRTs7WUFDdEYsT0FBTyxNQUFNLElBQUksQ0FBQyxPQUFPLENBQVMsT0FBTyxFQUFFLE1BQU0sa0JBQUksT0FBTyxJQUFLLE9BQU8sRUFBRyxDQUFBO1FBQy9FLENBQUM7S0FBQTtDQUNKO0FBakNELDhCQWlDQztBQVdELGtCQUFlLFNBQVMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIEJhc2UgZnJvbSAneWVvbWFuLWdlbmVyYXRvcic7XG5pbXBvcnQgeyBBc2sgfSBmcm9tICcuL0Fzayc7XG5pbXBvcnQgeyBleGVjU3luYywgRXhlY1N5bmNPcHRpb25zV2l0aFN0cmluZ0VuY29kaW5nIH0gZnJvbSAnY2hpbGRfcHJvY2Vzcyc7XG5pbXBvcnQgeyBRdWVzdGlvbiB9IGZyb20gJ2lucXVpcmVyJztcblxuZXhwb3J0IGludGVyZmFjZSBQcmlvcml0aWVzIHtcbiAgICAvLyBpbml0aWFsaXppbmc/OiBGdW5jdGlvbiAvLygpID0+IGFueSAvLyAtIFlvdXIgaW5pdGlhbGl6YXRpb24gbWV0aG9kcyAoY2hlY2tpbmcgY3VycmVudCBwcm9qZWN0IHN0YXRlLCBnZXR0aW5nIGNvbmZpZ3MsIGV0YylcbiAgICAvLyBwcm9tcHRpbmc/OiAoKSA9PiBhbnkgLy8gLSBXaGVyZSB5b3UgcHJvbXB0IHVzZXJzIGZvciBvcHRpb25zICh3aGVyZSB5b3XigJlkIGNhbGwgdGhpcy5wcm9tcHQoKSlcbiAgICAvLyBjb25maWd1cmluZz86ICgpID0+IGFueSAvLyAtIFNhdmluZyBjb25maWd1cmF0aW9ucyBhbmQgY29uZmlndXJlIHRoZSBwcm9qZWN0IChjcmVhdGluZyAuZWRpdG9yY29uZmlnIGZpbGVzIGFuZCBvdGhlciBtZXRhZGF0YSBmaWxlcylcbiAgICAvLyBkZWZhdWx0PzogKCkgPT4gYW55IC8vIC0gSWYgdGhlIG1ldGhvZCBuYW1lIGRvZXNu4oCZdCBtYXRjaCBhIHByaW9yaXR5LCBpdCB3aWxsIGJlIHB1c2hlZCB0byB0aGlzIGdyb3VwLlxuICAgIC8vIHdyaXRpbmc/OiAoKSA9PiBhbnkgLy8gLSBXaGVyZSB5b3Ugd3JpdGUgdGhlIGdlbmVyYXRvciBzcGVjaWZpYyBmaWxlcyAocm91dGVzLCBjb250cm9sbGVycywgZXRjKVxuICAgIC8vIGNvbmZsaWN0cz86ICgpID0+IGFueSAvLyAtIFdoZXJlIGNvbmZsaWN0cyBhcmUgaGFuZGxlZCAodXNlZCBpbnRlcm5hbGx5KVxuICAgIC8vIGluc3RhbGw/OiAoKSA9PiBhbnkgLy8gLSBXaGVyZSBpbnN0YWxsYXRpb25zIGFyZSBydW4gKG5wbSwgYm93ZXIpXG4gICAgLy8gZW5kPzogKCkgPT4gYW55IC8vIC0gQ2FsbGVkIGxhc3QsIGNsZWFudXAsIHNheSBnb29kIGJ5ZSwgZXRjXG59XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBHZW5lcmF0b3IgZXh0ZW5kcyBCYXNlIHtcbiAgICBwcml2YXRlIF9hc2sgPSBuZXcgQXNrKHRoaXMpXG4gICAgcHVibGljIGdldCBhc2soKTogQXNrIHtyZXR1cm4gdGhpcy5fYXNrfVxuXG4gICAgcHJvdGVjdGVkIGV4ZWMoY21kOiBzdHJpbmcsIG9wdGlvbnM/OiBFeGVjU3luY09wdGlvbnNXaXRoU3RyaW5nRW5jb2RpbmcpIHtcbiAgICAgICAgcmV0dXJuIGV4ZWNTeW5jKGNtZCwge1xuICAgICAgICAgICAgY3dkICAgICA6IHRoaXMuZGVzdGluYXRpb25QYXRoKCksXG4gICAgICAgICAgICBlbmNvZGluZzogJ3V0ZjgnLFxuICAgICAgICAgICAgLi4ub3B0aW9uc1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBhc3luYyBpbnF1aXJlPFQ+KG1lc3NhZ2U6IHN0cmluZywgdHlwZTogc3RyaW5nID0gJ2lucHV0Jywgb3B0aW9uczogUXVlc3Rpb24gPSB7fSk6IFByb21pc2U8VD4ge1xuICAgICAgICBvcHRpb25zICAgICA9IHsgbmFtZTogJ3F1ZXN0aW9uJywgbWVzc2FnZSwgdHlwZSwgLi4ub3B0aW9ucyB9XG4gICAgICAgIGxldCBhbnN3ZXJzID0gYXdhaXQgdGhpcy5wcm9tcHQoWyBvcHRpb25zIF0pO1xuICAgICAgICByZXR1cm4gYW5zd2Vycy5xdWVzdGlvbjtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgYXN5bmMgaW5wdXQobWVzc2FnZTogc3RyaW5nLCBkZWZhdWx0VmFsdWU/OiBzdHJpbmcsIG9wdGlvbnM6IFF1ZXN0aW9uID0ge30pIHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuaW5xdWlyZTxib29sZWFuPihtZXNzYWdlLCAnaW5wdXQnLCB7IGRlZmF1bHQ6IGRlZmF1bHRWYWx1ZSwgLi4ub3B0aW9ucyB9KVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBhc3luYyBjb25maXJtKG1lc3NhZ2U6IHN0cmluZywgZGVmYXVsdFZhbHVlOiBib29sZWFuID0gZmFsc2UsIG9wdGlvbnM6IFF1ZXN0aW9uID0ge30pIHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuaW5xdWlyZTxib29sZWFuPihtZXNzYWdlLCAnY29uZmlybScsIHsgZGVmYXVsdDogZGVmYXVsdFZhbHVlLCAuLi5vcHRpb25zIH0pXG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGFzeW5jIGNoZWNrYm94KG1lc3NhZ2U6IHN0cmluZywgY2hvaWNlczogUXVlc3Rpb25bJ2Nob2ljZXMnXSwgb3B0aW9uczogUXVlc3Rpb24gPSB7fSkge1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5pbnF1aXJlPHN0cmluZ1tdPihtZXNzYWdlLCAnY2hlY2tib3gnLCB7IGNob2ljZXMsIC4uLm9wdGlvbnMgfSlcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgYXN5bmMgbGlzdChtZXNzYWdlOiBzdHJpbmcsIGNob2ljZXM6IFF1ZXN0aW9uWydjaG9pY2VzJ10sIG9wdGlvbnM6IFF1ZXN0aW9uID0ge30pIHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuaW5xdWlyZTxzdHJpbmc+KG1lc3NhZ2UsICdsaXN0JywgeyBjaG9pY2VzLCAuLi5vcHRpb25zIH0pXG4gICAgfVxufVxuXG5leHBvcnQgbmFtZXNwYWNlIEdlbmVyYXRvciB7XG5cbiAgICBleHBvcnQgaW50ZXJmYWNlIEJsYWJsYSB7XG4gICAgICAgIGZvbzogc3RyaW5nXG4gICAgfVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgR2VuZXJhdG9yXG4iXX0=