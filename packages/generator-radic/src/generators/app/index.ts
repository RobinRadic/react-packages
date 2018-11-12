import Generator from '../../lib/Generator';


class AppGenerator extends Generator {

    protected answers:{
        generators:string[]
    }

    async prompting(){
        this.answers = await this
            .ask.checkbox('generators', 'Select generators to run', ['node', 'git'])
            .ask.prompt() as any;
    }

    writing() {
        this.log('method 1 just ran', this.determineAppname());
        this.answers.generators.forEach(name => {
            this.composeWith('radic:' + name, {});
        })
    }

}
export = AppGenerator
