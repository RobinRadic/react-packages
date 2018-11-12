import React from 'react';
import { hot } from 'decorators';
import { Styled, StyledComponent, styled } from 'styles';
import { Toolbar } from './Toolbar';
import { ToolbarItem } from './ToolbarItem';

export interface DebugBarProps {

}

@hot(module)
@Styled()
export class DebugBar extends React.Component<DebugBarProps & Styled.Props> {
    static style: Styled.Style = {
        position     : 'fixed',
        bottom       : 0,
        left         : 0,
        right        : 0,
        width        : '100%',
        zIndex       : 10001,
        background   : '#a8a7a5',
        display      : 'flex',
        flexDirection: 'column'
    }

    state = {
        open: false
    }

    render() {
        if ( ! this.state ) return null;
        const { className } = this.props
        const Content                 = styled.div({
            flex     : 1,
            overflowY: 'auto',
            display  : this.state.open ? 'block' : 'none'
        })
        return (
            <div className={className}>
                <Toolbar className="testTool" style={{ fontSize: 13 }}>
                    <ToolbarItem>
                        Text
                    </ToolbarItem>

                    <ToolbarItem>
                        Text2
                    </ToolbarItem>
                    <ToolbarItem type="spacer"/>

                    <ToolbarItem>
                        TextRight
                    </ToolbarItem>
                </Toolbar>
                <Content>
                    content
                </Content>
            </div>
        );
    }
}