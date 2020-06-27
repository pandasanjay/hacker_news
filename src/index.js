import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { Provider } from 'react-redux'
import createStore from './store/store'
import Routes from './Routes'
const state = window.__SERVER_STATE__
delete window.__SERVER_STATE__
const store = createStore(state)
ReactDom.hydrate(
    <Provider store={store}>
        <Router>
            <div>{renderRoutes(Routes)}</div>
        </Router>
    </Provider>,
    document.getElementById('app')
)
