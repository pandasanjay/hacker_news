import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import actions from '../../store/combine-actions'

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators(actions, dispatch),
})
const UpVote = React.memo(({ data, setVote }) => {
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
})
export default connect(null, mapDispatchToProps)(UpVote)
