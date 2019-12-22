import { Client } from 'irc'

type IRCOptions = {
  nick: string,
  host: string,
  port?: number,
  channel?: string,
  handlers: Object,
}

export default class IRCSingleton {
  static instance?: Client

  static getInstance({ host, nick, handlers, channel = '#general', port = 6667 }: IRCOptions) {
    if (!IRCSingleton.instance) {
      IRCSingleton.instance = new Client(host, nick, {
        channels: [channel],
        port
      })

      Object.entries(handlers).map(([event, func]) => {
        IRCSingleton.instance?.addListener(event, func)
        // IRCSingleton.instance && IRCSingleton.instance.addListener(event, func)
      })
    }

    return IRCSingleton.instance as Client
  }
}