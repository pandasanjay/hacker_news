import { call, select, put } from 'redux-saga/effects'
import actions from '../combine-actions'
import { getStories } from '../utils'
export function updateHideFlagByFromLocalStorage(state) {
    if (state.appState) {
        state.appState.stories.hits.forEach((story) => {
            let isHidden = false
            if ('localStorage' in window) {
                isHidden = localStorage.getItem(`${story.objectID}_hide`)
            }
            if (isHidden) {
                setHideStoryFlag(story)
            }
        })
    }
}
function setHideStoryFlag(story) {
    story.isHidden = true
}
function hideStoryFromList(id, stories) {
    const story = stories.hits.find(
        (data) => data.objectID === id && !data.isHidden
    )
    if (story) {
        setHideStoryFlag(story)
    }
}
export function* hideStory({ payload }) {
    if ('localStorage' in window) {
        localStorage.setItem(`${payload.id}_hide`, true)
    }
    let stories = yield select(getStories)

    yield call(hideStoryFromList, payload.id, stories)
    yield put(actions.setUpdatedStoryList(stories))
}
