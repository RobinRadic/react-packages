import { ContainerModule } from 'inversify';
import { config, IConfig } from 'config';
import { RootStore, rootStore } from 'stores';
import { GithubApi, githubApi, PyroApi, pyroApi } from 'logic/api';


export const containerModule = new ContainerModule((bind, unbind, isBound, rebind) => {
    bind<IConfig>('config').toConstantValue(config);
    bind<RootStore>('store.root').toConstantValue(rootStore);
    bind<PyroApi>('api.pyro').toConstantValue(pyroApi);
    bind<GithubApi>('api.github').toConstantValue(githubApi);
});
