/// <reference path="../../src/globals.d.ts" />
export declare function npm(command: keyof NPM.Commands, npmArgs?: string[], silent?: boolean): Promise<{}>;
export declare function getLatestVersion(packageName: string): Promise<any>;
