import { GET_NOTIFICATIONS } from 'components/Notifications/NotificationBell.api'
import createMock from '../createMock'
import * as fakeData from '../fakeData'

const variables = {
  userId: fakeData.fakeUser.id
}

const data = {
  getNotifications: []
}

/**
 * Mocked response to `GET_NOTIFICATIONS` query
 */
export const getNotifications = createMock({
  gqlDocument: GET_NOTIFICATIONS,
  variables,
  data
})
