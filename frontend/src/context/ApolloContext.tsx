import React from 'react'

import {
  ApolloClient,
  ApolloLink,
  ApolloProvider as ApolloProviderActual,
  InMemoryCache,
  Operation
} from '@apollo/client'
import { onError } from '@apollo/client/link/error'
import { createUploadLink } from 'apollo-upload-client'
import { Kind } from 'graphql'

import { GRAPHQL_API_URL } from 'utils/constants'

import { useErrorState } from './ErrorStateContext'

const ApolloProvider: React.FC = ({ children }) => {
  const { setNetworkError, setGraphqlError } = useErrorState()

  const uploadLink = createUploadLink({
    uri: GRAPHQL_API_URL,
    credentials: 'same-origin'
  })

  // error link
  const errorLink = onError(({ operation, graphQLErrors, networkError }) => {
    if (graphQLErrors !== undefined) {
      graphQLErrors.forEach(gError => {
        const locationString = gError.locations?.map(loc => `${loc.line}:${loc.column}`).reduce((pre, cur) => `${pre}, ${cur}`)
        const pathString = gError.path?.reduce((pre, cur) => `${pre}, ${cur}`)
        const errorLog = `[GraphQL error]: Message: ${gError.message}, Location: ${locationString ?? ''}, Path: ${pathString ?? ''}`
        console.error(errorLog)
      })
      isQuery(operation) && setGraphqlError(true)
    }
    if (networkError !== undefined) {
      setNetworkError(true)
      const errorLog = (`[Network error]: ${networkError?.message ?? ''}`)
      console.error(errorLog)
    }
  })

  // apollo client
  // wrapped in useMemo to use in useEffect
  const client = React.useMemo(() => new ApolloClient({
    link: ApolloLink.from([
      errorLink,
      uploadLink
    ]),
    cache: new InMemoryCache()
  }), [errorLink, uploadLink])

  return (
    <ApolloProviderActual client={client}>
      {children}
    </ApolloProviderActual>
  )
}

const isQuery = (operation: Operation): boolean => {
  return operation.query.definitions.every(definition => definition.kind === Kind.OPERATION_DEFINITION && definition.operation === 'query')
}

export { ApolloProvider }
