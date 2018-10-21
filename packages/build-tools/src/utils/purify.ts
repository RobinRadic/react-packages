import * as glob from 'glob';
import * as fs from 'fs';
import * as path from 'path';

const gzipSize = require('gzip-size');
const filesize = require('filesize');

function getSize(size) {
    return (size / 1024).toFixed(2) + 'kb'
}

export const purify = async function (cssGlob: string, jsGlobs: string) {
    const css       = glob.sync(cssGlob); //path.join(__dirname, '../prod/**/*.css'));
    const js        = glob.sync(jsGlobs); //path.join(__dirname, '../prod/**/*.js'));
    const purifycss = require('purify-css');
    return Promise.all(css.map(function (file) {
        return new Promise(function (resolve) {
            purifycss(js, [ file ], { minify: true }, function (purified) {
                const oldSize = fs.statSync(file).size;
                fs.writeFileSync(file, purified)
                const newSize = fs.statSync(file).size;

                console.log(
                    ` ${path.basename(file)} by ${((1 - newSize / oldSize) * 100).toFixed(2)}%\n`,
                    `        from : ${filesize(oldSize)} \n`,
                    `          to : ${filesize(newSize)} / ${filesize(gzipSize.sync(purified))}  (gzip)\n`,
                    ``
                )
                resolve()
            })
        })
    }))

}
