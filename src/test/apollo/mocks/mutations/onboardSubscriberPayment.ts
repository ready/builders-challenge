import { ONBOARD_SUBSCRIBER_PAYMENT } from 'hooks/useAddPayment.api'
import * as fakeData from '../fakeData'
import createMock from '../createMock'

const variables = {
  userId: fakeData.fakeUser.id,
  paymentProcessor: fakeData.fakeCurrentPaymentUserAccount.paymentProcessor
}

const {
  id, customerId, __typename: typename
} = fakeData.fakeCurrentPaymentUserAccount

const data = {
  onboardSubscriberPayment: {
    id,
    customerId,
    __typename: typename
  }
}

/**
 * Mocked response to `ONBOARD_SUBSCRIBER_PAYMENT` mutation
 */
export const onboardSubscriberPayment = createMock({
  gqlDocument: ONBOARD_SUBSCRIBER_PAYMENT,
  variables,
  data
})
