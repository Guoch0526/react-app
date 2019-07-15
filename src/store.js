import promiseMiddleware from 'redux-promise'
import rootReducer from './redux/reducers'
import {applyMiddleware, compose, createStore} from 'redux'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  rootReducer,
  /* preloadedState, */
  composeEnhancers(
    applyMiddleware(promiseMiddleware)
  )
)

export default store
