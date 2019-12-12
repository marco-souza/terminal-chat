import React from 'react'
import { render } from 'ink'
import { Provider } from 'react-redux'
import { generateStore } from './redux/store'

import App from './App'

const store = generateStore()
console.clear()

render(
  <Provider store={store}>
    <App />
  </Provider>
)
