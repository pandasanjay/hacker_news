import express from 'express'
import { matchRoutes } from 'react-router-config'
import createStore from '../store/store'
import renderer from './renderer'
import Routes from '../Routes'
/* eslint-disable  no-undef */
const PORT = process.env.PORT || 3000
const app = express()
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
        res.send(content)
    })
})

app.listen(PORT, () => {
    /* eslint-disable no-console */
    console.log(`Server is listening on port ${PORT}`)
})
