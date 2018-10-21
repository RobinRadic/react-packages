import BaseConfig, { LoaderOptions } from 'webpack-chain';
import { resolve } from 'path';

export class Chain extends BaseConfig {
    get isDev(): boolean { return this.get('mode') === 'development'}

    get isProd(): boolean { return this.get('mode') === 'production'}

    constructor(protected _options: InitBaseOptions) {
        super()
    }

    srcPath = (...parts) => resolve(this._options.sourceDir, ...parts);
    outPath = (...parts) => resolve(this._options.outputDir, ...parts);

    addLoader = (ruleName: string, loaderName: string, options: LoaderOptions = {}) => this.module.rule(ruleName).use(loaderName).loader(loaderName).options(options).end()
    getLoader = (ruleName: string, loaderName: string) => this.module.rules.get(ruleName).uses.get(loaderName)
}

export interface InitBaseOptions {
    mode: 'production' | 'development'
    sourceDir?: string
    outputDir?: string
    entryName?: string
    entryFileName: string,
}
