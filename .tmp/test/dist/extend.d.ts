import { CSS, Props, Styler } from './types';
import React from 'react';
export declare class Extend {
    static styled<H>(type: React.ComponentClass<H>): <P>(...objects: (Styler<P, H> | CSS[])[]) => (props: Props<P, H> & React.ClassAttributes<H>) => React.ReactElement<H>;
    static styled<H>(type: React.StatelessComponent<H>): <P>(...objects: (Styler<P, H> | CSS[])[]) => (props: Props<P, H> & React.ClassAttributes<H>) => React.SFCElement<H>;
    static style: <OriginalProps extends {}>(Component: React.ComponentClass<OriginalProps, any>, styles?: import("./hoc").ThemedInputSheet<OriginalProps, any>) => React.ComponentClass<OriginalProps, any>;
}
export declare const extend: <OriginalProps extends {}>(Component: React.ComponentClass<OriginalProps, any>, styles?: import("./hoc").ThemedInputSheet<OriginalProps, any>) => React.ComponentClass<OriginalProps, any>;
