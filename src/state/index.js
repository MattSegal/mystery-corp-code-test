import { compose, applyMiddleware, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import persistState from 'redux-localstorage'

import reducer from './reducer'
import actions from './actions'
import initialState from './init'

const loggerMiddleware = createLogger()
const middleware = applyMiddleware(thunkMiddleware, loggerMiddleware)
// Redux state keys that are stored locally
const persistedKeys = ['auth']
const enhancer = compose(
  middleware,
  persistState(persistedKeys)
)
const store = createStore(reducer, initialState, enhancer)

export { store, actions }
