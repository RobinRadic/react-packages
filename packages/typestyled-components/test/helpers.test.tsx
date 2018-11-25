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
        $nest      : { '.title': { color: '#333333' } }
    }, {
        fontSize: 15,
        $nest   : { '&:hover': { textDecoration: 'underline' } }
    } ]

    @test 'base css selector function'() {
        let selector = spy(cssSelector('html > body'))
        selector
            .should.not.be.undefined
            .and.is.instanceOf(Proxy);

        let result = selector(...CreateThemeProviderTest.css)
        selector
            .should.calledOnceWith(...CreateThemeProviderTest.css)
            .and.returned(result);

        result.should.not.be.undefined.and.matchSnapshot('cssSelector');
    }

    @test 'other css selector function'() {
        const functions = { active, child, firstChild, hover, lastChild, visited }
        const keys      = Object.keys(functions);

        for ( let key in functions ) {
            test(key, () => {
                let fn     = spy(functions[ key ]);
                let result = fn(...CreateThemeProviderTest.css);

                fn.should.be.calledOnceWith(...CreateThemeProviderTest.css).and.returned(result);
                result.should.not.be.undefined.and.matchSnapshot(key)
            })
        }
    }
}
