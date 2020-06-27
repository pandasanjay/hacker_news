export const types = {
    SET_APP_STATE: 'hacker/SET_APPLICATION_STATE',
}

const initialState = {
    name: 'Hacker News',
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_APP_STATE:
            return { ...state, ...action.payload }
        default:
            return state
    }
}

const setAppState = (payload) => ({ type: types.SET_APP_STATE, payload })

export default {
    setAppState,
}
