import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import actions from '../../store/combine-actions'

const UpVote = ({ data }) => {
    const dispatch = useDispatch()
    const handelClick = (id) => {
        dispatch(actions.setVote({ id }))
    }
    return (
        <center>
            <div
                className={`votearrow`}
                title="upvote"
                role="button"
                aria-pressed="false"
                onClick={() => handelClick(data.objectID)}
            ></div>
        </center>
    )
}
UpVote.propTypes = {
    data: PropTypes.object,
}

export default UpVote
