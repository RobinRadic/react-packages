import { Question } from 'yeoman-generator';
import Generator from './Generator';

export class When {
    constructor(protected _ask: Ask, protected opts: Question) {}

    get ask(): Ask {return this._ask}

    when(fn: (answers:any) => boolean) : this
    when(name:string, value:any) : this
    when(...args) : this {
        this.opts.when = args.length === 1 ? args[0] : (answers) => answers[ args[0] ] === args[1]
        return this
    }

    whenNot(name, value) {
        this.opts.when = answers => answers[ name ] === value
        return this
    }

    whenHas(name, value) {
        this.opts.when = answers => answers[ name ].includes(value)
        return this
    }

    whenNotHas(name, value) {
        this.opts.when = answers => answers[ name ].includes(value) === false
        return this
    }
}

export class Ask {
    questions: Question[] = []

    constructor(protected gen: Generator) {}

    input(name: Question['name'], message: Question['message'], def?: Question['default'], opts: Question = {}) {
        opts = { type: 'input', name, message, default: def, ...opts };
        this.questions.push(opts)
        return new When(this, opts);
    }

    confirm(name: Question['name'], message: Question['message'], def?: Question['default'], opts: Question = {}) {
        opts = { type: 'confirm', name, message, default: def, ...opts };
        this.questions.push(opts)
        return new When(this, opts);
    }

    list(name: Question['name'], message: Question['message'], choices: Question['choices'], def?: Question['default'], opts: Question = {}) {
        opts = { type: 'list', name, message, choices, default: def, ...opts };
        this.questions.push(opts)
        return new When(this, opts);
    }

    checkbox(name: Question['name'], message: Question['message'], choices: Question['choices'], def?: Question['default'], opts: Question = {}) {
        opts = { type: 'checkbox', name, message, choices, default: def, ...opts };
        this.questions.push(opts)
        return new When(this, opts);
    }

    get(reset = true): Question[] {
        let questions = this.questions;
        if ( reset ) {
            this.questions = [];
        }
        return questions
    }

    prompt(reset = true): Promise<Record<string, any>> {
        return this.gen.prompt(this.get(reset));
    }
}