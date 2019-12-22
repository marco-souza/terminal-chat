/**
 * NOTE: this file is the reducer, function which effectively changes
 * redux state.
 */
import { ADD_MESSAGE, MessageType, MessagesInitialStateType } from './constants'

export const initialState: MessagesInitialStateType = {
  messageList: [{
    username: 'tchat',
    message: 'Welcome to tchat! -__(^.^)',
  }],
}

interface ReduxActionType<PayloadType> {
  type: string;
  payload: PayloadType;
}

export default (state = initialState, action: ReduxActionType<MessageType>) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        messageList: [
          ...state.messageList,
          action.payload,
        ],
      }

    default:
      return state
  }
}
