import * as _npm from 'npm';

interface CommandFunction {
    (args: string[], callback: NPM.CommandCallback): void;

    (args: string[], silent: boolean, callback: NPM.CommandCallback): void;
}

type Commands<T = NPM.Commands> = {
    readonly [P in keyof T]: CommandFunction;
}
let commands: Commands = _npm.commands as any;

export function npm(command: keyof NPM.Commands, npmArgs: string[] = [], silent: boolean = true) {
    return new Promise((res, rej) => {
        _npm.load((err, cl) => {
            if ( err ) return rej(err);
            commands[ command ](npmArgs, silent, (err, ...args) => {
                if ( err ) return rej(err);
                res(args);
            })
        })
    })
}

export async function getLatestVersion(packageName: string) {
    let view = await npm('view', [ packageName ])
    return view[ Object.keys(view)[ 0 ] ].version;
}
