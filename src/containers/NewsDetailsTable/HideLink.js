import React from 'react'
import { useDispatch } from 'react-redux'
import actions from '../../store/combine-actions'
const HideLink = ({ id }) => {
    const dispatch = useDispatch()
    const handelHideClick = (id) => {
        dispatch(actions.hideStory({ id }))
    }

    return (
        <span className="hn_hide">
            {`[`} <a onClick={() => handelHideClick(id)}>hide</a> {`]`}
        </span>
    )
}
export default HideLink
