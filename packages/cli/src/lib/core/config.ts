import * as moment from "moment";
import { Config, getRandomId, IConfig, IConfigProperty, kindOf } from "@radic/util";
import { existsSync, readFileSync, writeFileSync } from "fs-extra";
import * as dotenv from "dotenv";
import { paths, setPaths } from "./paths";
import { unlinkSync } from "fs";
import { container, lazyInject, singleton } from "@radic/console";
import { basename, join } from "path";
import * as globule from "globule";
import { AES, enc, algo } from "crypto-js";
import * as cr from "crypto-js";
import { cloneDeep } from "lodash";

let defaultConfig: any = {
    debug: false,
    env  : {},
    cli  : {
        showCopyright: true
    },
    dgram: {
        server: {
            host: '127.0.0.1',
            port: 41333
        },
        client: {
            host: '127.0.0.1',
            port: Math.round(Math.random() * 10000) + 1000
        }
    },

    commands: {
        ssh  : {
            bins: {
                ssh    : 'ssh',
                sshfs  : 'sshfs',
                sshpass: 'sshpass',
                umount : 'umount'
            }
        },
        git  : {
            tag: {
                regexp: /^(?:(\w*?)(\d*?)|(\d*?))\.(\d*?)\.(?:(\d*?)|(\d*?)-(\w*?))(?:\.(\d*?)|)$/m
            }
        },
        pmove: {
            extensions: [ 'mp4', 'wma', 'flv', 'mkv', 'avi', 'wmv', 'mpg' ]
        }
    }
};

export interface RConfig extends IConfigProperty {
    save(): this

    load(): this

    lock(): this

    unlock(): this

    isLocked(): boolean

    reset(): this
}

@singleton('r.config.crypto')
export class ConfigCrypto {
    protected secretKey: string;

    protected generateSecretKey(): string {
        const secretKey = getRandomId(30);
        writeFileSync(paths.userSecretKeyFile, secretKey, { encoding: 'utf-8' });
        return secretKey;
    }

    protected hasGeneratedSecretKey(): boolean {
        return existsSync(paths.userSecretKeyFile);
    }

    protected getSecretKey(): string {
        if ( kindOf(this.secretKey) === 'string' ) {
            return this.secretKey;
        }
        if ( this.hasGeneratedSecretKey() && this.secretKey === undefined ) {
            this.secretKey = readFileSync(paths.userSecretKeyFile, { encoding: 'utf-8' });
        } else if ( this.secretKey === undefined ) {
            this.secretKey = this.generateSecretKey();
        }
        return this.secretKey;
    }

    encrypt(message: string): string {

        algo.AES.createEncryptor('saf').process('sdf')
        const key       = this.getSecretKey()
        const encrypted = AES.encrypt(message, key, {}).toString();
        return encrypted;
    }

    decrypt(ciphertext: string): string {
        const key   = this.getSecretKey()
        const bytes = AES.decrypt(ciphertext, key)
        // console.log({ bytes, none: bytes.toString(), b64: bytes.toString(enc.Base64), utf8:})
        const decrypted =  bytes.toString(enc.Utf8)
        return decrypted
    }
}

@singleton('r.config.backups')
export class ConfigBackupStore {
    @lazyInject('r.config.crypto')
    crypto: ConfigCrypto;


    create(data: any, encrypt: boolean = true): string {
        const filePath = this.createUniqueFilePath(encrypt);
        if ( kindOf(data) !== 'string' ) {
            data = JSON.stringify(data);
        }
        if ( encrypt ) {
            data = this.crypto.encrypt(data)
        }
        writeFileSync(filePath, data, { encoding: 'utf-8' })
        return basename(filePath, '.js');
    }

    all(): string[] {
        return globule.find(join(paths.dbBackups, '*')).map((filePath: string) => basename(filePath, '.js'));
    }

    get(id: string, decrypt: boolean = true): any {
        let raw: string = readFileSync(join(paths.dbBackups, id + '.js'), 'utf-8')
        if ( decrypt ) {
            raw = this.crypto.decrypt(raw);
        }
        return JSON.parse(raw);
    }

    protected createUniqueFilePath(encrypt: boolean = true): string {
        let totalFiles = globule.find(join(paths.dbBackups, '*')).length;
        let prefix     = encrypt ? '.nocrypt.' : '.crypt.'
        let filePath   = join(paths.backups, totalFiles + prefix + moment().format('YYYY-MM-hh:mm:ss'));

        return filePath;
    }

}


// load .env stuff
function parseEnvVal(val: any) {
    if ( val === 'true' || val === 'false' ) {
        return val === 'true'
    }
    if ( isFinite(val) ) return parseInt(val);
    return val
}

container.ensureInjectable(Config);

export class PersistentFileConfig extends Config {

    @lazyInject('r.config.crypto')
    crypto: ConfigCrypto;

    @lazyInject('r.config.backups')
    backups: ConfigBackupStore;


    isLoaded:boolean=false

    defaultConfig: Object;

    protected saveEnabled: boolean = false;

    constructor(obj: Object,
                protected filePath: string = null,
                public useCrypto: boolean  = true,
                protected autoload: boolean          = true,
                protected autoloadEnv: boolean       = true) {
        super({});
        this.defaultConfig = obj;
        this.filePath      = filePath || paths.userDataConfig;
    }

    protected tryAutoload(){
        if(this.isLoaded){
            return;
        }
        this.isLoaded = true;
        if(this.autoload){
            this.load()
        }
        if(this.autoloadEnv){
            this.loadEnv()
        }
    }


    has(prop?: any): boolean {
        this.tryAutoload();
        return super.has(prop);
    }

    raw(prop?: any): any {
        this.tryAutoload();
        return super.raw(prop);
    }

    get<T extends any>(prop?: any, defaultReturnValue?: any): T {
        this.tryAutoload();
        return super.get(prop, defaultReturnValue);
    }

    set(prop: string, value: any): IConfig {
        this.tryAutoload();
        super.set(prop, value);
        return this.save();
    }

    unset(prop: any): any {
        this.tryAutoload();
        super.unset(prop);
        return this.save();
    }

    merge(...args): this {
        this.tryAutoload();
        super.merge.apply(this, args);
        return this.save();
    }

    save(): this {
        if ( this.saveEnabled === false ) return this;
        if ( ! this.useCrypto ) {
            writeFileSync(this.filePath, JSON.stringify(this.data, null, 4), { encoding: 'utf-8' })
            return this;
        }
        let json      = JSON.stringify(this.data);
        let encrypted = this.crypto.encrypt(json);
        writeFileSync(this.filePath, encrypted, { encoding: 'utf-8' });
        if ( this.isDebug() ) {
            writeFileSync(this.filePath + '.debug.json', JSON.stringify(this.data, null, 4), { encoding: 'utf-8' })
        }
        return this;
    }

    protected isDebug(): boolean {
        return this.get('debug', false) === true;
    }

    load(): this {
        // console.log(process.uptime(), 'load', this.filePath)
        this.data = cloneDeep(this.defaultConfig)
        if ( ! existsSync(this.filePath) ) {
            return this.unlock().save().lock();
        }
        let config = readFileSync(this.filePath, { encoding: 'utf-8' });
        if ( this.useCrypto ) {
            config = this.crypto.decrypt(config)
        }
        let data = JSON.parse(config);
        this.data = {
            ...this.data,
            ...data
        }
        // console.log(process.uptime(), 'loaded', this.filePath)

        return this;
    }

    lock(): this {
        this.saveEnabled = false;
        return this;
    }

    unlock(): this {
        this.saveEnabled = true;
        return this;
    }

    isLocked(): boolean { return this.saveEnabled }

    reset(): this {
        if ( ! existsSync(this.filePath) ) return this;
        unlinkSync(this.filePath);

        let json = JSON.stringify({})
        if ( this.useCrypto ) {
            const encrypted = this.crypto.encrypt(json);
            writeFileSync(this.filePath, encrypted, { encoding: 'utf-8' });
            return this;
        }
        writeFileSync(this.filePath, json, { encoding: 'utf-8' });
        return this;
    }

    backup(encrypt?: boolean): string {
        return this.backups.create(this.data, encrypt !== undefined ? encrypt : this.useCrypto);
    }

    backupWithEncryption(): string {
        return this.backup(true)
    }

    backupWithoutEncryption(): string {
        return this.backup(false)
    }

    restore(id: string, decrypt: boolean = true): this {
        // filePath.includes('.crypt');
        this.data = this.backups.get(id, decrypt);
        return this.save();
    }

    getBackupIds(): string [] {
        return this.backups.all();
    }

    protected loadEnv(): this {
        // console.log(process.uptime(), 'loadEnv', this.filePath)
        if ( existsSync(paths.env) ) {
            let denv = dotenv.parse(<any> readFileSync(paths.env));
            Object.keys(denv).forEach((key: string) => {
                let value = parseEnvVal(denv[ key ]);
                key       = key.replace('_', '.');
                // _config.set('env.'+ key, value)
                // only set if its actually a config key
                // if ( this.has(key) )
                this.set(key, value)
            })
        }

        Object.keys(process.env).forEach(key => {
            key = key.replace('_', '.');
            if ( this.has(key) )
                this.set(key, parseEnvVal(process.env[ key ]));
        })

        // console.log(process.uptime(), 'loadedEnv', this.filePath)
        return this;
    }

    public static makeProperty(config: PersistentFileConfig): RConfig {
        let prop = Config.makeProperty(config);
        [ 'save', 'load', 'lock', 'unlock', 'reset', 'isLocked' ].forEach(fnName => prop[ fnName ] = config[ fnName ].bind(config))
        return <RConfig> prop;
    }
}

export type RCFileKey = 'directory' | 'prefix'

export interface RCFileConfig {
    directory?: string
    prefix?: string
}

export class RCFile {
    protected config: PersistentFileConfig

    constructor() {
        // // console.log(process.uptime(), 'rc init', paths.rcFile)
        this.config = new PersistentFileConfig({}, paths.rcFile, false, true, false);
        // // console.log(process.uptime(), 'rc inited', paths.rcFile)
    }

    reset(): this {
        this.config.reset();
        return this;
    }

    set(key: RCFileKey, value: string): this {
        this.config.set(key, value);
        return this;
    }

    unset(key: RCFileKey): this {
        this.config.unset(key)
        return this;
    }

    get(key: RCFileKey, defaultValue?: string): string {
        return this.config.get<string>(key, defaultValue);
    }

    reload() {
        this.config.load();
        setPaths({}, null, this.get('prefix', null), this.get('directory', '.rcli'));
    }
}


let _config = new PersistentFileConfig(defaultConfig, paths.userDataConfig);
// _config.load(); = autoloaded
// export the wrapped config
export const config: RConfig = PersistentFileConfig.makeProperty(_config);

container.bind<PersistentFileConfig>('r.config.core').toConstantValue(_config);
container.bind<RConfig>('r.config').toConstantValue(config);

const rcfile = new RCFile();
rcfile.reload();
container.constant<RCFile>('r.rcfile', rcfile)

// console.log(process.uptime(), 'core/config')
