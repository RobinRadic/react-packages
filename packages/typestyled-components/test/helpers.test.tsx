///<reference path="../types/globals.d.ts"/>
import { suite, test } from 'mocha-typescript';
import { CSS } from '../src';
import { active, child, cssSelector, firstChild, hover, lastChild, visited } from '../src/helpers';
import { spy } from 'sinon';
import { BaseClass } from './_support/BaseClass';

@suite('CSS selector helpers')
class CreateThemeProviderTest extends BaseClass {
    static css: CSS[] = [ {
        background : 'none',
        borderColor: 'aqua',
        $nest      : { '.title': { color: '#333' } }
    }, {
        fontSize: 15,
        $nest   : { '&:hover': { textDecoration: 'underline' } }
    } ]

    @test 'base css selector function'() {
        let selector = spy(cssSelector('html > body'))
        selector.should.not.be.undefined.and.is.instanceOf(Proxy);
        let result = selector(...CreateThemeProviderTest.css)
        selector.should.calledOnceWith(...CreateThemeProviderTest.css).and.returned(result);
        result.should.matchSnapshot('cssSelector');
    }

    @test 'other css selector function'() {
        const functions = { active, child, firstChild, hover, lastChild, visited }
        for ( let name in functions ) {
            let fn     = spy(functions[ name ]);
            let result = fn(...CreateThemeProviderTest.css);
            fn.should.be.calledOnceWith(...CreateThemeProviderTest.css).and.returned(result);
            result.should.matchSnapshot(name)
        }
    }
}
