///<reference path="globals.d.ts"/>

import React from 'react';
import { CSS, Styled } from 'typestyled-components';

const foobar = {
    border: '1px solid red',
    height: 100,
    width : 100
}

@Styled()
export class MyThemeStyledComponent extends React.Component<Styled.StylableProps> {

    //: Record<string, FactoryStyles<{}, Theme>>
    static styles = {
        // foo: (theme) => ({
        //     ...foobar,
        //     background: theme.backgroundColor,
        //     color     : 'blue'
        // }),
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
