export interface ILernaJSON {
    packages?: string[]
    command?: Record<string, object>
    ignoreChanges?: string
    lerna?: string
    npmClient?: 'npm' | 'yarn'
    useWorkspaces?: boolean
    version?: 'independent' | string
}
