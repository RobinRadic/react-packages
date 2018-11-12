"use strict";
///<reference path="../globals.d.ts"/>
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const requireg = require("requireg");
const _npm = requireg('npm');
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
        let key = Object.keys(view[0]);
        try {
            return view[0][key]['dist-tags']['latest'];
        }
        catch (_a) {
            return key;
        }
    });
}
exports.getLatestVersion = getLatestVersion;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvbGliL3V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBc0M7Ozs7Ozs7Ozs7QUFFdEMscUNBQW9DO0FBRXBDLE1BQU0sSUFBSSxHQUFlLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQTtBQVl4QyxJQUFJLFFBQVEsR0FBYSxJQUFJLENBQUMsUUFBZSxDQUFDO0FBRTlDLFNBQWdCLEdBQUcsQ0FBQyxPQUEyQixFQUFFLFVBQW9CLEVBQUUsRUFBRSxTQUFrQixJQUFJO0lBQzNGLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUU7UUFDNUIsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRTtZQUNsQixJQUFLLEdBQUc7Z0JBQUcsT0FBTyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDM0IsUUFBUSxDQUFFLE9BQU8sQ0FBRSxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLEVBQUUsRUFBRTtnQkFDbEQsSUFBSyxHQUFHO29CQUFHLE9BQU8sR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUMzQixHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDZCxDQUFDLENBQUMsQ0FBQTtRQUNOLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQyxDQUFDLENBQUE7QUFDTixDQUFDO0FBVkQsa0JBVUM7QUFFRCxTQUFzQixnQkFBZ0IsQ0FBQyxXQUFtQjs7UUFDdEQsSUFBSSxJQUFJLEdBQUcsTUFBTSxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUUsV0FBVyxDQUFFLENBQUMsQ0FBQTtRQUM3QyxJQUFJLEdBQUcsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBRSxDQUFDLENBQUUsQ0FBQyxDQUFDO1FBQ2pDLElBQUk7WUFDQSxPQUFPLElBQUksQ0FBRSxDQUFDLENBQUUsQ0FBRSxHQUFHLENBQUUsQ0FBRSxXQUFXLENBQUUsQ0FBRSxRQUFRLENBQUUsQ0FBQztTQUN0RDtRQUFDLFdBQU07WUFDSixPQUFPLEdBQUcsQ0FBQztTQUNkO0lBQ0wsQ0FBQztDQUFBO0FBUkQsNENBUUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy88cmVmZXJlbmNlIHBhdGg9XCIuLi9nbG9iYWxzLmQudHNcIi8+XG5cbmltcG9ydCAqIGFzIHJlcXVpcmVnIGZyb20gJ3JlcXVpcmVnJ1xuXG5jb25zdCBfbnBtOiBOUE0uU3RhdGljID0gcmVxdWlyZWcoJ25wbScpXG5cbmludGVyZmFjZSBDb21tYW5kRnVuY3Rpb24ge1xuICAgIChhcmdzOiBzdHJpbmdbXSwgY2FsbGJhY2s6IE5QTS5Db21tYW5kQ2FsbGJhY2spOiB2b2lkO1xuXG4gICAgKGFyZ3M6IHN0cmluZ1tdLCBzaWxlbnQ6IGJvb2xlYW4sIGNhbGxiYWNrOiBOUE0uQ29tbWFuZENhbGxiYWNrKTogdm9pZDtcbn1cblxuXG50eXBlIENvbW1hbmRzPFQgPSBOUE0uQ29tbWFuZHM+ID0ge1xuICAgIHJlYWRvbmx5IFtQIGluIGtleW9mIFRdOiBDb21tYW5kRnVuY3Rpb247XG59XG5sZXQgY29tbWFuZHM6IENvbW1hbmRzID0gX25wbS5jb21tYW5kcyBhcyBhbnk7XG5cbmV4cG9ydCBmdW5jdGlvbiBucG0oY29tbWFuZDoga2V5b2YgTlBNLkNvbW1hbmRzLCBucG1BcmdzOiBzdHJpbmdbXSA9IFtdLCBzaWxlbnQ6IGJvb2xlYW4gPSB0cnVlKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMsIHJlaikgPT4ge1xuICAgICAgICBfbnBtLmxvYWQoKGVyciwgY2wpID0+IHtcbiAgICAgICAgICAgIGlmICggZXJyICkgcmV0dXJuIHJlaihlcnIpO1xuICAgICAgICAgICAgY29tbWFuZHNbIGNvbW1hbmQgXShucG1BcmdzLCBzaWxlbnQsIChlcnIsIC4uLmFyZ3MpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIGVyciApIHJldHVybiByZWooZXJyKTtcbiAgICAgICAgICAgICAgICByZXMoYXJncyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH0pXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRMYXRlc3RWZXJzaW9uKHBhY2thZ2VOYW1lOiBzdHJpbmcpIHtcbiAgICBsZXQgdmlldyA9IGF3YWl0IG5wbSgndmlldycsIFsgcGFja2FnZU5hbWUgXSlcbiAgICBsZXQga2V5ID0gT2JqZWN0LmtleXModmlld1sgMCBdKTtcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gdmlld1sgMCBdWyBrZXkgXVsgJ2Rpc3QtdGFncycgXVsgJ2xhdGVzdCcgXTtcbiAgICB9IGNhdGNoIHtcbiAgICAgICAgcmV0dXJuIGtleTtcbiAgICB9XG59XG4iXX0=