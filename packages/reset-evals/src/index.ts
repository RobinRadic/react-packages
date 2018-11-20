import glob from 'glob'
import { homedir } from 'os';
import { dirname, resolve } from 'path';
// noinspection ES6UnusedImports
import { existsSync, readFileSync, rmdirSync, statSync, writeFileSync } from 'fs'
import * as inquirer from 'inquirer';
import { rm } from 'shelljs';

let homeDir = homedir();

async function selectDirs(cb: (paths: string[]) => void) {
    let files   = glob.sync(resolve(homeDir, '.*/config/port.lock')).map(filePath => dirname(filePath));
    let answers = await inquirer.prompt<{ paths: string[] }>([
        { name: 'paths', type: 'checkbox', choices: files }
    ]);
    cb(answers.paths)
}

function resetEval(path: string) {
    console.log('Resetting eval for: ', path)
    if ( existsSync(resolve(path, 'eval')) ) {
        rm('-r', resolve(path, 'eval'))
        console.log('removed eval dir')
    }
    if ( existsSync(resolve(path, 'options/options.xml')) ) {
        let content = readFileSync(resolve(path, 'options/options.xml'), 'utf8');
        content     = content.replace(/.*evlsprt.*\n/g, '');
        writeFileSync(resolve(path, 'options/options.xml'), content, 'utf8');
        console.log('cleaned options.xml')
    }
}

function removeJavaUserPrefs() {
    let path = resolve(homeDir, '.java/.userPrefs');
    if ( existsSync(path) ) {
        rm('-r', path);
        console.log('removed java user prefs')
    }
}

selectDirs(paths => {
    console.log('Selected paths', paths)
    paths.forEach(path => resetEval(path));
    removeJavaUserPrefs();
});


