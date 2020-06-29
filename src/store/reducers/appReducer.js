export const types = {
    SET_APP_STATE: 'hacker/SET_APPLICATION_STATE',
    SET_ERROR_FLAG: 'hacker/SER_ERROR_FLAG',
}

const initialState = {
    error: {
        isError: false,
        msg: {},
    },
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_APP_STATE:
            return { ...state, ...action.payload }
        case types.SET_ERROR_FLAG:
            return { ...state, error: action.payload }
        default:
            return state
    }
}

const setAppState = (payload) => ({ type: types.SET_APP_STATE, payload })

const setError = (payload) => ({
    type: types.SET_ERROR_FLAG,
    payload,
})

export default {
    setAppState,
    setError,
}
