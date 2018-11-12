import React, { Component } from 'react';
import { History } from 'history';
import { injectable, lazyInject } from 'logic/ioc';
import { Page } from './interfaces';
import { PageStore } from './PageStore';
import { observer } from 'mobx-react';
import { action, observable, toJS } from 'mobx';
import { hot } from 'decorators';
import { Styled } from 'typestyled-components';
import constants from '../../constants';

const log = require('debug')('components:PageComponent');

window[ 'toJS' ] = toJS;

export interface PageComponentProps {
    path: string
}

@hot(module)
@Styled()
@injectable()
@observer
export class PageComponent extends Component<PageComponentProps & Styled.Props> {
    @lazyInject('history') history: History
    @lazyInject('store.pages') pages: PageStore
    static displayName           = 'PageComponent'
    static style: Styled.Style   = {}
    @observable fullPage: Page   = null
    @observable loading: boolean = true;

    @action
    async setFullPage(path: string) {
        this.loading  = true;
        this.fullPage = await this.pages.fetchPage(path);
        this.loading  = false;
    }

    componentDidMount() {
        this.pages.setComponent(this);
        this.setFullPage(this.props.path);
        this.history.listen((location, action) => {
            this.setFullPage(location.pathname);
        })
    }

    componentDidUpdate() {
        $('input[name="_token"]').val(constants.PYROCMS.CSRF_TOKEN);
    }

    render() {
        window[ 'page' ] = this;
        if ( this.pages.loading ) {
            return <div>Loading...</div>
        }

        if ( ! this.fullPage || ! this.fullPage[ 'content' ] ) {
            return <div>Loading content...</div>
        }

        const fullPage = toJS(this.fullPage);
        log('path', this.props.path, ', fullPage', fullPage)

        return <div dangerouslySetInnerHTML={{ __html: fullPage[ 'content' ] }}/>
    }
}