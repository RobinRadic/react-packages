///<reference path="../../types/index.d.ts"/>
///<reference path="../../types/globals.d.ts"/>

// import * as Mocha from 'mocha'
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
import { chaiSnapshot } from './chai-snapshot';

sinon.assert.expose(chai.assert, { prefix: '' });

chai.use(chaiEnzyme())
chai.use(sinonChai);
chai.use(chaiSnapshot);

configure({ adapter: new (Adapter as any)() });

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

