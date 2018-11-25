///<reference path="../types/index.d.ts"/>
///<reference path="../types/globals.d.ts"/>

import 'chai/register-assert';  // Using Assert style
import 'chai/register-expect';  // Using Expect style
import 'chai/register-should';  // Using Should style
import chai from 'chai'
import chaiSinon from 'sinon-chai'
import chaiEnzyme from 'chai-enzyme'
import {configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { JSDOM } from 'jsdom'


chai.use(chaiEnzyme())
chai.use(chaiSinon);

configure({ adapter: new Adapter() });

export function setup(): void {

}


const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
const { window } = jsdom;

function copyProps(src, target) {
    Object.defineProperties(target, {
        ...Object.getOwnPropertyDescriptors(src),
        ...Object.getOwnPropertyDescriptors(target),
    });
}

global.window = window;
global.document = window.document;
global.navigator = {
    userAgent: 'node.js',
};
global.requestAnimationFrame = function (callback) {
    return setTimeout(callback, 0);
};
global.cancelAnimationFrame = function (id) {
    clearTimeout(id);
};
copyProps(window, global);
