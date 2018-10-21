import { readFileSync } from 'fs';
import { utils } from '@radic/build-tools';
import { Chain } from '../config';
import chalk from 'chalk';
import { build } from '../tasks/build';
import { serve } from '../tasks/serve';
import * as webpack from 'webpack';

export class GulpWebpackMixin {

    get chain(): Chain { return this.webpack.chain }

    protected webpack: { chain: Chain, config: webpack.Configuration }

    protected async serve() {
        return serve(this.chain)
    }

    protected async build() {
        return build(this.chain)
    }

    protected async purify() {
        return utils.purify(
            this.chain.outPath('**/*.css'),
            this.chain.outPath('**/*.js')
        );
    }

    protected async minify(jsFileGlobs: string[] = [ '**/*.js', '!**/*.min.js' ], minifyOptions: any = {}, overrides: any = {}) {
        jsFileGlobs = jsFileGlobs.map(glob => glob.startsWith('!') ? '!' + this.chain.outPath(glob.substring(1)) : this.chain.outPath(glob))
        return utils.minify(jsFileGlobs, minifyOptions, overrides)
    }

    protected reportFileSizes(globs: string[] = [ '!**/*.hot-update.js', '**/*.css', '**/*.js' ]) {
        globs         = globs.map(glob => glob.startsWith('!') ? '!' + this.chain.outPath(glob.substring(1)) : this.chain.outPath(glob))
        let fileSizes = utils.reportFileSizes(globs, { returnOutput: true });
        console.log(`
${chalk.bold('Output file size report:')}
------------------------------------
${fileSizes}------------------------------------
`);
    }

    protected reportBundleSize() {
        let filePath   = this.chain.outPath('bundle-size.txt');
        let bundleSize = readFileSync(filePath, 'utf8')
        console.log(`
${chalk.bold('Bundle size report:')}
------------------------------------
${bundleSize}------------------------------------
`);
    }
}
