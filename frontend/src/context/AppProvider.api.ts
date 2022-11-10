import { gql, QueryResult, useQuery } from '@apollo/client'

export interface ButtonResults {
  timesPreessed?: BigInt
}

/**
 * hook used to query the database for the user's button press data
 * @returns API query package to return the user's button data
 * (read-only)
 */
export function useButtonDataQuery (): QueryResult<ButtonResults> {
  return useQuery<ButtonResults>(BUTTON_DATA)
}

export const BUTTON_DATA = gql`
  query ButtonResults {
    timesPressed
  }
`
