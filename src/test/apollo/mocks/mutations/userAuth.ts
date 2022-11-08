import createMock from '../createMock'
import * as fakeData from '../fakeData'
import { USER_AUTH_MUTATION } from 'components/SignIn/SignIn.api'

const userAuthVariables = {
  login: fakeData.fakeLoginInput
}

const userAuthData = {
  userAuth: fakeData.fakeUserAuth
}

const userAuthError = {
  userAuth: {
    user: null,
    token: null,
    success: false,
    refreshToken: null,
    message: 'Email, password, or two factor auth code incorrect',
    __typename: 'UserAuth'
  }
}

/**
 * Mocked response to `USER_AUTH_MUTATION` mutation
 */
export const userAuth = createMock({
  gqlDocument: USER_AUTH_MUTATION,
  variables: userAuthVariables,
  data: userAuthData,
  error: userAuthError
})
