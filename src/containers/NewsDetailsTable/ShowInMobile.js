import React from 'react'
import PropTypes from 'prop-types'

const ShowInMobile = ({ num_comments, points }) => {
    return (
        <div className="nb_display_mobile">
            <span>
                <b>Comments:</b> {num_comments}
            </span>
            {` | `}
            <span>
                <b>Votes:</b> {points}
            </span>
        </div>
    )
}
ShowInMobile.propTypes = {
    num_comments: PropTypes.number,
    points: PropTypes.number,
}
export default ShowInMobile
