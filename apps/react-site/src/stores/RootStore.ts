import React from 'react';
import { injectable } from 'inversify';
import { RouteProps } from 'react-router';
import { action, observable } from 'mobx';
import { NavLink, NavLinkProps } from 'react-router-dom';

@injectable()
export class RootStore {
    layout: React.Component = null

    setLayout(layout: React.Component) {this.layout = layout}

    devNavLinks: React.ComponentElement<NavLinkProps, NavLink>[] = [];

    addDevNavLink(to: string) {
        this.devNavLinks.push(React.createElement(NavLink, { to: { pathname: to } }, to));
    }


    @observable routes: RouteProps[] = []

    @action pushRoute(route: RouteProps) { this.routes.push(route); }

    @action setRoutes(routes: RouteProps[]) { this.routes = routes }
}

export const rootStore = new RootStore();
// container.bind('store.root').toConstantValue(rootStore);