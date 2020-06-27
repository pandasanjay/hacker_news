module.exports = (api) => {
    api.cache(true)
    const plugins = [
        [
            '@babel/plugin-transform-runtime',
            {
                regenerator: true,
            },
        ],
    ]
    const presets = [
        [
            '@babel/preset-env',
            {
                corejs: 3,
                useBuiltIns: 'usage',
            },
        ],
        '@babel/preset-react',
    ]
    return {
        plugins,
        presets,
    }
}
