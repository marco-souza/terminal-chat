import React from 'react'
import { Box, ColorProps } from 'ink'
import Input from './components/Input';
import MessageList from './components/MessageList';

import { useIRC } from './hooks/irc'

type RGB = ColorProps['rgb']

const genRandomColor = () => Math.floor(Math.random() * 255)
const genRandomRGB = () => Array.from(Array(3)).map(genRandomColor) as RGB

export default () => {
  const { say } = useIRC({
    host: 'tremtec.com',
    nick: process.env.USER || 'guest',
  })

  return (
    <Box flexDirection="column">
      <MessageList />
      <Input color={genRandomRGB()} say={say} />
    </Box>
  )
}
