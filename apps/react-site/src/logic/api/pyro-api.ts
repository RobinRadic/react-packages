import { GraphQLClient } from 'graphql-request';
import { container } from 'logic/ioc';
import * as PyroApiTypes from './pyro-api-types'
import { Variables } from 'graphql-request/dist/src/types';

export class PyroApi extends GraphQLClient {
    public query(query: string, variables?: Variables): Promise<PyroApiTypes.Query> {
        return this.request<PyroApiTypes.Query>(query, variables);
    }
}

export { PyroApiTypes }

export const pyroApi = new PyroApi(THEME_CONSTANTS.endpoint, {})

// container.bind('api.pyro').toConstantValue(pyroApi);
