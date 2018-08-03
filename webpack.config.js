// Used to run webpack dev server to test the demo in local
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, options) => ({
    mode: options.mode,
    devtool: 'source-map',
    entry: path.resolve(__dirname, 'app/js/app.js'),
    output: {
        path: path.resolve(__dirname, 'pages'),
        filename:
            options.mode === 'production'
                ? '[name][chunkhash].js'
                : '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                use: [
                    {
                        loader: 'babel-loader',
                    },
                ],
            },
            {
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader'],
            },
        ],
    },

    plugins: [
        options.mode === 'development'
            ? new webpack.HotModuleReplacementPlugin()
            : () => {},
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'app/index.html'),
        }),
    ],

    devServer: {
        contentBase: './app',
    },
});
