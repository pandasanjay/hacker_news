import React from 'react'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import configureStore from 'redux-mock-store'
import { App } from './App'
import Routers from './Routes'
const mockStore = configureStore([])
describe('App', () => {
    let store

    beforeEach(() => {
        store = mockStore({
            appState: {
                name: 'hello',
            },
        })
    })
    it('should render app and check snapshot', () => {
        const { asFragment } = render(
            <Provider store={store}>
                <Router>
                    <App route={Routers[0]} />
                </Router>
            </Provider>
        )
        expect(asFragment()).toMatchSnapshot()
    })
})
