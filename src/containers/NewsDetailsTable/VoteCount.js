import React, { memo } from 'react'
import PropTypes from 'prop-types'
const VoteCount = ({ data }) => {
    let colorClass = ''
    if (data.points >= 50) {
        colorClass = 'hn_vote_above_50'
    }
    if (data.points >= 80) {
        colorClass = 'hn_vote_above_80'
    }
    if (data.points >= 100) {
        colorClass = 'hn_vote_above_100'
    }
    return <span className={colorClass}>{data.points}</span>
}
VoteCount.propTypes = {
    data: PropTypes.object,
}

export default memo(VoteCount)
