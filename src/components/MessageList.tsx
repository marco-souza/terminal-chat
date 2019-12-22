import React, { useEffect } from 'react'
import { Text, Box, Static } from 'ink'

import { MessageType } from '../redux/messages/constants'
import { useIRC } from '../hooks/irc'

export default () => {
  const { messages } = useIRC({})
  return (
    <Box height={3}>
      <Static>
        {messages
          .map(({ username, message }) => (
            <Box width='100vw' key={username + message}>
              <Text bold>{username} said: </Text>
              <Text>{message}</Text>
            </Box>
          ))}
      </Static>
    </Box>
  )
}
