import { container, injectable } from 'logic/ioc';
import { Container, ContainerModule } from 'inversify';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import React, { ComponentClass } from 'react';
import { loadModule } from './modules';

const render = (id, Component) => {
    if ( DEV ) {
        const AppContainer = require('react-hot-loader').AppContainer
        return ReactDOM.render(
            <AppContainer>
                    <Component/>
            </AppContainer>,
            document.getElementById(id)
        );
    } else {
        return ReactDOM.render(
                <Component/>,
            document.getElementById(id)
        );
    }
}

@injectable()
export class Bootstrapper {
    public get booted(): boolean { return this._booted; }

    public get container(): Container { return container }

    containerModule: ContainerModule    = null
    protected Component: ComponentClass = null
    protected id                        = null
    protected _booted                   = false;
    protected modulesToLoad             = []

    render(Component?: ComponentClass) {
        render(this.id, Component || this.Component);
        return this;
    }

    boot(id: string) {
        if ( this._booted ) throw new Error('Bootstrapper already booted');
        if ( ! this.containerModule ) throw new Error('Bootstrapper container module not set');
        if ( ! this.Component ) throw new Error('Bootstrapper component not set');
        this.id = id;
        this.container.load(this.containerModule);
        this.modulesToLoad.forEach(module => loadModule(module));
        this.render(this.Component);
        this._booted = true;
        return this;
    }

    setComponent(Component: ComponentClass) {
        this.Component = Component;
        return this;
    }

    setContainerModule(containerModule: ContainerModule) {
        this.containerModule = containerModule;
        return this;
    }

    addModule(name) {
        if ( this._booted ) throw new Error(`Cannot add module "${name}" because the bootstrapper already booted`);
        this.modulesToLoad.push(name);
        return this;
    }
}