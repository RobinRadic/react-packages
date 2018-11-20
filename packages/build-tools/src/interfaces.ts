/**
 * An author or contributor
 */
export interface IPackageJSONAuthor {
    name: string;
    email?: string;
    homepage?: string;
}

/**
 * A map of exposed bin commands
 */
export interface IPackageJSONBinMap {
    [ commandName: string ]: string;
}

/**
 * A bugs link
 */
export interface IPackageJSONBugs {
    email: string;
    url: string;
}

export interface IPackageJSONConfig {
    name?: string;
    config?: Object;
}

/**
 * A map of dependencies
 */
export interface IPackageJSONDependencyMap {
    [ dependencyName: string ]: string;
}

/**
 * CommonJS package structure
 */
export interface IPackageJSONDirectories {
    lib?: string;
    bin?: string;
    man?: string;
    doc?: string;
    example?: string;
}

export interface IPackageJSONEngines {
    node?: string;
    npm?: string;
}

export interface IPackageJSONPublishConfig {
    registry?: string;
}

/**
 * A project repository
 */
export interface IPackageJSONRepository {
    type: string;
    url: string;
}

export interface IPackageJSONScriptsMap {
    [ scriptName: string ]: string;
}

export interface IPackageJSONWorkspaces {
    packages:string[]
    nohoist:string[]
}
export interface IPackageJSON extends Object {

    [ key: string ]: any


    readonly name: string;

    readonly version?: string;

    readonly description?: string;

    readonly keywords?: string[];

    readonly homepage?: string;

    readonly bugs?: string | IPackageJSONBugs;

    readonly license?: string;

    readonly author?: string | IPackageJSONAuthor;

    readonly contributors?: string[] | IPackageJSONAuthor[];

    readonly files?: string[];

    readonly main?: string;

    readonly bin?: string | IPackageJSONBinMap;

    readonly man?: string | string[];

    readonly directories?: IPackageJSONDirectories;

    readonly repository?: string | IPackageJSONRepository;

    readonly scripts?: IPackageJSONScriptsMap;

    readonly config?: IPackageJSONConfig;

    readonly dependencies?: IPackageJSONDependencyMap;

    readonly devDependencies?: IPackageJSONDependencyMap;

    readonly peerDependencies?: IPackageJSONDependencyMap;

    readonly optionalDependencies?: IPackageJSONDependencyMap;

    readonly bundledDependencies?: string[];

    readonly engines?: IPackageJSONEngines;

    readonly os?: string[];

    readonly cpu?: string[];

    readonly preferGlobal?: boolean;

    readonly private?: boolean;

    readonly publishConfig?: IPackageJSONPublishConfig;

    readonly workspaces?:IPackageJSONWorkspaces | string[]

    readonly resolutions?:IPackageJSONDependencyMap
}
