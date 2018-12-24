import { CreatedFactoryFn } from './types';
export declare function factory<HTMLELEMENT extends HTMLElement = HTMLElement>(tag: string): CreatedFactoryFn<HTMLELEMENT>;
