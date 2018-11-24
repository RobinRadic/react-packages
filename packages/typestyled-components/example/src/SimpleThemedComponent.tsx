import { styled } from 'typestyled-components';


export const SimpleThemedComponent = styled.div({
    border   : '1px solid yellow',
    textAlign: 'center',
    width    : 300,
    height   : (...params) => {
        return 100;
    },
    $nest    : {
        '@media screen and (min-width: 700px)': {
            width: 100
        }
    }
})
