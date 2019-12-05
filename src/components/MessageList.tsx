import React, { useEffect } from 'react'
import { Text, Box, Static } from 'ink'

import useMessages from '../redux/messages';

export default () => {
  const { messageList } = useMessages()

  return (
    <Box height={3}>
      <Static>
        {messageList
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
