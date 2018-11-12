import React from 'react';
import { hot } from 'decorators';
import { Styled } from 'typestyled-components';
import { injectable } from 'inversify';
import { GithubApi } from 'logic/api';
import { lazyInject } from 'logic/ioc';
import { action, observable, toJS } from 'mobx';
import { observer } from 'mobx-react';
import { Spin } from 'antd';

const log = require('debug')('components:GithubRepo');

export type GithubRepoType = 'tab' | 'spacer' | 'button'

export interface GithubRepoProps {
    owner: string
    name: string
}

@hot(module)
@Styled()
@injectable()
@observer
export class GithubRepo extends React.Component<GithubRepoProps & Styled.StylableProps> {
    static displayName                = 'GithubRepo'
    static defaultProps               = {}
    static style: Styled.Style        = {
        border: '1px solid #cbcac7',
        $nest : {
            a: {
                color: '#0366d6'
            }
        }
    }
    static styles: Styled.Styles      = {
        header              : {
            backgroundColor   : '#eff3f6',
            backgroundImage   : 'linear-gradient(-180deg,#fafbfc,#eff3f6 90%)',
            backgroundRepeat  : 'repeat-x',
            backgroundPosition: '-1px -1px',
            backgroundSize    : '110% 110%',
            lineHeight        : '20px',
            padding           : '3px 10px'
        },
        headerOwnerUrl      : {},
        headerRepositoryUrl : {
            fontWeight: 'bold'
        },
        body                : {
            padding: '6px 10px'
        },
        description         : {},
        footer              : {
            display       : 'flex',
            justifyContent: 'space-between',
            borderTop     : '1px solid #cbcac7',
            borderColor   : '',
            padding       : '5px 10px'
        },
        footerText          : {
            margin  : 0,
            padding : '4px 0',
            fontSize: 12
        },
        footerDownloadButton: {
            fontSize          : 12,
            fontWeight        : 600,
            color             : '#24292e !important',
            backgroundColor   : '#eff3f6',
            backgroundImage   : 'linear-gradient(-180deg,#fafbfc,#eff3f6 90%)',
            backgroundRepeat  : 'repeat-x',
            backgroundPosition: '-1px -1px',
            backgroundSize    : '110% 110%',
            border            : '1px solid rgba(27,31,35,0.2)',
            borderRadius      : '0.25em',
            textDecoration    : 'none',
            lineHeight        : '20px',
            padding           : '3px 10px',
            userSelect        : 'none',
            whiteSpace        : 'nowrap',
            verticalAlign     : 'middle',
            display           : 'inline-block',
            $nest             : {
                '&:active': {
                    backgroundColor: '#e9ecef',
                    backgroundImage: 'none',
                    borderColor    : 'rgba(27,31,35,0.35)',
                    boxShadow      : 'inset 0 0.15em 0.3em rgba(27,31,35,0.15)'
                },
                '&:hover' : {
                    color             : '#24292e',
                    backgroundColor   : '#e6ebf1',
                    backgroundImage   : 'linear-gradient(-180deg,#f0f3f6,#e6ebf1 90%)',
                    backgroundPosition: '-0.5em',
                    borderColor       : 'rgba(27,31,35,0.35)'
                }
            }
        }
    }
    @lazyInject('api.github') github: GithubApi
    @observable data: GithubApi.Query = null
    @observable loading               = true

    componentDidMount() {
        log('componentDidMount');
        this.queryData();
    }

    render() {
        if ( this.loading ) {
            return <Spin/>
        }
        const { children, className, classNames, style } = this.props;
        const { repository }                             = toJS(this.data);
        log('render', repository);

        return (
            <div className={className} style={style}>
                <div className={classNames.header}>
                    <a className={classNames.headerOwnerUrl} href={repository.owner.url} target="_blank">{repository.owner.login}</a>
                    /
                    <a className={classNames.headerRepositoryUrl} href={repository.url} target="_blank">{repository.name}</a>
                </div>
                <div className={classNames.body}>
                    <p className={classNames.description}>
                        <span>{repository.description}</span>
                        <span> — </span>
                        <a href={repository.url + '#readme'}>Read More</a>
                    </p>
                    <p><a href={repository.homepageUrl}>{repository.homepageUrl}</a></p>
                </div>
                <div className={classNames.footer}>
                    <div>
                        <p className={classNames.footerText}>Latest commit to the <strong>{repository.defaultBranchRef.name}</strong> on {repository.updatedAt}</p>
                    </div>
                    <div>
                        <a href={repository.defaultBranchRef.repository.mirrorUrl} className={classNames.footerDownloadButton}>Download as zip</a>
                    </div>
                </div>
            </div>
        )
    }

    @action
    async queryData() {
        const { owner, name } = this.props
        const variables       = { owner, name }
        this.loading          = true;
        this.data             = await this.github.query(`
query($owner: String!, $name: String!) {
    repository(owner: $owner, name: $name){
        name       
        description
        forkCount
        updatedAt
        url     
        pushedAt
        watchers {
            totalCount
        }       
        stargazers {
            totalCount
        }
        owner {
            url
            login
        }
        defaultBranchRef {
            name
            prefix
            repository {
            mirrorUrl
            }
            target {
                commitUrl
               
                ...on Commit {
                    history(first: 5){
                        totalCount
                        nodes {
                            message
                        }
                    }
                }
            }
        }
        issues(states: OPEN, last: 20) {
            totalCount
            nodes {
                title
                labels(first:5) {
                    totalCount
                    nodes {
                            name
                    }
                }
            }
        }

        languages(first: 100){
            totalCount
            nodes {
                name
                color
            }
        }
    }
}        
        `, variables);
        this.loading          = false;
        return this.data;
    }
}