/**
 * NOTE: Epics are used to take care of side-effects in redux.
 * They are action streamers which can be subscribed.
 *
 * Refs: [rxjs, redux-observable]
 */
import { combineEpics } from 'redux-observable'

export const epics = {}

export default combineEpics(...Object.values(epics))
