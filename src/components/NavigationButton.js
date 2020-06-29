import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
const NavigationButton = ({ page, nbPages }) => {
    const nextPage = page + 1
    const prevPage = page - 1
    const nextShowCondition = nbPages - 1 > page
    return (
        <div className="hn_page_navigation">
            {!!page && <Link to={`/${prevPage}`}>Previous</Link>}
            {` | `}
            {!!nextShowCondition && <Link to={`/${nextPage}`}>Next</Link>}
        </div>
    )
}
NavigationButton.propTypes = {
    page: PropTypes.number,
    nbPages: PropTypes.number,
}

export default NavigationButton
