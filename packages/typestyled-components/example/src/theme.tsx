///<reference path="./globals.d.ts"/>
import { createThemeProvider } from 'typestyled-components';

import Theme = themes.Theme;

const defaultTheme: Theme = {
    backgroundColor: '#AAA'
}


export type ThemeMap = Record<'default', Theme>
export const ThemeProvider = createThemeProvider<ThemeMap>({ default: defaultTheme }, 'default')
