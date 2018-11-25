import * as React from 'react';
import { Styled } from '../../src';

@Styled()
export class StyledComponentFixture extends React.Component {

    static styles = {
        wrap: {
            background: '#666'
        }
    }

    render() {
        return (
            <div>
                This is a fixture
            </div>
        );
    }
}
