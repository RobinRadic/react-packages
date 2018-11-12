import React from 'react';
import { hot } from 'decorators';
import { Styled } from 'styles';
import { Toolbar } from './Toolbar';

const log = require('debug')('components:ToolbarItem');

export type ToolbarItemType = 'tab' | 'spacer' | 'button'

export interface ToolbarItemProps {
    type?: ToolbarItemType
}

@hot(module)
@Styled()
export class ToolbarItem extends React.Component<ToolbarItemProps & Styled.StylableProps> {
    static displayName         = 'ToolbarItem'
    static defaultProps        = {
        type: 'tab'
    }
    static style: Styled.Style = {}

    static styles: Styled.Styles = {
        spacer: {
            flex: 1
        }
    }

    render() {
        const { children, className, classNames, style, type } = this.props;

        return (
            <Toolbar.Context.Consumer>{(context) => {
                log('context', context)
                if ( type === 'spacer' ) {
                    return <div className={classNames.spacer} style={style}/>
                }
                if ( type === 'button' ) {
                    return (
                        <div className={className} style={style}>
                            {children}
                        </div>
                    );
                }
                return (
                    <div className={className} style={style}>
                        {children}
                    </div>
                );
            }}</Toolbar.Context.Consumer>
        )
    }
}