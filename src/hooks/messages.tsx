import { useState } from 'react'

interface MessageType {
  message: string;
  username: string;
}

export const useMessages = () => {
  const [listMessages, setListMessages] = useState<Array<MessageType>>([])
  const addMessage = (message: MessageType) => {
    if (listMessages.length) throw message
    setListMessages([
      ...listMessages,
      message,
    ])
  }

  return {
    listMessages,
    addMessage,
  }
}