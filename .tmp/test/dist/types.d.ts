import { types } from 'typestyle';
import React from 'react';
import _CSS = types.NestedCSSProperties;
export declare type CSS = _CSS | ((<THEME = {}, PROPS = {}>(props: {
    theme: THEME;
} & PROPS) => _CSS) & types.NestedCSSProperties);
export declare type Props<P, H> = P & H & {
    theme?: string;
};
export declare type Styler<P, H> = (params: Props<P, H>) => CSS[];
export declare type HtmlProps<P, H> = Props<P, React.HTMLProps<H>>;
export declare type HtmlStyler<P, H> = (params: HtmlProps<P, H>) => CSS[];
export declare type Objects<P, H> = HtmlStyler<P, H> | CSS[];
export declare type FacRetCss<H> = <P>(...objects: CSS[]) => (props: HtmlProps<P, H>) => React.ReactElement<P & H>;
export declare type FacRetHtmlStyler<H> = <P>(objects: HtmlStyler<P, H>) => (props: HtmlProps<P, H>) => React.ReactElement<P & H>;
export declare type FacRet<H> = FacRetCss<H> & FacRetHtmlStyler<H>;
export declare type StyleFunction = (...objects: CSS[]) => string;
export declare type FactoryStyles<PROPS, THEME extends any = any> = CSS | ((props: {
    theme: THEME;
} & PROPS) => CSS);
export declare type StyledComponentProps<HTMLELEMENT, PROPS = {}> = {} & PROPS & React.HTMLProps<HTMLELEMENT>;
export declare type CreatedFactoryFn<HTMLELEMENT> = <PROPS = {}>(...styles: FactoryStyles<PROPS>[]) => React.ComponentClass<StyledComponentProps<HTMLELEMENT, PROPS>>;
