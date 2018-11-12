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


const log = require('debug')('components:LinkType');

export interface LinkTypeProps {
    link: MenuTreeItem
}


export class LinkType<T extends object = object> extends React.Component<LinkTypeProps & Styled.StylableProps & T> {
    static displayName           = 'LinkType'
    static defaultProps          = {}
    static style: Styled.Style   = {}
    static styles: Styled.Styles = {
        iconContainer: {
            paddingRight: 5
        },
        icon         : {},
        title        : {}
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

    renderTitle() {
        let { link, classNames } = this.props
        return (
            <span className={classNames.title}>
                {this.renderIcon()}
                {link.title}
            </span>
        );
    }

    render() {
        //@ts-ignore
        let { link, classNames, children, ...props } = this.props
        return (
            <AntdMenuItem {...props} >
                {this.renderTitle()}
            </AntdMenuItem>
        );
    }
}

