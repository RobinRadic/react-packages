import React from 'react';
import { Styled } from 'typestyled-components';

import { action, observable, toJS } from 'mobx';
import { observer } from 'mobx-react';
import { Layout as AntdLayout, Menu as AntdMenu, Spin } from 'antd';
import { MenuStore } from './MenuStore';
import { hot } from 'decorators';
import { injectable, lazyInject } from 'logic/ioc';
import { MenuTree, MenuTreeItem } from 'logic/api/pyro-api-types';
import { MenuProps as AntdMenuProps } from 'antd/es/menu';
import { DefaultLinkType } from './link-types';

const { Header, Content, Footer, Sider } = AntdLayout;
const SubMenu                            = AntdMenu.SubMenu;
// const MenuItem                           = AntdMenu.Item;


const log = require('debug')('components:Menu');

export interface MenuProps extends AntdMenuProps {
    identifier: string
    siderCollapsed?: boolean
    collapsedWidth?: string | number
    inlineCollapsed?: boolean
    antdMenuTheme?: string
}

@hot(module)
@Styled()
@injectable()
@observer
export class Menu extends React.Component<MenuProps & Styled.StylableProps> {
    static displayName           = 'Menu'
    static defaultProps          = {}
    static style: Styled.Style   = {}
    static styles: Styled.Styles = {
        iconContainer: {
            paddingRight: 5
        }
    }
    static contextTypes          = AntdMenu.contextTypes
    static childContextTypes     = AntdMenu.childContextTypes
    @lazyInject('store.menus') menus: MenuStore
    @observable menu: MenuTree   = null
    @observable loading          = true

    @action
    async updateMenu() {
        this.loading = true;
        if ( this.menus.hasMenu(this.props.identifier) ) {
            this.menu = this.menus.getMenu(this.props.identifier);
        } else {
            this.menu = await this.menus.fetchMenu(this.props.identifier);
        }
        this.loading = false;
    }

    @action
    componentDidMount() {
        this.updateMenu();
    }

    getChildContext() {
        return AntdMenu.prototype.getChildContext.apply(this)
    }

    getInlineCollapsed() {
        return AntdMenu.prototype.getInlineCollapsed.apply(this)
    }

    renderMenuItems(items: MenuTreeItem[]) {
        const { classNames } = this.props
        return items.map((item, key) => {
            let icon = item.icon ? <span className={classNames.iconContainer}><i className={item.icon}/></span> : null;

            if ( item.children && item.children.length > 0 ) {
                return (
                    <SubMenu key={key} title={<span>{icon}{item.title}</span>}>
                        {this.renderMenuItems(item.children)}
                    </SubMenu>
                )
            }

            if ( item.type && this.menus.hasLinkType(item.type.id) ) {
                const Component = this.menus.getLinkType(item.type.id);
                return <Component key={key} link={item}/>
            }

            return <DefaultLinkType key={key} link={item}/>;
        })

    }

    render() {
        if ( ! this.menu || this.loading ) {
            return <Spin/>
        }
        const { classNames, ...props } = this.props;
        const menu                     = toJS(this.menu);

        return (
            <AntdMenu {...props}>
                {this.renderMenuItems(menu.children)}
            </AntdMenu>
        );
    }

}

