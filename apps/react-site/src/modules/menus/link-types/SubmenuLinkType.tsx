import React from 'react';
import { Styled } from 'typestyled-components';
import { Layout as AntdLayout, Menu as AntdMenu } from 'antd';
import { lazyInject } from 'logic/ioc';
import { MenuStore } from '../MenuStore';
import { MenuTreeItem } from 'logic/api/pyro-api-types';
import { hot } from 'decorators';
import { classes } from 'typestyle';
// import { Item } from 'rc-menu';

const { Header, Content, Footer, Sider } = AntdLayout;
const SubMenu                            = AntdMenu.SubMenu;
const AntdMenuItem                       = AntdMenu.Item;


const log = require('debug')('components:SubmenuLinkType');

export interface SubmenuLinkTypeProps {
    link: MenuTreeItem
}

@hot(module)
@Styled()
export class SubmenuLinkType extends React.Component<SubmenuLinkTypeProps & Styled.StylableProps> {
    static displayName           = 'SubmenuLinkType'
    static defaultProps          = {}
    static style: Styled.Style   = {}
    static styles: Styled.Styles = {
        iconContainer: {
            paddingRight: 5
        },
        icon         : {}
    }
    @lazyInject('store.menus') menus: MenuStore

    renderIcon() {
        let { link, classNames } = this.props
        if ( ! link.icon ) return null;
        return (
            <span className={classNames.iconContainer}>
                <i className={classes(link.icon, classNames.icon)}/>
            </span>
        )
    }

    render() {
        log('render', { me: this })
        let { link, classNames, style, children, ...props } = this.props
        const { inlineCollapsed }                           = this.context;
        return (
            <AntdMenuItem  {...props} >
                <span>
                    {this.renderIcon()}
                    {link.title}
                </span>
            </AntdMenuItem>
        );
    }
}

