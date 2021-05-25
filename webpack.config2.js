const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    // Where files should be sent once they are bundled
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index.bundle.js',
    },

    entry: path.resolve(__dirname, 'index.js'),

    resolve: {
        extensions: ['*', '.js', '.jsx'],
    },

    // Rules of how webpack will take our files, complie & bundle them for the browser
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /nodeModules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(sass|scss)$/,
                // include: cssModulesLocationPattern,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            // you can specify a publicPath here
                            // by default it use publicPath in webpackOptions.output
                            publicPath: '/',
                        },
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2,
                            modules: {
                                localIdentName:
                                    '[name]-[local]--[hash:base64:5]',
                            },
                        },
                    },
                    // {
                    //     loader: 'postcss-loader',
                    //     options: postcssOptions,
                    // },
                    'sass-loader',
                ],
            },
        ],
    },
    plugins: [],
};
