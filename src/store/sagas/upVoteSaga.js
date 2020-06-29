import { call, select, put } from 'redux-saga/effects'
import actions from '../combine-actions'
import {getStories} from "../utils"
export function updateVoteByFromLocalStorage(state) {
    if (state.appState) {
        state.appState.stories.hits.forEach((story) => {
            let isVoted = false
            if ('localStorage' in window) {
                isVoted = localStorage.getItem(story.objectID)
            }
            if (isVoted) {
                incrementVote(story)
            }
        })
    }
}
function incrementVote(story) {
    story.isVoted = true
    story.points += 1
}
function updateVoteStoryList(id, stories) {
    const story = stories.hits.find(
        (data) => data.objectID === id && !data.isVoted
    )
    if (story) {
        incrementVote(story)
    }
}

export function* updateVote({ payload }) {
    if ('localStorage' in window) {
        localStorage.setItem(payload.id, true)
    }
    let stories = yield select(getStories)
    yield call(updateVoteStoryList, payload.id, stories)
    yield put(actions.setUpdatedStoryList(stories))
}
