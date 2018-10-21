const { dependencySizeTree, printDependencySizeTree }                              = require('webpack-bundle-size-analyzer');
const WebpackBundleSizeAnalyzerPlugin: typeof WebpackBundleSizeAnalyzerPluginClass = require('webpack-bundle-size-analyzer').WebpackBundleSizeAnalyzerPlugin
import * as webpack from 'webpack';
import { writeFile } from 'fs';
import { resolve, isAbsolute } from 'path';

declare class WebpackBundleSizeAnalyzerPluginClass {
    filepath: string
    statsOptions: any
}

export class BundleSizeAnalyzerPlugin extends WebpackBundleSizeAnalyzerPlugin {
    apply(compiler: webpack.Compiler) {
        compiler.hooks.done.tap('BundleSizeAnalyzerPlugin', (stats: webpack.Stats) => {

            let filepath = this.filepath;
            if ( filepath.length > 0 ) {
                stats = stats.toJson(this.statsOptions);
                if ( ! isAbsolute(filepath) ) {
                    filepath = resolve(compiler[ 'outputPath' ], filepath);
                }
                const depTrees = dependencySizeTree(stats);
                let output     = '';
                depTrees.forEach(tree => {
                    return printDependencySizeTree(tree, true, 0, (out) => {
                        output += `${out}\n`;
                    });
                });
                writeFile(filepath, output, 'utf8', () => {});
            }
        });
    }
}