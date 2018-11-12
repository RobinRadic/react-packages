import React from 'react';
import { Styled } from 'typestyled-components';
import { Layout as AntdLayout, Menu as AntdMenu } from 'antd';
import { hot } from 'decorators';
import { DefaultLinkTypeProps } from './DefaultLinkType';
import { NavLink } from 'react-router-dom';
import { LinkType } from './LinkType';
import { parseBool } from '../../../utils/general';

const { Header, Content, Footer, Sider } = AntdLayout;
const SubMenu                            = AntdMenu.SubMenu;
const AntdMenuItem                       = AntdMenu.Item;


const log = require('debug')('components:PageLinkType');

export interface PageLinkTypeProps extends DefaultLinkTypeProps {

}

@hot(module)
@Styled()
export class PageLinkType extends LinkType {
    static displayName         = 'PageLinkType'
    static defaultProps        = {}
    static style: Styled.Style = {}

    constructor(props, ctx) {
        super(props, ctx)
    }

    renderTitle() {
        let { link, classNames } = this.props
        return (
            <NavLink to={link.entry.page.path} exact={parseBool(link.entry.page.exact)}>
                {this.renderIcon()}
                {link.title}
            </NavLink>
        );
    }
}

