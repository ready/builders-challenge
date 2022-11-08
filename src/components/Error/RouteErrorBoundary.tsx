import React, { ErrorInfo, ReactNode } from 'react'

import UnexpectedError from './UnexpectedError'

/**
 * Currently React doesn't have a error boundary for function components
 */
export default class RouteErrorBoundary extends React.Component<{}, { hasError: boolean }> {
  constructor (props: { children?: any }) {
    super(props)
    this.state = { hasError: false }
  }

  componentDidCatch (error: Error, errorInfo: ErrorInfo): void {
    console.error(`Error caught by Route Boundary!\n${error.name}\n\n${errorInfo.componentStack}`)
    this.setState({ hasError: true })
  }

  render (): ReactNode {
    if (this.state.hasError) {
      return (
        <UnexpectedError />
      )
    }

    return this.props.children
  }
}
