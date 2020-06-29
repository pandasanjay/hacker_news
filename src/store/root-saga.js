import { all, takeLatest } from 'redux-saga/effects'
import { types } from './reducers/appReducer'
import { getStoriesFromApi } from './sagas/getStorySaga'
import { updateVote } from './sagas/upVoteSaga'
import { hideStory } from './sagas/hideStorySaga'

function* watchRequestGetStoryApi() {
    yield takeLatest(types.FETCH_STORY_REQUEST, getStoriesFromApi)
}
function* watchForUpVoteRequest() {
    yield takeLatest(types.SET_UP_VOTE_PER_STORY, updateVote)
}
function* watchForHideStoryRequest() {
    yield takeLatest(types.HIDE_STORY_FROM_LIST, hideStory)
}
export default function* rootSaga() {
    yield all([
        watchRequestGetStoryApi(),
        watchForUpVoteRequest(),
        watchForHideStoryRequest(),
    ])
}
