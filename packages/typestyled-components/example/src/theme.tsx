import { createThemeProvider } from 'typestyled-components';

export interface Theme {
    [ k: string ]: any

    backgroundColor: string
}

const defaultTheme: Theme = {
    backgroundColor: '#AAA'
}


export type ThemeMap = Record<'default', Theme>
export const ThemeProvider = createThemeProvider<ThemeMap>({ default: defaultTheme }, 'default')
