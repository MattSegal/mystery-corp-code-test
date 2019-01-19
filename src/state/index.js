import { compose, applyMiddleware, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import persistState from 'redux-localstorage'

import reducer from './reducer'
import actions from './actions'
import initialState from './init'

const loggerMiddleware = createLogger()
const middleware = applyMiddleware(thunkMiddleware, loggerMiddleware)
// Store Redux state keys in localStorage.
// This is a memory-leak in the long term, but we'll cross that bridge when we get to it.
const enhancer = compose(
  middleware,
  persistState()
)
const store = createStore(reducer, initialState, enhancer)

export { store, actions }
