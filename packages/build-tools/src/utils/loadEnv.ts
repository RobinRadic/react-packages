import { resolve } from 'path';
import { load } from 'dotenv';
import { existsSync } from 'fs';

export function loadEnv<T extends any=any>(path?: string): T {
    path = path ? path : resolve(process.cwd(), '.env');
    if ( ! existsSync(path) ) {
        throw new Error(`Could not find .env file at "${path}"`)
    }
    let result = load({
        path
    });
    if ( result.error ) {
        throw result.error
    }
    return result.parsed as any;
}
