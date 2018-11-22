import * as inquirer from 'inquirer';
import { getProcessForPort, getProcessIdOnPort } from './getProcessForPort';

import isRoot from 'is-root';
import detect from 'detect-port-alt';
import chalk from 'chalk';
import { clearConsole } from './clearConsole';
import { execSync, ExecSyncOptionsWithStringEncoding } from 'child_process';

const isInteractive = process.stdout.isTTY;

const execOptions: ExecSyncOptionsWithStringEncoding = {
    encoding: 'utf8',
    stdio   : [
        'pipe', // stdin (default)
        'pipe', // stdout (default)
        'ignore' //stderr
    ]
};
export function choosePort(host, defaultPort) {
    return detect(defaultPort, host).then(port => new Promise(resolve => {
            if ( port === defaultPort ) {
                return resolve(port);
            }
            const message =
                      process.platform !== 'win32' && defaultPort < 1024 && ! isRoot()
                      ? `Admin permissions are required to run a server on a port below 1024.`
                      : `Something is already running on port ${defaultPort}.`;
            if ( isInteractive ) {
                clearConsole();
                const existingProcess = getProcessForPort(defaultPort);
                const question        = {
                    type   : 'confirm',
                    name   : 'shouldKillProcess',
                    message:
                        chalk.yellow(
                            message +
                            `${existingProcess ? ` Probably:\n  ${existingProcess}` : ''}`
                        ) + '\n\nWould you like to kill the process?',
                    default: true
                };
                inquirer.prompt(question).then((answer: any) => {
                    if ( answer.shouldKillProcess ) {
                        execSync('kill ' + getProcessIdOnPort(defaultPort));
                        resolve(null);
                    } else {
                        resolve(null);
                    }
                });
            } else {
                console.log(chalk.red(message));
                resolve(null);
            }
        }),
        err => {
            throw new Error(
                chalk.red(`Could not find an open port at ${chalk.bold(host)}.`) +
                '\n' +
                ('Network error message: ' + err.message || err) +
                '\n'
            );
        }
    );
}
