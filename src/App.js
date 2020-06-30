import React from 'react'
import PropTypes from 'prop-types'
import { renderRoutes } from 'react-router-config'
import './styles/style.scss'
import ErrorBoundary from './components/ErrorBoundary'

const App = ({ route }) => {
    return (
        <main>
            <div className="container">
                <ErrorBoundary>{renderRoutes(route.routes)}</ErrorBoundary>
            </div>
        </main>
    )
}
App.propTypes = {
    route: PropTypes.object,
}
export default App
