import React, { memo, useMemo } from 'react'
import PropTypes from 'prop-types'

import Title from './Title'
import Url from './Url'
import Author from './Author'
import Time from './Time'
import HideLink from './HideLink'
import ShowInMobile from './ShowInMobile'
const NewsDetails = ({ data }) => {
    return (
        <div className="hn_details">
            <Title title={data.title} /> <Url url={data.url} />{' '}
            <Author author={data.author} />{' '}
            <Time created_at={data.created_at} />{' '}
            <HideLink id={data.objectID} />{' '}
            <ShowInMobile
                num_comments={data.num_comments}
                points={data.points}
            />
        </div>
    )
}
NewsDetails.propTypes = {
    data: PropTypes.object,
}
export default memo(NewsDetails)
