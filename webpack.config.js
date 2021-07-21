const path = require("path")
const MiniCssExtractPlugin = require('mini-css-extract-plugin')


module.exports = (env) => {
    const modules = {
        
        // imageLoader: {
        //     test: /.(png|gif|jpe?g)(\?[a-z0-9=\.]+)?$/,
        //     use:[
        //         {
        //             loader: 'url-loader',
        //             options: {
        //                 limit: 8192,
        //                 name: '[name].[ext]',
        //                 // publicPath: 'src/Resources',
        //             },
        //         },
        //     ],
        // },
        js: {
            test: /\.ts(x?)$/,
            exclude: /node_modules/,
            use: [
                {
                    loader: "ts-loader",
                },
            ],
        },
        stylus: {
            test: /\.styl$/,
            use: [
                {
                    loader: "style-loader",
                },
                {
                    loader: "css-loader",
                },
                {
                    loader: "stylus-loader",
                    options: {
                        import: [ 
                            path.resolve(__dirname, 'src/Common/Styles/variables.styl'),
                        ],
                    }
                },
            ],
        },
        stylusIsomorph: {
            test: /\.styl$/,
            use: [
                {
                    loader: MiniCssExtractPlugin.loader,
                },
                {
                    loader: "css-loader",
                },
                {
                    loader: "stylus-loader",
                    options: {
                        import: [
                            path.resolve(__dirname, './src/Common/Styles/variables.styl'),
                        ],
                    }
                },
            ],
        },
    }

    if (env === 'production') {
        modules.stylus.use.splice(2, 0, { loader: "postcss-loader" })
        modules.stylusIsomorph.use.splice(2, 0, { loader: "postcss-loader" })
    }

    const resolve = {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
        alias: {
            App: path.resolve(__dirname, 'src/App/'),
            Pages: path.resolve(__dirname, 'src/Pages/'),
        },
    },

    return {
        modules,
        resolve,
    }
}