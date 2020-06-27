import React from 'react'
import PropTypes from 'prop-types'
const NoMatch = ({ staticContext = {} }) => {
    staticContext.notFound = true
    return (
        <div>
            <h3>No match!!</h3>
        </div>
    )
}
NoMatch.propTypes = {
    staticContext: PropTypes.object,
}
export default {
    component: NoMatch,
}
