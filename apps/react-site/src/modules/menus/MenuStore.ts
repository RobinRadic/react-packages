import { injectable, lazyInject } from 'logic/ioc';
import { PyroApi, PyroApiTypes } from 'logic/api';
import { action, observable, toJS } from 'mobx';
import { ComponentClass } from 'react';
import { DefaultLinkTypeProps } from './link-types';

const fullMenuQuery = `
query ($identifier: String!){
  menuTree(identifier: $identifier){
    name
    slug
    children {
      class
      target
      url
      icon
      title      
      type {
        id
        name
        namespace
        type
      }
      entry {
        sort_order
        page {
          exact
          slug
          path
          str_id
        }
      }
    }
  }
}
`;

@injectable()
export class MenuStore<LINK_TYPE_PROPS extends DefaultLinkTypeProps = DefaultLinkTypeProps> {
    @lazyInject('api.pyro') protected api: PyroApi;
    @observable loading: boolean = false

    menus: Record<string, PyroApiTypes.MenuTree> = {}

    toJS() {return toJS(this.menus)}

    getMenu(key: string): PyroApiTypes.MenuTree {
        return this.menus[ key ];
    }

    hasMenu(key: string) {
        return this.menus !== undefined && this.menus[ key ] !== undefined
    }

    setMenu(key: string, menu: any) {
        this.menus[ key ] = menu;
        return this;
    }

    @action
    async fetchMenu(key: string): Promise<PyroApiTypes.MenuTree> {
        this.loading = true;
        if ( this.menus[ key ] !== undefined ) {
            this.loading = false;
            return this.menus[ key ];
        }
        this.menus[ key ] = ((await this.api.query(fullMenuQuery, { identifier: key })) as any).menuTree
        this.loading      = false;
        return this.menus[ key ];
    }

    linkTypes: Record<string, ComponentClass<LINK_TYPE_PROPS>> = {}

    registerLinkType<T extends LINK_TYPE_PROPS = LINK_TYPE_PROPS>(name: string, Component: ComponentClass<T>) {
        this.linkTypes[ name ] = Component
    }

    hasLinkType(name: string) {return this.linkTypes[ name ] !== undefined}

    getLinkType<T extends LINK_TYPE_PROPS = LINK_TYPE_PROPS>(name: string): ComponentClass<T> {return this.linkTypes[ name ] as any}
}

export const menuStore = new MenuStore();
// container.bind('store.menus').toConstantValue(menuStore);