import * as React from 'react';
import { Container } from 'inversify';
import { RootStore } from 'stores';
import { GraphView } from 'components/GraphView';


export function init(container: Container, store: RootStore) {
    let paths = [
        '/register',
        '/login',
        '/users/self',
        '/users/activate',
        '/users/password/forgot',
        '/users/password/reset'
    ]

    paths.forEach(path => {
        store.pushRoute({
            path,
            exact : true,
            render: props => <GraphView uri={path}/>
        })

        store.addDevNavLink(path);
    })
}