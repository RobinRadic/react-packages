import React, { Component, IntrinsicAttributes } from 'react';

declare module 'react' {
    import F7, { Device, Dom7, Request, Support, Template7, Utils } from 'framework7'
    import F7Router from 'framework7/modules/router/router-class'
    import { Route } from 'framework7-react';

    interface Component {
        $f7ready: (cb: (f7: F7) => void) => void
        $f7: F7;
        $$: Dom7
        Dom7: Dom7
        $device: Device
        $request: Request
        $utils: Utils
        $theme: { ios: boolean, material: boolean }
        $f7router: F7Router
        $f7route: Route
    }

    interface HTMLAttributes {
        slot?: string
    }

}


declare global {
    const $:JQueryStatic
    namespace JSX {
        interface IntrinsicAttributes {
            slot?: string
        }
    }


}


declare module '*/react/utils/mixins.js' {
    import { ColorProps } from 'framework7-react';

    interface Static {
        colorProps: ColorProps
        colorClasses(props:any)
    }
    const Mixins:Static
    export  = Mixins
}