import React, { useState } from 'react'
import { Box } from 'ink'
import TextInput from 'ink-text-input';

import useMessages from '../redux/messages';

export default () => {
  const { actions } = useMessages()
  const [message, setMessageText] = useState<string>('')

  const handleSubmit = () => {
    message && actions.addMessage({
      username: process.env.USER || 'guest',
      message,
    })
    message && setMessageText('')
  }

  return (
    <Box padding={1}>
      > {
        <TextInput
          placeholder='enter your msg here'
          value={message}
          onChange={setMessageText}
          onSubmit={handleSubmit}
          showCursor
          highlightPastedText
        />
      }
    </Box>
  )
}
