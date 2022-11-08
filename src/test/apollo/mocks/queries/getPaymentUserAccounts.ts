import { GET_PAYMENT_USER_ACCOUNTS } from 'hooks/useAddPayment.api'
import * as fakeData from '../fakeData'
import createMock from '../createMock'

const variables = {
  paymentUserId: fakeData.fakeUser.paymentUserId
}

const data = {
  getPaymentUserAccounts: []
}

/**
 * Mocked response to `GET_PAYMENT_USER_ACCOUNTS` query
 */
export const getPaymentUserAccounts = createMock({
  gqlDocument: GET_PAYMENT_USER_ACCOUNTS,
  variables,
  data
})
