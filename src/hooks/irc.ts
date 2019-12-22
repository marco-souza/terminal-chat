import { useState } from 'react'
import useMessages from '../redux/messages'
import IRCSingleton from '../helpers/IRCSingleton'

type IRCHookOptions = {
  nick?: string,
  host?: string,
  port?: number,
  channel?: string,
}

export const useIRC = ({ host = '', nick = '', channel = '#general', port = 6667 }: IRCHookOptions) => {
  const { messageList, actions } = useMessages()
  const [isReady, setIsReady] = useState(false)

  const client = IRCSingleton.getInstance({
    host,
    nick,
    channel,
    port,
    handlers: {
      [`message${channel}`]: (from: string, message: string) => {
        actions.addMessage({
          message,
          username: from,
        })
      },
      pm: (from: string, message: string) => {
        actions.addMessage({
          message,
          username: `PM(${from})`,
        })
      },
      registered: () => {
        setIsReady(true)
      },
    }
  })

  const say = (msg: string) => {
    client.say(channel, msg)
    actions.addMessage({
      message: msg,
      username: nick
    })
  }

  return {
    messages: messageList,
    isReady,
    say,
  }
}