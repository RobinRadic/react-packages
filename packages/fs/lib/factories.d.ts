import { File } from './File';
import { Directory } from './Directory';
export declare const make: <T = Directory<import("./Directory").DirectoryOptions> | File<import("./FSItem").FSItemOptions>>(path: string, base?: string, cwd?: string) => T;
export declare const file: (path: string, base?: string, cwd?: string) => File<import("./FSItem").FSItemOptions>;
export declare const directory: (path: string, base?: string, cwd?: string) => Directory<import("./Directory").DirectoryOptions>;
