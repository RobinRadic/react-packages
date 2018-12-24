import { helper } from '../../';
import { Questions, Answers, ChoiceType, DateType, Inquirer, MessageType, objects, Question, QuestionType, Separator, SourceType, TimeType } from 'inquirer';

import { CliExecuteCommandParseEvent, Config, inject } from '../../core';
import * as _ from 'lodash';
import { kindOf } from '@radic/util';
import { InputHelperOptionsConfig } from '../../interfaces';

export interface CheckListItem extends objects.ChoiceOption {
    name?: string
    disabled?: string
    checked: boolean
    value?: string
}

@helper('input', {
    singleton: true,
    config   : {
        registerPrompts: (inquirer: Inquirer) => {}
    },
    listeners: {
        'cli:execute:parse': 'onExecuteCommandParse'
    }
})
export class InputHelper {
    @inject('cli.config')
    protected _config: Config

    public get types(): QuestionType[] { return [ 'input', 'confirm', 'list', 'rawlist', 'expand', 'checkbox', 'password', 'autocomplete', 'datetime' ] }

    config: InputHelperOptionsConfig

    public onExecuteCommandParse(event: CliExecuteCommandParseEvent) {
        let promptNames = Object.keys(this.inquirer.prompts);
        if ( ! promptNames.includes('autocomplete') ) this.inquirer.registerPrompt('autocomplete', require('inquirer-autocomplete-prompt'))
        if ( ! promptNames.includes('datetime') ) this.inquirer.registerPrompt('datetime', require('inquirer-datepicker-prompt'))

        if ( kindOf(this.config.registerPrompts) === 'function' ) {
            this.config.registerPrompts(this.inquirer)
        }
    }

    async ask(message: MessageType, def?: string): Promise<string> {
        return this.prompt<string>({ default: def, type: 'input', message })
    }


    async confirm(message: MessageType, def?: string): Promise<boolean> {
        return this.prompt<boolean>({ type: 'confirm', default: def, message })
    }

    async list(msg: MessageType, choices: ChoiceType[] | Array<objects.ChoiceOption>, validate?: (answer) => boolean): Promise<string> {
        return this.multiple<string>(msg, 'list', choices, validate);
    }

    async rawlist(msg: MessageType, choices: ChoiceType[] | Array<objects.ChoiceOption>, validate?: (answer) => boolean): Promise<string> {
        return this.multiple<string>(msg, 'rawlist', choices, validate);
    }

    async expand(msg: MessageType, choices: ChoiceType[] | Array<objects.ChoiceOption>, validate?: (answer) => boolean): Promise<string> {
        return this.multiple<string>(msg, 'expand', choices, validate);
    }

    async checkbox(msg: MessageType, choices: ChoiceType[] | Array<objects.ChoiceOption>, validate?: (answer) => boolean): Promise<string[]> {
        return this.multiple<string[]>(msg, 'checkbox', choices, validate);
    }

    async password(message: MessageType, def?: string, validate?: (answer) => boolean): Promise<string> {
        return this.prompt<string>({ type: 'password', default: def, message, validate })
    }

    async autocomplete(message: MessageType, source: string[] | SourceType, suggestOnly: boolean = false, validate?: (answer) => boolean): Promise<string> {
        let src: SourceType = <SourceType> source;
        if ( kindOf(source) === 'array' ) {
            src = (answersSoFar, input): Promise<any> => {
                return Promise.resolve((<string[]> source).filter((name) => {
                    return name.startsWith(input);
                }))
            }
        }

        return this.prompt<string>({ type: 'autocomplete', message, source: src, suggestOnly, validate })
    }

    /**
     *
     * @link https://github.com/DerekTBrown/inquirer-datepicker-prompt
     * @link https://www.npmjs.com/package/dateformat
     *
     * @returns {Promise<string>}
     */
    async datetime(message: MessageType, date?: DateType, time?: TimeType, format: string[] = [ 'd', '/', 'm', '/', 'yyyy', ' ', 'HH', ':', 'MM', ':', 'ss' ]): Promise<string> {
        return this.prompt<string>({ type: 'datetime', message, date, time, format })

    }

    async multiple<T>(message: MessageType, type: QuestionType, choices: ChoiceType[] | Array<objects.ChoiceOption>, validate?: (answer) => boolean): Promise<T> {
        let prompt = { type, message, choices }
        if ( validate ) {
            prompt[ 'validate' ] = validate;
        }
        return this.prompt<T>(prompt)
    }

    async prompts(questions: Questions): Promise<Answers> {
        return this.inquirer.prompt(questions);
    }

    async prompt<T extends any>(question: Question): Promise<T> {
        question.name = 'prompt'
        return this.inquirer.prompt([ question ])
            .then((answers) => Promise.resolve(<T>answers.prompt))
            .catch(e => Promise.reject(e))
    }

    async interact(message: string, type: string = 'input', opts: Question = {}, def?: string) {
        return <Promise<string>> new Promise((resolve, reject) => {
            let question = _.merge({ name: 'ask', message, type, default: def }, opts)
            this.inquirer.prompt(question).then(answers => resolve(answers.ask)).catch(e => reject(e))
        })
    }

    get inquirer(): Inquirer {
        return require('inquirer')
    }
}
