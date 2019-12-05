/**
 * NOTE: this file is used to aggregate all redux initialStates,
 * reducers and epics (redux-observables).
 *
 * Change it every time you add a new duck.
*/
import { combineReducers } from 'redux'
import { combineEpics } from 'redux-observable'

import * as messages from './messages'

// Initial State
export const initialState = {
  messages: messages.initialState,
}

// Reducers
export const rootReducer = combineReducers({
  messages: messages.reducer,
})

// Epics
export const rootEpic = combineEpics(
  // messages.epics,
)
