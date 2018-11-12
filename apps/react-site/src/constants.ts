import { MenuTree, Page } from './logic/api/pyro-api-types';
import { MessageType } from './components/Messages';

declare const APPLICATION_URL: string // = "http://pyradic.dev";
declare const APPLICATION_REFERENCE: string // = "pyradic";
declare const APPLICATION_DOMAIN: string // = "pyradic.dev";
declare const CSRF_TOKEN: string // = "l8dIQdS1uCuyPW4ZVXB6ulhCdLhzQDW28nnbo42l";
declare const APP_DEBUG: string // = "1";
declare const APP_URL: string // = "http://localhost";
declare const REQUEST_ROOT: string // = "http://pyradic.dev";
declare const REQUEST_ROOT_PATH: string // = "";
declare const TIMEZONE: string // = "UTC";
declare const LOCALE: string // = "en";

export type PyroConstantKeys = 'APPLICATION_URL' | 'APPLICATION_REFERENCE' | 'APPLICATION_DOMAIN' | 'CSRF_TOKEN' | 'APP_DEBUG' | 'APP_URL' | 'REQUEST_ROOT' | 'REQUEST_ROOT_PATH' | 'TIMEZONE' | 'LOCALE'

export interface ThemeConstants {
    endpoint: string
    menus: Record<string, MenuTree>
    settings: Record<string, any>
    messages: Record<MessageType, string[]>
    pages: Page[]
}

export interface IConstants {
    PYROCMS: Record<PyroConstantKeys, any>
    THEME: ThemeConstants
}

const constants: IConstants = {
    PYROCMS: {
        APPLICATION_URL,
        APPLICATION_REFERENCE,
        APPLICATION_DOMAIN,
        CSRF_TOKEN,
        APP_DEBUG,
        APP_URL,
        REQUEST_ROOT,
        REQUEST_ROOT_PATH,
        TIMEZONE,
        LOCALE
    },
    THEME  : THEME_CONSTANTS
}


export default constants;