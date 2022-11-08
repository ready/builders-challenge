import React from 'react'
import ReactDOM from 'react-dom'
import LogRocket from 'logrocket'

import App from 'components/App/App'
import * as serviceWorker from './serviceWorker'
import { ErrorStateProvider } from 'context/ErrorStateContext'
import 'index.css'

// Logrocket init
if (process.env.NODE_ENV === 'production') {
  LogRocket.init('krxnlu/ready-subscriber-portal')
}

// react render
ReactDOM.render(
  <ErrorStateProvider>
    <App />
  </ErrorStateProvider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
