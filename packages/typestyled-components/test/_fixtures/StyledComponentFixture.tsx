import React from 'react';
import { Styled } from '../../src';

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
