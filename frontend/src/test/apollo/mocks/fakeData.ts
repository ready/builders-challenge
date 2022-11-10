import { faker } from '@faker-js/faker'
import * as types from 'test/apollo/mocks/types'

// create a function to make any ids, values, etc consistent
// create unit tests, and automatic data formatters
// first we make sure that any data is consumerate
// but if user provides custom data, we make sure that everything else
//   that needs to be consistent is consistent
// automagically

interface FakeInvoiceItems {
  plan: types.InvoiceItem
  netflix: types.InvoiceItem
  elsevier: types.InvoiceItem
}

/**
 * Mocked invoice items designed to be tested against
 */
export const fakeInvoiceItems: FakeInvoiceItems = {
  plan: {
    __typename: 'InvoiceItem',
    id: faker.datatype.uuid(),
    name: 'Evo Plan Basic',
    description: 'A fast, affordable plan for all your work and streaming needs.',
    price: 20,
    amountDue: 20
  },

  netflix: {
    id: faker.datatype.uuid(),
    __typename: 'InvoiceItem',
    name: 'Netflix',
    description: 'Your favorite movies and series!',
    price: 1,
    amountDue: 1
  },

  elsevier: {
    id: faker.datatype.uuid(),
    __typename: 'InvoiceItem',
    name: 'Elsevier',
    description: 'Get a library of scientific journals at a fraction of the price!',
    amountDue: 10,
    price: 10
  }
}

// possible variations
// 1. draft & open
// 2. draft & paid
// 3. no addon
// 4. checkout -> can use the same one as before
// should I provide that here, or allow users to specify it?
// It will be mostly consistent, but we override certain values
const paidDate = faker.date.future()
const invoiceItems = [fakeInvoiceItems.plan, fakeInvoiceItems.netflix]
const amountDue = invoiceItems.map((item: types.InvoiceItem) => item.amountDue).reduce((prev, curr) => prev + curr)
export const fakeSubscriberInvoice: types.SubscriberInvoice = {
  __typename: 'SubscriberInvoice',
  id: faker.datatype.uuid(),
  amountDue,
  dueDate: faker.date.between(faker.date.recent(), paidDate),
  billingPeriodEnd: faker.date.future(),
  billingPeriodStart: faker.date.recent(),
  invoiceDate: faker.date.recent(),
  paidDate: null,
  invoiceFilename: null,
  invoiceStatus: types.InvoiceStatus.open,
  invoiceItems,
  // tax rate - 20%
  tax: 0.2 * amountDue
}

export const fakeDraftInvoice: types.SubscriberInvoice = {
  __typename: 'SubscriberInvoice',
  id: faker.datatype.uuid(),
  amountDue,
  dueDate: faker.date.between(faker.date.recent(), paidDate),
  billingPeriodEnd: faker.date.future(),
  billingPeriodStart: faker.date.recent(),
  invoiceDate: faker.date.recent(),
  paidDate: null,
  invoiceFilename: null,
  invoiceStatus: types.InvoiceStatus.draft,
  invoiceItems,
  // tax rate - 20%
  tax: 0.2 * amountDue
}

/**
 * Empty for now. Populate later
 */
export const fakeNotifications: types.Notification[] = []

interface FakeSssConfigs {
  /** An Sss Config with these settings
   *    alianzaEnabled: false,
   *    createAccountStepBeforePlans: false,
   *    allowPublicAccess: true,
   *    requirePaymentMethodStep: true,
   *    hideCustomizeStep: false,
   *    preconstructionMode: false,
   */
  default: types.SssConfig
  /** An Sss Config with the default settings, with createAccountStep = true */
  createAccount: types.SssConfig
  /** An Sss Config with the default settings, with requirePaymentMethodStep = false */
  noPayment: types.SssConfig
  /** An Sss Config with the default settings, with hideCustomizeStep = true */
  customizeStep: types.SssConfig
  /** An Sss Config with the default settings, with allowPublicAccess = false */
  noPublicSignup: types.SssConfig
}

const defaultConfig: types.SssConfig = {
  id: faker.datatype.number({ min: 1, max: 1000 }).toString(),
  sssUrl: null,
  alianzaEnabled: false,
  createAccountStepBeforePlans: false,
  allowPublicAccess: true,
  requirePaymentMethodStep: true,
  hideCustomizeStep: false,
  preconstructionMode: false,
  __typename: 'SssConfig'
}

/**
 * Mocked sss configs
 */
export const fakeSssConfigs: FakeSssConfigs = {
  default: defaultConfig,
  createAccount: {
    ...defaultConfig,
    createAccountStepBeforePlans: true
  },
  noPayment: {
    ...defaultConfig,
    requirePaymentMethodStep: false
  },
  customizeStep: {
    ...defaultConfig,
    hideCustomizeStep: true
  },
  noPublicSignup: {
    ...defaultConfig,
    allowPublicAccess: false
  }
}

/**
 * Mocked payment user account data designed to be tested against
 */
export const fakePaymentUserAccounts: types.PaymentUserAccount[] = [
  {
    id: faker.datatype.uuid(),
    customerId: faker.datatype.uuid(),
    paymentUserId: faker.datatype.uuid(),
    enabled: true,
    paymentProcessor: types.PaymentProcessor.STRIPE,
    __typename: 'PaymentUserAccount',
    type: types.PaymentUserAccountType.ORGANIZATION
  }
]

/**
 * The 0th mocked user account data
 */
export const fakeCurrentPaymentUserAccount = fakePaymentUserAccounts[0]

/**
 * Mocked payment information
 */
export const fakePaymentProfileInput: types.PaymentProfileInput = {
  paymentMethodId: faker.datatype.uuid(),
  paymentMethodType: types.PaymentMethodType.CARD,
  displayName: 'visa - 4242',
  lastFour: '4242',
  expirationDate: '4/2024',
  brand: 'visa',
  isDefault: true,
  isVerified: true,
  // TODO: check that the type is subscriber
  paymentUserAccountId: fakePaymentUserAccounts[0].id
}

/**
 * Mocked payment method list with one entry
 */
export const fakePaymentProfiles: types.PaymentProfile[] = [
  {
    id: faker.datatype.uuid(),
    paymentMethodType: types.PaymentMethodType.CARD,
    displayName: 'visa - 4242',
    lastFour: '4242',
    expirationDate: '4/2024',
    brand: 'visa',
    isDefault: true,
    isVerified: true,
    paymentMethodId: faker.datatype.uuid(),
    enabled: true,
    paymentUserAccount: fakePaymentUserAccounts[0],
    __typename: 'PaymentProfile'
  }
]

/**
 * Mocked organization (ISP)
 */
export const fakeOrganization: types.Organization = {
  id: faker.datatype.number({ min: 1, max: 1000 }).toString(),
  name: faker.company.name(),
  logo: faker.image.business(),
  sssConfig: fakeSssConfigs.default,
  acpEnabled: true,
  paymentUserId: faker.datatype.uuid(),
  paymentUserAccounts: fakePaymentUserAccounts,
  defaultSubOrgId: null,
  childOrganizations: [],
  createdAt: faker.date.recent(),
  test: true,
  __typename: 'Organization'
}

/**
 * Mocked organization email based off of the mocked organization
 */
export const fakeSupportEmail = faker.internet.email('support', undefined, `${fakeOrganization.name.toLowerCase().replace(' ', '')}.com`)

/**
 * Mocked organization's mocked permissions list with one entry
 */
export const fakeOrganizationPermissions: types.OrganizationPermission[] = [
  {
    id: faker.datatype.uuid(),
    organization: fakeOrganization,
    __typename: 'OrganizationPermission'
  }
]

const paymentProcessor = fakePaymentUserAccounts[0].paymentProcessor
const getTransactionFee = (chargedAmount: number): number => {
  if (paymentProcessor === 'STRIPE') {
    return chargedAmount > 0 ? (chargedAmount + 0.3) / (1 - 0.029) - chargedAmount : 0
  } else {
    return 0
  }
}
const transactionFee = getTransactionFee(amountDue !== undefined ? +amountDue : 0)

/**
 * Mocked financial transaction record designed to be tested against
 * TODO: come back for this one. Once I define the mySubscriptions data, I can get the amount.
 * For now this is what it is
 */
export const fakeFinancialTransaction: types.FinancialTransaction = {
  id: faker.datatype.uuid(),
  status: types.FinancialTransactionStatus.SUCCEEDED,
  amount: amountDue + transactionFee,
  __typename: 'FinancialTransaction'
}

/**
 * Mocked internet provider
 */
export const fakeIP: types.GenericResponse = {
  success: true,
  message: faker.internet.ip(),
  __typename: 'GenericResponse'
}

/**
 * Mocked subscriber account
 */
export const fakeUser: types.User = {
  id: faker.datatype.uuid(),
  email: faker.internet.email(),
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  organizationPermissions: [
    {
      id: faker.datatype.uuid(),
      organization: fakeOrganization,
      __typename: 'OrganizationPermission'
    }
  ],
  paymentUserId: faker.datatype.uuid(),
  autopay: false,
  createdAt: faker.date.recent(),
  role: types.UserRole.consumer,
  // TODO: revisit this calculation
  currentBalance: 24,
  __typename: 'User'
}

/**
 * Mocked username/password combination
 */
export const fakeLoginInput: types.LoginInput = {
  email: faker.internet.email(),
  password: faker.internet.password()
}

/**
 * Mocked account setup-code
 */
export const fakeAccountSetupCode = '1dc180b61f61cc2d72cc6fcb0aac7b7ba8aa5820'

/**
 * Mocked user authentication
 */
export const fakeUserAuth: types.UserAuth = {
  user: fakeUser,
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjczNDAzMywiZW1haWwiOiJkZXNtb25kK2xvY2FsMDFAcmVhZHkubmV0IiwiaWF0IjoxNjUwMzM0NTcyLCJleHAiOjE2NTA0MjA5NzJ9.JZUUgSjbl3tgP1EFpq-se_m7UiSkd187C17_-bm7lHo',
  success: true,
  refreshToken: null,
  message: null,
  // make consistent across the getUserByAccountSetup tings
  // accountSetupCode: faker.datatype.uuid(),
  __typename: 'UserAuth'
}

const fakeAddress = {
  address1: faker.address.streetAddress(),
  address2: faker.address.secondaryAddress(), // TODO: sometimes this fails?
  city: faker.address.city(),
  state: 'CO', // hardcoded because not all states show up on screen at first. will have to set up scrolling of the state input first
  zip: faker.address.zipCode()
}

/**
 * Mocked user input designed for use with testing
 */
export const fakeCreateUserInput: types.CreateUserInput = {
  firstName: fakeUser.firstName,
  lastName: fakeUser.lastName,
  email: fakeUser.email,
  password: fakeLoginInput.password,
  phoneNumber: faker.phone.number('(###) ###-####'),
  role: types.UserRole.consumer,
  accountType: types.AccountType.residential,
  mailingAddress: fakeAddress
}

/**
 * `Date` object whose value is, literally, right now
 */
export const literallyNow = Date.now()

const fakeServices: types.Service[] = [
  {
    id: '161',
    type: types.ServiceType.internet,
    name: 'Evo Internet',
    organizations: [fakeOrganization],
    __typename: 'Service'
  }
]

/**
 * Mocked plans designed for use in testing
 */
export const fakePlans: types.Plan[] = [
  {
    id: faker.datatype.uuid(),
    name: 'Evo Plan Basic',
    description: 'A fast, affordable plan for all your work and streaming needs.',
    sellingPoints: [
      'Fast upload and download speeds',
      'Affordable price',
      'ACP-sponsored service (you could get this for $0)'
    ],
    billingCyclePeriod: 1,
    billingCycleUnit: types.BillingCycleUnit.month,
    pricingModel: types.PricingModel.flatFee,
    price: 20,
    active: true,
    services: [
      fakeServices[0]
    ],
    // externalPlanId: '',
    recommended: false,
    createdAt: faker.date.past(),
    organizations: [fakeOrganization],
    __typename: 'Plan'
  },
  {
    id: faker.datatype.uuid(),
    name: 'Evo Plan Pro',
    description: 'Fastest speeds in the country, for a fraction of the price!',
    sellingPoints: [
      'Great for gaming!',
      'More than plenty for work and streaming'
    ],
    billingCyclePeriod: 1,
    billingCycleUnit: types.BillingCycleUnit.month,
    pricingModel: types.PricingModel.flatFee,
    price: 40,
    active: true,
    services: [fakeServices[0]],
    externalPlanId: '',
    recommended: false,
    createdAt: faker.date.past(),
    organizations: [fakeOrganization],
    __typename: 'Plan'
  }
]

/**
 * Mocked addons designed for use in testing
 */
export const fakeAddons: types.Addon[] = [
  {
    id: faker.datatype.uuid(),
    name: 'Elsevier',
    description: 'Get a library of scientific journals at a fraction of the price!',
    type: types.BillingType.fixedAmount,
    fixedAmount: 10,
    percentage: null,
    duration: types.BillingDuration.forever,
    billingCyclePeriod: 1,
    billingCycleUnit: types.BillingCycleUnit.month,
    createdAt: new Date('2022-04-07T04:25:18.429Z'),
    active: true,
    isFee: false,
    __typename: 'Addon'
  },
  {
    id: faker.datatype.uuid(),
    name: 'Netflix',
    description: 'Your favorite movies and series!',
    type: types.BillingType.percentage,
    fixedAmount: 1,
    percentage: 5,
    duration: types.BillingDuration.forever,
    billingCyclePeriod: 1,
    billingCycleUnit: types.BillingCycleUnit.month,
    createdAt: '2022-04-07T04:25:58.313Z',
    active: true,
    isFee: false,
    __typename: 'Addon'
  },
  {
    id: faker.datatype.uuid(),
    name: 'Spotify',
    description: 'The largest collection of music anywhere on the internet!',
    type: types.BillingType.fixedAmount,
    fixedAmount: 9.99,
    percentage: null,
    duration: types.BillingDuration.forever,
    billingCyclePeriod: 1,
    billingCycleUnit: types.BillingCycleUnit.month,
    createdAt: '2022-04-07T04:26:27.405Z',
    active: true,
    isFee: false,
    __typename: 'Addon'
  }
]

const createdAt = faker.date.recent()
const currentPlan = { ...fakePlans[0], currentlySubscribed: true }
const currentAddons = [
  // { ...fakeAddons[0], currentlySubscribed: true }
  { ...fakeAddons[1], currentlySubscribed: true }
]

// TODO: revisit this calculation here
const fixedAddons = currentAddons.filter(addon => addon.type === types.BillingType.fixedAmount).map(addon => addon.fixedAmount)
const price = currentPlan.price + (fixedAddons.reduce((prev, curr) => (prev ?? 0) + (curr ?? 0), 0) ?? 0)
const percentageAddons = currentAddons.filter(addon => addon.type === types.BillingType.percentage).map(addon => addon.percentage)
const percentageAddonPrices = percentageAddons.reduce((prev, curr) => {
  const prevNum = prev ?? 0
  const currNum = curr ?? 0
  return prevNum + currNum / 100 * price
}, 0) ?? 0

/**
 * Mocked subscription data designed for use in testing
 */
export const fakeSubscription: types.Subscription = {
  id: faker.datatype.uuid(),
  user: { ...fakeUser, currentBalance: price + percentageAddonPrices },
  plans: [currentPlan],
  addons: currentAddons,
  serviceAddress: {
    ...fakeAddress,
    id: faker.datatype.uuid()
  },
  // TODO: should it be consistent with createSubscriber?
  createdAt,
  price: price + percentageAddonPrices,
  subscriptionStartDate: createdAt,
  cancelReasonCode: null,
  nextDueDate: null,
  discounts: null,
  status: types.SubscriptionStatus.active,
  tax: null,
  __typename: 'Subscription'
}

/**
 * Mocked subscription start date
 */
export const fakeFutureSubscriptionStartDate = new Date('4200-04-20T04:20:00')

/**
 * Mocked input by the subscriber to the subscription. Designed for use in testing
 */
export const fakeSubscriptionInput: types.SubscriptionInput = {
  subscriptionStartDate: new Date(literallyNow),
  userId: fakeUser.id,
  planIds: [currentPlan.id],
  addonIds: currentAddons.map(addon => addon.id),
  serviceAddress: fakeAddress
}

/**
 * Extracts the checkout widget's query parameters from a URL. That URL is
 * seeded by fake data
 * @returns string representation of `URLSearchParams`
 */
export const getCheckoutWidgetQueryParams = (): string => {
  const address = fakeCreateUserInput.mailingAddress
  const queryParams = {
    address1: address?.address1 as string,
    address2: address?.address2 as string,
    city: address?.city as string,
    state: address?.state as string,
    zip: address?.zip as string
  }
  return new URLSearchParams(queryParams).toString()
}

/**
 * TODO why do we export this function twice, under two names, back to back?
 */
export const fakeCheckoutWidgetQueryParams = getCheckoutWidgetQueryParams()

/**
 * Extracts the verifyAddress widget's query parameters from a URL. That URL is
 * seeded by fake data
 * @returns string representation of `URLSearchParams`
 */
export const getVerifyAddressWidgetQueryParams = (): string => {
  const address = fakeCreateUserInput.mailingAddress
  const queryParams = {
    address1: address?.address1 as string,
    address2: address?.address2 as string,
    city: address?.city as string,
    state: address?.state as string,
    zip: address?.zip as string,
    email: fakeUser.email as string,
    phoneNumber: fakeCreateUserInput.phoneNumber as string,
    userId: fakeUser.id,
    orgId: fakeOrganization.id
  }
  return new URLSearchParams(queryParams).toString()
}

/**
 * TODO why do we export this function twice, under two names, back to back?
 */
export const fakeVerifyAddressWidgetQueryParams = getVerifyAddressWidgetQueryParams()
// make everything an object
// create a merge function that will take in the fakeData object, and another object, and merge them
// allow user to either merge or replace nested properties

export const uuid = faker.datatype.uuid()
