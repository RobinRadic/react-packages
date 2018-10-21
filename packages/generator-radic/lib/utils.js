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
const _npm = require("npm");
let commands = _npm.commands;
function npm(command, npmArgs = [], silent = true) {
    return new Promise((res, rej) => {
        _npm.load((err, cl) => {
            if (err)
                return rej(err);
            commands[command](npmArgs, silent, (err, ...args) => {
                if (err)
                    return rej(err);
                res(args);
            });
        });
    });
}
exports.npm = npm;
function getLatestVersion(packageName) {
    return __awaiter(this, void 0, void 0, function* () {
        let view = yield npm('view', [packageName]);
        return view[Object.keys(view)[0]].version;
    });
}
exports.getLatestVersion = getLatestVersion;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvbGliL3V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSw0QkFBNEI7QUFXNUIsSUFBSSxRQUFRLEdBQWEsSUFBSSxDQUFDLFFBQWUsQ0FBQztBQUU5QyxTQUFnQixHQUFHLENBQUMsT0FBMkIsRUFBRSxVQUFvQixFQUFFLEVBQUUsU0FBa0IsSUFBSTtJQUMzRixPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFO1FBQzVCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUU7WUFDbEIsSUFBSyxHQUFHO2dCQUFHLE9BQU8sR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzNCLFFBQVEsQ0FBRSxPQUFPLENBQUUsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxFQUFFLEVBQUU7Z0JBQ2xELElBQUssR0FBRztvQkFBRyxPQUFPLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDM0IsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2QsQ0FBQyxDQUFDLENBQUE7UUFDTixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUMsQ0FBQyxDQUFBO0FBQ04sQ0FBQztBQVZELGtCQVVDO0FBRUQsU0FBc0IsZ0JBQWdCLENBQUMsV0FBbUI7O1FBQ3RELElBQUksSUFBSSxHQUFHLE1BQU0sR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFFLFdBQVcsQ0FBRSxDQUFDLENBQUE7UUFDN0MsT0FBTyxJQUFJLENBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBRSxDQUFDLENBQUUsQ0FBRSxDQUFDLE9BQU8sQ0FBQztJQUNsRCxDQUFDO0NBQUE7QUFIRCw0Q0FHQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIF9ucG0gZnJvbSAnbnBtJztcblxuaW50ZXJmYWNlIENvbW1hbmRGdW5jdGlvbiB7XG4gICAgKGFyZ3M6IHN0cmluZ1tdLCBjYWxsYmFjazogTlBNLkNvbW1hbmRDYWxsYmFjayk6IHZvaWQ7XG5cbiAgICAoYXJnczogc3RyaW5nW10sIHNpbGVudDogYm9vbGVhbiwgY2FsbGJhY2s6IE5QTS5Db21tYW5kQ2FsbGJhY2spOiB2b2lkO1xufVxuXG50eXBlIENvbW1hbmRzPFQgPSBOUE0uQ29tbWFuZHM+ID0ge1xuICAgIHJlYWRvbmx5IFtQIGluIGtleW9mIFRdOiBDb21tYW5kRnVuY3Rpb247XG59XG5sZXQgY29tbWFuZHM6IENvbW1hbmRzID0gX25wbS5jb21tYW5kcyBhcyBhbnk7XG5cbmV4cG9ydCBmdW5jdGlvbiBucG0oY29tbWFuZDoga2V5b2YgTlBNLkNvbW1hbmRzLCBucG1BcmdzOiBzdHJpbmdbXSA9IFtdLCBzaWxlbnQ6IGJvb2xlYW4gPSB0cnVlKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMsIHJlaikgPT4ge1xuICAgICAgICBfbnBtLmxvYWQoKGVyciwgY2wpID0+IHtcbiAgICAgICAgICAgIGlmICggZXJyICkgcmV0dXJuIHJlaihlcnIpO1xuICAgICAgICAgICAgY29tbWFuZHNbIGNvbW1hbmQgXShucG1BcmdzLCBzaWxlbnQsIChlcnIsIC4uLmFyZ3MpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIGVyciApIHJldHVybiByZWooZXJyKTtcbiAgICAgICAgICAgICAgICByZXMoYXJncyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH0pXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRMYXRlc3RWZXJzaW9uKHBhY2thZ2VOYW1lOiBzdHJpbmcpIHtcbiAgICBsZXQgdmlldyA9IGF3YWl0IG5wbSgndmlldycsIFsgcGFja2FnZU5hbWUgXSlcbiAgICByZXR1cm4gdmlld1sgT2JqZWN0LmtleXModmlldylbIDAgXSBdLnZlcnNpb247XG59XG4iXX0=