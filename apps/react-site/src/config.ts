import 'reflect-metadata'
import { camelCase } from 'lodash';

import { Route, RouteProps } from 'react-router-dom';
import { container } from './logic/ioc';
import { PageStore } from './modules/pages';
import { PageComponent } from './modules/pages/PageComponent';

export interface IConfig {
    routes: RouteProps[]
}

let themeColors       = [ 'red', 'red-3', 'red-5', 'red-10', 'red-13', 'pink', 'pink-3', 'pink-5', 'pink-10', 'pink-13', 'purple', 'purple-3', 'purple-5', 'purple-10', 'purple-13', 'deep-purple', 'deep-purple-3', 'deep-purple-5', 'deep-purple-10', 'deep-purple-13', 'indigo', 'indigo-3', 'indigo-5', 'indigo-10', 'indigo-13', 'blue', 'blue-3', 'blue-5', 'blue-10', 'blue-13', 'light-blue', 'light-blue-3', 'light-blue-5', 'light-blue-10', 'light-blue-13', 'cyan', 'cyan-3', 'cyan-5', 'cyan-10', 'cyan-13', 'teal', 'teal-3', 'teal-5', 'teal-10', 'teal-13', 'green', 'green-3', 'green-5', 'green-10', 'green-13', 'light-green', 'light-green-3', 'light-green-5', 'light-green-10', 'light-green-13', 'lime', 'lime-3', 'lime-5', 'lime-10', 'lime-13', 'yellow', 'yellow-3', 'yellow-5', 'yellow-10', 'yellow-13', 'amber', 'amber-3', 'amber-5', 'amber-10', 'amber-13', 'orange', 'orange-3', 'orange-5', 'orange-10', 'orange-13', 'deep-orange', 'deep-orange-3', 'deep-orange-5', 'deep-orange-10', 'deep-orange-13', 'brown', 'brown-3', 'brown-5', 'brown-10', 'brown-13', 'grey', 'grey-3', 'grey-5', 'grey-10', 'grey-13', 'blue-grey', 'blue-grey-3', 'blue-grey-5', 'blue-grey-10', 'blue-grey-13', 'gray', 'white', 'black' ];
let themeColorChoices = {}
themeColors.forEach(color => themeColorChoices[ color ] = camelCase(color));

const config: IConfig = {
    routes: []
}

function addPageRoutes() {
    const store = container.get<PageStore>('store.pages');
    store.all().forEach(page => {
        config.routes.push({
            path     : page.path,
            component: PageComponent
        })
    })
}

// container.bind('config').toConstantValue(config);

export {config};