import React from 'react';
import Axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { merge } from 'lodash-es';
import constants from '../constants';
import { action, observable } from 'mobx';
import { observer } from 'mobx-react';

export interface AjaxViewProps {
    url: string,
    method?: string,
    requestConfig?: AxiosRequestConfig
}

@observer
export class AjaxView extends React.Component<AjaxViewProps> {
    static displayName                          = 'AjaxView'
    static defaultProps: Partial<AjaxViewProps> = {
        method       : 'get',
        requestConfig: {}
    }
    @observable fetched                         = false

    response: AxiosResponse = null

    componentDidMount() {
        this.fetch();
    }


    @action
    async fetch() {
        this.fetched                         = false;
        const { url, requestConfig, method } = this.props
        const axios                          = Axios.create(merge(
            {
                baseURL: constants.PYROCMS.APPLICATION_URL
            } as AxiosRequestConfig,
            requestConfig,
            {} as AxiosRequestConfig
        ))
        let response                         = await axios.request({
            url,
            method
        })
        this.response                        = response;
        this.fetched                         = true;
    }

    render() {
        if ( ! this.fetched || ! this.response ) {
            return <div>Loading...</div>
        }
        return <div dangerouslySetInnerHTML={{ __html: this.response.data }}/>
    }
}