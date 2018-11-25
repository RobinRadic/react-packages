///<reference path="../types/globals.d.ts"/>
import { suite, test } from 'mocha-typescript';
import { shallow } from 'enzyme'
import * as React from 'react';
import { BaseClass } from './_support/BaseClass';
import { StyledComponentFixture } from './_fixtures/StyledComponentFixture';

@suite('StyledDecoratorTest')
class StyledDecoratorTest extends BaseClass {
    @test 'should be able to test some simple shit'() {
        let a = {
            name    : 'foo',
            projects: [ 'bar', 'laat', 'die' ],
            num     : 123
        }
        a[ 'name' ].should.eq('foo');
        a[ 'projects' ].should.contain.ordered.members([ 'bar', 'laat', 'die' ])
        a[ 'num' ].should.eq(123);
    }


    @test 'should mount components with that have the Styled decorator'() {
        const wrapper = shallow(<StyledComponentFixture/>);
        let p         = wrapper.props();
        let c         = expect(wrapper.props()); //.to.be.undefined; //equal(StyledComponentFixture)
        wrapper.unmount();

    }
}
