import React from 'react';
import { Styled } from 'typestyled-components';
// import { createStyled } from '../../src/factory';

const foobar = {
    border: '1px solid red',
    height: 100,
    width : 100
}

export interface MyStyledComponentProps {

    border?: boolean,
    height?: number,
    width?: number
}

@Styled()
export class MyStyledComponent extends React.Component<Styled.StylableProps & MyStyledComponentProps> {

    static styles = {
        foo: {
            ...foobar,
            background: '#AAA',
            color     : 'blue'
        },
        bar: {
            ...foobar,
            background: '#AAA',
            color     : 'blue'
        }
    }

    render() {
        const { border, height, width } = this.props
        return (
            <div>
                border: {border}<br/>
                height: {height}<br/>
                width: {width}<br/>
            </div>
        );
    }
}

