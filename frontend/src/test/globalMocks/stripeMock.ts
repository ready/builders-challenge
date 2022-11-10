import * as fakeData from 'test/apollo/mocks/fakeData'

/**
 * Mocked react-stripe methods
 */

interface MockElement {
  mount: jest.Mock
  destroy: jest.Mock
  on: jest.Mock
  update: jest.Mock
}

interface MockElements {
  create: jest.Mock
  getElement: jest.Mock
}

interface MockStripe {
  elements: jest.Mock
  createToken: jest.Mock
  createSource: jest.Mock
  createPaymentMethod: jest.Mock
  confirmCardPayment: jest.Mock
  confirmCardSetup: jest.Mock
  paymentRequest: jest.Mock
  _registerWrapper: jest.Mock
}

const mockElement = (): MockElement => ({
  mount: jest.fn(),
  destroy: jest.fn(),
  on: jest.fn(),
  update: jest.fn()
})

const mockElements = (): MockElements => {
  const elements: any = {}
  return {
    create: jest.fn((type) => {
      elements[type] = mockElement()
      return elements[type]
    }),
    getElement: jest.fn((_type) => {
      return mockElement()
    })
  }
}

const paymentProfile = {
  paymentMethod: {
    id: fakeData.fakePaymentProfileInput.paymentMethodId,
    object: 'payment_method',
    billing_details: {
      address: {
        city: null,
        country: null,
        line1: null,
        line2: null,
        postal_code: '42424',
        state: null
      },
      email: null,
      name: null,
      phone: null
    },
    card: {
      brand: 'visa',
      checks: {
        address_line1_check: null,
        address_postal_code_check: null,
        cvc_check: null
      },
      country: 'US',
      exp_month: 4,
      exp_year: 2024,
      funding: 'credit',
      generated_from: null,
      last4: '4242',
      networks: {
        available: [
          'visa'
        ],
        preferred: null
      },
      three_d_secure_usage: {
        supported: true
      },
      wallet: null
    },
    created: 1651909956,
    customer: null,
    livemode: false,
    type: 'card'
  }
}

const mockStripe = (): MockStripe => ({
  elements: jest.fn(() => mockElements()),
  createToken: jest.fn(),
  createSource: jest.fn(),
  createPaymentMethod: jest.fn(() => paymentProfile),
  confirmCardPayment: jest.fn(),
  confirmCardSetup: jest.fn(),
  paymentRequest: jest.fn(),
  _registerWrapper: jest.fn()
})

jest.mock('@stripe/react-stripe-js', () => {
  const stripe = jest.requireActual('@stripe/react-stripe-js')

  return ({
    ...stripe,
    Element: () => {
      return mockElement()
    },
    useStripe: () => {
      return mockStripe()
    },
    useElements: () => {
      return mockElements()
    }
  })
})
