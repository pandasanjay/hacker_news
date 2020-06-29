import { updateVoteByFromLocalStorage } from './sagas/upVoteSaga'
import { updateHideFlagByFromLocalStorage } from './sagas/hideStorySaga'
export const updateState = (state) => {
    updateHideFlagByFromLocalStorage(state)
    updateVoteByFromLocalStorage(state)

    return state
}
export const getStories = (state) => state.appState.stories
