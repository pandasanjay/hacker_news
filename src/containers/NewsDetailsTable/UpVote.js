import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import actions from '../../store/combine-actions'

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators(actions, dispatch),
})
const UpVote = ({ data, setVote }) => {
    const handelClick = (id) => {
        setVote({ id })
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
    setVote: PropTypes.func,
}

export default connect(null, mapDispatchToProps)(UpVote)
