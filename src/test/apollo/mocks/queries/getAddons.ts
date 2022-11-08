import { GET_ADDONS } from 'components/Checkout/Select/ChooseServices'
import * as fakeData from '../fakeData'
import createMock from '../createMock'

const variables = {
  organizationId: fakeData.fakeOrganization.id,
  pagination: {
    offset: 0,
    limit: 100
  },
  filters: []
}

const data = {
  getAddons: {
    results: fakeData.fakeAddons,
    ids: fakeData.fakeAddons.map(addon => addon.id),
    __typename: 'AddonsResult'
  }
}

const variablesWithFilters = {
  organizationId: fakeData.fakeOrganization.id,
  filters: [
    { fieldName: 'duration', condition: 'isNot', value: 'oneTime' }
  ],
  pagination: { offset: 0, limit: 100 }
}

/**
 * Mocked response to `GET_ADDONS` query
 */
export const getAddons = createMock({
  gqlDocument: GET_ADDONS,
  variables,
  data
})

/**
 * Mocked response to `GET_ADDONS` query with filters
 */
export const getAddonsWithFilters = createMock({
  gqlDocument: GET_ADDONS,
  variables: variablesWithFilters,
  data
})
