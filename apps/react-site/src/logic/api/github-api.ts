import { GraphQLClient } from 'graphql-request';
import * as types from './github-api-types'
import { Variables } from 'graphql-request/dist/src/types';

export class GithubApi extends GraphQLClient {
    public async query(query: string, variables?: Variables): Promise<GithubApi.Query> {

        let res = await this.request<GithubApi.Query>(query, variables)
            .then(async val => val)
            .catch(async err => console.warn(err));
        return res as any
    }
}

export namespace GithubApi {
    export interface Query extends types.Query {}

    export interface Mutation extends types.Query {}
}

export const githubApi = new GithubApi('https://api.github.com/graphql', {
    headers: {
        Authorization: `bearer ${ENV.GITHUB_TOKEN}`
    }
})

// container.bind('api.github').toConstantValue(githubApi);