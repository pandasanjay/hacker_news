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
        //props.setAppState({ name: 'From server' })
    }, [])
    return <>{props.state.appState.name}</>
}

Story.propTypes = {
    setAppState: PropsType.func,
    state: PropsType.object,
}
export const loadData = (store) => {
    return store.dispatch(actions.setAppState({ name: 'From server' }))
}

export default connect(mapStateToProps, mapDispatchToProps)(Story)
