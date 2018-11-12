import { container } from 'logic/ioc';
import { RootStore } from 'stores';

const loaded = [];

export function loadModule(name: string) {
    if ( loaded.includes(name) ) {
        return;
    }
    loaded.push(name);
    const store = container.get<RootStore>('store.root');
    require('./' + name).init(container,store);
}