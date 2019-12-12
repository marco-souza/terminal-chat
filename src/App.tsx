import React from 'react'
import { Box } from 'ink'
import Input from './components/Input';
import MessageList from './components/MessageList';

export default () => {
  return (
    <Box flexDirection="column" justifyContent="space-between">
      <MessageList />
      <Input />
    </Box>
  )
}
