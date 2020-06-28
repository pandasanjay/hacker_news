const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const LoadablePlugin = require('@loadable/webpack-plugin')
const htmlFilePlugin = new HtmlWebpackPlugin({
    title: 'Hacker News',
    template: './src/public/index.ejs',
    scriptLoading: 'defer',
    favicon: './src/public/favicon.ico',
    showErrors: process.env.NODE_ENV === 'development' || false,
    filename: 'html/index.html',
    inject: false,
})
const miniCssPlugin = new MiniCssExtractPlugin({
    filename: '[name].css',
})

const loadablePlugin = new LoadablePlugin()
module.exports = [miniCssPlugin, htmlFilePlugin, loadablePlugin]
