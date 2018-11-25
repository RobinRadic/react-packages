///<reference path="../../types/globals.d.ts"/>


export function chaiSnapshot(chai, utils) {

    utils.addMethod(chai.Assertion.prototype, 'matchSnapshot', aMethodForExpect);
    chai.assert.matchSnapshot = aMethodForAssert;

    function aMethodForAssert(...args: any[]) {
        // This basically wraps the 'expect' version of the assertion to allow using 'assert' syntax.
        return new chai.Assertion(...args).to.matchSnapshot();
    }

    function aMethodForExpect(key?: string, replaceName: boolean = false) {
        const context: MochaContext = global.__mocha_context__;
        let name                    = context.test.title;
        const value                 = this._obj;
        if ( key ) {
            name = replaceName ? key : name + '_' + key
        }
        require('snap-shot-it')(name, value);
    }
}

