import { CREATE_SUBSCRIBER } from 'components/Checkout/CreateAccount/CreateAccount'
import * as fakeData from '../fakeData'
import createMock from '../createMock'

const variables = {
  user: fakeData.fakeCreateUserInput
}

const user = {
  id: fakeData.fakeUser.id,
  paymentUserId: fakeData.fakeUser.paymentUserId,
  mailingAddress: fakeData.fakeCreateUserInput.mailingAddress
}

const { refreshToken, ...fakeUserAuth } = fakeData.fakeUserAuth

const data = {
  createSubscriber: {
    ...fakeUserAuth,
    user
  }
}

/**
 * Mocked response to the `CREATE_SUBSCRIBER` mutation
 */
export const createSubscriber = createMock({
  gqlDocument: CREATE_SUBSCRIBER,
  variables,
  data
})
