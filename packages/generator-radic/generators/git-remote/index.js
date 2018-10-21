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
const lib_1 = require("../../lib");
class GitRemoteGenerator extends lib_1.Generator {
    constructor(args, opts) {
        super(args, opts);
        this.argument('action', { type: String, required: false });
    }
    prompting() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.options.action) {
                let a = yield this
                    .ask.list('action', 'Action', ['create', 'remove'])
                    .ask.prompt();
                this.options.action = a.action;
            }
            this.answers = (yield this
                .ask.list('provider', 'Provider', ['github', 'bitbucket'])
                .ask.input('repository', 'Repository full/name')
                .ask.confirm('private', 'Make private').when(answers => this.options.action === 'create')
                .ask.prompt());
        });
    }
    writing() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZ2VuZXJhdG9ycy9naXQtcmVtb3RlL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxtQ0FBc0M7QUFFdEMsTUFBTSxrQkFBbUIsU0FBUSxlQUFTO0lBWXRDLFlBQVksSUFBSSxFQUFFLElBQUk7UUFDbEIsS0FBSyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNsQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUVLLFNBQVM7O1lBQ1gsSUFBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFDO2dCQUNwQixJQUFJLENBQUMsR0FBRyxNQUFNLElBQUk7cUJBQ2IsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLENBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBRSxDQUFDO3FCQUNwRCxHQUFHLENBQUMsTUFBTSxFQUFTLENBQUM7Z0JBRXpCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUM7YUFDbEM7WUFFRCxJQUFJLENBQUMsT0FBTyxJQUFHLE1BQU0sSUFBSTtpQkFDcEIsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsVUFBVSxFQUFFLENBQUUsUUFBUSxFQUFFLFdBQVcsQ0FBRSxDQUFDO2lCQUMzRCxHQUFHLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRSxzQkFBc0IsQ0FBQztpQkFDL0MsR0FBRyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsY0FBYyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEtBQUssUUFBUSxDQUFDO2lCQUN4RixHQUFHLENBQUMsTUFBTSxFQUFTLENBQUEsQ0FBQztRQUM3QixDQUFDO0tBQUE7SUFFSyxPQUFPOztRQUViLENBQUM7S0FBQTtDQUVKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2VuZXJhdG9yIH0gZnJvbSAnLi4vLi4vbGliJztcblxuY2xhc3MgR2l0UmVtb3RlR2VuZXJhdG9yIGV4dGVuZHMgR2VuZXJhdG9yIHtcbiAgICBhbnN3ZXJzOiB7XG4gICAgICAgIGdpdGlnbm9yZTogYm9vbGVhblxuICAgICAgICBjcmVhdGVfY29tbWl0OiBib29sZWFuXG4gICAgICAgIGNvbW1pdF9tZXNzYWdlOiBzdHJpbmdcbiAgICAgICAgdXNlX3JlbW90ZTogYm9vbGVhblxuICAgICAgICByZW1vdGVfbmFtZTogc3RyaW5nXG4gICAgICAgIHJlbW90ZV91cmw6IHN0cmluZ1xuICAgICAgICBwdXNoOiBib29sZWFuXG4gICAgfVxuICAgIG9wdGlvbnM6IHsgYWN0aW9uPzogc3RyaW5nIH1cblxuICAgIGNvbnN0cnVjdG9yKGFyZ3MsIG9wdHMpIHtcbiAgICAgICAgc3VwZXIoYXJncywgb3B0cyk7XG4gICAgICAgIHRoaXMuYXJndW1lbnQoJ2FjdGlvbicsIHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogZmFsc2UgfSk7XG4gICAgfVxuXG4gICAgYXN5bmMgcHJvbXB0aW5nKCkge1xuICAgICAgICBpZighdGhpcy5vcHRpb25zLmFjdGlvbil7XG4gICAgICAgICAgICBsZXQgYSA9IGF3YWl0IHRoaXNcbiAgICAgICAgICAgICAgICAuYXNrLmxpc3QoJ2FjdGlvbicsICdBY3Rpb24nLCBbICdjcmVhdGUnLCAncmVtb3ZlJyBdKVxuICAgICAgICAgICAgICAgIC5hc2sucHJvbXB0KCkgYXMgYW55O1xuXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuYWN0aW9uID0gYS5hY3Rpb247XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmFuc3dlcnMgPSBhd2FpdCB0aGlzXG4gICAgICAgICAgICAuYXNrLmxpc3QoJ3Byb3ZpZGVyJywgJ1Byb3ZpZGVyJywgWyAnZ2l0aHViJywgJ2JpdGJ1Y2tldCcgXSlcbiAgICAgICAgICAgIC5hc2suaW5wdXQoJ3JlcG9zaXRvcnknLCAnUmVwb3NpdG9yeSBmdWxsL25hbWUnKVxuICAgICAgICAgICAgLmFzay5jb25maXJtKCdwcml2YXRlJywgJ01ha2UgcHJpdmF0ZScpLndoZW4oYW5zd2VycyA9PiB0aGlzLm9wdGlvbnMuYWN0aW9uID09PSAnY3JlYXRlJylcbiAgICAgICAgICAgIC5hc2sucHJvbXB0KCkgYXMgYW55O1xuICAgIH1cblxuICAgIGFzeW5jIHdyaXRpbmcoKXtcblxuICAgIH1cblxufSJdfQ==