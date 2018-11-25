import { suite, test } from 'mocha-typescript';
import { shallow } from 'enzyme'
import { StyledComponentFixture } from './_fixtures/StyledComponentFixture';
import React from 'react';
import { setup } from './setup'

@suite('StyledDecoratorTest')
class StyledDecoratorTest {
    static before() {
        setup();
    }

    before() {}

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

        wrapper.unmount();
        // expect(wrapper.props()).to.equal(StyledComponentFixture)
    }
}
