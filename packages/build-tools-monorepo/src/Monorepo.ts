import { merge } from 'lodash';
import { getJSONFile, getPackages } from './utils';
import { IPackageJSON } from '@radic/build-tools';
import { ILernaJSON, PackageInfo } from './interfaces';

export interface MonorepoConstructorOptions {
    cwd?: string
}

export class Monorepo {
    cwd?: string
    packageConfig?: IPackageJSON
    lernaConfig?: ILernaJSON


    useLerna: boolean                = false
    private _packages: PackageInfo[] = null

    constructor(options: MonorepoConstructorOptions = {}) {
        options = merge(<MonorepoConstructorOptions>{
            cwd: process.cwd()
        }, options)

        this.cwd = options.cwd

        this.packageConfig = getJSONFile<IPackageJSON>(this.cwd, 'package.json')
        try {
            this.lernaConfig = getJSONFile<ILernaJSON>(this.cwd, 'lerna.json')
            this.useLerna    = true;
        } catch {}
    }

    get packageGlobs(): string[] {
        if ( this.useLerna && ! this.lernaConfig.useWorkspaces ) {
            return this.lernaConfig.packages;
        }
        return Array.isArray(this.packageConfig.workspaces.packages) ? this.packageConfig.workspaces.packages : this.packageConfig.workspaces as any;
    }

    get packages(): PackageInfo[] {
        if ( ! this._packages ) {
            this._packages = getPackages(this.packageGlobs);
        }
        return this._packages;
    }

    hasPackage(name: string): boolean {
        return this.getPackage(name) !== undefined;
    }

    getPackage(name: string): PackageInfo | undefined {
        return this.packages.find(pkg => pkg.package.name === name);
    }
}
