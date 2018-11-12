///<reference path="./globals.d.ts"/>
///<reference path="./declarations.d.ts"/>
import 'reflect-metadata'
import React from 'react';
import { configure as configureMobx } from 'mobx';
import 'logic/ioc'
import 'styles'
import { containerModule } from 'logic/containerModule';
import { Bootstrapper } from 'Bootstrapper';

configureMobx({
    enforceActions: 'never'
});

const bootstrapper = window[ 'reactiveBootstrapper' ] = new Bootstrapper();
bootstrapper.setContainerModule(containerModule);
bootstrapper.setComponent(require('./App').default);

if ( DEV ) {
    window[ 'app' ] = bootstrapper
    if ( bootstrapper.booted && module.hot ) {
        module.hot.accept('./App', () => {
            const NextApp = require('./App').default;
            bootstrapper.render(NextApp);
        });
    }
}



window.addEventListener('unhandledrejection', function(event) {
    console.log('unhandledrejection',event)
    throw event;
    // console.error('Unhandled rejection (promise: ', event.promise, ', reason: ', event.reason, ').');
});