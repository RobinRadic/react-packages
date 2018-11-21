import { IPackageJSON } from '@radic/build-tools';
import { resolve } from 'path';
import { merge } from 'lodash';
import { writeFileSync } from 'fs';

export interface Package extends IPackageJSON {}

export class Package {
    constructor(protected _location: string, protected _pkg?: Partial<IPackageJSON>) {
        if ( ! _pkg ) {
            this._pkg = require(this.getPath('package.json'))
        }
        merge(this, _pkg);
    }

    get location(): string {return this._location}

    getPath(...path) {
        return resolve(this.location, ...path)
    }

    toJSON() {return this._pkg}

    extend(data: Partial<IPackageJSON>) {
        let result = merge(this.toJSON(), data);
        this._pkg  = result
        // merge(this, data);
        let json   = JSON.stringify(result, null, 4);
        return {
            result,
            write   : () => writeFileSync(this.getPath('package.json'), json, 'utf8'),
            toString: () => json
        }
    }
}
