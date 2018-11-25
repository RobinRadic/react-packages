import React from 'react';
import { CreatedFactoryFn, StyledComponentProps } from './types';
import { style } from './init';
import PropTypes from 'prop-types'
import { classes } from 'typestyle';
import { NestedCSSProperties, NestedCSSSelectors } from 'typestyle/lib/types';

const filterObject = <T extends {}>(obj: T, fn: (pair: [ string, {} ]) => boolean): T => (
    Object.entries(obj)
        .filter((pair) => fn(pair))
        .reduce((accObj, [ key, value ]) => {
            accObj[ key ] = value
            return accObj
        }, {} as any)
)


export namespace ThemeStyled {


    export function factory<HTMLELEMENT extends HTMLElement = HTMLElement>(tag: string): CreatedFactoryFn<HTMLELEMENT> {
        //@ts-ignore
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

    // export function tfactory<HTMLELEMENT extends HTMLElement = HTMLElement>(tag: string): CreatedFactoryFn<HTMLELEMENT> {
    //
    // }


    export type FactoryStyles<PROPS, THEME extends any = any> = CSS | ((props: { theme: THEME } & PROPS) => CSS)

    export type StyledComponentCreator = (tag: any) => React.ComponentClass
    export type StyledFactory = () => StyledComponentCreator


    declare namespace css {
        type Props = NestedCSSProperties
        type Prop = keyof Props
        type Selector = string
        type ClassDefintion = Record<Selector, Props>

    }


    let a:css.Prop


    export type CSSValue = NestedCSSProperties
    export type CSSSelector = NestedCSSSelectors


    export type ThemedCSSValue<THEME> = CSSValue | ((theme: THEME) => CSSValue) & CSS
    export type ThemedCSSMap<THEME> = Record<string, ThemedCSSValue<THEME>>


    export let extendComponent: <PROPS>(Component: React.ComponentType<PROPS>) => <STYLE>(defaultProps: PROPS, ...styles: STYLE[]) => any

    factory('div')()

}
