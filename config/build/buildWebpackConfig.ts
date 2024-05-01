import path from "path";
import { BuildOptions } from "./types/config";
import webpack from "webpack";
import buildLoaders from "./buildLoaders";
import buildResolvers from "./buildResolvers";
import buildPlugins from "./buildPlugins";
import buildDevServer from "./buildDevServer";

export default function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const { mode, paths, isDev } = options;
    return {  
            entry: paths.entry,
            mode,
            module: {
                rules: buildLoaders(options)
            },
            resolve: buildResolvers(),
            output: {
                filename: "[name].[contenthash].js",
                path: paths.output,
                clean: true
            },
            plugins: buildPlugins(options),
            devtool: isDev ? 'inline-source-map' : undefined,
            devServer: isDev ? buildDevServer(options) : undefined
        }
    }
