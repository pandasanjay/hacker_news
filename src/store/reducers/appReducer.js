export const types = {
    SET_APP_STATE: 'hacker/SET_APPLICATION_STATE',
    FETCH_STORY_REQUEST: 'hacker/FETCH_STORY_REQUEST',
    FETCH_STORY_REQUEST_SUCCESS: 'hacker/FETCH_STORY_REQUEST_SUCCESS',
    SET_ERROR_FLAG: 'hacker/SER_ERROR_FLAG',
    SET_UP_VOTE_PER_STORY: 'hacker/SET_UP_VOTE_PER_STORY',
    SET_UP_UPDATED_STORY: 'hacker/SET_UP_UPDATED_STORY',
    HIDE_STORY_FROM_LIST: 'hacker/HIDE_STORY_FROM_LIST',
}

const initialState = {
    stories: {},
    error: {
        isError: false,
        msg: {},
    },
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_APP_STATE:
            return { ...state, ...action.payload }
        case types.FETCH_STORY_REQUEST_SUCCESS:
            return { ...state, ...{ stories: action.payload.getStories } }
        case types.SET_UP_UPDATED_STORY:
            return { ...state, ...{ stories: { ...action.payload } } }
        case types.SET_ERROR_FLAG:
            return { ...state, ...{ error: action.payload } }
        default:
            return state
    }
}

const setAppState = (payload) => ({ type: types.SET_APP_STATE, payload })
const getHackerNews = (payload) => ({
    type: types.FETCH_STORY_REQUEST,
    payload,
})
const setHackerNews = (payload) => ({
    type: types.FETCH_STORY_REQUEST_SUCCESS,
    payload,
})
const setError = (payload) => ({
    type: types.SET_ERROR_FLAG,
    payload,
})
const setVote = (payload) => ({
    type: types.SET_UP_VOTE_PER_STORY,
    payload,
})
const setUpdatedStoryList = (payload) => ({
    type: types.SET_UP_UPDATED_STORY,
    payload,
})

const hideStory = (payload) => ({
    type: types.HIDE_STORY_FROM_LIST,
    payload,
})

export default {
    setAppState,
    getHackerNews,
    setHackerNews,
    setError,
    setVote,
    setUpdatedStoryList,
    hideStory,
}
