import React from 'react'
import PropTypes from 'prop-types'
import { renderRoutes } from 'react-router-config'
import './styles/style.scss'
import ErrorBoundary from './components/ErrorBoundary'

export const App = ({ route }) => {
    return (
        <>
            <div>
                <ErrorBoundary>{renderRoutes(route.routes)}</ErrorBoundary>
            </div>
        </>
    )
}
App.propTypes = {
    route: PropTypes.object,
}
export default {
    component: App,
}
