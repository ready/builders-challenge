import { COMPLETE_ACCOUNT_SETUP } from 'components/Checkout/CreateAccount/CreateAccount'
import createMock from '../createMock'
import * as fakeData from '../fakeData'

const variables = {
  user: fakeData.fakeCreateUserInput,
  accountSetupCode: fakeData.fakeAccountSetupCode
}

const { refreshToken, ...userAuth } = fakeData.fakeUserAuth

const data = {
  completeAccountSetup: {
    ...userAuth,
    user: {
      id: fakeData.fakeUser.id,
      paymentUserId: fakeData.fakeUser.paymentUserId,
      mailingAddress: fakeData.fakeCreateUserInput.mailingAddress,
      __typename: fakeData.fakeUser.__typename
    },
    success: true,
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjgwMjA4OCwiZW1haWwiOiJkZXNtb25kK21hZ2ljMDZAcmVhZHkubmV0IiwiaWF0IjoxNjUzNjgzMTEwLCJleHAiOjE2NTYyNzUxMTB9.pC6Q6HRoRTwyZZtkZQ4pr62Dzonl_4uMT4adSWPFyPY',
    message: null,
    __typename: 'UserAuth'
  }
}

/**
 * Mocked response to the `COMPLETE_ACCOUNT_SETUP` mutation
 */
export const completeAccountSetup = createMock({
  gqlDocument: COMPLETE_ACCOUNT_SETUP,
  variables,
  data
})
