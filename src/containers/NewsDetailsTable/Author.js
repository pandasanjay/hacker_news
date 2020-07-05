import React, { memo } from 'react'
const Author = ({ author }) => (
    <span className="hn_author">
        {`by`} <b>{author}</b>
    </span>
)
export default memo(Author)
