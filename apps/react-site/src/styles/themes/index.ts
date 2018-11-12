import { createThemeProvider } from 'typestyled-components';
import { hot } from 'decorators';
import { Theme } from './interfaces';

export * from './interfaces'
export type Themes = Record<string, Theme>
export const themes: Themes = {
    default: {
        colors: { primary: '#AAA' }
    },
    dark   : {
        colors: { primary: '#444' }
    }
};
export const ThemeProvider  = hot(module)(createThemeProvider<Themes>(themes, 'default'))
