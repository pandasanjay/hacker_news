import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './root-saga'
import combinedReducer from './combine-reducer'
const sagaMiddleware = createSagaMiddleware()

export const store = createStore(
    combinedReducer,
    applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(rootSaga)
