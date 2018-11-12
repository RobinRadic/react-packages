import { injectable, lazyInject } from 'logic/ioc';
import { Page } from './interfaces';
import { PyroApi } from 'logic/api';
import { action, observable } from 'mobx';
import { PageComponent } from './PageComponent';

const fullPageQuery = `
query FullPage($path: String!){
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
export class PageStore {

    @lazyInject('api.pyro') protected api: PyroApi;

    component:  PageComponent               = null
    protected pages: Page[]                       = THEME_CONSTANTS.pages
    protected fetched: Record<Page['path'], Page> = {}
    @observable loading: boolean                  = false

    all(): Page[] {return this.pages}

    findBy(key: keyof Page, value: any): Page {return this.pages.find(page => page[ key ] === value)}

    findByPath(path: Page['path']): Page {return this.findBy('path', path)}

    findBySlug(slug: Page['slug']): Page {return this.findBy('slug', slug)}

    @action
    async fetchPage(path: Page['path']): Promise<Page> {
        this.loading = true;
        if ( this.fetched[ path ] !== undefined ) {
            this.loading = false;
            return this.fetched[ path ];
        }
        this.fetched[ path ] = ((await this.api.query(fullPageQuery, { path })) as any).page
        this.loading         = false;
        return this.fetched[ path ];
    }


    setComponent(component: PageComponent): any {
        this.component = component
        return this;
    }
}

export const pageStore = new PageStore();
// container.bind('store.pages').toConstantValue(pageStore);