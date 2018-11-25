import { isFile } from './utils';
import { resolve } from 'path';
import { File } from './File';
import { Directory } from './Directory';


export const make      = <T = File | Directory>(path: string, base?: string, cwd?: string): T => (isFile(resolve(path)) ? new File({ path, base, cwd }) : new Directory({ path, base, cwd })) as any
export const file      = (path: string, base?: string, cwd?: string): File => new File({ path, base, cwd })
export const directory = (path: string, base?: string, cwd?: string): Directory => new Directory({ path, base, cwd })
