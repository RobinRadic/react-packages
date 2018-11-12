import React, { ComponentClass } from 'react';
import { styled } from 'typestyled-components';
import { hot } from 'decorators';
import { injectable } from 'inversify';
import { lazyInject } from 'logic/ioc';
import { Layout as AntdLayout, Menu as AntdMenu, Tooltip } from 'antd';
import { Menu, MenuStore } from 'modules/menus';
import { SiderProps } from 'antd/es/layout';
import { RouteComponentProps, withRouter } from 'react-router';
import { History } from 'history';
import { RootStore } from '../stores';
import { Content } from 'components/Content';
import ErrorBoundary from '../components/ErrorBoundary';

const log                       = require('debug')('layouts:default');
const { Header, Footer, Sider } = AntdLayout;
const SubMenu                   = AntdMenu.SubMenu;
const MenuItem                  = AntdMenu.Item;

const OuterLayout                         = styled.extend(AntdLayout, {
    minHeight: '100vh',
    width    : '100%',
    overflowX: 'hidden'
})
const Sidebar: ComponentClass<SiderProps> = styled.extend<SiderProps>(Sider, {
    minHeight: '100vh',
    width    : '100%',
    overflowX: 'hidden'
})


@hot(module)
@injectable()
@(withRouter as any)
export class DefaultLayout extends React.Component<Partial<RouteComponentProps<any, any>>> {
    @lazyInject('history') history: History;
    @lazyInject('store.root') store: RootStore;
    @lazyInject('store.menus') menus: MenuStore;

    state = {
        sidebarCollapsed: false
    }

    onCollapse = (collapsed) => this.setState({ sidebarCollapsed: collapsed });

    componentDidMount() {
        this.store.setLayout(this);
    }

    renderSidebar() {
        return (
            <Sidebar
                breakpoint="md"
                collapsedWidth={0}
                theme="dark"
                trigger={null}
                collapsible
                collapsed={this.state.sidebarCollapsed}
                // onCollapse={this.onCollapse}
            >
                <div className="logo" style={{
                    height    : '32px',
                    background: 'rgba(255,255,255,.2)',
                    margin    : '16px'
                }}/>
                <Menu
                    identifier="sidebar"
                    theme="dark"
                    mode="inline"
                    // inlineCollapsed={this.state.sidebarCollapsed}
                />
            </Sidebar>
        )
    }

    renderDevNavLinks() {
        const links = this.store.devNavLinks.map((link, i) => {
            return <MenuItem key={i}>{link}</MenuItem>
        })
        return (
            <SubMenu title={<span>DevLinks</span>}>
                {links}
            </SubMenu>
        )
    }

    render() {
        log('render', 'props: ', this.props)
        return (
            <OuterLayout>
                {this.renderSidebar()}
                <AntdLayout>
                    <AntdLayout className="ant-layout-header" style={{ flexDirection: 'row', maxHeight: 64, justifyContent: 'stretch' }}>
                        <Tooltip title={this.state.sidebarCollapsed ? 'Open Sidebar' : 'Close Sidebar'} mouseLeaveDelay={0} placement="rightBottom">
                            <a onClick={e => this.setState({ sidebarCollapsed: ! this.state.sidebarCollapsed })}
                               style={{
                                   lineHeight     : '64px',
                                   width          : '64px',
                                   fontSize       : 20,
                                   textAlign      : 'center',
                                   backgroundColor: 'rgb(255, 255, 255, 0.1)',
                                   color          : '#9c9c9c'
                               }}>
                                <i className={this.state.sidebarCollapsed ? 'fa fa-list' : 'fa fa-chevron-left'}/>
                            </a>
                        </Tooltip>
                        <Header style={{ zIndex: 1, display: 'flex', justifyContent: 'space-between', flexGrow: 1 }}>

                            <Menu
                                identifier="header"
                                theme="dark"
                                mode="horizontal"
                                style={{ lineHeight: '64px', display: 'inline-flex' }}
                            />
                            <AntdMenu
                                theme="dark"
                                mode="horizontal"
                                defaultSelectedKeys={[ '1' ]}
                                style={{ lineHeight: '64px', display: 'inline-flex' }}
                            >
                                {this.renderDevNavLinks()}
                            </AntdMenu>

                        </Header>
                    </AntdLayout>
                    <AntdLayout>

                        <ErrorBoundary>

                            <Content className='reactive-content' style={{ margin: '0 16px' }}/>

                        </ErrorBoundary>

                        <Footer style={{ textAlign: 'center' }}>
                            Ant Design ©2018 Created by Ant UED
                        </Footer>
                    </AntdLayout>
                </AntdLayout>
            </OuterLayout>
        );
    }
}


