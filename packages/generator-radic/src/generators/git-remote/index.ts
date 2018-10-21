import { Generator } from '../../lib';

class GitRemoteGenerator extends Generator {
    answers: {
        gitignore: boolean
        create_commit: boolean
        commit_message: string
        use_remote: boolean
        remote_name: string
        remote_url: string
        push: boolean
    }
    options: { action?: string }

    constructor(args, opts) {
        super(args, opts);
        this.argument('action', { type: String, required: false });
    }

    async prompting() {
        if(!this.options.action){
            let a = await this
                .ask.list('action', 'Action', [ 'create', 'remove' ])
                .ask.prompt() as any;

            this.options.action = a.action;
        }

        this.answers = await this
            .ask.list('provider', 'Provider', [ 'github', 'bitbucket' ])
            .ask.input('repository', 'Repository full/name')
            .ask.confirm('private', 'Make private').when(answers => this.options.action === 'create')
            .ask.prompt() as any;
    }

    async writing(){

    }

}