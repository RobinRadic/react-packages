import { colors as materialColors } from './colors'
import { color as _color } from 'csx';
import { ThemeColor, ThemeColors } from './interfaces';

export namespace theme {
    export let colors: ThemeColors = {
        ...materialColors,
        primary  : materialColors.deepOrange6,
        secondary: materialColors.blue,
        tertiary : materialColors.grey6,
        neutral  : materialColors.grey6,
        positive : materialColors.green6,
        negative : materialColors.red6,
        info     : materialColors.blue6,
        warning  : materialColors.yellow6
    }

    export const color = (name: ThemeColor) => _color(colors[ name ] as string);
}
