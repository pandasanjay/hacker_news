import path from 'path'
import fs from 'fs'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config'
import serialize from 'serialize-javascript'
import Routes from '../Routes'
export default (req, store, context) => {
    const content = renderToString(
        <Provider store={store}>
            <StaticRouter location={req.path} context={context}>
                <div>{renderRoutes(Routes)}</div>
            </StaticRouter>
        </Provider>
    )
    const indexFile = path.resolve('./dist/public/html/index.html')
    const data = fs.readFileSync(indexFile, 'utf8')
    return data
        .replace('<div id="app"></div>', `<div id="app">${content}</div>`)
        .replace(
            '</body>',
            `<script>window.__SERVER_STATE__ = ${serialize(
                store.getState()
            ).replace(/</g, '\\u003c')}</script></body>`
        )
}
