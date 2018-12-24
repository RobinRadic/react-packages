import { command, CommandArguments, CommandConfig, Dispatcher, InputHelper, inject, LoggerInstance, OutputHelper } from "@radic/console";
import { RConfig } from "../../";
import { Credential } from "../../database/Models/Credential";
import { Database } from '../../database';

@command(`list`
    , 'List all added service credentials', <CommandConfig> {
        onMissingArgument: 'help'
    })
export class AuthListCmd {

    @inject('cli.helpers.output')
    out: OutputHelper;

    @inject('cli.helpers.input')
    ask: InputHelper;

    @inject('r.log')
    log: LoggerInstance;

    @inject('r.config')
    config: RConfig

    @inject('cli.events')
    events: Dispatcher;

    @inject('r.db')
    db: Database;


    async handle(args: CommandArguments, ...argv: any[]) {
        this.db.connect();
        return Credential.query()
            .then((creds: Credential[]) => {
                this.out.line(`You have ${creds.length} service credentials`)

                if ( creds.length > 0 ) {
                    this.out.nl.columns(creds, {
                        columns    : [ 'name', 'service', 'method' ],
                        showHeaders: true
                    })
                    this.out.line();
                }
            })
            .catch((err) => {
                return Promise.reject(err)
            })

    }

}
export default AuthListCmd