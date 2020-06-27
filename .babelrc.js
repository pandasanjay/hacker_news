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
    const presets = ['@babel/preset-env', '@babel/preset-react']
    return {
        plugins,
        presets,
    }
}
