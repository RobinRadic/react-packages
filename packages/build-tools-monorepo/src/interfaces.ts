import { IPackageJSON } from '@radic/build-tools';

export interface PackageInfo {
    location: string,
    package: IPackageJSON
}
export interface ILernaJSON {
    packages?: string[]
    command?: Record<string, object>
    ignoreChanges?: string
    lerna?: string
    npmClient?: 'npm' | 'yarn'
    useWorkspaces?: boolean
    version?: 'independent' | string
}
