import React from 'react'
import { Box, ColorProps } from 'ink'
import Input from './components/Input';
import MessageList from './components/MessageList';

type RGB = ColorProps['rgb']

const genRandomColor = () => Math.floor(Math.random() * 255)
const genRandomRGB = () => Array.from(Array(3)).map(genRandomColor) as RGB

export default () => {
  return (
    <Box flexDirection="column">
      <MessageList />
      <Input color={genRandomRGB()} />
    </Box>
  )
}
