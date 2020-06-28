const mode = process.env.NODE_ENV || 'development'
const plugins = require('./webpack/plugins')
const nodeExternals = require('webpack-node-externals')
const merge = require('webpack-merge')
const path = require('path')
const rules = require('./webpack/rules')
const production = process.env.NODE_ENV === 'production'
const baseConfig = {
    mode,
    optimization: {
        splitChunks: {
            // include all types of chunks
            chunks: 'all',
        },
    },
}
const client = merge(baseConfig, {
    plugins,
    name: 'client',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist/public'),
        filename: production ? '[name]-bundle-[chunkhash:8].js' : '[name].js',
    },

    module: { rules: rules() },
    devServer: {
        contentBase: path.join(__dirname, 'dist/public'),
        compress: true,
        port: 3000,
    },
    devtool: 'inline-source-map',
})

const server = merge(baseConfig, {
    entry: './src/server/index.js',
    target: 'node',

    externals: [nodeExternals()],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
    },
    module: { rules: rules('server') },
})
module.exports = [client, server]
