import { Container } from 'inversify';
import { RootStore } from 'stores';
import * as React from 'react';
import { GraphView } from 'components/GraphView';
import { strEnsureLeft } from 'utils/general';

export function init(container: Container, store: RootStore) {

    let paths = [
        'posts',
        'posts/preview/:str_id',
        'posts/tags/:tag',
        'posts/type/:slug',
        'posts/categories/:slug',
        'posts/archive/:year/:month?',
        'posts/:slug'
    ];

    paths.forEach(path => {
        path = strEnsureLeft(path, '/');
        store.pushRoute({
            path,
            exact : true,
            render: props => <GraphView uri={path}/>
        })


    })

    store.addDevNavLink('/posts');
}