///<reference path="../types/globals.d.ts"/>
import { suite, test } from 'mocha-typescript';
import { factory } from '../src/factory';
import { BaseClass } from './_support/BaseClass';
import { extend } from '../src/extend';
import { StyledComponentFixture } from './_fixtures/StyledComponentFixture';

@suite('Factory')
class CreateThemeProviderTest extends BaseClass {

    @test 'base css selector function'() {
        factory('a')({
            borderColor: 'blue'
        }, ({ theme }) => ({
            border: theme.border
        }))

        extend(StyledComponentFixture, {

        })
    }

}
