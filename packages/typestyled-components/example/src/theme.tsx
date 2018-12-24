///<reference path="./globals.d.ts"/>
import { createStyled,createThemeProvider } from 'typestyled-components';

export interface Theme {
    backgroundColor: string
    header: { color: string }
    sidebar: { color: string }
}

const defaultTheme: Theme = {
    backgroundColor: '#00aa1d',
    header         : {
        color: '#ff4232'
    },
    sidebar        : {
        color: '#FFF'
    }
}


export type ThemeMap = Record<'default', Theme>
export const ThemeProvider = createThemeProvider<ThemeMap>({ default: defaultTheme }, 'default')
export const styled        = createStyled<Theme>()
