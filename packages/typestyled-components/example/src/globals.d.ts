

declare module 'typestyled-components/dist' {
    namespace types {
        interface Theme {

        }
    }
}

declare namespace themes {
    import { types } from 'typestyled-components';

    interface Theme extends types.Theme{
        [ k: string ]: any

        backgroundColor: string
    }
}
