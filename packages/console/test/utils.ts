import { suite, test } from 'mocha-typescript';
import { Cli, CliConfig, CommandArgumentConfig, CommandConfig, container, defaults, ParseArgumentsFunction, PrepareArgumentsFunction } from '../';
import { bootstrap } from './_support/bootstrap';
import { assert, should } from 'chai'

const parseArguments   = container.get<ParseArgumentsFunction>('cli.fn.arguments.parse');
const prepareArguments = container.get<PrepareArgumentsFunction>('cli.fn.arguments.prepare');


@suite
class CommandArguments {
    config: CommandConfig;
    static cli: Cli

    static before() {
        let helpers = {
            // input: {},
            // output: {},
            // help: {
            //     addShowHelpFunction: true,
            //     showOnError        : true,
            //     option             : { enabled: true }
            // },
            // verbose: {
            //     option: { key: 'v', name: 'verbose' }
            // }
        }
        let config  = <CliConfig> {
            // commands: {
            //     onMissingArgument: 'help'
            // }
        }
        this.cli    = bootstrap(helpers, config);
    }

    before() {
        function Cmd() {}

        this.config = defaults.command(Cmd);
    }

    protected prepare(argDef: string, cmdName: string = 'testcmd'): CommandConfig {
        let config = prepareArguments<CommandConfig>({
            ...this.config,
            name: `${cmdName}\n${argDef}`
        });
        return config;
    }

    @test
    testPrepareNameAndAlias() {
        const { name, alias } = this.prepare('', 'foobar|foo')
        name.should.eq('foobar');
        alias.should.eq('foo')
    }

    @test
    testPrepareNameAndSameAlias() {
        const { name, alias } = this.prepare('', 'foobar|foobar')
        name.should.eq('foobar');
        should().equal(alias, null)
    }

    @test
    testPrepareNameAndNumberLen3Alias() {
        const { name, alias } = this.prepare('', 'foobar|3')
        name.should.eq('foobar');
        alias.should.eq('foo')
    }

    @test
    testPrepareNameAndNumberLen1Alias() {
        const { name, alias } = this.prepare('', 'foobar|1')
        name.should.eq('foobar');
        alias.should.eq('f')
    }


    @test
    testPrepareArgumentVariations() {
        let a: CommandArgumentConfig[];

        a = this.prepare(`[name:string]`).arguments;
        a[ 0 ].name.should.eq('name')
        a[ 0 ].type.should.eq('string')
        a[ 0 ].variadic.should.be.false;
        assert.equal(a[ 0 ].default, null);
        // a[0].default.should.be.null;
        a[ 0 ].description.should.eq('')

        a = this.prepare(`[name:string="defname"@the name]`).arguments;
        a[ 0 ].name.should.eq('name')
        a[ 0 ].type.should.eq('string')
        a[ 0 ].variadic.should.be.false;
        a[ 0 ].default.should.eq('defname')
        a[ 0 ].description.should.eq('the name')
    }

    @test
    testPrepareMultiArgumentVariations() {
        let a = this.prepare(`
[name:string="asdfrr"@the string for this]
[projects:string[]=["asdf","ffd"]@project key or keys]
[num:number=123@single number]
[nums:number[]=[123,321]@array of numbers]
[bool:boolean=true@signle boolean]
[bools:boolean[]=[true,false,true]@array of booleans]`).arguments;

        a[ 0 ].name.should.eq('name')
        a[ 0 ].type.should.eq('string')
        a[ 0 ].default.should.eq('asdfrr')
        a[ 0 ].description.should.eq('the string for this')

        a[ 1 ].name.should.eq('projects')
        a[ 1 ].type.should.eq('string')
        a[ 1 ].variadic.should.be.true;
        a[ 1 ].default.should.contain.ordered.members([ 'asdf', 'ffd' ])
        a[ 1 ].description.should.eq('project key or keys')

        a[ 2 ].name.should.eq('num')
        a[ 2 ].type.should.eq('number')
        a[ 2 ].default.should.eq(123)
        a[ 2 ].description.should.eq('single number')

        a[ 3 ].name.should.eq('nums')
        a[ 3 ].type.should.eq('number')
        a[ 3 ].variadic.should.be.true;
        a[ 3 ].default.should.contain.ordered.members([ 123, 321 ])
        a[ 3 ].description.should.eq('array of numbers')
    }

    @test
    testPrepareArgumentsDefaults() {
        let a = this.prepare(`
[name:string="asdfrr"@the string for this]
[projects:string[]=["asdf","ffd"]@project key or keys]
[num:number=123@single number]
[nums:number[]=[123,321]@array of numbers]
[bool:boolean=true@signle boolean]
[bools:boolean[]=[true,false,true]@array of booleans]`).arguments;
        a[ 0 ].default.should.eq('asdfrr');
        a[ 1 ].default.should.contain.ordered.members([ 'asdf', 'ffd' ])
        a[ 2 ].default.should.eq(123);
        a[ 3 ].default.should.contain.ordered.members([ 123, 321 ])
        a[ 4 ].default.should.eq(true)
        a[ 5 ].default.should.contain.ordered.members([ true, false, true ])
    }

    // @test testParseArgumentsSome() {
    //     let parsed = parseArguments([ 'foo', 'bar', 'laat', 'die' ], this.config.arguments);
    //     let a      = parsed.arguments
    //     a[ 'name' ].should.eq('foo');
    //     a[ 'projects' ].should.contain.ordered.members([ 'bar', 'laat', 'die' ])
    //
    //     a[ 'num' ].should.eq(123);
    //     a[ 'nums' ].should.contain.ordered.members([ 123, 321 ])
    //     a[ 'bool' ].should.eq(true)
    //     a[ 'bools' ].should.contain.ordered.members([ true, false, true ])
    // }
}
