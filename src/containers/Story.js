import React, { useEffect } from 'react'
import PropsType from 'prop-types'
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
    return <div>{props.state.appState.name}</div>
}

Story.propTypes = {
    setAppState: PropsType.func,
    state: PropsType.object,
}
const loadData = (store) => {
    return store.dispatch(actions.setAppState({ name: 'from server' }))
}
export default {
    component: connect(mapStateToProps, mapDispatchToProps)(Story),
    loadData,
}
