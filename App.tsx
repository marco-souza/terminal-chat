import React, { useState } from 'react'
import { Text, Box, Static } from 'ink'
import TextInput from 'ink-text-input';

const USER = process.env.USER || 'guest'

export default () => {
  const [message, setMessage] = useState<string>('')
  const [messageList, setMessageList] = useState<Array<string>>([])

  const handleSubmit = (value: string) => {
    value && setMessageList([
      ...messageList,
      value,
    ])
    value && setMessage('')
  }

  return (
    <>
      <Box width='100vw'>
        <Box height={3}>
          <Static>
            {messageList
              .map((item, index) => (
                <Box width='100vw' key={item + index}>
                  <Text bold>{USER} said:</Text>
                  <Text> {item}</Text>
                </Box>
              ))}
          </Static>
        </Box>

        <Box height={1} padding={2}>
          <TextInput
            placeholder='enter your msg here'
            value={message}
            onChange={setMessage}
            onSubmit={handleSubmit}
          />
        </Box>
      </Box>
    </>
  )
}
