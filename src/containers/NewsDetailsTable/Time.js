import React, { useMemo, memo } from 'react'
import PropTypes from 'prop-types'
import { getRelativeTime } from '../../helpers/helpers'
const Time = ({ created_at }) => {
    const createdAt = useMemo(() => getRelativeTime(created_at), [created_at])
    return <span className="hn_time">{`${createdAt}`}</span>
}
Time.propTypes = {
    created_at: PropTypes.string,
}
export default memo(Time)
