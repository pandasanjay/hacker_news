const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const htmlFilePlugin = new HtmlWebpackPlugin({
    title: 'Hacker News',
    template: './src/public/index.ejs',
    scriptLoading: 'defer',
    favicon: './src/public/favicon.ico',
    showErrors: process.env.NODE_ENV === 'development' || false,
})
const cleanWebpackBuild = new CleanWebpackPlugin()
module.exports = [cleanWebpackBuild, htmlFilePlugin]
