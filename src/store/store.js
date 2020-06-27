import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './root-saga'
import combinedReducer from './combine-reducer'
const sagaMiddleware = createSagaMiddleware()

export default (state = {}) => {
    const store = createStore(
        combinedReducer,
        state,
        applyMiddleware(sagaMiddleware)
    )
    sagaMiddleware.run(rootSaga)
    return store
}
