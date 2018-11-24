import { describe, it, suite, test } from 'mocha-typescript';
import 'sinon'


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
        // describe('a object with some properties', () => {
            a[ 'name' ].should.eq('foo');
            a[ 'projects' ].should.contain.ordered.members([ 'bar', 'laat', 'die' ])
            a[ 'num' ].should.eq(123);
            // it('should have asserted correctly', () => {

            // });
        // });
    }
}
