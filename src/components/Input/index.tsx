import React, { useState } from 'react'
import { Box, Text, Color, ColorProps } from 'ink'
import TextInput from 'ink-text-input';

import handleCommands from './commands';

interface InputProps {
  color: ColorProps['rgb'];
  say: Function;
}

export default ({ color, say }: InputProps) => {
  const [message, setMessageText] = useState<string>('')


  const handleSubmit = () => {
    handleCommands(message)
    message && say(message)
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
