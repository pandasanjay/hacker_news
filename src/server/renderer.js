import path from 'path'
import fs from 'fs'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config'
import serialize from 'serialize-javascript'
import { ChunkExtractor, ChunkExtractorManager } from '@loadable/server'
import Routes from '../Routes'

export default (req, store, context) => {
    const statsFile = path.resolve('dist/public/loadable-stats.json')
    const extractor = new ChunkExtractor({ statsFile })
    const content = renderToString(
        <ChunkExtractorManager extractor={extractor}>
            <Provider store={store}>
                <StaticRouter location={req.path} context={context}>
                    {renderRoutes(Routes)}
                </StaticRouter>
            </Provider>
        </ChunkExtractorManager>
    )
    const indexFile = path.resolve('./dist/public/html/index.html')
    const data = fs.readFileSync(indexFile, 'utf8')
    return data
        .replace(
            '<div id="app"></div>',
            `<div id="app">${content}</div><script>window.__SERVER_STATE__ = ${serialize(
                store.getState()
            ).replace(/</g, '\\u003c')}</script>${extractor.getScriptTags()}`
        )
        .replace('</head>', `${extractor.getStyleTags()}</head>`)
}
