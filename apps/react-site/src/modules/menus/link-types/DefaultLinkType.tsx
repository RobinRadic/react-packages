import React from 'react';
import { Styled } from 'typestyled-components';
import { Layout as AntdLayout, Menu as AntdMenu } from 'antd';
import { hot } from 'decorators';
import { LinkType } from './LinkType';
// import { Item } from 'rc-menu';

const { Header, Content, Footer, Sider } = AntdLayout;
const SubMenu                            = AntdMenu.SubMenu;
const AntdMenuItem                       = AntdMenu.Item;


const log = require('debug')('components:DefaultLinkType');

export interface DefaultLinkTypeProps {
}


@hot(module)
@Styled()
export class DefaultLinkType extends LinkType<DefaultLinkTypeProps> {
    static displayName         = 'DefaultLinkType'
    static defaultProps        = {}
    static style: Styled.Style = {}
}

