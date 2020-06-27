import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import actions from '../store/combine-actions'
const mapStateToProps = (state) => ({
    state,
})

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators(actions, dispatch),
})

const Story = (props) => {
    useEffect(() => {
        props.setAppState({ name: 'Helloo' })
    }, [])
    return <div>My story</div>
}
Story.propTypes = {
    setAppState: PropTypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps)(Story)
