export const normalizeStory = ({ hits = [], ...others }) => {
    const byIds = hits.reduce((init, story) => {
        init[story.objectID] = story
        return init
    }, {})
    return {
        byIds,
        ...others,
    }
}

export const types = {
    FETCH_STORY_REQUEST: 'hacker/FETCH_STORY_REQUEST',
    FETCH_STORY_REQUEST_SUCCESS: 'hacker/FETCH_STORY_REQUEST_SUCCESS',
    SET_UP_VOTE_PER_STORY: 'hacker/SET_UP_VOTE_PER_STORY',
    SET_UP_UPDATED_STORY: 'hacker/SET_UP_UPDATED_STORY',
    HIDE_STORY_FROM_LIST: 'hacker/HIDE_STORY_FROM_LIST',
}
const initialState = {
    byIds: {},
}
const updateVoteCountInStory = (state, id) => {
    const story = state.byIds[id]
    return {
        ...state,
        byIds: {
            ...state.byIds,
            [id]: story.isVoted
                ? { ...story }
                : {
                      ...story,
                      ...{ isVoted: true, points: (story.points += 1) },
                  },
        },
    }
}
const updateHiddenStatusInStory = (state, id) => {
    const story = state.byIds[id]
    return {
        ...state,
        byIds: {
            ...state.byIds,
            [id]: {
                ...story,
                ...{ isHidden: true },
            },
        },
    }
}
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_STORY_REQUEST_SUCCESS:
            return { ...state, ...action.payload }
        case types.SET_UP_UPDATED_STORY:
            return { ...state, stories: action.payload }
        case types.SET_UP_VOTE_PER_STORY:
            return updateVoteCountInStory(state, action.payload.id)
        case types.HIDE_STORY_FROM_LIST:
            return updateHiddenStatusInStory(state, action.payload.id)
        default:
            return state
    }
}

const getHackerNews = (payload) => ({
    type: types.FETCH_STORY_REQUEST,
    payload,
})
const setHackerNews = (payload) => ({
    type: types.FETCH_STORY_REQUEST_SUCCESS,
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
    getHackerNews,
    setHackerNews,
    setVote,
    setUpdatedStoryList,
    hideStory,
}
