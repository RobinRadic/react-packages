import { Generator } from '../../lib';
declare class BuildToolsGenerator extends Generator {
    pkg: Partial<IPackageJSON>;
    tools: {
        gulp: boolean;
        webpack: boolean;
        monorepo: boolean;
    };
    prompting(): Promise<void>;
    writing(): Promise<void>;
    install(): void;
    _addDevDependency(packageName: string, withType?: boolean): Promise<void>;
    _addDependency(packageName: string, withType?: boolean): Promise<void>;
    _addScripts(scripts: Record<string, string>): void;
}
export = BuildToolsGenerator;
