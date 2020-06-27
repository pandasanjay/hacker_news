const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const htmlFilePlugin = new HtmlWebpackPlugin({
    title: 'Hacker News',
    template: './src/public/index.ejs',
    scriptLoading: 'defer',
    favicon: './src/public/favicon.ico',
    showErrors: process.env.NODE_ENV === 'development' || false,
    filename: 'html/index.html',
})
const miniCssPlugin = new MiniCssExtractPlugin({
    filename: '[name].css',
})

module.exports = [miniCssPlugin, htmlFilePlugin]
