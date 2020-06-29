import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootSaga from './root-saga'
import combinedReducer from './combine-reducer'
import { updateState } from './utils'
const sagaMiddleware = createSagaMiddleware()

export default (state = {}) => {
    const store = createStore(
        combinedReducer,
        updateState(state),
        composeWithDevTools(applyMiddleware(sagaMiddleware))
    )
    sagaMiddleware.run(rootSaga)
    return store
}
