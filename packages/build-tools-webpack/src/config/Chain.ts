import BaseConfig, { LoaderOptions } from 'webpack-chain';
import { resolve } from 'path';
import { get, has, merge, set, unset } from 'lodash';

export class ChainData {
    constructor(protected _data = {}) {}

    public get   = <T extends any>(path: string, defaultValue?: any): T => {
        return get(this._data, path, defaultValue) as any
    }
    public set   = (path: string, value: any): this => {
        set(this._data, path, value);
        return this;
    }
    public has   = (path: string): boolean => {
        return has(this._data, path)
    }
    public unset = (path: string): this => {
        unset(this._data, path);
        return this;
    }
    public merge = (data: any): this => {
        merge(this._data, data);
        return this;
    }
}

export class Chain extends BaseConfig {
    data: ChainData;

    get isDev(): boolean { return this.get('mode') === 'development'}

    get isProd(): boolean { return this.get('mode') === 'production'}

    constructor(protected _options: InitBaseOptions) {
        super()
        this.data = new ChainData();
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
