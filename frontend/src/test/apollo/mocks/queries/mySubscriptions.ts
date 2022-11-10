import { MY_SUBSCRIPTIONS } from 'context/AppProvider.api'
import * as fakeData from '../fakeData'
import createMock from '../createMock'

const data = {
  mySubscriptions: [fakeData.fakeSubscription]
}

/**
 * Mocked response to `MY_SUBSCRIPTIONS` query before any payment(s) applied
 */
export const mySubscriptions = createMock({
  gqlDocument: MY_SUBSCRIPTIONS,
  variables: {},
  data
})

const afterPaymentData = {
  mySubscriptions: [
    {
      ...fakeData.fakeSubscription,
      user: {
        ...fakeData.fakeSubscription.user,
        currentBalance: 0
      }
    }
  ]
}

/**
 * Mocked response to `MY_SUBSCRIPTIONS` query after any payment(s) are applied
 */
export const mySubscriptionsAfterPayment = createMock({
  gqlDocument: MY_SUBSCRIPTIONS,
  variables: {},
  data: afterPaymentData
})

const price = fakeData.fakeSubscription.plans[0]?.price ?? 0
const currentBalance = price + 0.2 * price

const hideCustomizePlansData = {
  mySubscriptions: [
    {
      ...fakeData.fakeSubscription,
      addons: [],
      price: fakeData.fakeSubscription.plans[0]?.price ?? 0,
      user: {
        ...fakeData.fakeSubscription.user,
        currentBalance
      }
    }
  ]
}

const preconstructionData = {
  mySubscriptions: [
    {
      ...fakeData.fakeSubscription,
      user: {
        ...fakeData.fakeSubscription.user,
        currentBalance: 0,
        preferredContact: null,
        enableNotifications: true,
        __typename: 'User'
      },
      nextDueDate: null,
      additionalServiceSetupRequiredKeys: [],
      subscriptionStartDate: '4200-04-20T10:20:00.000Z',
      status: 'pending',
      tax: null,
      __typename: 'Subscription'
    }
  ]
}

/**
 * Mocked response to `MY_SUBSCRIPTIONS` query for an ISP with
 * `hideCustomizePlans` set to true
 */
export const mySubscriptionsHideCustomizePlans = createMock({
  gqlDocument: MY_SUBSCRIPTIONS,
  variables: {},
  data: hideCustomizePlansData
})

const noPlansOrAddonsData = {
  mySubscriptions: [
    {
      ...fakeData.fakeSubscription,
      plans: [],
      addons: []
    }
  ]
}

/**
 * Mocked response to `MY_SUBSCRIPTIONS` query for a subscription with no plans
 * nor addons
 */
export const mySubscriptionsNoPlansOrAddons = createMock({
  gqlDocument: MY_SUBSCRIPTIONS,
  variables: {},
  data: noPlansOrAddonsData
})

/**
 * Mocked response to `MY_SUBSCRIPTIONS` query for a subscriber whose service
 * address is beyond the range currently serviced by the ISP
 */
export const mySubscriptionsPreconstruction = createMock({
  gqlDocument: MY_SUBSCRIPTIONS,
  variables: {},
  data: preconstructionData
})
