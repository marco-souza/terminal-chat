/**
 * NOTE: Constants used to change states
 */

const duckNamePrefix = 'MESSAGES'

const createAction = (type: string) =>
  (payload: MessageType) => ({ type, payload })


// Redux Types
export const ADD_MESSAGE = `${duckNamePrefix}/ADD_MESSAGE`


// Redux Actions (format: { type, payload })
export const addMessage = createAction(ADD_MESSAGE)


export interface MessageType {
  message: string;
  username: string;
}

export interface MessagesInitialStateType {
  messageList: MessageType[],
}