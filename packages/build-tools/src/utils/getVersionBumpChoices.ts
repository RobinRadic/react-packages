import semver from 'semver';


export function getVersionBumpChoices(currentVersion: string):Array<{value:string,name:string}> {
    const patch = semver.inc(currentVersion, 'patch');
    const minor = semver.inc(currentVersion, 'minor');
    const major = semver.inc(currentVersion, 'major');

    const choices = [
        { value: patch, name: `Patch (${patch})` },
        { value: minor, name: `Minor (${minor})` },
        { value: major, name: `Major (${major})` }
    ]

    return choices;
}
