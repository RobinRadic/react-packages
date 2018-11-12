import React, { Fragment } from 'react';
import { Breadcrumb, Layout as AntdLayout } from 'antd';
import { hot } from 'decorators';
import { injectable } from 'inversify';
import { lazyInject } from 'logic/ioc';
import { MenuStore } from 'modules/menus';
import { Messages } from 'components/Messages';
import constants from '../constants';
import { Route, RouteComponentProps, Switch, withRouter } from 'react-router';
import { History } from 'history';
import { RootStore } from 'stores';
import { Styled } from 'typestyled-components';
import { strStripLeft } from '../utils/general';

const log                      = require('debug')('layouts:default');
const { Content: AntdContent } = AntdLayout;


export interface ContentProps {
    innerStyle?: React.CSSProperties
    topContent?: React.ReactNode
}

@hot(module)
@injectable()
@Styled()
@(withRouter as any)
export class Content extends React.Component<ContentProps & Partial<RouteComponentProps<any, any>> & Styled.StylableProps> {
    static displayName                         = 'Content';
    static defaultProps: Partial<ContentProps> = {
        innerStyle: { padding: 24, background: '#fff', minHeight: 360 },
        topContent: null
    }
    @lazyInject('history') history: History;
    @lazyInject('store.root') store: RootStore;
    @lazyInject('store.menus') menus: MenuStore;

    innerDiv: HTMLDivElement;

    implementLinkRoutes(target: string) {
        let self = this;
        $(target).find('a:not([data-route-link])').each(function (e) {
            let href = $(this).attr('href');
            if ( ! href || ! href.startsWith(constants.PYROCMS.APPLICATION_URL) ) {
                return;
            }
            $(this).attr('data-route-link', 1);
            $(this).on('click', e => {
                e.preventDefault();
                e.stopPropagation();
                let pathname = strStripLeft(href, constants.PYROCMS.APPLICATION_URL);
                self.props.history.push({ pathname })
            });
        })
    }

    componentDidUpdate() {
        this.implementLinkRoutes('#reactive-content');
    }

    componentDidMount() {
        this.implementLinkRoutes('#reactive-content');
        this.history.listen((location, action) => {
            this.implementLinkRoutes('#reactive-content');
        })
    }

    renderRoutes() {
        return (
            <Switch location={this.history.location}>
                {this.store.routes.map((route, numRoute) => <Route key={numRoute} {...route} />)}
            </Switch>
        )
    }

    renderTopContent() {
        return (
            <Fragment>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>User</Breadcrumb.Item>
                    <Breadcrumb.Item>Bill</Breadcrumb.Item>
                </Breadcrumb>

                <Messages messages={constants.THEME.messages} style={{ margin: '16px 0' }}/>
            </Fragment>
        )
    }

    render() {
        log('render', 'props: ', this.props)
        const { className, classNames, style, children, topContent, innerStyle } = this.props

        return (
            <AntdContent className={className} style={style}>

                {topContent ? topContent : this.renderTopContent()}

                <div id="reactive-content" style={innerStyle} ref={ref => this.innerDiv = ref}>
                    {children ? children : this.renderRoutes()}
                </div>

            </AntdContent>
        );
    }
}


