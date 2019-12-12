import React, { useEffect } from 'react'
import { Text, Box, Static, Color } from 'ink'

import useMessages from '../redux/messages';

export default () => {
  const { messageList } = useMessages()

  return (
    <Box flexGrow={1}>
      <Static>
        {[
          <Box width='100%' key='title' padding={1}>
            <Color blue>
              <Text key='title' bold underline>
                tchat
            </Text>
            </Color>
          </Box>,
          ...messageList
            .map(({ username, message }) => (
              <Box width='100%' key={username + message} paddingLeft={2}>
                <Text bold>{username} said: </Text>
                <Text>{message}</Text>
              </Box>
            ))
        ]}
      </Static>
    </Box>
  )
}
