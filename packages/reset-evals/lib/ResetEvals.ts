import glob from 'glob'
import { homedir } from 'os';
import { dirname, resolve } from 'path';
import { existsSync, readFileSync, writeFileSync } from 'fs'
import * as inquirer from 'inquirer';
import { rm } from 'shelljs';

export class ResetEvals {
    enableLogger: boolean           = true
    selectDirsGlob: string          = resolve(homedir(), '.*/config/port.lock')
    removeJavaUserPrefsGlob: string = resolve(homedir(), '.java/.userPrefs')

    log(message?: any, ...optionalParams: any[]) {
        if ( ! this.enableLogger ) return this;
        console.log(message, ...optionalParams)
        return this;
    }

    async selectDirs(cb: (paths: string[]) => void = () => null) {
        let files   = glob.sync(this.selectDirsGlob).map(filePath => dirname(filePath));
        let answers = await inquirer.prompt<{ paths: string[] }>([
            { name: 'paths', type: 'checkbox', choices: files }
        ]);

        if ( cb ) cb(answers.paths)
        return answers.paths;
    }

    resetEval(path: string) {
        this.log('Resetting eval for: ', path)
        if ( existsSync(resolve(path, 'eval')) ) {
            rm('-r', resolve(path, 'eval'))
            this.log('removed eval dir')
        }
        if ( existsSync(resolve(path, 'options/options.xml')) ) {
            let content = readFileSync(resolve(path, 'options/options.xml'), 'utf8');
            content     = content.replace(/.*evlsprt.*\n/g, '');
            writeFileSync(resolve(path, 'options/options.xml'), content, 'utf8');
            this.log('cleaned options.xml')
        }
    }

    removeJavaUserPrefs() {
        let path = this.removeJavaUserPrefsGlob;
        if ( existsSync(path) ) {
            rm('-r', path);
            this.log('removed java user prefs')
        }
    }
}
