import { GulpEnvMixin, GulpInteractiveMixin } from '@radic/build-tools-gulp';
import { GulpWebpackMixin } from '@radic/build-tools-webpack';
export interface Gulpfile extends GulpEnvMixin, GulpInteractiveMixin, GulpWebpackMixin {
}
export declare class Gulpfile {
    default(): Promise<void>;
    prodServe(): Promise<void>;
    prodBuild(): Promise<void>;
    devServe(): Promise<void>;
    devBuild(): Promise<void>;
    protected serve(): Promise<{}>;
    protected build(): Promise<{}>;
    protected readonly webpack: any;
}
