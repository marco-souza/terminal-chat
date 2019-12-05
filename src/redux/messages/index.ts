// Make easy to import all important ducks information
import { useSelector, useDispatch } from 'react-redux'

import epics from './epics'
import reducer, { initialState } from './reducer'
import { addMessage, MessageType, MessagesInitialStateType } from './constants'

interface MessagesState {
  messages: MessagesInitialStateType;
}

// Setup redux hook
export default () => {
  const dispatch = useDispatch()
  const state: MessagesInitialStateType = useSelector((state: MessagesState) => state['messages']) // select duck from store

  const actions = { // set actions with dispatch
    addMessage: (message: MessageType) => dispatch(addMessage(message))
  }

  return {
    ...state,
    actions,
  }
}

export {
  epics,
  reducer,
  initialState,
}
