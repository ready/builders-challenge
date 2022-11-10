
import { DocumentNode } from 'graphql'

/**
 * Structure of data returned from mocks:
 * @prop `request` - object with the following fields:
 * - `query` - gql code relating to the query
 * - `variables` - variables to be passed to the gql code's query
 * @prop `result` - object with the following fields:
 * - `data` - `data` field of result object from query call
 * @prop `error` - data outlining an error
 */
export interface MockReturnType {
  request: {
    query: DocumentNode
    variables: object
  }
  result?: {
    data: object
  }
  error?: Error
}

export interface Mock {
  success: MockReturnType
  graphqlError: MockReturnType
  networkError: MockReturnType
}

export interface MockVariablesType {
  gqlDocument: DocumentNode
  variables: any
  data: any
  error?: any
}

/**
 * Function to create a mock from the given parameters
 * @param gqlDocument - gql code
 * @param variables - variables passed to the query or mutation
 * @param data - expected response data
 * @param error - error object, in case we want to mock an api call returning
 * an error message
 * @returns mock object that we can pass to the MockedProvider component
 * provided by Apollo
 */
const createMock = ({ gqlDocument, variables, data, error }: MockVariablesType): Mock => {
  const request = {
    query: gqlDocument,
    variables
  }

  const result = {
    data
  }

  const mock: any = {}

  mock.success = {
    request,
    result
  }

  if (error !== undefined) {
    mock.graphqlError = {
      request,
      result: {
        data: error
      }
    }
  }

  mock.networkError = {
    request: request,
    error: new Error('A network error has occured')
  }

  return (mock as Mock)
}

export default createMock
