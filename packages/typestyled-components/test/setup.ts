///<reference path="../types/index.d.ts"/>
///<reference path="../types/globals.d.ts"/>

import * as Mocha from 'mocha'
import 'chai/register-assert'; // Using Assert style
import 'chai/register-expect'; // Using Expect style
import 'chai/register-should'; // Using Should style
import chai from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import chaiEnzyme from 'chai-enzyme'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { JSDOM } from 'jsdom'
import jestSnapshot from 'jest-snapshot';
import { getMochaContext } from './_support/BaseClass';
import { matchSnapshot } from './_support/chai-snapshot';


sinon.assert.expose(chai.assert, { prefix: '' });
chai.use(chaiEnzyme())
chai.use(sinonChai);
chai.use(matchSnapshot);

configure({ adapter: new Adapter() });

const jsdom                  = new JSDOM('<!doctype html><html><body></body></html>', {});
const { window }             = jsdom;
global.window                = window;
global.document              = window.document;
global.focus                 = window.focus
global.navigator             = { userAgent: 'node.js' };
global.requestAnimationFrame = function (callback) { return setTimeout(callback, 0); };
global.cancelAnimationFrame  = function (id) { clearTimeout(id); };

function copyProps(src, target) {
    Object.defineProperties(target, {
        ...Object.getOwnPropertyDescriptors(src),
        ...Object.getOwnPropertyDescriptors(target)
    });
}

copyProps(window, global);



// chai.use((chai1: any, utils: any) => {
//     chai1[ 'Assertion' ].addMethod('matchSnapshot', function (name: string) {
//         let obj = this[ '_obj' ];
//         let ctx = getMochaContext();
//         let file = ctx.test ? ctx.test.file : ctx.file;
//
//         const snapshotState = new jestSnapshot.SnapshotState(file, {
//             updateSnapshot: process.env.SNAPSHOT_UPDATE ? 'all' : 'new'
//         });
//
//         const matcher = jestSnapshot.toMatchSnapshot.bind({
//             snapshotState,
//             currentTestName: makeTestTitle(ctx.test)
//         });
//
//         const result = matcher(this.actual, name);
//         snapshotState.save();
//
//         let a = assert(result.pass);
//
//         // expect.assert(result.pass, ! result.pass ? result.report() : '');
//
//         return this;
//     })
// })

function makeTestTitle(test) {
    let next    = test;
    const title = [];

    for ( ; ; ) {
        if ( ! next.parent ) {
            break;
        }

        title.push(next.title);
        next = next.parent;
    }

    return title.reverse().join(' ');

}

// chai.use((chai1: any, utils: any) => {        chai1[ 'Assertion' ].addMethod('snapshot', function (this: Chai.ChaiStatic, name: string, data: any) {let obj = this[ '_obj' ];let a = 'a';        })    })
