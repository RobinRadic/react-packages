

declare module 'typestyled-components/dist' {
    //Record<string, FactoryStyles<{}, Theme>>
    import { FactoryStyles } from 'typestyled-components/dist/types';
    import { Theme } from './theme';

    declare namespace Styled {
        type Styles = Record<string, FactoryStyles<{}, Theme>>
    }
}
