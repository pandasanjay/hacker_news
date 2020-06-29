import { combineReducers } from 'redux'

import { reducer as app } from './reducers/appReducer'
import { reducer as story } from './reducers/storyReducer'

export default combineReducers({
    app,
    story,
})
