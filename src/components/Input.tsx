import React, { useState } from 'react'
import { Box, Text, Color, ColorProps } from 'ink'
import TextInput from 'ink-text-input';

import useMessages from '../redux/messages';

interface InputProps {
  color: ColorProps['rgb'];
}

export default ({ color }: InputProps) => {
  const { actions } = useMessages()
  const [message, setMessageText] = useState<string>('')

  const handleCommands = (command: string) => {
    switch (command) {
      case 'q':
      case 'quit':
      case 'exit':
        process.exit()
    }
  }

  const handleSubmit = () => {
    handleCommands(message)
    message && actions.addMessage({
      username: process.env.USER || 'guest',
      message,
    })
    message && setMessageText('')
  }

  return (
    <Box padding={1}>
      {<Color rgb={color}>
        <Text key='title' bold underline>
          {process.env.USER || 'tchat'}
        </Text>
      </Color>
      }: {
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
