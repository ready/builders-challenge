import { GET_SUBSCRIBER_BILLING } from 'components/Subscription/Subscription.api'
import * as fakeData from '../fakeData'
import createMock from '../createMock'
import * as types from 'test/apollo/mocks/types'

/*
    We've got 3 variations so far:
    1. The base case  has 2 invoice items with addons and a plan.
       These 2 have a status of 'draft' and 'open'
    2. The 2nd variation is for when the current balance is paid - the 'open'
       status invoice becomes 'paid' and gets a 'paidDate'
    3. The 3rd variation happens when the org has the config hideCustomizePlanStep
       set to true. In this case, the user can't have addons, so we have 2
       invoice items that only have an internet plan
 */

const variables = {
  userId: fakeData.fakeUser.id,
  pagination: {
    offset: 0,
    limit: 10
  }
}

const draftInvoice: types.SubscriberInvoice = {
  ...fakeData.fakeSubscriberInvoice,
  invoiceStatus: types.InvoiceStatus.draft
}

const data = {
  getSubscriberBilling: {
    __typename: 'SubscriberInvoicesResult',
    results: [
      fakeData.fakeSubscriberInvoice, 
      fakeData.fakeDraftInvoice
    ],
    total: 2
  }
}

// console.log('data', data.getSubscriberBilling.results[0], )
// console.log('data', data.getSubscriberBilling.results[1], )

const paidInvoice: types.SubscriberInvoice = {
  ...fakeData.fakeSubscriberInvoice,
  invoiceStatus: types.InvoiceStatus.paid,
  paidDate: Date.now()
}

const dataAfterPayment = {
  getSubscriberBilling: {
    __typename: 'SubscriberInvoicesResult',
    results: [draftInvoice, paidInvoice],
    total: 2
  }
}

const noAddonsInvoiceItem = fakeData.fakeInvoiceItems.netflix
const tax = 0.2 * noAddonsInvoiceItem.amountDue
const amountDue = noAddonsInvoiceItem.amountDue + tax
const noAddonsModification = {
  invoiceItems: [noAddonsInvoiceItem],
  amountDue,
  tax
}

const noAddonsData = {
  getSubscriberBilling: {
    __typename: 'SubscriberInvoicesResult',
    results: [
      { ...fakeData.fakeDraftInvoice, ...noAddonsModification },
      { ...fakeData.fakeSubscriberInvoice, ...noAddonsModification }
    ],
    total: 2
  }
}

const noData = {
  getSubscriberBilling: {
    results: [],
    total: 0
  }
}

/**
 * Mocked response to `GET_SUBSCRIBER_BILLING` query for one such subscriber
 * that lacks any addons
 */
export const getSubscriberBillingNoAddons = createMock({
  gqlDocument: GET_SUBSCRIBER_BILLING,
  variables,
  data: noAddonsData
})

/**
 * Mocked response to `GET_SUBSCRIBER_BILLING` query for one such subscriber
 * that has addons, plan, and an outstanding balance
 */
export const getSubscriberBilling = createMock({
  gqlDocument: GET_SUBSCRIBER_BILLING,
  variables,
  data
})

/**
 * Mocked response to `GET_SUBSCRIBER_BILLING` query for one such subscriber
 * that has paid their bill(s)
 */
export const getSubscriberBillingPaid = createMock({
  gqlDocument: GET_SUBSCRIBER_BILLING,
  variables,
  data: dataAfterPayment
})

/**
 * Mocked response to `GET_SUBSCRIBER_BILLING` query for one such subscriber
 * that is located in an area not yet serviced by the ISP
 */
export const getSubscriberBillingPreconstruction = createMock({
  gqlDocument: GET_SUBSCRIBER_BILLING,
  variables,
  data: noData
})
