import 'reflect-metadata'
import React from 'react';
import { observer } from 'mobx-react';
import { hot } from 'decorators';
import { RootStore } from 'stores';

import { lazyInject } from 'logic/ioc';
import { DefaultLayout } from 'layouts/DefaultLayout';
import { ThemeProvider } from 'styles/themes';
import { Router, withRouter } from 'react-router-dom';
import { IConfig } from 'config';
import { History } from 'history'

interface AppProps {}

@hot(module)
@observer
export default class App extends React.Component<AppProps> {
    @lazyInject('store.root') store: RootStore;
    @lazyInject('config') config: IConfig;
    @lazyInject('history') history: History;
    static displayName: string = 'App'


    render() {
        return (
            <Router history={this.history}>
                <ThemeProvider theme="dark">
                    <DefaultLayout/>
                </ThemeProvider>
            </Router>
        );
    }
}

