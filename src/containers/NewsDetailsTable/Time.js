import React, { useMemo, memo } from 'react'
import { getRelativeTime } from '../../helpers/helpers'
const Time = ({ created_at }) => {
    const createdAt = useMemo(() => getRelativeTime(created_at), [created_at])
    return <span className="hn_time">{`${createdAt}`}</span>
}

export default memo(Time)
