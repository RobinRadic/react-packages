import { Inquirer, Question } from 'inquirer';

export class GulpInteractiveMixin {
    private get inquirer(): Inquirer { return require('inquirer')}

    protected async inquire<T>(message: string, type: string = 'input', options: Question = {}): Promise<T> {
        options     = { name: 'question', message, type, ...options }
        let answers = await this.inquirer.prompt(options);
        return answers.question;
    }

    protected async ask(message: string, defaultValue?: string, options: Question = {}) {
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
