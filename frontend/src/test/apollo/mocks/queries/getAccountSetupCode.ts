import { GET_ACCOUNT_SETUP_CODE } from 'components/Checkout/NewSubscriptionCheckout'
import createMock from '../createMock'
import * as fakeData from '../fakeData'

const variables = {
  userId: fakeData.fakeUser.id,
  organizationId: fakeData.fakeOrganization.id,
  address: fakeData.fakeCreateUserInput.mailingAddress
}

const data = {
  getAccountSetupCode: {
    success: true,
    message: null,
    accountSetupCode: fakeData.fakeAccountSetupCode,
    __typename: 'GetAccountSetupCodeResponse'
  }

}

/**
 * Mocked response to `GET_ACCOUNT_SETUP_CODE` query
 */
export const getAccountSetupCode = createMock({
  gqlDocument: GET_ACCOUNT_SETUP_CODE,
  variables,
  data
})
