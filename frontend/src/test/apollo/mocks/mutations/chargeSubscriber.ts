import { CHARGE_SUBSCRIBER } from 'components/Billing/Payments/PayNow/PayNowModal.api'
import * as fakeData from '../fakeData'
import { paymentProfileWithUserAccount } from '../queries/getPaymentProfiles'
import createMock from '../createMock'

// TODO: come back to this
const amountDue = fakeData.fakeSubscriberInvoice.amountDue
const paymentProcessor = paymentProfileWithUserAccount.getPaymentProfiles[0].paymentUserAccount.paymentProcessor
const getTransactionFee = (chargedAmount: number): number => {
  if (paymentProcessor === 'STRIPE') {
    return chargedAmount > 0 ? (chargedAmount + 0.3) / (1 - 0.029) - chargedAmount : 0
  } else {
    return 0
  }
}
const transactionFee = getTransactionFee(amountDue !== undefined ? +amountDue : 0)

const variables = {
  amount: fakeData.fakeSubscription.user.currentBalance,
  paymentProfileId: fakeData.fakePaymentProfiles[0].id,
  idempotencyKey: fakeData.uuid,
  transactionFee
}

const data = {
  chargeSubscriber: fakeData.fakeFinancialTransaction
}

/**
 * Mocked response to the `CHARGE_SUBSCRIBER` mutation
 */
export const chargeSubscriber = createMock({
  gqlDocument: CHARGE_SUBSCRIBER,
  variables,
  data
})
