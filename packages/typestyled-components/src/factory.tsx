import React from 'react';
import { CreatedFactoryFn, FactoryStyles, StyledComponentProps } from './types';
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
