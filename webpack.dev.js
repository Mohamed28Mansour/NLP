const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'src/client/index.js'),
    mode: 'development',
    devtool: 'source-map',
    output: {
        libraryTarget: 'var',
        library: 'Client'
    },
    module: {
        rules: [
                {
                    test: '/\.js$/',
                    exclude: /node_modules/,
                    loader: "babel-loader"
                },
                {
                    test: /\.scss$/,
                    use: [ 'style-loader', 'css-loader', 'sass-loader' ]
                }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: path.resolve(__dirname, 'src/client/views/index.html'),
            filename: path.resolve(__dirname, 'dist/index.html'),
        }),
        new CleanWebpackPlugin({
            dry: true,
            verbose: true,
            cleanStaleWebpackAssets: true,
            protectWebpackAssets: false
        }),
            new WorkboxPlugin.GenerateSW(),
    ]
}
