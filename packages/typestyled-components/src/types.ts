import { types } from 'typestyle';
import React from 'react';
import _CSS = types.NestedCSSProperties;

export interface Theme {}

// export { CSS }
export type CSS<T extends Theme = {}, P = {}> = _CSS | (<THEME = T, PROPS = P>(props: { theme: THEME } & PROPS) => _CSS) & types.NestedCSSProperties;

export type Props<P, H> = P & H & { theme?: string }
export type Styler<P, H> = (params: Props<P, H>) => CSS[]

export type HtmlProps<P, H> = Props<P, React.HTMLProps<H>>
export type HtmlStyler<P, H> = (params: HtmlProps<P, H>) => CSS[]
export type Objects<P, H> = HtmlStyler<P, H> | CSS[]

export type FacRetCss<H> = <P>(...objects: CSS[]) => (props: HtmlProps<P, H>) => React.ReactElement<P & H>;
export type FacRetHtmlStyler<H> = <P>(objects: HtmlStyler<P, H>) => (props: HtmlProps<P, H>) => React.ReactElement<P & H>
export type FacRet<H> = FacRetCss<H> & FacRetHtmlStyler<H>

export type StyleFunction = (...objects: CSS[]) => string

export type FactoryStyles<PROPS, THEME extends any = any> = CSS | ((props: { theme: THEME } & PROPS) => CSS)
export type StyledComponentProps<HTMLELEMENT, PROPS = {}> = {} & PROPS & React.HTMLProps<HTMLELEMENT>
export type CreatedFactoryFn<HTMLELEMENT> = <PROPS = {}>(...styles: FactoryStyles<PROPS>[]) => React.ComponentClass<StyledComponentProps<HTMLELEMENT, PROPS>>
