import * as Base from 'yeoman-generator';
import { Ask } from './Ask';
import { execSync, ExecSyncOptionsWithStringEncoding } from 'child_process';
import { Question } from 'inquirer';

export interface Priorities {
    // initializing?: Function //() => any // - Your initialization methods (checking current project state, getting configs, etc)
    // prompting?: () => any // - Where you prompt users for options (where you’d call this.prompt())
    // configuring?: () => any // - Saving configurations and configure the project (creating .editorconfig files and other metadata files)
    // default?: () => any // - If the method name doesn’t match a priority, it will be pushed to this group.
    // writing?: () => any // - Where you write the generator specific files (routes, controllers, etc)
    // conflicts?: () => any // - Where conflicts are handled (used internally)
    // install?: () => any // - Where installations are run (npm, bower)
    // end?: () => any // - Called last, cleanup, say good bye, etc
}

export abstract class Generator extends Base {
    private _ask = new Ask(this)
    public get ask(): Ask {return this._ask}

    protected exec(cmd: string, options?: ExecSyncOptionsWithStringEncoding) {
        return execSync(cmd, {
            cwd     : this.destinationPath(),
            encoding: 'utf8',
            ...options
        })
    }

    protected async inquire<T>(message: string, type: string = 'input', options: Question = {}): Promise<T> {
        options     = { name: 'question', message, type, ...options }
        let answers = await this.prompt([ options ]);
        return answers.question;
    }

    protected async input(message: string, defaultValue?: string, options: Question = {}) {
        return await this.inquire<boolean>(message, 'input', { default: defaultValue, ...options })
    }

    protected async confirm(message: string, defaultValue: boolean = false, options: Question = {}) {
        return await this.inquire<boolean>(message, 'confirm', { default: defaultValue, ...options })
    }

    protected async checkbox(message: string, choices: Question['choices'], options: Question = {}) {
        return await this.inquire<string[]>(message, 'checkbox', { choices, ...options })
    }

    protected async list(message: string, choices: Question['choices'], options: Question = {}) {
        return await this.inquire<string>(message, 'list', { choices, ...options })
    }
}

export namespace Generator {

    export interface Blabla {
        foo: string
    }

}


export default Generator
