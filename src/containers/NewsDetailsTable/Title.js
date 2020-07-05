import React, { memo } from 'react'
const Title = ({ title }) => <span className="hn_title">{title}</span>
export default memo(Title)
