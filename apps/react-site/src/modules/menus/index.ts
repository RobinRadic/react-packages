import './MenuStore'
import { Container } from 'inversify';
import { menuStore, MenuStore } from './MenuStore';
import { linkTypes } from './link-types';
import constants from '../../constants';

export * from './link-types'
export { MenuStore } from './MenuStore'
export * from './Menu'

export function init(container: Container) {
    container.bind<MenuStore>('store.menus').toConstantValue(menuStore).onActivation((ctx, store) => {
        Object.keys(linkTypes).forEach(id => store.registerLinkType(id, linkTypes[ id ]));
        Object.values(constants.THEME.menus).forEach((menu: any) => menuStore.setMenu(menu.slug, menu))
        return store;
    });
}