import * as React from 'react'
import { ApolloLink } from '@apollo/client'
import { onError } from '@apollo/client/link/error'
import { MockedProvider, MockLink } from '@apollo/client/testing'
import { MockReturnType } from './mocks/createMock'

interface MockedProviderProps {
  children: React.ReactNode
  /** List of mock objects that we expect will be called by the components we're testing */
  mocks: MockReturnType[]
}

/**
 * An Apollo Provider component that is used in tests. It takes in a list of mock data
 * that is used to mock api calls.
 */
const MockedProviderWrapper = ({ mocks, children }: MockedProviderProps): JSX.Element => {
  const mockLink = new MockLink(mocks)
  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors !== undefined) {
      graphQLErrors.forEach(gError => {
        const locationString = gError.locations?.map(loc => `${loc.line}:${loc.column}`).reduce((pre, cur) => `${pre}, ${cur}`)
        const pathString = gError.path?.reduce((pre, cur) => `${pre}, ${cur}`)
        console.error(
        `[GraphQL error]: Message: ${gError.message}, Location: ${locationString ?? ''}, Path: ${pathString ?? ''}`
        )
      })
    }
    if (networkError !== undefined) console.error(`[Network error]: ${networkError?.message ?? ''}`)
    if (networkError !== undefined) {
      console.error(`[Network error]: ${networkError?.message ?? ''}`)
    }
  })
  const link = ApolloLink.from([errorLink, mockLink])
  return (
    <MockedProvider mocks={mocks} link={link}>
      {children}
    </MockedProvider>
  )
}

export default MockedProviderWrapper
