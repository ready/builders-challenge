import { CREATE_PAYMENT_PROFILE } from 'hooks/useAddPayment.api'
import * as fakeData from '../fakeData'
import createMock from '../createMock'

const variables = {
  paymentProfile: fakeData.fakePaymentProfileInput
}

const data = {
  createPaymentProfile: {
    id: fakeData.fakePaymentProfiles[0].id,
    __typename: fakeData.fakePaymentProfiles[0].__typename
  }
}

/**
 * Mocked response to the `CREATE_PAYMENT_PROFILE` mutation
 */
export const createPaymentProfile = createMock({
  gqlDocument: CREATE_PAYMENT_PROFILE,
  variables,
  data
})
