import React, { ComponentClass } from 'react';
import { CSS } from './types';
export declare const Styled: () => <T extends Styled.Component<{}>>(Component: T) => T;
export declare namespace Styled {
    type Style = CSS;
    type Styles = Record<string, Style>;
    type Props = {
        classNames?: Record<string, string>;
        className?: string;
    };
    type StylableProps = Props & {
        style?: React.CSSProperties;
    };
    interface Component<PROPS = {}> extends ComponentClass<PROPS> {
        styles?: Styles;
        style?: Style;
    }
}
