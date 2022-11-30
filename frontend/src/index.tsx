import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App/App'
import { ErrorStateProvider } from './context/ErrorStateContext'
import { ApolloProvider } from 'context/ApolloContext'
import './index.css'

// react render
ReactDOM.render(
  <ErrorStateProvider>
    <ApolloProvider>
      <App />
    </ApolloProvider>
  </ErrorStateProvider>,
  document.getElementById('root')
)
