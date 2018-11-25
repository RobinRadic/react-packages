///<reference path="../types/globals.d.ts"/>
import { suite, test } from 'mocha-typescript';
import React from 'react';
import { createThemeProvider } from '../src';
import { mount } from 'enzyme';
import { StyledComponentFixture } from './_fixtures/StyledComponentFixture';
import { BaseClass } from './_support/BaseClass';

@suite('Theme Provider')
class CreateThemeProviderTest extends BaseClass {
    static themes = {
        blue  : {
            background: 'blue'
        },
        yellow: {
            background: 'yellow'
        }
    }

    @test 'it should create a ThemeProvider with multiple themes'() {
        const Provider = createThemeProvider(CreateThemeProviderTest.themes, 'blue')
        assert.isFunction(Provider.prototype.render) //include.keys([ 'render', 'getChildContext' ], 'render or getChildContext members not found');
    }

    @test 'it should mount'() {
        const Provider = createThemeProvider(CreateThemeProviderTest.themes, 'blue')
        const wrapper  = mount(<Provider theme="blue"><StyledComponentFixture>child</StyledComponentFixture></Provider>);
        expect(wrapper.prop('theme')).to.equal('blue')
        let p = wrapper.childAt(0).props();

        wrapper.unmount();
    }
}
