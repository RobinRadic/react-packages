import { Question } from 'yeoman-generator';
import Generator from './Generator';
export declare class When {
    protected _ask: Ask;
    protected opts: Question;
    constructor(_ask: Ask, opts: Question);
    readonly ask: Ask;
    when(fn: (answers: any) => boolean): this;
    when(name: string, value: any): this;
    whenNot(name: any, value: any): this;
    whenHas(name: any, value: any): this;
    whenNotHas(name: any, value: any): this;
}
export declare class Ask {
    protected gen: Generator;
    questions: Question[];
    constructor(gen: Generator);
    input(name: Question['name'], message: Question['message'], def?: Question['default'], opts?: Question): When;
    confirm(name: Question['name'], message: Question['message'], def?: Question['default'], opts?: Question): When;
    list(name: Question['name'], message: Question['message'], choices: Question['choices'], def?: Question['default'], opts?: Question): When;
    checkbox(name: Question['name'], message: Question['message'], choices: Question['choices'], def?: Question['default'], opts?: Question): When;
    get(reset?: boolean): Question[];
    prompt(reset?: boolean): Promise<Record<string, any>>;
}
