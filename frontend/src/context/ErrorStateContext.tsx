import React from 'react'

interface ErrorStateInterface {
  graphqlError: boolean
  setGraphqlError: React.Dispatch<React.SetStateAction<boolean>>
  networkError: boolean
  setNetworkError: React.Dispatch<React.SetStateAction<boolean>>
}

/**
 * A React context that manages and exposes error states - child components can use this context
 * to check or update the graphqlError and networkError state values.
 */
const ErrorStateContext = React.createContext(undefined as unknown as ErrorStateInterface)

/**
 * A custom hook that exposes the ErrorStateContext safely. If a user tries to use this context
 * outside of the ErrorStateProvider, an error is thrown.
 * @returns the ErrorStateContext, which exposes the error state values and their setters
 */
const useErrorState = (): ErrorStateInterface => {
  const context = React.useContext(ErrorStateContext)
  if (context === undefined) {
    throw new Error('useErrorState must be used in components that are wrapped around the ErrorStateProvider.')
  }
  return context
}

/**
 * A component that wraps the children it receives as props around the
 * ErrorStateContext.Provider
 * @param children - react child components that will be wrapped inside of
 * ErrorStateContext.Provider
 */
const ErrorStateProvider: React.FC = ({ children }) => {
  const [graphqlError, setGraphqlError] = React.useState(() => false)
  const [networkError, setNetworkError] = React.useState(() => false)

  const value: any = {
    graphqlError,
    setGraphqlError,
    networkError,
    setNetworkError
  }

  return (
    <ErrorStateContext.Provider value={value}>
      {children}
    </ErrorStateContext.Provider>
  )
}

export { ErrorStateProvider, useErrorState }
