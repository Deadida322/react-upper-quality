import { BuildOptions } from "./types/config";
import webpack from "webpack"
import { Configuration as DevServerConfiguration } from "webpack-dev-server";

export default function buildDevServer (options: BuildOptions): DevServerConfiguration{
    return {
        port: options.port,
        open: true,
        historyApiFallback: true
    }
}