import React, { memo } from 'react'
import PropTypes from 'prop-types'

const Title = ({ title }) => <span className="hn_title">{title}</span>
Title.propTypes = {
    title: PropTypes.string,
}
export default memo(Title)
