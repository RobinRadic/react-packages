import { Container, inject, injectable } from 'inversify'
import createDecorators from 'inversify-inject-decorators'
import { fluentProvide } from 'inversify-binding-decorators'
import createBrowserHistory from 'history/createBrowserHistory';


export const container      = new Container();
/** @see https://github.com/inversify/inversify-inject-decorators#caching-vs-non-caching-behaviour */
export const { lazyInject } = createDecorators(container, false)
export { inject, injectable }
export const singleton = (serviceId) => fluentProvide(serviceId).inSingletonScope().done()

container.bind('history').toConstantValue(createBrowserHistory({}))