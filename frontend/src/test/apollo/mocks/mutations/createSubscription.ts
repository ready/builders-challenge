import { CREATE_SUBSCRIPTION } from 'components/Checkout/NewSubscriptionCheckout'
import createMock from '../createMock'
import * as fakeData from '../fakeData'

/**
 * `Date` whose value is, literally, right now
 */
export const literallyNow = Date.now()

const variables = {
  subscription: {
    ...fakeData.fakeSubscriptionInput,
    subscriptionStartDate: new Date(literallyNow)
  },
  activateImmediately: true
}

const plan = fakeData.fakeSubscription.plans[0]

const {
  id,
  user: {
    id: userId,
    firstName,
    lastName,
    paymentUserId
  },
  serviceAddress
} = fakeData.fakeSubscription

const data = {
  createSubscription: {
    id,
    user: {
      id: userId,
      firstName,
      lastName,
      paymentUserId,
      __typename: 'User'
    },
    plans: [
      {
        id: plan?.id,
        name: plan?.name,
        __typename: 'Plan'
      }
    ],
    serviceAddress,
    __typename: 'Subscription'
  }
}

const variablesWithHideCustomizeStep = {
  ...variables,
  subscription: {
    ...variables.subscription,
    addonIds: []
  }
}

const preconstructionVariables = {
  activateImmediately: false,
  subscription: {
    ...variables.subscription,
    subscriptionStartDate: fakeData.fakeFutureSubscriptionStartDate
  }
}

/**
 * Mocked response to `CREATE_SUBSCRIPTION` mutation with:
 * - `HideCustomizeStep` = false
 * - `preconstructionMode` = false
 */
export const createSubscription = createMock({
  gqlDocument: CREATE_SUBSCRIPTION,
  variables,
  data
})

/**
 * Mocked response to `CREATE_SUBSCRIPTION` mutation with:
 * - `HideCustomizeStep` = true
 * - `preconstructionMode` = false
 */
export const createSubscriptionWithHideCustomizeStep = createMock({
  gqlDocument: CREATE_SUBSCRIPTION,
  variables: variablesWithHideCustomizeStep,
  data
})

/**
 * Mocked response to `CREATE_SUBSCRIPTION` mutation with:
 * - `HideCustomizeStep` = false
 * - `preconstructionMode` = true
 */
export const createSubscriptionInPreconstruction = createMock({
  gqlDocument: CREATE_SUBSCRIPTION,
  variables: preconstructionVariables,
  data
})
