import MiniCssExtractPlugin from "mini-css-extract-plugin"
import webpack from "webpack"
import { BuildOptions } from "./types/config"

export default function buildLoaders({isDev}: BuildOptions): webpack.RuleSetRule[] {

    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    const sassLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: (resPath: string) => !!resPath.includes(".module.scss"),
                        localIdentName: '[local]__[hash:base64:5]'
                    }
                }
            },
            "sass-loader",
        ],
    }
    return [
        tsLoader,
        sassLoader
    ]
}