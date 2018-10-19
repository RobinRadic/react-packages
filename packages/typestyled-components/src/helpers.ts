import { CSS } from './types';


export const cssSelector = (selector: string) => (...objects: CSS[]) => {
    let prefinal   = Object.assign({}, ...objects) as CSS
    const $nest    = Object.assign({}, ...objects.map(obj => obj.$nest))
    prefinal.$nest = $nest as any
    const final    = prefinal
    return {
        $nest: { [ `${selector}` ]: final }
    }
}

export const child      = (...objects: CSS[]) => cssSelector('&>*')(...objects)
export const firstChild = (...objects: CSS[]) => cssSelector('&>*:first-child')(...objects)
export const lastChild  = (...objects: CSS[]) => cssSelector('&>*:last-child')(...objects)

export const active  = (...objects: CSS[]) => cssSelector('&:active')(...objects)
export const hover   = (...objects: CSS[]) => cssSelector('&:hover')(...objects)
export const focus   = (...objects: CSS[]) => cssSelector('&:focus')(...objects)
export const visited = (...objects: CSS[]) => cssSelector('&:visited')(...objects)
