import { existsSync, lstatSync } from 'fs';

export const isFile             = (path: string) => existsSync(path) && ! lstatSync(path).isDirectory();
export const isDirectory        = (path: string) => existsSync(path) && lstatSync(path).isDirectory();
export const resolvePathOptions = (path: string, base?: string, cwd?: string) => {
    cwd = cwd || process.cwd();
    if ( ! base ) {
        base = cwd;
    }
}
