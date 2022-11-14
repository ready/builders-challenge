import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App/App'
import { ErrorStateProvider } from './context/ErrorStateContext'
import './index.css'

// react render
ReactDOM.render(
  <ErrorStateProvider>
    <App />
  </ErrorStateProvider>,
  document.getElementById('root')
)
