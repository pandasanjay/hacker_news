import AppActions from './reducers/appReducer'
import StoryActions from './reducers/storyReducer'

export default {
    ...{},
    ...AppActions,
    ...StoryActions,
}
