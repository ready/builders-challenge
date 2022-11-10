import { GET_USER_BY_ACCOUNT_SETUP } from 'components/Checkout/NewSubscriptionCheckout'
import * as fakeData from '../fakeData'
import createMock from '../createMock'

const variables = {
  accountSetupCode: fakeData.fakeAccountSetupCode
}

const { refreshToken, ...userAuth } = fakeData.fakeUserAuth

const { autopay, createdAt, role, currentBalance, ...user } = fakeData.fakeUser

const fakeOrg = fakeData.fakeOrganization
const organization = {
  id: fakeOrg.id,
  name: fakeOrg.name,
  sssConfig: fakeOrg.sssConfig,
  defaultSubOrgId: fakeOrg.defaultSubOrgId,
  childOrganizations: fakeOrg.childOrganizations,
  __typename: 'Organization'
}

const organizationPermissions = [
  {
    ...fakeData.fakeOrganizationPermissions[0],
    organization
  }
]

const dataWithoutSubscription = {
  getUserByAccountSetupCode: {
    ...userAuth,
    user: {
      ...user,
      organizationPermissions,
      phoneNumber: fakeData.fakeCreateUserInput.phoneNumber,
      mailingAddress: fakeData.fakeCreateUserInput.mailingAddress,
      subscriptions: []
    }
  }
}

const fakeSubscription = fakeData.fakeSubscription

const fakePlans = fakeSubscription.plans.map(plan => ({
  id: plan?.id,
  name: plan?.name,
  description: plan?.description,
  price: plan?.price,
  __typename: plan?.__typename
}))

const fakeAddons = fakeSubscription.addons?.map(addon => ({
  id: addon?.id,
  name: addon?.name,
  type: addon?.type,
  description: addon?.description,
  fixedAmount: addon?.fixedAmount,
  percentage: addon?.percentage,
  duration: addon?.duration,
  __typename: addon?.__typename
}))

const subscriptions = [
  {
    id: fakeSubscription.id,
    cancelReasonCode: fakeSubscription.cancelReasonCode,
    plans: fakePlans,
    addons: fakeAddons,
    __typename: fakeSubscription.__typename
  }
]

/**
 * Mocked data to be used to help mock an account that has a subscription
 */
export const dataWithSubscription = {
  getUserByAccountSetupCode: {
    ...dataWithoutSubscription.getUserByAccountSetupCode,
    user: {
      ...dataWithoutSubscription.getUserByAccountSetupCode.user,
      subscriptions
    }
  }
}

const graphqlErrorData = {
  getUserByAccountSetupCode: {
    user: null,
    success: false,
    token: null,
    message: 'getUserByAccountSetupCodeResolver resolver failed, please try again',
    __typename: 'UserAuth'
  }
}

/**
 * Mocked response to `GET_USER_BY_ACCOUNT_SETUP` query for a subscriber who
 * has a subscription
 */
export const getUserByAccountSetupCodeWithSubscription = createMock({
  gqlDocument: GET_USER_BY_ACCOUNT_SETUP,
  variables,
  data: dataWithSubscription,
  error: graphqlErrorData
})

/**
 * Mocked response to `GET_USER_BY_ACCOUNT_SETUP` query for a subscriber who
 * lacks any subscription(s)
 */
export const getUserByAccountSetupCodeWithoutSubscription = createMock({
  gqlDocument: GET_USER_BY_ACCOUNT_SETUP,
  variables,
  data: dataWithoutSubscription,
  error: graphqlErrorData
})
