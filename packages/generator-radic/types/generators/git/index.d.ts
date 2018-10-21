import { Generator } from '../../lib';
declare class GitGenerator extends Generator {
    answers: {
        gitignore: boolean;
        create_commit: boolean;
        commit_message: string;
        use_remote: boolean;
        remote_name: string;
        remote_url: string;
        create_remote: boolean;
        push: boolean;
    };
    prompting(): Promise<void>;
    writing(): Promise<void>;
}
export = GitGenerator;
