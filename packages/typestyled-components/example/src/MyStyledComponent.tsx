import React from 'react';
import { Styled } from 'typestyled-components';

const foobar = {
    border: '1px solid red',
    height: 100,
    width : 100
}

@Styled()
export class MyStyledComponent extends React.Component<Partial<Styled.StylableProps>> {
    props: Partial<Styled.StylableProps>;

    static styles: Styled.Styles = {
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
        const { classNames } = this.props
        return (
            <div>
                <div className={classNames.foo}>
                    foo
                </div>
                <div className={classNames.bar}>
                    bar
                </div>
            </div>
        );
    }
}
