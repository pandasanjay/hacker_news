import React from 'react'
import { hydrate } from 'react-dom'
import { loadableReady } from '@loadable/component'
import { BrowserRouter as Router } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { Provider } from 'react-redux'
import createStore from './store/store'
import Routes from './Routes'
const state = window.__SERVER_STATE__
delete window.__SERVER_STATE__
const store = createStore(state)
loadableReady(() => {
    hydrate(
        <Provider store={store}>
            <Router>{renderRoutes(Routes)}</Router>
        </Provider>,
        document.getElementById('app')
    )
})

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
        // .then((registration) => {
        //     console.log('SW registered: ', registration)
        // })
        // .catch((registrationError) => {
        //     console.log('SW registration failed: ', registrationError)
        // })
    })
}
