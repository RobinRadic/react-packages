import React, { ComponentClass } from 'react';
import { CSS } from './types';
import { style } from './init';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { classes } from 'typestyle';


export const Styled = () => {
    return <T extends Styled.Component>(Component: T): T => {

        class WrappedComponent extends React.Component<{ classNames?: { [ key: string ]: string } }> {
            render() {
                const { children, ...props } = this.props as any;

                const styledProps: any = {
                    classNames: {}
                }

                // classNames
                if ( Component.styles !== undefined ) {
                    Object
                        .keys(Component.styles)
                        .forEach(className =>
                            styledProps.classNames[ className ] = style(Component.styles[ className ])
                        );
                }

                const className = [];
                if ( Component.style !== undefined ) {
                    className.push(style(Component.style));
                }

                if ( props.className ) {
                    className.push(props.className);
                }

                styledProps.className = classes(...className)


                const passedProps = Object.assign({}, ...props, styledProps)
                return React.createElement(Component as any, passedProps, children);
            }
        }

        return hoistNonReactStatics(WrappedComponent, Component as any) as any;
    }
}

export namespace Styled {
    export type Style = CSS
    export type Styles = Record<string, Style>
    export type Props = { classNames?: Record<string, string>, className?: string }
    export type StylableProps = Props & { style?: React.CSSProperties }

    export interface Component<PROPS = {}> extends ComponentClass<PROPS> {
        styles?: Styles
        style?: Style
    }
}
