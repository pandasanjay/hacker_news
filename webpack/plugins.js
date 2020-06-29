const path = require('path')
var webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const LoadablePlugin = require('@loadable/webpack-plugin')
const { InjectManifest } = require('workbox-webpack-plugin')
var WebpackPwaManifest = require('webpack-pwa-manifest')
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
const injectManifest = new InjectManifest({
    swSrc: path.join(process.cwd(), 'src/sw.js'),
})

const maniFestPlugin = new WebpackPwaManifest({
    name: 'Hacker News',
    short_name: 'HackerNews',
    description:
        'Hacker News is a community started by Paul Graham for sharing "Anything that good hackers would find interesting. ',
    background_color: '#ffffff',
    crossorigin: null,
    theme_color: '#c64f00',
    icons: [
        {
            src: path.resolve('src/public/icon.png'),
            sizes: [96, 128, 192, 256, 384, 512, 1024],
        },
        {
            src: path.resolve('src/public/icon.png'),
            size: '1024x1024',
            purpose: 'maskable',
        },
    ],
})
const definePlugin = new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    'process.env.GQL_API_DOMAIN': JSON.stringify(process.env.GQL_API_DOMAIN),
})
module.exports = [
    definePlugin,
    miniCssPlugin,
    htmlFilePlugin,
    loadablePlugin,
    injectManifest,
    maniFestPlugin,
]
