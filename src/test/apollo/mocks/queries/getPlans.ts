import { GET_PLANS } from 'components/Checkout/Select/ChoosePlan'
import { GET_PLANS as GET_PLANS_WITH_FILTERS } from 'components/Checkout/Select/ChooseServices'
import * as fakeData from '../fakeData'
import createMock from '../createMock'

const variables = {
  organizationId: fakeData.fakeOrganization.id,
  cursorPagination: {
    all: true
  }
}

const data = {
  getPlans: {
    results: fakeData.fakePlans,
    __typename: 'PlansResult'
  }
}

const variablesWithFilters = {
  organizationId: fakeData.fakeOrganization.id,
  pagination: {
    offset: 0,
    limit: 100
  },
  filters: []
}

/**
 * Mocked response to `GET_PLANS` query
 */
export const getPlans = createMock({
  gqlDocument: GET_PLANS,
  variables,
  data
})

/**
 * Mocked response to `GET_PLANS_WITH_FILTERS` query
 */
export const getPlansWithFilters = createMock({
  gqlDocument: GET_PLANS_WITH_FILTERS,
  variables: variablesWithFilters,
  data
})
