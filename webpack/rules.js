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
        'style-loader',
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

module.exports = [babelLoader, cssLoader]
