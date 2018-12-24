import React, { ComponentClass } from 'react';
import { Registry } from 'react-typestyle';
import { Plugin, SheetGenerator, StaticStyle, StyleGenerator } from 'react-typestyle/types';
export declare type InputSheet<P> = StyleGenerator<P> | StaticStyle | SheetGenerator<P>;
export declare type ThemedInputSheet<P, THEME extends any = any> = InputSheet<P> | InputSheet<P & {
    theme: THEME;
}>;
export declare type ClassNames = {
    root?: string;
};
export interface InjectedProps {
    className?: string;
}
export interface Options {
    plugins?: Plugin[];
    renderer: Registry;
    shouldStylesUpdate<P>(props: P, nextProps: P): boolean;
}
export interface ComponentOptions<P> {
    styles?: ThemedInputSheet<P> | {
        root?: ThemedInputSheet<P>;
    };
}
export declare type StyledStatelessComponent<P = {}> = React.StatelessComponent<P & InjectedProps> & ComponentOptions<P>;
export declare type HOC = <OriginalProps extends {}>(Component: ((React.ComponentClass<OriginalProps & InjectedProps> | React.StatelessComponent<OriginalProps & InjectedProps>) & {
    styles?: InputSheet<Readonly<OriginalProps>>;
}), componentOptions: ComponentOptions<Readonly<OriginalProps>>) => ComponentClass<OriginalProps>;
export declare type HOCCreator = (data: Options) => HOC;
export declare type HocExtension<OriginalProps extends {}> = ComponentClass<OriginalProps>;
export declare const extendHoc: () => <OriginalProps extends {}>(Component: React.ComponentClass<OriginalProps, any>, styles?: ThemedInputSheet<OriginalProps, any>) => React.ComponentClass<OriginalProps, any>;
