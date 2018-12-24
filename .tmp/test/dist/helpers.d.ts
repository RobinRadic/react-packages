import { CSS } from './types';
export declare const cssSelector: (selector: string) => (...objects: CSS[]) => {
    $nest: {
        [x: string]: CSS;
    };
};
export declare const child: (...objects: CSS[]) => {
    $nest: {
        [x: string]: CSS;
    };
};
export declare const firstChild: (...objects: CSS[]) => {
    $nest: {
        [x: string]: CSS;
    };
};
export declare const lastChild: (...objects: CSS[]) => {
    $nest: {
        [x: string]: CSS;
    };
};
export declare const active: (...objects: CSS[]) => {
    $nest: {
        [x: string]: CSS;
    };
};
export declare const hover: (...objects: CSS[]) => {
    $nest: {
        [x: string]: CSS;
    };
};
export declare const focus: (...objects: CSS[]) => {
    $nest: {
        [x: string]: CSS;
    };
};
export declare const visited: (...objects: CSS[]) => {
    $nest: {
        [x: string]: CSS;
    };
};
