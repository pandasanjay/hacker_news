import React, { memo } from 'react'
import PropTypes from 'prop-types'

const Author = ({ author }) => (
    <span className="hn_author">
        {`by`} <b>{author}</b>
    </span>
)
Author.propTypes = {
    author: PropTypes.string,
}
export default memo(Author)
