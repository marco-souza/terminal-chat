import { createStore, compose, applyMiddleware } from 'redux'
import { createEpicMiddleware } from 'redux-observable'

import { initialState, rootEpic, rootReducer } from './root'

const epicMiddleware = createEpicMiddleware()

export const generateStore = () => {
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(epicMiddleware),
    ),
  )
  epicMiddleware.run(rootEpic)
  return store
}
