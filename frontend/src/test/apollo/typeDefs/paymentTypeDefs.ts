/**
 * Payment type definitions
 */
export default `
  """
  Payment User Account
  """
  type PaymentUserAccount {
    id: ID!
    paymentUserId: ID!
    paymentProcessor: PaymentProcessor!
    customerId: String!
    paymentProfiles: [PaymentProfile!]
    enabled: Boolean!
    subscriber: User
    organization: Organization
    type: PaymentUserAccountType!
  }

  enum PaymentUserAccountType {
    ORGANIZATION
    SUBSCRIBER
  }

  """
  Payment Profile
  """
  type PaymentProfile {
    id: ID!
    displayName: String
    paymentMethodId: String!
    paymentMethodType: PaymentMethodType!
    isDefault: Boolean!
    isVerified: Boolean!
    paymentUserAccount: PaymentUserAccount!
    enabled: Boolean!
    debits: [FinancialTransaction!]
    credits: [FinancialTransaction!]
  }

  input PaymentProfileInput {
    displayName: String
    paymentMethodId: String!
    paymentMethodType: PaymentMethodType!
    isDefault: Boolean!
    isVerified: Boolean!
    paymentUserAccountId: ID!
  }

  input PaymentProfileUpdate {
    id: ID!
    displayName: String
    isDefault: Boolean
  }

  enum PaymentMethodType {
    CARD
    ACH  
    CASH
    CHECK
  }

  enum PaymentProcessor {
    STRIPE
    DWOLLA
    IPPAY
  }

  """
  Financial Transaction
  """
  type FinancialTransaction {
    id: ID!
    amount: Float!
    invoiceId: ID
    subscriberId: ID
    externalTransactionId: ID
    refundTransactionId: ID
    paymentIntentClientSecret: ID
    cancelId: ID
    status: FinancialTransactionStatus
    description: String
    transactionType: TransactionType
    paymentMethodType: PaymentMethodType
    source: String
    destination: String
    sourcePaymentProfile: PaymentProfile
    destinationPaymentProfile: PaymentProfile
    createdAt: Date
    user: User
  }

  input FinancialTransactionInput {
    amount: Float!
    externalTransactionId: ID
    refundTransactionId: ID
    status: FinancialTransactionStatus
    description: String
    paymentMethodType: PaymentMethodType
    sourcePaymentProfileId: String
    destinationPaymentProfileId: String
  }

  enum TransactionType {
    "A financial transaction made by card"
    card
    "A financial transaction made by ACH transfer"
    ACH
    "A financial transaction made by check"
    check
    "A financial transaction made by cash"
    cash
    "A refund financial transaction made by card"
    cardRefund
    "A refund financial transaction made by ACH transfer"
    achRefund
    "A refund financial transaction made by check"
    checkRefund
    "ARefund financial transaction made by cash"
    cashRefund
  }

  enum FinancialTransactionStatus {
    PENDING
    SUCCEEDED
    CANCELLED
    FAILED
    REFUNDED
    REFUND_PENDING
    REFUND_FAILED
  }

  """
  Onboarding inputs
  """
  input OnboardOrganizationInput {
    stripeAccountInput: StripeAccountInput
    dwollaAccountInput: DwollaAccountInput
  }

  input StripeAccountInput {
    businessType: StripeBusinessType!
    mcc: String!
    url: String!
    tosIp: String!
    externalAccount: ExternalAccountInput
    companyName: String!
    companyAddress: AddressInput!
    companyPhone: String!
    companyTaxId: String!
    repFirstName: String!
    repLastName: String!
    repDobDay: Int!
    repDobMonth: Int!
    repDobYear: Int!
    repAddress: AddressInput!
    repTaxInfo: String!
    repTitle: String!
    repEmail: String!
    repPhone: String!
    repFrontId: Upload
    repBackId: Upload
    ownerFirstName: String!
    ownerLastName: String!
    ownerEmail: String!
    ownerPhone: String!
    ownerAddress: AddressInput!
    ownerJobTitle: String!
    ownerDobDay: Int!
    ownerDobMonth: Int!
    ownerDobYear: Int!
    ownerTaxInfo: String!
  }

  enum StripeBusinessType {
    COMPANY
    GOVERNMENT_ENTITY
    INDIVIDUAL
    NON_PROFIT
  }

  input DwollaAccountInput {
    firstName: String!,
    lastName: String!,
    email: Email!,
    ipAddress: String!,
    type: String,
    address1: String,
    city: String,
    state: String,
    postalCode: String,
    businessClassification: String,
    businessType: String,
    businessName: String,
    ein: String
    controller: DwollaController
    beneficialOwners: [BeneficialOwner]
  }

  input DwollaController {
    firstName: String!
    lastName: String!
    title: String!
    dateOfBirth: String!
    ssn: String!
    address: AddressInput!
  }

  input BeneficialOwner {
    firstName: String!
    lastName: String!
    dateOfBirth: String!
    ssn: String!
    address: AddressInput!
  }

  type DwollaBeneficialOwner {
    id: ID!
    firstName: String!
    lastName: String!
    dateOfBirth: String!
    ssn: String!
    address1: String!,
    city: String!,
    state: String!,
    postalCode: String!,
    verificationStatus: String!
  }
`
