import { Container } from 'inversify';
import { pageStore, PageStore } from './PageStore';
import { RootStore } from 'stores';
import { PageComponent } from './PageComponent';
import * as React from 'react';

export * from './interfaces'
export { PageStore } from './PageStore'

export function init(container: Container) {
    container.bind<PageStore>('store.pages').toConstantValue(pageStore);
    const store = container.get<RootStore>('store.root')
    pageStore.all().forEach(page => {
        store.pushRoute({
            path  : page.path,
            exact : true,
            render: props => {
                return (
                    <PageComponent path={props.location.pathname || page.path}/>
                )
            }
        })
    })
}
