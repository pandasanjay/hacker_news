import React, { memo } from 'react'
import PropTypes from 'prop-types'

const Time = ({ created_at }) => {
    return <span className="hn_time">{created_at}</span>
}
Time.propTypes = {
    created_at: PropTypes.string,
}
export default memo(Time)
