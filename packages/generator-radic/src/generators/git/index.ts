import { Generator } from '../../lib';

class GitGenerator extends Generator {
    answers: {
        gitignore: boolean
        create_commit: boolean
        commit_message: string
        use_remote: boolean
        remote_name: string
        remote_url: string
        create_remote: boolean
        push: boolean
    }

    async prompting() {
        this.answers = await this
            .ask.confirm('gitignore', 'Add gitignore?', true)

            .ask.confirm('create_commit', 'Create initial commit', true)
            .ask.input('commit_message', 'Commit message', 'Initial Commit').when('create_commit', true)

            .ask.confirm('use_remote', 'Add remote', false)
            .ask.input('remote_name', 'Remote Name', 'origin').when('use_remote', true)
            .ask.input('remote_url', 'Remote URL').when('use_remote', true)
            // .ask.confirm('create_remote', 'Create remote?').when('use_remote', true)

            .ask.confirm('push', 'Push to remote?', false).when(answers => answers.use_remote && answers.create_commit)

            .ask.prompt() as any;
    }

    async writing() {
        let a = this.answers;
        if ( ! this.fs.exists('.git') ) {
            this.exec('git init');
        }
        if ( a.gitignore ) {
            this.fs.copy(this.templatePath('.gitignore'), this.destinationPath('.gitignore'));
        }
        if ( a.create_commit ) {
            this.exec(`git add -A`);
            this.exec(`git commit -m "${a.commit_message}"`);
        }
        if ( a.use_remote ) {
            this.exec(`git remote add ${a.remote_name} ${a.remote_url}`);
        }
        if ( a.create_remote ) {
            // this.composeWith('radical:git-remote', { action: 'create' })
        }
        if ( a.push ) {
            this.exec('git push --all')
        }
    }

}

export = GitGenerator