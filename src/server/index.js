import express from 'express'
import { matchRoutes } from 'react-router-config'
import graphqlHTTP from 'express-graphql'
import debug from 'debug'
import { schema, root } from './graphql/schema'
import createStore from '../store/store'
import renderer from './renderer'
import Routes from '../Routes'
import compression from 'compression'
import secure from 'ssl-express-www'

const log = debug('HN:server:index')
/* eslint-disable  no-undef */
const PORT = process.env.PORT || 3000

const app = express()

app.use(secure)
app.use(compression())
app.use(
    '/graphql',
    graphqlHTTP({
        schema: schema,
        rootValue: root,
        graphiql: process.env.NODE_ENV !== 'production',
    })
)
app.use(express.static('dist/public'))

app.get('*', (req, res) => {
    const routes = matchRoutes(Routes, req.path)

    const store = createStore()
    const promises = routes.map(({ route, match }) => {
        return route.loadData
            ? route.loadData(store, match)
            : Promise.resolve(null)
    })
    Promise.all(promises).then(() => {
        const context = {}
        const content = renderer(req, store, context)

        if (context.notFound) {
            res.status(404)
        }
        log('Request from %s response %o', req.path, res)
        res.send(content)
    })
})

app.listen(PORT, () => {
    /* eslint-disable no-console */
    console.log(`Server is listening on port ${PORT}`)
})
