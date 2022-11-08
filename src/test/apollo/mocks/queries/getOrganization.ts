import { GET_ORGANIZATION } from 'context/AppProvider.api'
import * as fakeData from '../fakeData'
import createMock from '../createMock'

/*
    This mock has one base case, and several variations.
    The variations have to do with the sssConfig. Since we wanna test different flows
    during checkout, we need mocks that are largely similar, but with one different sss config.
*/

const getOrganizationVariables = {
  organizationId: fakeData.fakeOrganization.id
}

const { createdAt, ...fakeOrg } = fakeData.fakeOrganization
const { id, customerId, paymentProcessor } = (fakeOrg.paymentUserAccounts ?? [])[0]
fakeOrg.paymentUserAccounts = [{
  id,
  paymentProcessor,
  customerId,
  __typename: 'PaymentUserAccount'
}]

const accountStepBeforePlansOrg = {
  getOrganization: {
    ...fakeOrg,
    sssConfig: {
      ...fakeOrg.sssConfig,
      createAccountStepBeforePlans: true
    }
  }
}

const paymentNotRequiredOrg = {
  getOrganization: {
    ...fakeOrg,
    sssConfig: {
      ...fakeOrg.sssConfig,
      requirePaymentMethodStep: false
    }
  }
}

const hideCustomizeStepOrg = {
  getOrganization: {
    ...fakeOrg,
    sssConfig: {
      ...fakeOrg.sssConfig,
      hideCustomizeStep: true
    }
  }
}

const preventPublicAccessOrg = {
  getOrganization: {
    ...fakeOrg,
    sssConfig: {
      ...fakeOrg.sssConfig,
      allowPublicAccess: false
    }
  }
}

const preconstructionModeOrg = {
  getOrganization: {
    ...fakeOrg,
    sssConfig: {
      ...fakeOrg.sssConfig,
      preconstructionMode: true
    }
  }
}

const getOrganizationData = {
  getOrganization: fakeOrg
}

/**
 * Mocked response to `GET_ORGANIZATION` query where:
 * - AccountStepBeforePlans = false
 * - PaymentRequired = potentially
 * - HideCustomStep = false
 * - PreventPublicAccess = false
 * - PreconstructionMode = false
 */
export const getOrganization = createMock({
  gqlDocument: GET_ORGANIZATION,
  variables: getOrganizationVariables,
  data: getOrganizationData
})

/**
 * Mocked response to `GET_ORGANIZATION` query where:
 * - AccountStepBeforePlans = true
 * - PaymentRequired = potentially
 * - HideCustomStep = false
 * - PreventPublicAccess = false
 * - PreconstructionMode = false
 */
export const getOrganizationAccountStepBeforePlans = createMock({
  gqlDocument: GET_ORGANIZATION,
  variables: getOrganizationVariables,
  data: accountStepBeforePlansOrg
})

/**
 * Mocked response to `GET_ORGANIZATION` query where:
 * - AccountStepBeforePlans = false
 * - PaymentRequired = false
 * - HideCustomStep = false
 * - PreventPublicAccess = false
 * - PreconstructionMode = false
 */
export const getOrganizationPaymentNotRequired = createMock({
  gqlDocument: GET_ORGANIZATION,
  variables: getOrganizationVariables,
  data: paymentNotRequiredOrg
})

/**
 * Mocked response to `GET_ORGANIZATION` query where:
 * - AccountStepBeforePlans = false
 * - PaymentRequired = potentially
 * - HideCustomStep = true
 * - PreventPublicAccess = false
 * - PreconstructionMode = false
 */
export const getOrganizationHideCustomizeStep = createMock({
  gqlDocument: GET_ORGANIZATION,
  variables: getOrganizationVariables,
  data: hideCustomizeStepOrg
})

/**
 * Mocked response to `GET_ORGANIZATION` query where:
 * - AccountStepBeforePlans = false
 * - PaymentRequired = potentially
 * - HideCustomStep = false
 * - PreventPublicAccess = true
 * - PreconstructionMode = false
 */
export const getOrganizationPreventPublicAccess = createMock({
  gqlDocument: GET_ORGANIZATION,
  variables: getOrganizationVariables,
  data: preventPublicAccessOrg
})

/**
 * Mocked response to `GET_ORGANIZATION` query where:
 * - AccountStepBeforePlans = false
 * - PaymentRequired = potentially
 * - HideCustomStep = false
 * - PreventPublicAccess = false
 * - PreconstructionMode = true
 */
export const getOrganizationPreconstructionMode = createMock({
  gqlDocument: GET_ORGANIZATION,
  variables: getOrganizationVariables,
  data: preconstructionModeOrg
})
