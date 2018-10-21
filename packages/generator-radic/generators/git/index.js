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
class GitGenerator extends lib_1.Generator {
    prompting() {
        return __awaiter(this, void 0, void 0, function* () {
            this.answers = (yield this
                .ask.confirm('gitignore', 'Add gitignore?', true)
                .ask.confirm('create_commit', 'Create initial commit', true)
                .ask.input('commit_message', 'Commit message', 'Initial Commit').when('create_commit', true)
                .ask.confirm('use_remote', 'Add remote', false)
                .ask.input('remote_name', 'Remote Name', 'origin').when('use_remote', true)
                .ask.input('remote_url', 'Remote URL').when('use_remote', true)
                // .ask.confirm('create_remote', 'Create remote?').when('use_remote', true)
                .ask.confirm('push', 'Push to remote?', false).when(answers => answers.use_remote && answers.create_commit)
                .ask.prompt());
        });
    }
    writing() {
        return __awaiter(this, void 0, void 0, function* () {
            let a = this.answers;
            if (!this.fs.exists('.git')) {
                this.exec('git init');
            }
            if (a.gitignore) {
                this.fs.copy(this.templatePath('.gitignore'), this.destinationPath('.gitignore'));
            }
            if (a.create_commit) {
                this.exec(`git add -A`);
                this.exec(`git commit -m "${a.commit_message}"`);
            }
            if (a.use_remote) {
                this.exec(`git remote add ${a.remote_name} ${a.remote_url}`);
            }
            if (a.create_remote) {
                // this.composeWith('radical:git-remote', { action: 'create' })
            }
            if (a.push) {
                this.exec('git push --all');
            }
        });
    }
}
module.exports = GitGenerator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZ2VuZXJhdG9ycy9naXQvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsbUNBQXNDO0FBRXRDLE1BQU0sWUFBYSxTQUFRLGVBQVM7SUFZMUIsU0FBUzs7WUFDWCxJQUFJLENBQUMsT0FBTyxJQUFHLE1BQU0sSUFBSTtpQkFDcEIsR0FBRyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDO2lCQUVoRCxHQUFHLENBQUMsT0FBTyxDQUFDLGVBQWUsRUFBRSx1QkFBdUIsRUFBRSxJQUFJLENBQUM7aUJBQzNELEdBQUcsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLEVBQUUsZ0JBQWdCLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQztpQkFFM0YsR0FBRyxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsWUFBWSxFQUFFLEtBQUssQ0FBQztpQkFDOUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsYUFBYSxFQUFFLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDO2lCQUMxRSxHQUFHLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRSxZQUFZLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQztnQkFDL0QsMkVBQTJFO2lCQUUxRSxHQUFHLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxpQkFBaUIsRUFBRSxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsVUFBVSxJQUFJLE9BQU8sQ0FBQyxhQUFhLENBQUM7aUJBRTFHLEdBQUcsQ0FBQyxNQUFNLEVBQVMsQ0FBQSxDQUFDO1FBQzdCLENBQUM7S0FBQTtJQUVLLE9BQU87O1lBQ1QsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNyQixJQUFLLENBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUc7Z0JBQzVCLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7YUFDekI7WUFDRCxJQUFLLENBQUMsQ0FBQyxTQUFTLEVBQUc7Z0JBQ2YsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7YUFDckY7WUFDRCxJQUFLLENBQUMsQ0FBQyxhQUFhLEVBQUc7Z0JBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQ3hCLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDO2FBQ3BEO1lBQ0QsSUFBSyxDQUFDLENBQUMsVUFBVSxFQUFHO2dCQUNoQixJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsV0FBVyxJQUFJLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO2FBQ2hFO1lBQ0QsSUFBSyxDQUFDLENBQUMsYUFBYSxFQUFHO2dCQUNuQiwrREFBK0Q7YUFDbEU7WUFDRCxJQUFLLENBQUMsQ0FBQyxJQUFJLEVBQUc7Z0JBQ1YsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBO2FBQzlCO1FBQ0wsQ0FBQztLQUFBO0NBRUo7QUFFRCxpQkFBUyxZQUFZLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHZW5lcmF0b3IgfSBmcm9tICcuLi8uLi9saWInO1xuXG5jbGFzcyBHaXRHZW5lcmF0b3IgZXh0ZW5kcyBHZW5lcmF0b3Ige1xuICAgIGFuc3dlcnM6IHtcbiAgICAgICAgZ2l0aWdub3JlOiBib29sZWFuXG4gICAgICAgIGNyZWF0ZV9jb21taXQ6IGJvb2xlYW5cbiAgICAgICAgY29tbWl0X21lc3NhZ2U6IHN0cmluZ1xuICAgICAgICB1c2VfcmVtb3RlOiBib29sZWFuXG4gICAgICAgIHJlbW90ZV9uYW1lOiBzdHJpbmdcbiAgICAgICAgcmVtb3RlX3VybDogc3RyaW5nXG4gICAgICAgIGNyZWF0ZV9yZW1vdGU6IGJvb2xlYW5cbiAgICAgICAgcHVzaDogYm9vbGVhblxuICAgIH1cblxuICAgIGFzeW5jIHByb21wdGluZygpIHtcbiAgICAgICAgdGhpcy5hbnN3ZXJzID0gYXdhaXQgdGhpc1xuICAgICAgICAgICAgLmFzay5jb25maXJtKCdnaXRpZ25vcmUnLCAnQWRkIGdpdGlnbm9yZT8nLCB0cnVlKVxuXG4gICAgICAgICAgICAuYXNrLmNvbmZpcm0oJ2NyZWF0ZV9jb21taXQnLCAnQ3JlYXRlIGluaXRpYWwgY29tbWl0JywgdHJ1ZSlcbiAgICAgICAgICAgIC5hc2suaW5wdXQoJ2NvbW1pdF9tZXNzYWdlJywgJ0NvbW1pdCBtZXNzYWdlJywgJ0luaXRpYWwgQ29tbWl0Jykud2hlbignY3JlYXRlX2NvbW1pdCcsIHRydWUpXG5cbiAgICAgICAgICAgIC5hc2suY29uZmlybSgndXNlX3JlbW90ZScsICdBZGQgcmVtb3RlJywgZmFsc2UpXG4gICAgICAgICAgICAuYXNrLmlucHV0KCdyZW1vdGVfbmFtZScsICdSZW1vdGUgTmFtZScsICdvcmlnaW4nKS53aGVuKCd1c2VfcmVtb3RlJywgdHJ1ZSlcbiAgICAgICAgICAgIC5hc2suaW5wdXQoJ3JlbW90ZV91cmwnLCAnUmVtb3RlIFVSTCcpLndoZW4oJ3VzZV9yZW1vdGUnLCB0cnVlKVxuICAgICAgICAgICAgLy8gLmFzay5jb25maXJtKCdjcmVhdGVfcmVtb3RlJywgJ0NyZWF0ZSByZW1vdGU/Jykud2hlbigndXNlX3JlbW90ZScsIHRydWUpXG5cbiAgICAgICAgICAgIC5hc2suY29uZmlybSgncHVzaCcsICdQdXNoIHRvIHJlbW90ZT8nLCBmYWxzZSkud2hlbihhbnN3ZXJzID0+IGFuc3dlcnMudXNlX3JlbW90ZSAmJiBhbnN3ZXJzLmNyZWF0ZV9jb21taXQpXG5cbiAgICAgICAgICAgIC5hc2sucHJvbXB0KCkgYXMgYW55O1xuICAgIH1cblxuICAgIGFzeW5jIHdyaXRpbmcoKSB7XG4gICAgICAgIGxldCBhID0gdGhpcy5hbnN3ZXJzO1xuICAgICAgICBpZiAoICEgdGhpcy5mcy5leGlzdHMoJy5naXQnKSApIHtcbiAgICAgICAgICAgIHRoaXMuZXhlYygnZ2l0IGluaXQnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIGEuZ2l0aWdub3JlICkge1xuICAgICAgICAgICAgdGhpcy5mcy5jb3B5KHRoaXMudGVtcGxhdGVQYXRoKCcuZ2l0aWdub3JlJyksIHRoaXMuZGVzdGluYXRpb25QYXRoKCcuZ2l0aWdub3JlJykpO1xuICAgICAgICB9XG4gICAgICAgIGlmICggYS5jcmVhdGVfY29tbWl0ICkge1xuICAgICAgICAgICAgdGhpcy5leGVjKGBnaXQgYWRkIC1BYCk7XG4gICAgICAgICAgICB0aGlzLmV4ZWMoYGdpdCBjb21taXQgLW0gXCIke2EuY29tbWl0X21lc3NhZ2V9XCJgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIGEudXNlX3JlbW90ZSApIHtcbiAgICAgICAgICAgIHRoaXMuZXhlYyhgZ2l0IHJlbW90ZSBhZGQgJHthLnJlbW90ZV9uYW1lfSAke2EucmVtb3RlX3VybH1gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIGEuY3JlYXRlX3JlbW90ZSApIHtcbiAgICAgICAgICAgIC8vIHRoaXMuY29tcG9zZVdpdGgoJ3JhZGljYWw6Z2l0LXJlbW90ZScsIHsgYWN0aW9uOiAnY3JlYXRlJyB9KVxuICAgICAgICB9XG4gICAgICAgIGlmICggYS5wdXNoICkge1xuICAgICAgICAgICAgdGhpcy5leGVjKCdnaXQgcHVzaCAtLWFsbCcpXG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuZXhwb3J0ID0gR2l0R2VuZXJhdG9yIl19