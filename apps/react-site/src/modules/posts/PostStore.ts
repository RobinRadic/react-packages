import { injectable, lazyInject } from 'logic/ioc';
import { PyroApi } from 'logic/api';
import { action, observable } from 'mobx';
import { Post } from 'logic/api/pyro-api-types';

const fullPostQuery = `
query FullPost($path: String!){
    page: pageByPath(path: $path){
        meta_title
        meta_description
        content
        title
        slug
        path
    }
}
`


@injectable()
export class PostStore {

    @lazyInject('api.pyro') protected api: PyroApi;
    protected fetched: Record<string, Post> = {}
    @observable loading: boolean                  = false

    @action
    async fetchPost(path: string): Promise<Post> {
        this.loading = true;
        if ( this.fetched[ path ] !== undefined ) {
            this.loading = false;
            return this.fetched[ path ];
        }
        this.fetched[ path ] = ((await this.api.query(fullPostQuery, { path })) as any).page
        this.loading         = false;
        return this.fetched[ path ];
    }


}

export const pageStore = new PostStore();
// container.bind('store.pages').toConstantValue(pageStore);