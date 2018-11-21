/// <reference types="webpack" />
/// <reference types="webpack-dev-server" />
import { Chain } from '@radic/build-tools-webpack';
declare const chain: Chain;
declare const config: import("webpack").Configuration;
export { chain, config };
