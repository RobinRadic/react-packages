import React, { Context } from 'react';
import { hot } from 'decorators';
import { Styled, CSS } from 'styles';


export interface ToolbarContext {
    a: string
}

export interface ToolbarProps {}


const defaultContext: ToolbarContext = {
    a: 'n'
}


@hot(module)
@Styled()
export class Toolbar extends React.Component<ToolbarProps & Styled.StylableProps> {
    static displayName: string              = 'Toolbar'
    static defaultProps: ToolbarProps       = {}
    static Context: Context<ToolbarContext> = React.createContext(defaultContext);
    static style: CSS                       = {
        display   : 'flex',
        height    : 30,
        background: 'blue'
    }


    render() {
        const { children, className, style } = this.props
        return (
            <div className={className} style={style}>
                <Toolbar.Context.Provider value={this.getContextValue()}>
                    {children}
                </Toolbar.Context.Provider>
            </div>
        );
    }

    protected getContextValue(): ToolbarContext {
        const value: ToolbarContext = {
            ...defaultContext
        }
        return value
    }
}

export namespace Toolbar {
    export type Context = ToolbarContext
}