///<reference path="../../types/globals.d.ts"/>

const prettyFormat = require('pretty-format');

/**
 * Serialization code were copied from Jest.
 *
 * https://github.com/facebook/jest/blob/6979b8e27e88735bfed997d84393f291c8a0a21d/packages/jest-snapshot/src/plugins.js#L23-L30
 */
let serializationPlugins = [
    prettyFormat.plugins.DOMCollection,
    prettyFormat.plugins.DOMElement,
    prettyFormat.plugins.Immutable,
    prettyFormat.plugins.ReactElement,
    prettyFormat.plugins.ReactTestComponent
];

function addSerializer(plugin) {
    serializationPlugins = [ plugin ].concat(serializationPlugins);
}

function serialize(data) {
    return prettyFormat(data, {
        escapeRegex      : true,
        plugins          : serializationPlugins,
        printFunctionName: false
    });
}

function snapshotPath(node) {
    const path = [];
    while ( node && node.parent ) {
        path.push(node.title);
        node = node.parent;
    }
    return path.reverse();
}

function matchSnapshot(chai, utils) {
    const context: MochaContext = global.__mocha_context__;
    const snapshotState         = global.__snapshot__;

    utils.addMethod(chai.Assertion.prototype, 'matchSnapshot', aMethodForExpect);
    chai.assert.matchSnapshot = aMethodForAssert;

    function aMethodForAssert(lang, update, msg) {
        // This basically wraps the 'expect' version of the assertion to allow using 'assert' syntax.
        return new chai.Assertion(lang, update, msg).to.matchSnapshot();
    }

    function aMethodForExpect(lang, update) {
        const obj   = serialize(chai.util.flag(this, 'object'));
        let index, path
        try {
            const index = context.index++;
            let path;
            // For a hook, use the currentTest for path
            //@ts-ignore
            if ( context._runnable.type === 'hook' ) {
                //@ts-ignore
                path = snapshotPath(context.runnable.ctx.currentTest);
            } else {
                path = snapshotPath(context.runnable);
            }
        } catch(e){
            return
        }

        if ( update || snapshotState.update ) {
            snapshotState.set(path, index, obj, lang);
        } else {
            const snapshot = snapshotState.get(path, index);
            if ( ! snapshot ) {
                snapshotState.set(path, index, obj, lang);
            } else {
                if ( ! snapshotState.match(obj, snapshot.code) ) {
                    throw new chai.AssertionError('Received value does not match stored snapshot ' + index, {
                        actual  : obj,
                        expected: snapshot.code,
                        showDiff: true
                    }, chai.util.flag(this, 'ssfi'));
                }
            }
        }
    }
}

export { addSerializer, matchSnapshot }
