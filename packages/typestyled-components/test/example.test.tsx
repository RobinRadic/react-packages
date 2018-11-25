import { suite, test } from 'mocha-typescript';
import { mount } from 'enzyme'
import { expect } from 'chai'
import { StyledComponentFixture } from './_fixtures/StyledComponentFixture';
import React from 'react';

@suite('Example')
class ExampleTest {
    static before() {}

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
        const wrapper = mount(<StyledComponentFixture/>);
        expect(wrapper.props()).to.equal({})
    }
}