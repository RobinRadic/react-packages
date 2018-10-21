import { Generator } from '../../lib';
declare class NodeGenerator extends Generator {
    pkg: Partial<IPackageJSON>;
    prompting(): Promise<void>;
    writing(): Promise<void>;
    _typescript(): Promise<void>;
    install(): void;
    _addDevDependency(packageName: string, withType?: boolean): Promise<void>;
    _addDependency(packageName: string, withType?: boolean): Promise<void>;
}
export = NodeGenerator;
