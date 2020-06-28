const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const babelLoader = {
    test: /\.m?js$/,
    exclude: /(node_modules)/,
    use: {
        loader: 'babel-loader',
        options: {},
    },
}

const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
        {
            loader: MiniCssExtractPlugin.loader,
            options: {
                esModule: true,
            },
        },
        'css-loader',
        {
            loader: 'sass-loader',
            options: {
                // Prefer `dart-sass`
                implementation: require('sass'),
            },
        },
    ],
}

const cssLoaderIgnore = {
    test: /\.s[ac]ss$/i,
    loader: 'ignore-loader',
}

module.exports = (configType = 'client') => {
    if (configType === 'client') {
        return [babelLoader, cssLoader]
    } else {
        return [babelLoader, cssLoaderIgnore]
    }
}
