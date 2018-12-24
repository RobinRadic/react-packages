import React from 'react';
import { CreatedFactoryFn, FactoryStyles, StyledComponentProps,CSS } from './types';
import { style } from './init';
import PropTypes from 'prop-types'
import { classes } from 'typestyle';

const filterObject = <T extends {}>(obj: T, fn: (pair: [ string, {} ]) => boolean): T => (
    Object.entries(obj)
        .filter((pair) => fn(pair))
        .reduce((accObj, [ key, value ]) => {
            accObj[ key ] = value
            return accObj
        }, {} as any)
)


export function factory<HTMLELEMENT extends HTMLElement = HTMLElement>(tag: string): CreatedFactoryFn<HTMLELEMENT> {

    return function <PROPS = {}>(...styles: FactoryStyles<PROPS>[]): React.ComponentClass<StyledComponentProps<HTMLELEMENT, PROPS>> {

        class StyledComponent extends React.Component<StyledComponentProps<HTMLELEMENT, PROPS>> {
            static contextTypes = {
                theme: PropTypes.object.isRequired
            }

            render() {
                const { children, className, ...rest } = this.props as any;
                const cssObjects                       = styles.map(obj => {
                    if ( typeof obj === 'function' ) {
                        return (obj as any)({ ...rest, theme: this.context.theme })
                    }
                    return obj
                }).reduce((acc, cur) => acc.concat(cur), [])

                const computedClassName = style(...cssObjects)

                return React.createElement(tag, { ...rest, className: classes(computedClassName, className) }, children)
            }
        }

        return StyledComponent as React.ComponentClass<StyledComponentProps<HTMLELEMENT, PROPS>>
    }
}


export type FProps<P, H> = P & H //& { theme?: string }
export type FStyler<THEME, H> = (params: FProps<{ theme: THEME }, H>) => CSS
export type FStyles<THEME, PROPS> = (...styles: Array<CSS | FStyler<THEME, PROPS>>) => React.ComponentType<PROPS>
export type StyledExtender<THEME> = <PROPS = {}>(type: React.ComponentType<PROPS>, props?: PROPS, ...styles: Array<FStyler<THEME, PROPS> | CSS>) => React.ComponentType<PROPS>

export function createStyled<THEME>() {

    return function <PROPS = {},NEWPROPS extends Partial<PROPS> = {}>(Component: React.ComponentType<PROPS>, props?: NEWPROPS, ...styles: Array<FStyler<THEME, PROPS> | CSS>): React.ComponentType<Partial<PROPS>> {

        class StyledComponent extends React.Component<PROPS> {
            static defaultProps = props
            static contextTypes = {
                theme: PropTypes.object.isRequired
            }

            render() {
                const { children, className, ...rest } = this.props as any;
                const cssObjects                       = styles.map(obj => {
                    if ( typeof obj === 'function' ) {
                        return (obj as any)({ ...rest, theme: this.context.theme })
                    }
                    return obj
                }).reduce((acc, cur) => acc.concat(cur), [])

                const computedClassName = style(...cssObjects)

                return <Component {...rest} className={classes(computedClassName, className)}>{children}</Component>
                // return React.createElement(Component, { ...rest, className: classes(computedClassName, className) }, children)
            }
        }

        return StyledComponent as React.ComponentType<PROPS>
    }

}
