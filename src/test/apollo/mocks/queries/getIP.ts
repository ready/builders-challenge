import { GET_IP } from 'hooks/useAddPayment.api'
import createMock from '../createMock'
import * as fakeData from '../fakeData'

const data = {
  getIP: fakeData.fakeIP
}

/**
 * Mocked response to `GET_IP` query
 */
export const getIP = createMock({
  gqlDocument: GET_IP,
  variables: {},
  data
})
