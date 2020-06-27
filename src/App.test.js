import React from 'react'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import configureStore from 'redux-mock-store'

const mockStore = configureStore([])
import App from './App'
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
                    <App />
                </Router>
            </Provider>
        )
        expect(asFragment()).toMatchSnapshot()
    })
})
