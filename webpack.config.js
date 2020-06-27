const mode = process.env.NODE_ENV || 'development'
const plugins = require('./webpack/plugins')
const nodeExternals = require('webpack-node-externals')
const path = require('path')
const rules = require('./webpack/rules')

const client = {
    mode,
    plugins,
    name: 'client',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist/public'),
    },
    module: { rules: rules() },
    devServer: {
        contentBase: path.join(__dirname, 'dist/public'),
        compress: true,
        port: 3000,
    },
    devtool: 'inline-source-map',
}

const server = {
    mode,
    entry: './src/server/index.js',
    target: 'node',

    externals: [nodeExternals()],

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
    },
    module: { rules: rules('server') },
}
module.exports = [client, server]
