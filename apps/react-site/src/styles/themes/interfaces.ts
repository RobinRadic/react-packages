import { CSS } from 'styles/styled/types';
import { MaterialColors } from 'interfaces';


export type ThemeColors = {
    [K in keyof MaterialColors]: CSS['color']
} & {
    primary: CSS['color'],
    secondary: CSS['color'],
    tertiary: CSS['color'],
    neutral: CSS['color'],
    positive: CSS['color'],
    negative: CSS['color'],
    info: CSS['color'],
    warning: CSS['color'],
}
export type ThemeColor = keyof ThemeColors

export interface Theme {
    colors: Partial<ThemeColors>
}
