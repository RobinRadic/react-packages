import React from 'react';
import { action, observable } from 'mobx';
import { observer } from 'mobx-react';
import { PyroApi } from '../logic/api';
import { lazyInject } from 'logic/ioc';
import { ViewQueryResponse } from 'logic/api/pyro-api-types';
import { History } from 'history';

export interface GraphViewProps {
    uri: string,
    method?: string,
    parameters?: Record<string, any>
}

const graphViewQuery = `
query($uri: String!, $method: String!, $parameters: Assoc!) {
    view(uri: $uri, method: $method, parameters: $parameters){
        data
        content
    }
}
`;

@observer
export class GraphView extends React.Component<GraphViewProps> {
    static displayName                           = 'GraphView'
    static defaultProps: Partial<GraphViewProps> = {
        method    : 'get',
        parameters: {}
    }
    @lazyInject('api.pyro') api: PyroApi
    @lazyInject('history') history: History
    @observable fetched                          = false

    response: ViewQueryResponse = null

    componentDidMount() {
        this.fetch();
    }


    @action
    async fetch() {
        this.fetched                      = false;
        const { uri, method, parameters } = this.props
        this.response = (await this.api.query(graphViewQuery, { uri: this.history.location.pathname, method, parameters })).view
        this.fetched  = true;
    }

    render() {
        if ( ! this.fetched || ! this.response ) {
            return <div>Loading...</div>
        }
        return <div dangerouslySetInnerHTML={{ __html: this.response.content }}/>
    }
}