export declare function npm(command: keyof NPM.Commands, npmArgs?: string[], silent?: boolean): Promise<{}>;
export declare function getLatestVersion(packageName: string): Promise<any>;
