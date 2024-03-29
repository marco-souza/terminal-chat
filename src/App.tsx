import React from 'react'
import { Box, ColorProps } from 'ink'
import Input from './components/Input';
import MessageList from './components/MessageList';
import Spinner from './components/Spinner';

import { useIRC } from './hooks/irc'

type RGB = ColorProps['rgb']

const genRandomColor = () => Math.floor(Math.random() * 255)
const genRandomRGB = () => Array.from(Array(3)).map(genRandomColor) as RGB

export default () => {
  const { say, isReady } = useIRC({
    host: 'tremtec.com',
    nick: process.env.USER || 'guest',
  })

  return (
    <Box flexDirection="column">
      {isReady
        ? (
          <>
            <MessageList />
            <Input color={genRandomRGB()} say={say} />
          </>
        )
        : <Spinner />
      }
    </Box>
  )
}
