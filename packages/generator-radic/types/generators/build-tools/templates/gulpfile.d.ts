import { GulpEnvMixin, GulpInteractiveMixin } from '@radic/build-tools-gulp';
export interface Gulpfile extends GulpEnvMixin, GulpInteractiveMixin {
}
export declare class Gulpfile {
    devBuild(): void;
    prodBuild(): void;
    default(): Promise<void>;
}
