import { CSS, Props, Styler } from './types';
import { style } from './init';
import React, { ReactNode } from 'react';
import { extendHoc } from './hoc';


export class Extend {
    static styled<H>(type: React.ComponentClass<H>):
        <P>(...objects: (Styler<P, H> | CSS[])[]) => (props: Props<P, H> & React.ClassAttributes<H>) => React.ReactElement<H>

    static styled<H>(type: React.StatelessComponent<H>):
        <P>(...objects: (Styler<P, H> | CSS[])[]) => (props: Props<P, H> & React.ClassAttributes<H>) => React.SFCElement<H>

    static styled<H>(type: React.StatelessComponent<H> | React.ComponentClass<H>) {
        return <P>(...objects: (Styler<P, H> | CSS[])[]) => (
            (props: Props<P, H> & React.ClassAttributes<H> & { children?: ReactNode }) => {
                const cssObjects = objects.map(obj => {
                    if ( typeof obj === 'function' ) {
                        const fn = obj
                        return fn(props)
                    }
                    return obj
                }).reduce((acc: CSS[], cur) => {
                    // noinspection TypeScriptUnresolvedVariable
                    if ( Array.isArray(cur) ) {
                        return acc.concat(cur)
                    }
                    acc.push(cur)
                    return acc
                }, []) as CSS[]

                const { className }     = (props as any)
                const computedClassName = style(...cssObjects)
                const finalClassName    = className ? `${className} + ${computedClassName}` : computedClassName

                const passedProps = Object.assign(
                    {},
                    props,
                    { className: finalClassName }
                )

                return React.createElement(type as any, passedProps, props.children) as any
            }
        )
    }

    static style = extendHoc()

}

export const extend = Extend.style
