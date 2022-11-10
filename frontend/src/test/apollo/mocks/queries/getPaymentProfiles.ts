import { GET_PAYMENT_PROFILES } from 'components/Dashboard/Dashboard.api'
import { GET_PAYMENT_PROFILES as GET_PAYMENT_PROFILES_WITH_USER_ACCOUNTS } from 'components/Billing/Payments/PayNow/PayNowModal.api'
import createMock from '../createMock'
import * as fakeData from '../fakeData'

const variables = {
  paymentUserId: fakeData.fakeUser.paymentUserId
}

const { paymentMethodId, enabled, paymentUserAccount, ...fakePaymentProfile } = fakeData.fakePaymentProfiles[0]

const data = {
  getPaymentProfiles: [fakePaymentProfile]
}

/**
 * Mocked response to `GET_PAYMENT_PROFILES` query
 */
export const getPaymentProfiles = createMock({
  gqlDocument: GET_PAYMENT_PROFILES,
  variables,
  data
})

/**
 * Mocked account data to be tied to `paymentProfiles`
 */
export const paymentProfileWithUserAccount = {
  getPaymentProfiles: [{
    ...fakePaymentProfile,
    paymentUserAccount: {
      paymentProcessor: paymentUserAccount.paymentProcessor,
      __typename: 'PaymentUserAccount'
    }
  }]
}

/**
 * Mocked response to `getPaymentProfiles` query with the data being attached
 * to a mocked account
 */
export const getPaymentProfileWithUserAccount = createMock({
  gqlDocument: GET_PAYMENT_PROFILES_WITH_USER_ACCOUNTS,
  variables,
  data: paymentProfileWithUserAccount
})
