import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App/App'
import { ErrorStateProvider } from './context/ErrorStateContext'
import { ApolloProvider } from 'context/ApolloContext'
import './index.css'
import QuizResultsProvider from 'context/QuizResultsContext'

// react render
ReactDOM.render(
  <ErrorStateProvider>
    <ApolloProvider>
      <QuizResultsProvider>
        <App />
      </QuizResultsProvider>
    </ApolloProvider>
  </ErrorStateProvider>,
  document.getElementById('root')
)
