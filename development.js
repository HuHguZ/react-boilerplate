const path = require('path');
const { merge } = require('webpack-merge');
const base = require('./base');
const webpack = require("webpack");
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = merge(base, {
    devtool: 'source-map',
    mode: 'development',
    devServer: {
        port: 3000,
        hot: true,
        open: true,
        compress: true,
    },
    entry: [
        'webpack/hot/dev-server.js',
        'webpack-dev-server/client/index.js?hot=true&live-reload=true',
    ],
    plugins: [new webpack.HotModuleReplacementPlugin(), new ReactRefreshWebpackPlugin()],
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'build'),
    },
});