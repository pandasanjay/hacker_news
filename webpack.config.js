const path = require('path')
const mode = process.env.NODE_ENV || 'development'
const rules = require('./webpack/rules')
const plugins = require('./webpack/plugins')
module.exports = {
    mode,
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: { rules },
    plugins,
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 3000,
    },
}
