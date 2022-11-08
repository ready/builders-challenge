/**
 * Root type definitions
 */
export default `
  scalar Date
  scalar Password
  scalar Email
  scalar StringOrInt
  scalar Upload
  scalar GeoJSONPoint
  scalar GeoJSONMultiPoint
  scalar GeoJSONLineString
  scalar GeoJSONMultiLineString
  scalar GeoJSONPolygon
  scalar GeoJSONMultiPolygon
  scalar GeoJSONGeometryCollection
  scalar GeoJSONFeature
  scalar GeoJSONFeatureCollection

  """
  A User is an entity that can create, read, update, and delete organizations, subscriptions, and plans
  Users can also subscribe to plans and or services
  """
  type User {
    id: ID!
    firstName: String
    lastName: String
    company: String
    email: Email!
    phoneNumber: String
    isCritical: Boolean
    profileImage: String
    role: UserRole!
    ippay: Boolean
    mailingAddress: Address
    prospectiveServiceAddress: Address
    createdAt: Date!
    tags: [Tag]
    notes: [Note]
    subscriptions: [Subscription]
    accountType: AccountType
    accountStatus: AccountStatus
    "Payment status, defaults to current"
    paymentStatus: PaymentStatus
    customerSince: Date
    organization: Organization
    organizationPermissions: [OrganizationPermission!]
    mrr: Float
    ltv: Float
    valueRanking: Int
    isPinned: Boolean
    accountId: String
    autopay: Boolean
    device: Device
    invoiceMethod: InvoiceMethod
    active: Boolean
    links: [ExternalLink]
    preferredContact: PreferredContact
    enableNotifications: Boolean
    uuid: String
    paymentEmailCode: String
    billingScheduledTimePeriods: [SuspendBilling]
    equipment: [Equipment]
    leadSource: LeadSource
    industry: String
    "Any purchases and unpaid balances in the account"
    currentBalance: Float
    networkNode: NetworkNode
    referralSource: ReferralSource
    legacySystemId: String
    notesCount: Int
    networkAlarms: [NetworkAlarm]
    serviceStatus: ServiceStatus
    paymentsConfig: PaymentSetup
    paymentsConfigId: ID
    avalaraSubscriberSettings: AvalaraSubscriberSettings
    mfaVerified: Boolean
    mfaRequired: Boolean
    paymentUserId: ID!
    paymentUserAccounts: [PaymentUserAccount!]
    acpStatus: AcpStatus
  }

  type MessageEventsUser  {
    user: User
    messageStatus: String
    route: String
  }

  enum PreferredContact {
    email
    sms
  }

  type ExternalLink {
    id: ID!
    urlTemplate: String
    externalId: String
    name: String
    url: String
    createdAt: Date
  }

  enum InvoiceMethod {
    paper
    electronic
    email
    sms
  }

  """
  Data source where lead was found
  """
  enum LeadSource {
    READY
    ISP
    THIRD_PARTY
  }

  """
  A Note is an object with some string content
  """
  type Note {
    id: ID
    title: String
    content: String!
    creator: User
    createdAt: Date
    archived: Boolean
  }

  """
  NoteInput is an input object for notes
  """
  input NoteInput {
    "Unique identifier for a note"
    id: ID
    "The title of a note"
    title: String!
    "The content of a note"
    content: String!
    "The user who created this note"
    creatorId: ID
    "If a note is archived or not"
    archived: Boolean
  }

  """
  Notes result
  """
  type NotesResult {
    total: Int!
    results: [Note]!
  }

  """
  Tags describe a user and can be used to get groups of similar users
  """
  type Tag {
    id: ID!
    name: String!
    color: String
    description: String
    users: [User]
  }

  """
  TagInput requires id only when being updated with a User
  """
  input TagInput {
    "The name of a tag"
    name: String!
    "The color for a tag"
    color: String
    "The description for a tag"
    description: String
  }

  """
  Reason Codes for user's taking a certain action
  """
  type ReasonCode {
    id: ID!
    name: String!
    color: String
    description: String
    reasonCodeType: ReasonCodeType!
    organization: Organization!
    createdAt: Date
    subReasons: [ReasonCode]
  }

  """
  Input for Reason Codes
  """
  input ReasonCodeInput {
    name: String!
    color: String
    description: String
    reasonCodeType: ReasonCodeType!
    parentReasonCode: ID
  }

  """
  Possible Types for reason codes
  """
  enum ReasonCodeType {
    discount
    credit
    suspension
    cancellation
  }

  """
  Users can be either consumers, ispCustomers, or superUsers
  """
  enum UserRole {
    "A user that can only read specific data from other users in an organization"
    consumer
    "A user that can read and write data for a itself"
    ispCustomer
    "A user that can read and write data for all users in an organization"
    superUser
  }

  """
  Choose Ready customer type
  """
  enum CustomerType {
    business
    subscriber
  }

  """
  Industries for business accounts
  """
  enum Industry {
    ACCOMMODATION_AND_FOOD_SERVICES
    ADMINISTRATIVE_AND_SUPPORT_AND_WASTE_MANAGEMENT
    AGRICULTURE_FORESTRY_FISHING_AND_HUNTING
    ARTS_ENTERTAINMENT_AND_RECREATION
    CONSTRUCTION
    EDUCATIONAL_SERVICES
    FINANCE_AND_INSURANCE
    HEALTH_CARE_AND_SOCIAL_ASSISTANCE
    INFORMATION
    MANUFACTURING
    NOT_KNOWN
    OTHER_SERVICES
    PROFESSIONAL_SCIENTIFIC_AND_TECHNICAL
    PUBLIC_ADMINISTRATION
    REAL_ESTATE_RENTAL_AND_LEASING
    RETAIL
    TRANSPORTATION_AND_WAREHOUSING
    UTILITIES
    WHOLESALE_TRADE
  }

  """
  Choose payment processor
  """
  enum Processor {
    stripe
    dwolla
    both
  }

  """
  Verify a bank account using microdeposits or iav
  """
  enum Verification {
    microdeposits
    iav
  }

  """
  Return type of a payment method
  """
  type PaymentMethod {
    id: ID
    name: String
    bankName: String
    type: String
    cardNumber: Int
    expMonth: String
    expYear: String
    accountNumber: Int
    routingNumber: Int
    lastFour: Int
    bankAccountType: String
    status: String
    removed: Boolean
    amount: Float
  }

  """
  Input type of a payment method
  """
  input PaymentMethodInput {
    id: ID
    name: String
    bankName: String
    cardNumber: String
    expMonth: String
    expYear: String
    cvv: Int
    accountNumber: ID
    routingNumber: ID
    lastFour: Int
    bankAccountType: String
    cardToken: String
    achToken: String
    cardName: String
    checkNumber: Int
    totalAmount: Float
    feeAmount: Float
  }

  type PaymentSetup {
    id: ID
    stripeUserId: ID
    dwollaCustomerUrl: ID
    terminalId: ID
    defaultPaymentMethod: String
  }

  input PaymentSetupInput {
    id: ID
    stripeUserId: ID
    dwollaCustomerUrl: ID
    terminalId: ID
    defaultPaymentMethod: String
  }

  """
  Payments configuration called during createUser
  """
  input PaymentsConfig {
    customerType: CustomerType!
    processor: Processor!
    customerUrl: String
    verification: Boolean
    body: String
    stripeAccountInput: StripeAccountInput
    dwollaAccountInput: DwollaAccountInput
  }

  input AddPaymentMethodAccountInput {
    processor: Processor!
    dwollaAccountInput: DwollaAccountInput
  }

  """
  Definitions:
  * 'source' : Must be a funding source id ( dwolla funding source url or stripe payment method id )
  * 'destination' : Must be a funding source id ( dwolla funding source url or stripe payment method id )
  * 'invoiceId' : id of invoice, set to use price of specific invoice
  * 'userId' : id of user, used to find the user's default payment method and/or the price of the most recent invoice
  * 'useDefault' : set to true if want to provide no source and use default payment method instead
  * 'stripeCustomerId' : id of stripe customer

  Either one of the following variables **must** be provided to set the price of the payment:
   * price: To use a specific price
   * invoiceId: To use the price of a specific invoice
   * userId: To use the price of the latest invoice
  (price > invoiceId > userId)

  The following variables **must** be provided to...
  * Make a dwolla payment:{source: , destination: , invoiceId/userId:}

  * Make a stripe payment with a saved card: {stripeCustomerId: , source: , destination: , invoiceId/userId: }

  * Make a stripe payment with a new card: {destination: , invoiceId/userId: } - Expect the 'client secret' in the {message: } response

  * Make a stripe payment with a bank account: {stripeCustomerId: , source: , destination: , invoiceId/userId: }

  * Make a payment with a user's default payment method: {useDefault: true, userId: }

  """
  input CreatePaymentInput {
    source: String
    destination: String
    invoiceId: ID
    userId: ID
    useDefault: Boolean
    price: Float
    stripeCustomerId: ID
    subscriberId: ID
    organizationId: ID
    paymentMethod: PaymentMethodInput
    refund: Boolean
  }

  input CreateReturnCheckInput {
    transactionId: ID
    subscriberId: ID
    amount: Float
  }

  input GetIPPayReportsInput {
    merchantId: ID,
    terminalId: ID,
    transactionStartTime: String,
    transactionEndTime: String,
    transactionType: TransactionType,
    amount: Float
  }

  """
  External bank account type for Stripe account creation
  """
  input ExternalAccountInput {
    object: String!
    currency: String!
    country: String!
    routingNumber: String!
    accountNumber: String!
  }

  """
  Options for updating a bank account
  """
  input UpdateBankAccountInput {
    name: String
    bankAccountType: String
    routingNumber: String
    accountNumber: String
  }

  """
  Options for updating a card
  """
  input UpdateCardInput {
    city: String,
    country: String,
    line1: String,
    line2: String,
    postal_code: String,
    state: String
    email: String,
    name: String,
    phone: Int
    orderId: Int
    card: String
  }

  type RouteGroup {
    organizationId: ID
    groups: [String]
  }

  """
  The UserAuth object containing the authenticated user, a JWT token, and a success boolean
  """
  type UserAuth {
    "A token required for authentication"
    token: String
    "A token used to refresh an authentication token"
    refreshToken: String
    "The user for a UserAuth"
    user: User
    "The mfa QR code for a UserAuth"
    mfaQr: String
    "The mfa secret to generate a mfa QR code"
    mfaSecret: String
    "If true, the user is authenticated"
    success: Boolean!
    "A message to specify the status of an api request"
    message: String
    "A code to programatically generate an account for a user"
    accountSetupCode: String
    "Array of modified user ids"
    userIds: [ID]
    "Default BOSS path to redirect after successful user auth"
    defaultBossPath: String
    "BOSS route groups the user has permission for"
    allowedBossRouteGroups: [RouteGroup]
  }

  """
  The UserAuth object containing the authenticated user, a JWT token, and a success boolean
  """
  type ForgotPasswordResponse {
    "If true, the user is authenticated"
    success: Boolean!
    "A message to specify the status of an api request"
    message: String
    "A code to authenticate the reset of a user's password"
    forgotPasswordCode: String
  }

  """
  A Organization is an ISP with admin users, plans, and services
  """
  type Organization {
    id: ID!
    name: String!
    createdAt: Date!
    logo: String
    mark: String
    qrCode: String
    phoneNumber: String
    businessAddress: Address
    parentOrganization: Organization
    childOrganizations: [Organization]
    tags: [Tag]
    taxRate: Float
    taxType: String
    taxMethod: String
    tenantId: String
    organizationCodes: [OrganizationCode]
    totalSubscribers: Int
    description: String
    towers: [Tower]
    lines: [Line]
    equipment: [Equipment]
    networkNodes: [NetworkNode]
    isEmailAlertsEnabled: Boolean
    sssConfig: SssConfig
    defaultSubOrgId: ID
    # resolverPermissions: [ResolverPermission]
    enableProvisioning: Boolean
    defaultMapView: MapView
    paymentsConfig: PaymentSetup
    avalaraSettings: AvalaraSettings
    financeEmail: String
    fundingEnabled: Boolean
    paymentProfileOwnerId: ID
    ndaId: String
    customerAgreementId: String
    socialMedia: SocialMedia
    saasSubscribed: Boolean
    explore: Boolean
    paymentUserId: ID!
    paymentUserAccounts: [PaymentUserAccount!]
    hasSignedTos: Boolean
    acpEnabled: Boolean
  }

  type SocialMedia {
    id: ID!
    facebookUrl: String
    linkedinUrl: String
    twitterUrl: String
    instagramUrl: String
    googleUrl: String
    createdAt: Date
    updatedAt: Date
  }

  type MapView {
    id: ID!
    precision: Float
    lat: Float
    lon: Float
    createdAt: Date
    updatedAt: Date
  }

  input MapViewInput {
    precision: Float
    lat: Float
    lon: Float
  }

  type SssConfig {
    id: ID!
    sssUrl: String
    createAccountStepBeforePlans: Boolean
    allowPublicAccess: Boolean
    requirePaymentMethodStep: Boolean
    hideCustomizeStep: Boolean
    preconstructionMode: Boolean
    alianzaEnabled: Boolean
    acpEnabled: Boolean
    acpConfig: AcpConfig
    createdAt: Date
    updatedAt: Date
  }

  input SssConfigInput {
    id: ID
    sssUrl: String
    createAccountStepBeforePlans: Boolean
    allowPublicAccess: Boolean
    requirePaymentMethodStep: Boolean
    hideCustomizeStep: Boolean
    preconstructionMode: Boolean
    alianzaEnabled: Boolean
  }

  type Tower {
    id: ID
    name: String
    status: TowerStatus
    geometryType: GeometryType
    geometryCoordinates: [String]
    equipment: Equipment
    attachmentType: AttachmentType
    lat: Float
    lon: Float
    createdAt: Date
  }

  input CreateTowerInput {
    name: String
    status: TowerStatus
    geometryType: GeometryType
    geometryCoordinates: [String]
    attachmentType: AttachmentType
    lat: Float
    lon: Float
  }

  enum TowerStatus {
    up
    down
  }

  enum GeometryType {
    segment
    shape
  }

  enum AttachmentType {
    commRoof
    waterTower
    pole
    commTower
    grainSilo
    residence
    grainLeg
    cementPlant
  }

  type Line {
    id: ID
    name: String
    lineType: String
    geometryType: GeometryType
    geometryCoordinates: [String]
    organization: Organization
    createdAt: Date
  }

  input CreateLineInput {
    name: String
    lineType: LineType
    geometryType: GeometryType
    geometryCoordinates: [String]
  }

  enum LineType {
    transport
    drop
    distribution
    looseTube
  }

  type Equipment {
    id: ID
    organization: Organization
    name: String
    deviceId: String
    type: EquipmentType
    provisionedToSubscriber: User
    currentlyProvisioned: Boolean
    lastProvisionedDate: Date
    plan: Plan
    service: Service
    subscription: Subscription
    deviceStatus: DeviceStatus
    make: String
    model: String
    createdAt: Date
    serviceStatus: ServiceStatus
    serviceUsername: String
    servicePassword: String
    staticIp: String
    smtp: Boolean
    networkAlarms: [NetworkAlarm]
    networkNode: NetworkNode
    networkMapId: String
  }

  enum EquipmentType {
    ROUTER
    HANDSET
    ONT
    MODEM
    MISC
  }

  enum DeviceStatus {
    ACTIVE
    OFFLINE
  }

  input CreateEquipmentInput {
    subscriberId: ID
    organizationId: ID
    name: String
    deviceId: String
    type: EquipmentType
    provisionedToSubscriberId: ID
    currentlyProvisioned: Boolean
    lastProvisionedDate: Date
    planId: ID
    serviceId: ID
    subscriptionId: ID
    deviceStatus: DeviceStatus
    make: String
    model: String
    serviceUsername: String
    servicePassword: String
    staticIp: String
    smtp: Boolean
    legacySystemId: String
  }

  input UpdateEquipmentInput {
    id: ID
    subscriberId: ID
    organizationId: ID
    name: String
    deviceId: String
    type: EquipmentType
    provisionedToSubscriberId: ID
    currentlyProvisioned: Boolean
    lastProvisionedDate: Date
    planId: ID
    serviceId: ID
    subscriptionId: ID
    deviceStatus: DeviceStatus
    make: String
    model: String
    serviceUsername: String
    servicePassword: String
    staticIp: String
    smtp: Boolean
    legacySystemId: String
  }

  type NetworkNode {
    id: ID
    provisionId: ID
    name: String
    lat: Float
    lon: Float
    networkAlarms: [NetworkAlarm]
    createdAt: Date
    updatedAt: Date
    legacySystemId: ID
    legacySystemStringId: String
    serviceStatus: ServiceStatus
  }

  type OrganizationCode {
     organizationId: ID
     code: String!
     default: Boolean
  }

  input OrganizationCodeInput {
     code: String!
     default: Boolean
  }

  enum ExternalService {
    alianza
  }

  type ExternalServiceData {
    alianza: AlianzaData
  }

  input ExternalServiceDataInput {
    alianza: AlianzaDataInput
  }

  """
  Alianza
  """

  type Device {
    id: ID!
    deviceType: String,
    lineNumber: Int,
    macAddress: String,
    emergencyPhoneNumber: String
  }

  input CreateDeviceInput {
    id: ID
    deviceType: String,
    lineNumber: Int,
    macAddress: String,
    emergencyPhoneNumber: String
  }

  type AlianzaAddress {
    firstName: String,
    lastName: String,
    businessName: String,
    streetNumber: String,
    streetNumberSuffix: String,
    preDirectional: String,
    streetName: String,
    streetSuffix: String,
    postDirectional: String,
    city: String,
    state: String,
    country: String,
    postalCode: String,
    secondaryLocationDescription: String,
    unit: String
    hexCode: String
  }

  enum DirectoryListingType {
    LIST_PUBLISH
    LIST_NOT_PUBLISH
    NOT_LIST_NOT_PUBLISH
    PORTED
  }

  # Call Handling Settings

  ## enums

  enum CallHandlingOptionType {
    RingPhone
    ForwardAlways
    SimultaneousRing
    FindMeFollowMe
  }

  enum CallHandlingType {
    Forward
    Voicemail
    Busy
    RingForever
  }

  ## types

  type CallHandling {
    type: CallHandlingType
    forwardToNumber: String
  }

  type FindMeEndpoint {
    ringUserDevice: Boolean
    toNumber: String
    timeout: Int
  }

  type CallHandlingWithTimeout {
    type: CallHandlingType
    timeout: Int
    forwardToNumber: String
  }

  type RingPhoneCallHandling {
    busyCallHandling: CallHandling
    noAnswerCallHandling: CallHandlingWithTimeout
    unregisteredCallHandling: CallHandling
  }

  type SimultaneousRingCallHandling {
    forwardToNumberList: [String]
    noAnswerCallHandling: CallHandlingWithTimeout
  }

  type FindMeFollowMeCallHandling {
    findMeEndpoints: [FindMeEndpoint]
    timeoutType: CallHandlingType
  }

  type CallHandlingSettings {
    callWaitingEnabled: Boolean
    doNotDisturbEnabled: Boolean
    callHandlingOptionType: CallHandlingOptionType
    forwardAlwaysToNumber: String
    ringPhoneCallHandling: RingPhoneCallHandling
    simultaneousRingCallHandling: SimultaneousRingCallHandling
    findMeFollowMeCallHandling: FindMeFollowMeCallHandling
  }

  ## inputs

  input CallHandlingInput {
    type: CallHandlingType
    forwardToNumber: String
  }

  input FindMeEndpointInput {
    ringUserDevice: Boolean
    toNumber: String
    timeout: Int
  }

  input CallHandlingWithTimeoutInput {
    type: CallHandlingType
    timeout: Int
    forwardToNumber: String
  }

  input RingPhoneCallHandlingInput {
    busyCallHandling: CallHandlingInput
    noAnswerCallHandling: CallHandlingWithTimeoutInput
    unregisteredCallHandling: CallHandlingInput
  }

  input SimultaneousRingCallHandlingInput {
    forwardToNumberList: [String]
    noAnswerCallHandling: CallHandlingWithTimeoutInput
  }

  input FindMeFollowMeCallHandlingInput {
    findMeEndpoints: [FindMeEndpointInput]
    timeoutType: CallHandlingType
  }

  input CallHandlingSettingsInput {
    callWaitingEnabled: Boolean
    doNotDisturbEnabled: Boolean
    callHandlingOptionType: CallHandlingOptionType
    forwardAlwaysToNumber: String
    ringPhoneCallHandling: RingPhoneCallHandlingInput
    simultaneousRingCallHandling: SimultaneousRingCallHandlingInput
    findMeFollowMeCallHandling: FindMeFollowMeCallHandlingInput
  }

  # Call Screening Settings

  ## enums

  enum BlockType {
    Allow
    Block
    Voicemail
    Forward
    VipRing
    BlockWithPrompt
  }

  enum RingType {
    StandardRing
    Ring1
    Ring2
    Ring3
    Ring4
    Ring5
    Ring6
    Ring7
  }

  ## types

  type CustomCallScreen {
    telephoneNumber: String
    blockType: BlockType
    ringType: RingType
  }

  type CallScreeningSettings {
    anonymousCallScreen: BlockType
    anonymousRingType: RingType
    tollFreeCallScreen: BlockType
    tollFreeRingType: RingType
    defaultCallScreen: BlockType
    defaultRingType: RingType
    customCallScreenList: [CustomCallScreen]
    forwardTn: String
  }

  ## inputs

  input CustomCallScreenInput {
    telephoneNumber: String
    blockType: BlockType
    ringType: RingType
  }

  input CallScreeningSettingsInput {
    anonymousCallScreen: BlockType
    anonymousRingType: RingType
    tollFreeCallScreen: BlockType
    tollFreeRingType: RingType
    defaultCallScreen: BlockType
    defaultRingType: RingType
    customCallScreenList: [CustomCallScreenInput]
    forwardTn: String
  }

  #

  type AlianzaConfig {
    callerIdName: String,
    voicemailToEmailEnabled: Boolean,
    voicemailToEmailAddresses: [String],
    directoryListingType: DirectoryListingType,
    phoneNumber: String,
    carrierStatus: String
    callHandlingSettings: CallHandlingSettings
    callScreeningSettings: CallScreeningSettings
  }

  type AlianzaConfigResponse {
    success: Boolean!
    message: String
    config: AlianzaConfig
  }

  type VoicemailBox {
    id: ID,
    name: String,
    partitionId: String,
    accountId: String,
    voicemailToEmailEnabled: Boolean,
    voicemailKeepAfterEmail: Boolean,
    locale: String,
    totalVoicemails: Int,
    totalUnreadVoicemails: Int,
    type: String,
    dtmfOption: Int,
  }

  input AlianzaConfigInput {
    callerIdName: String,
    voicemailToEmailEnabled: Boolean,
    voicemailToEmailAddresses: [String],
    directoryListingType: DirectoryListingType
    callHandlingSettings: CallHandlingSettingsInput
    callScreeningSettings: CallScreeningSettingsInput
  }

  type AlianzaData {
    externalServiceType: ExternalService!
    accountId: String!
    endUserId: String!
    endUserUsername: String!
    phoneNumber: String!
    voicemailBoxId: String!
    deviceId: String
  }

  input AlianzaDataInput {
    phoneNumber: String!
    planIds: [ID!]
    portInfo: PortInfo
  }

  enum PlanName {
    ALIANZA_CENTRIC_VOIP_PLUS_PLUS
    ALIANZA_CENTRIC_GIGICALL_GLOBAL_ACCESS
    ALIANZA_CENTRIC_GIGICALL_LATIN_AMERICA
    ALIANZA_CENTRIC_GIGACALL_LOCAL
  }

  enum PortingWireType {
    Wireline
    Wireless
  }

  type VoIPPrevalidateResponse {
    serviceAvailable: Boolean
    earliestCRD: String
    success: Boolean
    message: String
  }

  input PortInfo {
    portingAuthorizedName: String
    portingWireType: PortingWireType
    account: String
    pin: String
  }

  type AlianzaPhoneNumber {
    partitionId: String
    phoneNumber: String!
    rateCenter: String
    rateCenterReorderName: String
    state: String
    Country: String
    prefix: String
    accountId: String
    carrierId: String
    cooldownExpireDate: Date
    cooldownRecoveredDate: Date
    functionType: String
    claimTicketId: String
    matchesZip: Boolean
    distance: Int
    id: ID
  }

  enum AlianzaRateType {
    PER_CALL
    PER_MINUTE
  }

  type AlianzaPlan {
    id: ID
    name: String
    planMinutes: Int
    unlimitedDisplay: Boolean
    allowOverage: Boolean
    preventForwarding: Boolean
    defaultPlan: Boolean
    callRateFor411: Int
    allow411: Boolean
    rateTypeFor411: AlianzaRateType
    callRateForOperator: Int
    allowOperator: Boolean
    rateTypeForOperator: AlianzaRateType
    partitionId: String
    allowUnlimitedLocal: Boolean
    rateIntraPartitionAsFree: Boolean
  }

  """
  A Subscription is a resultant object from a User subscribing to a Plan
  """
  type Subscription {
    id: ID!
    user: User!
    plans: [Plan]!
    addons: [Addon]
    serviceStatus: ServiceStatus
    createdAt: Date!
    status: SubscriptionStatus
    serviceAddress: Address
    tower: Tower
    subscriptionStartDate: Date
    subscriptionEndDate: Date
    nextDueDate: Date
    price: Float
    tax: Float
    contract: Contract
    externalServiceData: ExternalServiceData
    additionalServiceSetupRequiredKeys: [ExternalService]
    jobId: String
    discounts: [Discount]
    active: Boolean
    childSubscription: Subscription
    parentSubscription: Subscription
    cancelReasonCode: ReasonCode
    cancelSubReasonCode: ReasonCode
    equipment: [Equipment]
    provisioningResponses: [ProvisioningResponse]
    legacySystemId: ID
  }

  """
  Message is the object created when a message is sent and stored in events
  """
  # type Message {
  #   recipients: [User]!
  #   template: MessageTemplate
  # }

  enum MessageRoute {
    "email or sms"
    preferred
    email
    sms
    "notification displayed in Subscriber Portal"
    notification
    mail
    postcard
    "email and sms"
    all
  }

  input EmailTemplateInput {
    subject: String!
    body: String!
  }

  input SmsTemplateInput {
    message: String!
  }

  input MessageTemplateInput {
    emailTemplate: EmailTemplateInput!
    smsTemplate: SmsTemplateInput!
  }

  enum MessageTemplateType {
    sampleMessage
    custom
  }

  input MessageInput {
    hardTemplateName: String
    cronString: String
    sendAt: Date
    recipientIds: [ID]
    customTemplate: MessageTemplateInput
    route: MessageRoute
    variables: String
    savedTemplateId: ID
    organizationId: ID
    savedTemplateName: String
    bulkSelection: BulkSelection
    "Overides unsubscribe groups"
    isUrgent: Boolean
  }

  """
  Account Type can be either commercial, residential or MDU
  """
  enum AccountType {
    "A subscription for a commercial subscriber"
    commercial
    "A subscription for a residential subscriber"
    residential
    "A subscription for a government subscriber"
    government
    "A subscription for a multi-dwelling unit"
    MDU
  }

  """
  Subscription Status can be either active or inactive
  """
  enum SubscriptionStatus {
    "A subscription that is scheduled to activate at some point in the future"
    pending
    "A subscription that is active"
    active
    "A subscription that is active and cannot be disconnected"
    active_DND
    "A subscription that has been active in the past, but is currently inactive"
    suspended
    "A subscription that is not active"
    inactive
  }

  type AvalaraKeyPairs {
    salesType: String
    avalaraTransactionType: Int
    avalaraServiceType: Int
  }

  """
  A Plan is an object which a user can subscriber to
  """
  type Plan {
    id: ID!
    name: String!
    description: String
    image: String
    services: [Service]!
    billingCyclePeriod: Int!
    billingCycleUnit: BillingCycleUnit!
    numberOfBillingCycles: Int
    pricingModel: PricingModel!
    price: Float!
    taxAmount: Float
    taxMethod: String
    pricingTier: PricingTier
    sellingPoints: [String]
    createdAt: Date!
    organizations: [Organization]!
    active: Boolean!
    # used for alianza productPlanID
    # should look at other options for storing this
    standAlone: Boolean
    externalPlanId: ID
    childPlans: [Plan]
    # startDate, endDate and currentlySubscribed are available
    # when Plan is queried as a field in a Subscription object
    startDate: Date
    endDate: Date
    currentlySubscribed: Boolean
    tags: [Tag]
    recommended: Boolean
  }

  enum BillingCycleUnit {
    "Bill based on days"
    day
    "Bill based on weeks"
    week
    "Bill based on months"
    month
    "Bill based on years"
    year
  }

  enum PricingModel {
    "Charge a recurring single price"
    flatFee
    "Charge the price for each unit of the plan on a recurring basis"
    perUnit
    "Charge a different price per unit based on quantity of the plan purchased from every tier on a recurring basis"
    tiered
    "Charge a different price per unit based on quantity of the plan purchased based on the tier under which it falls"
    volume
    "Charge a price for a range"
    stairstep
  }

  """
  A PricingTier is used for tiered, volume and stairstep pricing models
  """
  type PricingTier {
    "Unique identifier for a plan"
    planId: ID!
    "The lower limit of a range of units for the tier. Min = 1"
    startingUnit: Int!
    "The upper limit of a range of units for the tier. Min = 1"
    endingUnit: Int
    "For stairstep pricing: the price of the tier. For tiered/volume pricing: the price of each unit in the tier"
    tierPrice: Float!
  }

  """
  A Contract represents a legal agreement to a plan
  """
  type Contract {
    id: ID!
    startDate: Date
    endDate: Date
  }

  """
  Address
  """
  type Address {
    id: ID!
    address1: String!
    address2: String
    city: String!
    state: String!
    zip: String!
    lat: Float
    lon: Float
    censusTract: String
    censusMatch: CensusMatch
    demographics: Demographics
    householdIncome: Float
    numberOfAdultsInHousehold: Int
    numberOfChildrenInHousehold: Int
    numberOfPersonsInHousehold: Int
    ownOrRent: String
    buildingType: addressBuildingType
    hexCode: String
    county: String
    province: String
    country: String
    serviceStatus: ServiceStatus
  }

  enum addressBuildingType {
    primary
    secondary
  }

  """
  Census Match for an addres
  """
  enum CensusMatch {
    "Address is matched to census via GPS"
    GPS
    "Address is matched to census via US Postal address verification"
    US Postal
  }

  """
  Demographics data by location
  """
  type Demographics {
    censusBlockGroup: String!
    population: Int
    populationDensity: Float
    educationOverBachelorRate: Float
    numberOfHouseholds: Int
    medianHouseholdIncome: Int
    numberOfHousingUnits: Int
    ownerOccupiedHousingUnitRate: Float
    employmentRate: Float
    housingUnitsWithChildrenInSchool: Int
    percentageOfChildrenInSchool: Float
    singleFamilyHomePrice202012: Int
    singleFamilyHomePrice202009: Int
    createdAt: Date
  }

  type Balance {
    amount: Float
  }

  """
  Generic operation completed type
  """
  type GenericResponse {
    "If true, an api request is successful"
    success: Boolean!
    "The message for a generic response"
    message: String
    "Record ids"
    recordIds: [ID]
    "Modified userIds"
    userIds: [ID]
  }

  """
  Array results pagination
  """
  input Pagination {
    "The offset for pagination"
    offset: Int!
    "Number of results to display per page"
    limit: Int!
  }

  input CursorPagination {
    next: String
    back: String
    all: Boolean
    limit: Int
  }

  input DataLoaderFilterInput {
    fieldName: String!
    condition: FilterCondition!
    value: [String]
  }

  type Filter {
    fieldName: String!
    condition: FilterCondition!
    value: [String]
  }

  input FilterInput {
    fieldName: String!
    condition: FilterCondition!
    value: [String]
  }

  type Sort {
    sortedField: String!
    sortOrder: SortOrder!
  }

  input SortInput {
    "Field name to sort by"
    sortedField: String!
    "The sorting method for pagination, defaults to asc"
    sortOrder: SortOrder
  }

  """
  Sort array results in ascending or descending order
  """
  enum SortOrder {
    "Sort array in ascending order"
    asc
    "Sort array in descending order"
    desc
  }

  enum FilterCondition {
    "String filter conditions"
    contains
    doesNotContain
    isExactly
    isNot
    startsWith
    endsWith

    "Number filter conditions"
    equals
    doesNotEqual
    greaterThan
    lessThan

    "Date filter conditions"
    between
    isAfter
    isBefore
    today
    thisMonth
    thisYear

    "Geo filter conditions"
    geoShape
    geoDistance
  }

  """
  Segments (saved queries)
  """
  type Segment {
    id: ID
    name: String!
    node: SegmentNode
    filters: [Filter]
    sort: Sort
  }

  input CreateSegmentInput {
    organizationId: ID!
    name: String!
    node: SegmentNode!
    filters: [FilterInput]
    sort: SortInput
  }

  enum SegmentNode {
    subscribers
    invoices
    payments
    credits
    discounts
    addons
    plans
    services
  }

  """
  Upload file object
  """
  type File {
    filename: String!
    mimetype: String!
    encoding: String!
  }

  type UploadDataResponse {
    success: Boolean!
    message: String
    fileUrls: [String]
  }

  enum Bucket {
    "Default. Private bucket. Does not return a url."
    customer_uploads
    "Public bucket. Returns public url in url field."
    public_assets
  }

  enum AccountStatus {
    "Largest pool, top of the sales funnel"
    lead
    "Leads who have been contacted"
    opportunity
    "Opportunities who have replied with interest or used self-signup"
    prospect
    "Account is a subscriber with service not yet activated"
    pending
    "Account has active service"
    subscriber
    "Account has active service that cannot be disconnected"
    subscriberDND
    "Account has suspended service"
    suspended
    "Account has cancelled service"
    cancelled
    "Account is ineligible for service or not yet economically viable"
    ineligible
    "Previous Ready Leads that have been imported and are now occupants"
    occupants
  }

  enum PaymentStatus {
    "Payment is past due"
    pastDue
    "Payment is current"
    current
  }

  enum ServiceStatus {
    "Service is active"
    active
    "Service is impaired"
    impaired
    "Service is disconnected due to an outage"
    outage
  }

  type Event {
    eventId: String
    timeStamp: String
    type: String
    category: String
    subscribersInvolved: [ID]
    subscribersInvolvedUsers: [User]
    title: String
    description: String
    "Contains the Message map"
    message: Message
    object: String
    origin: ID
    initiator: ID
    initiatorUser: User
  }

  type SubscriberMutation {
    type: String
    eventId: String
    subscribersInvolved: [ID]
    timeStamp: String
    userAuth: String
    userInput: String
  }

  """
  Subscriber Event Types
  """
  enum SubscriberEventType {
    subscriberContactedSupport
    messageSentToSubscriber
    subscriberCreated
    subscriberEnrolled
    subscriberDeleted
    paymentInitiated
    paymentSucceeded
    paymentRefuned
    paymentFailed
    paymentRefunded
    refundInitiated
    mrrUpdated
    cardAdded
    cardUpdated
    cardExpiryReminder
    cardExpired
    creditVoided
    paymentSourceAdded
    paymentSourceUpdated
    paymentSourceDeleted
    promotionalCreditsAdded
    promotionalCreditsDeducted
    planUpgraded
    createdSubscription
    startedSubscription
    updatedSubscription
    cancelledSubscription
    renewedSubscription
    scheduledSubscriptionCancellation
    scheduledSubscriptionCancellationRemoved
    addonCreated
    addonRemoved
    invoiceCreated
    invoiceUpdated
    invoiceDeleted
    invoiceVoided
    networkOutage
  }

  """
  Subscriber Event Categories
  """
  enum SubscriberEventCategory {
    "Event is an inbound communication from a user"
    inboundComm
    "Event is an outbound communication to a user"
    outboundComm
    "Event is billing related"
    billing
    "Event is subscription related"
    subscriber
    "Event is invoice related"
    invoice
    "Event is network related"
    network
    "Event is a change in the subscriber status"
    subscriberStatusChange
    "Event is internal to the provider"
    internal
    "Some other event happened"
    none
  }

  type PageInfo {
    total: Int
    remaining: Int
    hasPrevious: Boolean
    hasNext: Boolean
    next: String
    previous: String
  }

  """
  Subscriber result
  """
  type SubscribersResult {
    # total: Int!
    results: [User]!
    pageInfo: PageInfo
    ids: [ID]
  }

  type ReasonCodeResult {
    total: Int!
    results: [ReasonCode]!
    ids: [ID]
    pageInfo: PageInfo
  }

  type PlansResult {
    total: Int!
    results: [Plan]!
    ids: [ID]
    pageInfo: PageInfo
  }

  type AddonsResult {
    total: Int!
    results: [Addon]!
    ids: [ID]
    pageInfo: PageInfo
  }

  type SubscriberInvoicesResult {
    total: Int!
    results: [SubscriberInvoice]!
    taxes: [Tax]
    pageInfo: PageInfo
  }

  type NetworkNodeResult {
    total: Int!
    results: [NetworkNode]!
  }

  type DiscountsResult {
    total: Int!
    results: [Discount]!
    ids: [ID]
    pageInfo: PageInfo
  }

  type InvoicesResult {
    total: Int!
    results: [SubscriberInvoice]!
    ids: [ID]
    pageInfo: PageInfo
  }

  type FinancialTransactionsResult {
    total: Int!
    results: [FinancialTransaction]!
    ids: [ID]
    pageInfo: PageInfo
  }

  type EquipmentResult {
    total: Int!
    results: [Equipment]!
    ids: [ID]
    pageInfo: PageInfo
  }

  type TagsResult {
    total: Int!
    results: [Tag]!
    ids: [ID]
    pageInfo: PageInfo
  }

  type LinesResult {
    total: Int!
    results: [Line]!
    ids: [ID]
    pageInfo: PageInfo
  }

  type TowersResult {
    total: Int!
    results: [Tower]!
    ids: [ID]
    pageInfo: PageInfo
  }

  type MessageEventsResult {
    results: [MessageEvent]
  }

  type GrantApplicationResult {
    results: [GrantApplication]!
    ids: [ID]
    pageInfo: PageInfo
  }

  type MessagingTotals {
    eventsCount: Int
    emailCount: Int
    smsCount: Int
    emailEvents: Int
    smsEvents: Int
    messageCount: Int
    emailErrorCount: Int
    smsErrorCount: Int
    totalError: Int
    emailDelivered: Int
    smsDelivered: Int
  }

  type MessageEventsOverviewResult {
    emailEventData: EmailEventData
    smsEventData: SmsEventData
    messagingTotals: MessagingTotals
  }

  type MessageDashboardOverviewResult {
    emailMessages: [SingleMessage]
    smsMessages: [SingleMessage]
    messagingTotals: MessagingTotals
    emailTotals: MessageEventResultsTotals
    smsTotals: SmsTotalsResults
    routeTotals: RouteTotals
    messageEvents: [MessageEventInfo]
  }

  type MessageEventInfo {
    id: Int
    createdAt: Date
    emailCount: Int
    messageCount: Int
    smsCount: Int
  }

  type RouteTotals {
    email: Int
    sms: Int
    preferred: Int
  }

  type EmailEventData {
    open: [SingleMessage]
    delivered: [SingleMessage]
    processed: [SingleMessage]
    dropped: [SingleMessage]
    bounce: [SingleMessage]
    deferred: [SingleMessage]
    click: [SingleMessage]
  }

  type SendgridEvent {
    id: ID!
    email: String
    eventId: ID
    organizationId: ID
    sgMessageId: ID
    env: String
    event: String
    recipientId: ID
    createdAt: Date
  }

  type SmsEventData {
    queued: [SingleMessage]
    failed: [SingleMessage]
    sent: [SingleMessage]
    delivered: [SingleMessage]
    undelivered: [SingleMessage]
  }

  type SingleMessage {
    id: ID!
    organizationId: ID!
    recipientId: ID!
    eventId: ID!
    currentStatus: String
    statusList: [String]
    errorStatus: Boolean
    deliveredStatus: Boolean
    route: SingleMessageRoute
    type: String
    createdAt: Date
    updatedAt: Date
  }

  enum SingleMessageRoute {
    email
    sms
  }

  type TwilioEvent {
    id: ID!
    eventId: ID
    organizationId: ID
    from: String
    to: String
    status: String
    recipientId: ID
    createdAt: Date
    smsId: ID
  }


  """
  Subscriber Billing
  """
  type SubscriberInvoice {
    id: ID!
    user: User
    billingPeriodStart: Date!
    billingPeriodEnd: Date!
    invoiceDate: Date!
    dueDate: Date!
    subtotal: Float
    amountDue: Float!
    tax: Float
    taxes: [Tax]
    discount: Float
    paidDate: Date
    notes: [Note]
    invoiceStatus: InvoiceStatus!
    invoiceItems: [InvoiceItem]!
    invoiceFilename: String
    organization: Organization
  }

  input UpdateInvoiceInput {
    invoiceStatus: InvoiceStatus
  }

  type InvoiceItem {
    id: ID!
    name: String!
    description: String
    price: Float!
    quantity: Int
    discountAmount: Float
    discountPercentage: Float
    amountDue: Float!
    taxAmount: Float
    taxRate: Float
    type: InvoiceItemType
    credit: Credit
    financialTransaction: FinancialTransaction
    display: Boolean
  }

  enum InvoiceStatus {
    draft
    open
    paid
    uncollectible
    void
  }

  enum InvoiceItemType {
    PREVIOUS_BALANCE
    PAYMENT
    CREDIT
    PLAN
    ADDON
    PRORATION
    DISCOUNT
  }

  """
  Subscribers HUD
  """
  type SubscribersHUD {
    averageRevenuePerSubscriber: Float!
    annualizedChurnRate: Float!
    contractedAnnualizedRecurringRevenue: Float!
    prospectsActivatedPercentage: Float!
    totalContractValue: Float!
    total: Int!
  }

  """
  Discount - represents a reduction of standalone, nonrecurring charges on a subscription
      Can be applied to an invoice amount or to specific plans
      TODO: will eventually need to be applied to addons as well

      The maxRedemptions, redemptions and validUntil fields apply to the
      discount across every subscriber in an organization. For example,
      to restrict the discount to the first 50 customers who use it or
      to require it be redeemed by a certain date
  """
  type Discount {
    id: ID!
    name: String!
    description: String
    "Fixed amount or percentage discount"
    discountType: BillingType!
    "For fixed amount discounts"
    discountAmount: Float
    "For percentage discounts"
    discountPercentage: Float
    "Does the discount apply to the invoice total or specific plans"
    applyOn: DiscountApplication!
    "Is the discount available as a one-time use, a limited period, or forever"
    duration: BillingDuration!
    "Number of months for limited period discounts"
    limitedPeriodMonths: Int
    "Date when discount expires and becomes inactive"
    validUntil: Date
    "The max number of times the discount can be applied across the entire organization"
    maxRedemptions: Int
    "Number of times it has been redeemed across the entire organization"
    redemptions: Int
    "Plans the discount can be applied to (optional, depends on value of applyOn)"
    applicablePlans: [Plan]
    "Addons the discount can be applied to (optional, depends on value of applyOn)"
    applicableAddons: [Addon]
    "Discounts can be manually disabled"
    enabled: Boolean!
    "Active = enabled && discount isn't past valid until date && # of redemptions < max total redemptions"
    active: Boolean!
    "Top level reason code"
    reasonCode: ReasonCode
    "Sub reason code"
    subReasonCode: ReasonCode
    """The following fields are only available when the discount is a property of a subscription object.
    Applied count tracks the # of times an instance of a discount has been applied to an individual subscription"""
    appliedCount: Int
    "Max number of times an instance of a discount can be applied to an individual subscription"
    maxSubscriptionApplications: Int
    "Plan on the subscription a specific item discount is applied to"
    appliedPlanId: ID
    "Addon on the subscription a specific item discount is applied to"
    appliedAddonId: ID
    organizations: [Organization]
    avalaraDiscountType: Int
  }

  input CreateDiscountInput {
    organizationIds: [ID]!
    name: String!
    description: String
    discountType: BillingType!
    discountAmount: Float
    discountPercentage: Float
    applyOn: DiscountApplication!
    duration: BillingDuration!
    limitedPeriodMonths: Int
    validUntil: Date
    maxRedemptions: Int
    applicablePlanIds: [ID]
    applicableAddonIds: [ID]
    enabled: Boolean
    reasonCodeId: ID
    subReasonCodeId: ID
    avalaraDiscountType: Int
  }

  input UpdateDiscountInput {
    organizationIds: [ID]
    name: String
    description: String
    discountType: BillingType
    discountAmount: Float
    discountPercentage: Float
    applyOn: DiscountApplication
    duration: BillingDuration
    limitedPeriodMonths: Int
    validUntil: Date
    maxRedemptions: Int
    applicablePlanIds: [ID]
    applicableAddonIds: [ID]
    enabled: Boolean
    reasonCodeId: ID
    subReasonCodeId: ID
    avalaraDiscountType: Int
  }

  enum BillingType {
    fixedAmount
    percentage
  }

  enum DiscountApplication {
    invoiceAmount
    specifiedItems
  }

  enum BillingDuration {
    oneTime
    forever
    limitedPeriod
  }

  input CreateUserInput {
    "First name of a user"
    firstName: String
    "Last name of a user"
    lastName: String
    "Name of the company a user belongs to"
    company: String
    "The primary email for a user"
    email: Email
    "The password for a user"
    password: Password
    "The primary phone number for a user"
    phoneNumber: String
    "If true, the user has a critical job and cannot be disconnected from service"
    isCritical: Boolean
    "Uploaded image for a user's profile"
    profileImage: Upload
    "The role of a user"
    role: UserRole
    "The unique identifier of a user in Stripe"
    stripeUserId: String
    "The unique identifier of a user in Dwolla"
    dwollaCustomerUrl: String
    "Mailing address for a user"
    mailingAddress: AddressInput
    "Prospective service address for leads/opportunities"
    prospectiveServiceAddress: AddressInput
    "notes for a user"
    notes: [String]
    "Service Address for a User"
    serviceAddress: AddressInput
    "Residential, Commercial or MDU"
    accountType: AccountType
    "An account status for a user"
    accountStatus: AccountStatus
    "Payment status, defaults to current"
    paymentStatus: PaymentStatus
    "The date which a user becomes a customer"
    customerSince: Date
    "Unique identifier of an organization for a user"
    organizationId: Int
    "If true, the user's account has not been setup"
    accountSetupNotComplete: Boolean
    "If true, user is pinned"
    isPinned: Boolean
    "Code for email verifying a payment method"
    payment_email_code: String
    "Default payment method"
    default_payment_method: String
    "Autopay"
    autopay: Boolean
    "Device (Used in alianza setup)"
    device: CreateDeviceInput
    "Invoice method setting"
    invoiceMethod: InvoiceMethod
    "User active"
    active: Boolean
    "Unique identifiers for the tags for a user"
    tagIds: [ID]
    "The users preferred method of contact"
    preferredContact: PreferredContact
    enableNotifications: Boolean
    "Input links"
    links: [ExternalLinkInput]
    "Data source where lead was found"
    leadSource: LeadSource
    "Industry of business account"
    industry: Industry
    networkNodeId: ID
    referralSourceId: ID
    avalaraSubscriberSettings: AvalaraSubscriberSettingsInput
    acpStatus: AcpStatus
  }

  input UpdateUserInput {
    "First name of a user"
    firstName: String
    "Last name of a user"
    lastName: String
    "Name of the company a user belongs to"
    company: String
    "The primary email for a user"
    email: Email
    "The password for a user"
    password: Password
    "The primary phone number for a user"
    phoneNumber: String
    "If true, the user has a critical job and cannot be disconnected from service"
    isCritical: Boolean
    "Uploaded image for a user's profile"
    profileImage: Upload
    "The role of a user"
    role: UserRole
    "Mailing address for a user"
    mailingAddress: AddressInput
    "Prospective service address for leads/opportunities"
    prospectiveServiceAddress: AddressInput
    "Tags for a user"
    tags: [TagInput]
    "notes for a user"
    notes: [String]
    "Service Address for a User"
    serviceAddress: AddressInput
    "Residential, Commercial or MDU"
    accountType: AccountType
    "An account status for a user"
    accountStatus: AccountStatus
    "Payment status, defaults to current"
    paymentStatus: PaymentStatus
    "The date which a user becomes a customer"
    customerSince: Date
    "Unique identifier of an organization for a user"
    organizationId: Int
    "If true, the user's account has not been setup"
    accountSetupNotComplete: Boolean
    "If true, user is pinned"
    isPinned: Boolean
    "Code for email verifying a payment method"
    paymentEmailCode: String
    "Autopay"
    autopay: Boolean
    "Device (Used in alianza setup)"
    device: CreateDeviceInput
    "Invoice method setting"
    invoiceMethod: InvoiceMethod
    "User active"
    active: Boolean
    "The users preferred method of contact"
    preferredContact: PreferredContact
    enableNotifications: Boolean
    "Input links"
    links: [ExternalLinkInput]
    "Data source where lead was found"
    leadSource: LeadSource
    "Industry of business account"
    industry: Industry
    networkNodeId: ID
    referralSourceId: ID
    paymentsConfig: PaymentSetupInput
    avalaraSubscriberSettings: AvalaraSubscriberSettingsInput
  }

  input ExternalLinkInput {
    "Template string for CRM url, Example: https://somecrm.com/id/{externalId}"
    urlTemplate: String
    "External Id"
    externalId: String
    "Name"
    name: String
  }

  input CreatePlanInput {
    "Unique identifier of an organization for a plan"
    organizationIds: [ID]!
    "The name for a plan"
    name: String!
    "The description for a plan"
    description: String
    "Services that make up the plan"
    serviceIds: [ID]!
    "The uploaded image for a plan"
    image: Upload
    "Specify how frequently customer is billed. To bill a customer every 6 months, enter 6"
    billingCyclePeriod: Int!
    "The billing frequency unit in which a customer is billed"
    billingCycleUnit: BillingCycleUnit!
    "Number of billing cycles a subscription should be charged. After the billing cycles are spent, the subscription will be cancelled"
    numberOfBillingCycles: Int
    "The pricing model for a plan"
    pricingModel: PricingModel!
    # "The price to be used in conjunction with the pricing model for a plan"
    price: Float
    "The list of selling points for a plan"
    sellingPoints: [String]
    # used for alianza productPlanID
    # should look at other options for storing this
    "external plan id (alianza)"
    standAlone: Boolean
    externalPlanId: ID
    childPlanIds: [ID]
    active: Boolean
    recommended: Boolean
  }

  input UpdatePlanInput {
    "The name for a plan"
    name: String
    "The description for a plan"
    description: String
    "Services that make up the plan"
    serviceIds: [ID]
    "The uploaded image for a plan"
    image: Upload
    "Specify how frequently customer is billed. To bill a customer every 6 months, enter 6"
    billingCyclePeriod: Int
    "The billing frequency unit in which a customer is billed"
    billingCycleUnit: BillingCycleUnit
    "Number of billing cycles a subscription should be charged. After the billing cycles are spent, the subscription will be cancelled"
    numberOfBillingCycles: Int
    "The pricing model for a plan"
    pricingModel: PricingModel
    # "The price to be used in conjunction with the pricing model for a plan"
    price: Float
    "The list of selling points for a plan"
    sellingPoints: [String]
    "Unique identifier of an organization for a plan"
    organizationIds: [ID]
    # used for alianza productPlanID
    # should look at other options for storing this
    "external plan id (alianza)"
    standAlone: Boolean
    externalPlanId: ID
    childPlanIds: [ID]
    active: Boolean
    recommended: Boolean
  }

  input LoginInput {
    email: Email!
    password: Password!
    mfaCode: String
  }

  input AddressInput {
    "Unique identifier for an address"
    id: ID
    "The first line for an address"
    address1: String!
    "The second line for an address"
    address2: String
    "The city for an address"
    city: String!
    "The state for an address"
    state: String!
    "The zip code for an address"
    zip: String!
    "The country code for an address"
    country: String
    "The latitude for an address"
    lat: Float
    "The longitude for an address"
    lon: Float
    "The census tract for an address"
    censusTract: String
    "The method for matching this address to the census"
    censusMatch: CensusMatch
    "Address county"
    county: String
    "Address province"
    province: String
  }

  input OrganizationInput {
    id: ID
    "The name for an organization"
    name: String
    "The logo for an organization"
    logo: Upload
    "The mark for an organization"
    mark: Upload
    "The qr code for an organization"
    qrCode: Upload
    "The phone number for an organization"
    phoneNumber: String
    "Business address for an organization"
    businessAddress: AddressInput
    "The unique identifier for the parent organization"
    parentOrganizationId: ID
    "The org wide tax rate"
    taxRate: Float
    "inclusive/exclusive"
    taxType: String
    "manual/integration"
    taxMethod: String
    "Description"
    description: String
    "Used as part of Subscriber account IDs"
    organizationCodes: [OrganizationCodeInput]
    "enable alerts via email"
    isEmailAlertsEnabled: Boolean
    sssConfig: SssConfigInput
    defaultSubOrgId: ID
    resolverPermissions: String
    enableProvisioning: Boolean
    defaultMapViewId: ID
    paymentsConfig: PaymentSetupInput
    financeEmail: String
    fundingEnabled: Boolean
    socialMedia: SocialMediaInput
    "TEMP: this flag should not be editable from the frontend once stripe saas signup flow completed"
    saasSubscribed: Boolean
    explore: Boolean
    hasSignedTos: Boolean
    acpEnabled: Boolean
  }

  input OrganizationFundingConfig {
    preEnrollmentApplicationId: ID
  }

  input SocialMediaInput{
    id: ID
    facebookUrl: String
    linkedinUrl: String
    twitterUrl: String
    instagramUrl: String
    googleUrl: String
  }

  input SubscriptionInput {
    "The unique identifier of a user for a subscription"
    userId: ID!
    "The unique identifiers for plans for a subscription"
    planIds: [ID]
    "The unique identifiers for addons for a subscription"
    addonIds: [ID]
    "The date which a subscription starts (defaults to now)"
    subscriptionStartDate: Date
    "The date which a subscription ends"
    subscriptionEndDate: Date
    "Service Status, defaults to active"
    serviceStatus: ServiceStatus
    "The status a subscription, defaults to active"
    status: SubscriptionStatus
    "The service address for a subscription"
    serviceAddress: AddressInput
    "Next billing due date"
    nextDueDate: Date
    contract: ContractInput
    autopay: Boolean
    "Array of discount that are applied to the subscription"
    subscriptionDiscounts: [SubscriptionDiscountInput]
    "Tower that wireless service is connected to"
    towerId: ID
    "Subscription active"
    active: Boolean
    equipment: [UpdateEquipmentInput]
  }

  """
  SubscriptionDiscountInput type
    - Attaches discounts to a subscription. If the discount is applied to a specific
    plan, include the plan ID. If the plan ID is not included the discount will be applied
    to the invoice total.
  """
  input SubscriptionDiscountInput {
    discountId: ID!
    planId: ID
    addonId: ID
  }

  input ContractInput {
    "The date which a contract is started"
    startDate: Date
    "The date which a contract is ended"
    endDate: Date
  }

  input CreateFinancialTransactionInput {
    "Unique identifier for a financial transaction"
    id: ID
    "Unique identifier for the external transaction of a financial transaction"
    externalTransactionId: ID
    "Secret for the payment intent of a financial transaction"
    paymentIntentClientSecret: ID
    "Description for a financial transaction"
    description: String
    "Unique identifier of an invoice for a financial transaction"
    invoiceId: ID
    "Type for a financial transaction"
    transactionType: TransactionType
    "Amount sent by financial transaction"
    amount: Float
    "Source ID"
    source: ID
    "Destination ID"
    destination: ID
    "Subscriber ID"
    subscriberId: ID
    "Financial Transaction Status"
    status: String
  }

  type Tax {
    id: ID!
    parentId: ID
    parentType: String
    parentName: String
    taxName: String
    taxAmount: Float
    taxRate: Float
    avalaraServiceType: Int
    avalaraTransactionType: Int
    service: Service
    addon: Addon
    jurisdiction: String
  }

  input TaxInput {
    id: ID
    taxName: String
    taxRate: Float
    addonId: ID,
    serviceId: ID,
    avalaraServiceType: Int
    avalaraTransactionType: Int
  }

  """
  Addon type
  """
  type Addon {
    id: ID!
    image: String
    name: String!
    description: String
    type: BillingType!
    fixedAmount: Float
    percentage: Float
    duration: BillingDuration!
    billingCyclePeriod: Int
    billingCycleUnit: BillingCycleUnit
    numberOfBillingCycles: Int
    organizations: [Organization]
    active: Boolean
    createdAt: Date!
    isFee: Boolean!
    # startDate, endDate and currentlySubscribed are available
    # when Addon is queried as a field in a Subscription object
    startDate: Date
    endDate: Date
    currentlySubscribed: Boolean
    appliedCount: Int
    maxSubscriptionApplications: Int
    avalaraKeyPairs: [AvalaraKeyPairs]
  }

  """
  Addon type
  """
  input CreateAddonInput {
    "Unique identifier of an organization for an addon"
    organizationIds: [ID]
    "Name of an addon"
    name: String!
    "Description of an addon"
    description: String
    "The uploaded image for a plan"
    image: Upload
    "Type of an addon"
    type: BillingType!
    "Fixed Amount price of an addon"
    fixedAmount: Float
    "Percentage of total to charge for an addon"
    percentage: Float
    "Specify the duration to charge this addon (oneTime, forever, limitedPeriod)"
    duration: BillingDuration!
    "The number of billing cycles to charge the subscriber for a limitedPeriod duration addon"
    numberOfBillingCycles: Int
    "Specify how frequently customer is billed. To bill a customer every 6 months, enter 6 with a billingCyclePeriod of month"
    billingCyclePeriod: Int
    "The billing frequency unit in which a customer is billed (day, week, month, year)"
    billingCycleUnit: BillingCycleUnit
    "Is addon activated"
    active: Boolean
    "Denotes if it's a fee"
    isFee: Boolean
    "to create tax if avalara"
    avalaraServiceType: Int
    "to create tax if avalara"
    avalaraTransactionType: Int
    "to create tax if avalara"
    avalaraSalesType: Int
  }

  input UpdateAddonInput {
    "Name of an addon"
    name: String
    "Description of an addon"
    description: String
    "The uploaded image for a plan"
    image: Upload
    "Type of an addon"
    type: BillingType
    "Fixed Amount price of an addon"
    fixedAmount: Float
    "Percentage of total to charge for an addon"
    percentage: Float
    "Specify the duration to charge this addon (oneTime, forever, limitedPeriod)"
    duration: BillingDuration
    "The number of billing cycles to charge the subscriber for a limitedPeriod duration addon"
    numberOfBillingCycles: Int
    "Specify how frequently customer is billed. To bill a customer every 6 months, enter 6 with a billingCyclePeriod of month"
    billingCyclePeriod: Int
    "The billing frequency unit in which a customer is billed (day, week, month, year)"
    billingCycleUnit: BillingCycleUnit
    "Is addon activated"
    active: Boolean
    "Denotes if it's a fee"
    isFee: Boolean
    "Organization ids"
    organizationIds: [ID]
    avalaraSalesType: Int
    avalaraServiceType: Int
    avalaraTransactionType: Int
    taxes: [TaxInput]
  }

  """
  OrganizationPermissionRole enum
  """
  enum OrganizationPermissionRole {
    subscriber
    viewer
    editor
    admin
  }

  """
  OrganizationPermission
  """
  type OrganizationPermission {
    id: ID!
    user: User
    organizationId: ID
    organization: Organization
    role: OrganizationPermissionRole
    permissionRole: PermissionRole
    createdAt: Date
    "Has the user setup their account (Does the user have an accountSetupCode)"
    registered: Boolean
  }

  """
  OrganizationPermission input
  """
  input CreateOrganizationPermissionInput {
    "Unique Identifier for a user for an organization permission"
    userId: ID!
    "Unique Identifier for an organization for an organization permission"
    organizationId: ID!
    "Role for a organization permission"
    role: OrganizationPermissionRole
    "Permission role id"
    permissionRoleId: ID!
  }

  type TwilioMessage {
    body: String
    numSegments: String
    direction: String
    from: String
    to: String
    dateUpdated: Date
    price: String
    errorMessage: String
    uri: String
    accountSid: String
    numMedia: String
    status: String
    messagingServiceSid: String
    sid: String
    dateSent: Date
    dateCreated: Date
    errorCode: String
    priceUnit: String
    apiVersion: String
  }

  type TwilioCall {
    sid: String
    dateCreated: Date
    dateUpdated: Date
    parentCallSid: String
    accountSid: String
    to: String
    toFormatted: String
    from: String
    fromFormatted: String
    phoneNumberSid: String
    status: String
    startTime: Date
    endTime: Date
    duration: String
    price: String
    priceUnit: String
    direction: String
    answeredBy: String
    annotation: String
    apiVersion: String
    forwardedFrom: String
    groupSid: String
    callerName: String
    queueTime: String
    trunkSid: String
    uri: String
  }

  type ContrivedResponse {
    organization: Organization!
    plan: Plan!
    subscription: Subscription!
  }

  """
  Type for dwolla autopay/on-demand auth
  """
  type DwollaAutopayAuth {
    bodyText: String!
    buttonText: String!
    authLink: String!
    success: Boolean!
  }

  input EventFields {
    timestamp: Date
    subscribers: [ID]
    origin: ID
    type: String
    subject: String
    age: String
    name: String
    description: String
  }

  type genericEventData {
    eventId: String
    subscribersInvolved: [ID]
    type: String
    object: String
  }

  type EmailTemplate {
    subject: String!
    body: String!
  }

  type SmsTemplate {
    message: String!
  }

  type Message {
    origin: String
    Sender: ID
    hardTemplateName: String
    recipientIds: [ID]!
    customTemplate: MessageTemplate
    route: String
    variables: String
    savedTemplateId: ID
    organizationId: ID
    savedTemplateName: String
  }

  type SentMessage {
    eventId: String
    subscribersInvolved: [ID]
    type: String
    to: String
    from: String
    subject: String
    html: String
    message: String
    destinationEmail: String
    sentAt: String
  }

  enum ReportType {
    accountsReceivableAging
    auditTrail
    subscribersBilledTimePeriod
    revenueBreakdown
    billingTimePeriod
    subscriberReport
    rdofTag
    cafIITag
    subscribersOnAutopay
    planCountReport
    dailyBillingReport
    outstandingCredits
    subscribersBilledToday
    dollarsBilledToday
    subscribersChurnedToday
    averageSubscriberLife
    voidedBillingEvents
    voidedInvoices
    voidedDiscounts
    revenueReport
    arAgingReport
    revenueByProductReport
    billingTimePeriodEndReport
    autopayReport
    reasonCodesReport
    taxReport
    voidedCreditsReport
    tagsReport
    form477Report
    takeRateByZonesReport
    autopayFailingReport
    signupsBySourceReport
  }

  type AuditEventsResult {
    results: [AuditEvent]
    total: Int
  }

  type AuditEvent {
    id: ID
    resolverName: String
    title: String
    timestamp: Date
    organization: Organization
    description: String
    initiatorUser: User
    modifiedUsers: [User]
    error: String
    sort: String
    variables: String
  }

  union Report =  AuditTrailReport | BillingTimePeriodReport | CreditReport | SubscriberReport | AccountsReceivableAgingReport | PlanCountReport | InvoiceReport | RevenueBreakdownReport | RevenueReport | ArAgingReport | RevenueByProductReport | BillingTimePeriodEndReport | AutopayReport | ReasonCodesReport | TaxReport | VoidedCreditsReport | TagsReport | Form477Report | TakeRateByZonesReport | AutopayFailingReport | SignupsBySourceReport

  type InvoiceReport {
    invoices: InvoicesResult!
  }

  type AuditTrailReport {
    pageInfo: PageInfo
    events: [AuditEvent]!
  }

  type SubscriberReport {
    subscribers: SubscribersResult!
  }

  type CreditReport {
    credits: [Credit]
  }

  type PlanCountReport {
    planCountRecords: [PlanCountRecord]!
  }

  type RevenueBreakdownReport {
    pageInfo: PageInfo
    records: [RevenueBreakdownRecord]!
  }

  type RevenueReport {
    pageInfo: PageInfo
    records: [RevenueReportRecords]!
  }

  type ArAgingReport {
    pageInfo: PageInfo
    hud: ArAgingHUD!
    records: [ArAgingReportRecord]!
  }

  type RevenueByProductReport {
    pageInfo: PageInfo
    records: [RevenueByProductReportRecord]!
  }

  type BillingTimePeriodEndReport {
    pageInfo: PageInfo
    records: [BillingTimePeriodEndReportRecord]!
  }

  type AutopayReport {
    pageInfo: PageInfo
    records: [AutopayReportRecord]!
  }

  type ReasonCodesReport {
    pageInfo: PageInfo
    records: [ReasonCodesReportRecord]!
  }

  type TaxReport {
    pageInfo: PageInfo
    records: [TaxReportRecord]!
  }

  type VoidedCreditsReport {
    pageInfo: PageInfo
    records: [VoidedCreditsReportRecord]!
  }


  type TagsReport {
    pageInfo: PageInfo
    records: [TagsReportRecord]!
  }

  type Form477Report {
    pageInfo: PageInfo
    records: [Form477ReportRecord]!
  }

  type TakeRateByZonesReport {
    pageInfo: PageInfo
    records: [TakeRateByZonesReportRecord]!
  }

  type AutopayFailingReport {
    pageInfo: PageInfo
    records: [AutopayFailingReportRecord]!
  }

  type SignupsBySourceReport {
    pageInfo: PageInfo
    records: [SignupsBySourceReportRecord]!
  }

  type SignupsBySourceReportRecord {
    id: Int
    company: String
    subdivision: String
    subscriberId: Int
    firstName: String
    lastName: String
    address1: String
    address2: String
    city: String
    state: String
    zip: String
    accountId: String
    accountType: String
    accountStatus: String
    portalIndicator: String
    referralSource: String
    dateOfRegistration: Date
  }

  type AutopayFailingReportRecord {
    id: Int
    company: String
    subdivision: String
    accountId: String
    subscriberId: Int
    firstName: String
    lastName: String
    accountType: String
    autopay: String
    paymentStatus: String
    paymentCreatedAt: Date
    paymentUpdatedAt: Date
    transactionType: String
    amount: Float
  }

  type TakeRateByZonesReportRecord {
    id: Int
    subdivision: String
    zoneName: String
    accountType: String
    takeRate: Float
    numSubscribers: Int
    totalPassing: Int
    newCancelled: Int
    newSubscribers: Int
    netSubscribers: Int
  }

  type Form477ReportRecord {
    id: Int
    company: String
    subdivision: String
    tract: String
    technologyOfTransmission: Int
    advertisedDownstreamBandwidth: Float
    advertisedUpstreamBandwidth: Float
    totalConnections: Int
    consumerConnections: Int
  }

  type TaxReportRecord {
    id: Int
    category: String
    jurisdiction: String
    taxName: String
    dueDate: Date
    tax: Float
  }

  type VoidedCreditsReportRecord {
    id: Int
    accountId: String
    userId: Int
    firstName: String
    lastName: String
    city: String
    company: String
    subdivision: String
    accountType: String
    amount: Float
    reason: String
    subreason: String
    note: String
    createdAt: Date
  }

  type RevenueByProductReportRecord {
    id: Int
    company: String
    subdivision: String
    planOrAddon: String
    planOrAddonId: Int
    planOrAddonName: String
    revenue: Float
    count: Int
    additions: Int
    churn: Int
  }

  type BillingTimePeriodEndReportRecord {
    id: Int
    company: String
    subdivision: String
    day: Date
    invoicedSales: Float
    discounts: Float
    netSales: Float
    grossCredits: Float
    netCredits: Float
    grossReceipts: Float
    grossRefunds: Float
    netRefunds: Float
    grossCashFlow: Float
  }

  type AutopayReportRecord {
    id: Int
    autopay: String
    subscribers: Int
    percentOfSubscribers: Float
    totalMrr: Float
    percentOfMrr: Float
  }

  type TagsReportRecord {
    id: Int
    organization: String
    suborganization: String
    firstName: String
    lastName: String
    userId: Int
    mrr: Float
    balance: Float
    accountStatus: String
    customerSince: Date
    accountId: String
    accountType: String
  }

  type ReasonCodesReportRecord {
    id: Int
    company: String
    subdivision: String
    cancelReason: String
    cancelSubreason: String
    subscriptionStartDate: Date
    subscriptionEndDate: Date
    subscriptionDurationDays: Int
    subscriberId: Int
    firstName: String
    lastName: String
    city: String
    accountId: String
    accountType: String
  }

  type ArAgingHUD {
    pastDue1To30Days: Float
    futureDue: Float
    revenuePastDue: Float
    pastDue31To60Days: Float
    pastDue61To90Days: Float
    pastDue90OrMoreDays: Float
  }

  type ArAgingReportRecord {
    id: Int
    userId: Int
    firstName: String
    lastName: String
    city: String
    company: String
    subdivision: String
    accountId: String
    accountType: String
    mrr: Float
    futureDue: Float
    revenuePastDue: Float
    pastDue1To30Days: Float
    pastDue31To60Days: Float
    pastDue61To90Days: Float
    pastDue90OrMoreDays: Float
  }

  type RevenueReportRecords {
    id: Int
    accountId: String
    invoiceId: Int
    userId: Int
    firstName: String
    lastName: String
    city: String
    company: String
    subdivision: String
    accountType: String
    invoiceStatus: String
    invoiceDate: Date
    dueDate: Date
    billingPeriodEnd: Date
    paidDate: Date
    internet: Float
    voipPrice: Float
    meshPrice: Float
    serviceInstallPrice: Float
    emergencyServiceFeesPrice: Float
    universalServiceFundPrice: Float
    addonsAppPrice: Float
    addonsUpgradesPrice: Float
    internetAmountDue: Float
    voipAmountDue: Float
    meshAmountDue: Float
    serviceInstallAmountDue: Float
    emergencyServiceFeesAmountDue: Float
    universalServiceFundAmountDue: Float
    addonsAppAmountDue: Float
    addonsUpgradesAmountDue: Float
    tax: Float
    total: Float
  }

  type RevenueBreakdownRecord {
    id: ID
    plan: Plan
    subscribersCount: Float
    revenue: Float
    churn: Float
    unearnedRevenue: Float
  }


  type PlanCountRecord {
    plan: Plan
    todaysSubscriberCount: Int
    monthlySubscriberCount: Int
    yearlySubscriberCount: Int
    todaysRevenue: Float
    monthlyRevenue: Float
    yearlyRevenue: Float
  }

  type DailyBillingReport {
    dailyBillingRecords: [DailyBillingRecord]!
  }

  type DailyBillingRecord {
    date: Date!
    invoicedSales: Float!
    discounts: Float!
    netSales: Float!
    grossCredits: Float!
    netCredits: Float!
    grossReciepts: Float!
    grossRefunds: Float!
    netRefunds: Float!
    grossCashflow: Float!
  }

  type BillingTimePeriodReport {
    records: [BillingTimePeriodRecord]!
  }

  type BillingTimePeriodRecord {
    id: ID!
    date: Date!
    invoicedSales: Float!
    discounts: Float!
    netSales: Float!
    grossCredits: Float!
    netCredits: Float!
    grossReciepts: Float!
    grossRefunds: Float!
    netRefunds: Float!
    grossCashflow: Float!
  }

  type AccountsReceivableAgingReport {
    accountsReceivableAgingRecords: [AccountsReceivableAgingRecord]!
    hud: AccountsReceivableAgingHUD!
    pageInfo: PageInfo
  }

  type AccountsReceivableAgingRecord {
    id: ID
    subscriber: User
    currentAmountDue: Float
    pastDue30Days: Float
    pastDue60Days: Float
    pastDue90Days: Float
    totalDue: Float
  }

  type AccountsReceivableAgingHUD {
    totalDue: Float
    currentDue: Float
    revenuePastDue: Float
    pastDue30Days: Float
    pastDue60Days: Float
    pastDue90Days: Float
  }

  type SuspendBilling {
    id: ID!
    startJobId: ID
    endJobId: ID
    startCronString: String
    endCronString: String
    startDate: Date
    endDate: Date
    suspendBilling: Boolean
    createdAt: Date
    reasonCode: ReasonCode
    subReasonCode: ReasonCode
  }

  input SuspendBillingInput {
    userId: ID!
    suspend: Boolean
    startDate: Date
    endDate: Date
    reasonCodeId: ID
    subReasonCodeId: ID
  }

  # MessageTemplate

  input MessagePathTemplateInput {
    "email subject text, notification subject text"
    subject: String
    "email: email address, sms: phone number, mail: JSON of address"
    from: String
    "Used for mail"
    fromCompany: String
    to: String
    "mail html"
    file: String
    "email html"
    html: String
    "potscard front html"
    front: String
    "postcard back html"
    back: String
    "sms text, notificatioon text"
    body: String
    replyTo: String
  }

  input CreateMessageTemplateInput {
    name: String!
    description: String!
    "JSON of variable types. Supported types : [ string, plan, service, discount, credit ]. Ex. { 'mainPlan': 'plan', 'greeting': 'string', 'promotedDiscount': 'discount }"
    variableTypes: String!
    emailTemplate: MessagePathTemplateInput
    smsTemplate: MessagePathTemplateInput
    mailTemplate: MessagePathTemplateInput
    postcardTemplate: MessagePathTemplateInput
    notificationTemplate: MessagePathTemplateInput
    organizationId: ID!
    supportedRoutes: String!
    type: MessageType!
  }

  type MessagePathTemplate {
    subject: String
    from: String
    to: String
    html: String
    body: String
    file: String
    front: String
    back: String
    replyTo: String
  }

  type MessageTemplate {
    id: ID!
    name: String!
    description: String!
    "JSON of variable types. Supported types : [ string, plan, service, discount, credit ]. Ex. { 'mainPlan': 'plan', 'greeting': 'string', 'promotedDiscount': 'discount }"
    variableTypes: String!
    emailTemplate: MessagePathTemplate
    smsTemplate: MessagePathTemplate
    mailTemplate: MessagePathTemplate
    notificationTemplate: MessagePathTemplate
    postcardTemplate: MessagePathTemplate
    organizationId: ID
    supportedRoutes: String!
    "Used for subscription groups"
    type: MessageType
  }

  enum MessageType {
    system
    marketing
    billing
    outage
  }

  type MessageRouteResult {
    route: MessageRoute!
    sms: [User]
    email: [User]
    mail: [User]
    postcard: [User]
    outstanding: [User]
  }

  type MessageEvent {
    id: String
    organizationId: ID
    initiatorId: ID
    recipients: [MessageEventsUser]
    route: String
    hardTemplateId: String
    templateData: String
    subject: String
    fromEmail: String
    fromNumber: String
    sentFrom: String
    textBody: String
    messageTemplateId: String
    hardTemplateName: String
    createdAt: Date
    updatedAt: Date
    initiator: User
    routeType: String
    routeInfo: String
    deliveredRate: Int
    routeCount: RouteCount
    totalErrors: Int
    emailTotals: MessageEventResultsTotals
    smsTotals: SmsTotalsResults
    errorFlag: Boolean
    smsErrorCount: Int
    emailErrorCount: Int
  }

  type RouteCount {
    email: Int
    sms: Int
  }

  type SmsTotalsResults{
    queued: Int
    failed: Int
    sent: Int
    delivered: Int
    undelivered: Int
  }

  type MessageEventResultsTotals {
    processed: Int
    dropped: Int
    delivered: Int
    deferred: Int
    bounce: Int
    open: Int
    click: Int
    spamreport: Int
    unsubscribe: Int
    group_unsubscribe: Int
    group_resubscribe: Int
  }

  type MessageEventData {
    recipientsData: [MessageEventsUser]!
    sgEvents: MessageEventResultsTotals!
  }

  # Lob types
  # Lob fields documentation: https://docs.lob.com/#us_verifications_object

  type VerifyAddressResponse {
    id: ID
    primaryLine: String
    secondaryLine: String
    urbanization: String
    lastLine: String
    deliverability: String
    deliverabilityAnalysis: DeliverabilityAnalysis
    components: AddressComponents
    lobConfidenceScore: LobConfidenceScore
  }

  type AddressComponents {
    primaryNumber: String
    streetPredirection: String
    streetName: String
    streetSuffix: String
    streetPostdirection: String
    secondaryDesignator: String
    secondaryNumber: String
    pmbDesignator: String
    pmbNumber: String
    extraSecondaryDesignator: String
    extraSecondaryNumber: String
    city: String
    state: String
    zipCode: String
    zipCodePlus4: String
    zipCodeType: String
    deliveryPointBarcode: String
    addressType: String
    recordType: String
    defaultBuildingAddress: Boolean
    county: String
    countyFips: String
    carrierRoute: String
    carrierRouteType: String
    latitude: Float
    longitude: Float
  }

  type DeliverabilityAnalysis {
    dpvConfirmation: String
    dpvCmra: String
    dpvVacant: String
    dpvActive: String
    dpvFootnotes: [String]
    ewsMatch: Boolean
    lacsIndicator: String
    lacsReturnCode: String
    suiteReturnCode: String
  }

  type LobConfidenceScore {
    score: Float
    level: String
  }

  input BulkSelection {
    filters: [FilterInput]
    query: String
    excludeIds: [ID]
  }

  enum Node {
    getSubscribers
    getPlans
    getAddons
    getServices
    getDiscounts
    getCredits
    getInvoices
    getPayments
    getEquipment
    getLines
    getTowers
  }

  enum GrowFilterType {
    shape
    range
    general
  }

  enum GrowDrawType {
    polygon
    line
    point
  }

  type GrowSegment {
    id: ID
    name: String!
    growFilters: [GrowFilter!]!
    createdAt: Date!
  }

  type GrowFilter {
    id: ID!
    filterType: GrowFilterType!
    upload: Boolean
    coordinates: [String]
    drawType: GrowDrawType
    radius: Float
    unit: String
    filterField: String
    lowerBound: Float
    upperBound: Float
    value: [String]
    condition: String
    createdAt: Date!
  }

  input GrowFilterInput {
    filterType: GrowFilterType!
    upload: Boolean
    coordinates: [String]
    drawType: GrowDrawType
    radius: Float
    unit: String
    filterField: String
    lowerBound: Float
    upperBound: Float
    value: [String]
    condition: String
  }

  input GrowSegmentInput {
    organizationId: ID!
    name: String!
    growFilters: [GrowFilterInput!]!
  }

  type GetAccountSetupCodeResponse {
    success: Boolean!
    message: String
    accountSetupCode: String
  }

  type Notification {
    recipientId: ID!
    subject: String
    body: String
    organizationId: ID
    sentAt: Date
    seen: Boolean
    seenAt: Date
    id: String
    type: String
    link: String
  }

  type AvalaraSettings {
    bscl: Int
    svcl: Int
    fclt: Boolean
    frch: Boolean
    reg: Boolean
    avalaraUsername: String
    avalaraPassword: String
  }

  input AvalaraSettingsInput {
    avalaraUsername: String
    avalaraPassword: String
    clientId: ID
    clientProfileId: ID
    bscl: Int
    svcl: Int
    fclt: Boolean
    frch: Boolean
    reg: Boolean
    exemptions: [AvalaraExemptions]
  }

  type AvalaraSubscriberSettings {
    id: ID
    incorporated: Boolean
    lifeline: Boolean
  }

  input AvalaraSubscriberSettingsInput {
    incorporated: Boolean
    lifeline: Boolean
  }

  input AvalaraExemptions {
    id: ID
    userId: ID
    name: String
    category: Int
    country: String
    county: String
    region: String
    city: String
    postalCode: String
    key: Int
    domain: Int
    scope: [String]
    taxType: String
  }

  type AvalaraExemption {
    id: ID
    userId: ID
    pcode: Int
    name: String
    category: Int
    scope: Int
    domain: Int
    avalaraSettingsId: ID
    taxType: String
  }

  type verifyOrgAddressResponse {
    verified: Boolean!
    organizationId: ID
    userId: ID
  }

  type ReferralSource {
    id: ID!
    name: String!
    color: String
    description: String
    organization: Organization!
    subReferralSources: [ReferralSource]
    createdAt: Date
    updatedAt: Date
  }

  """
  Input for referral source
  """
  input ReferralSourceInput {
    name: String!
    color: String
    description: String
    parentReferralSource: ID
  }

  type ReferralSourceResult {
    total: Int!
    results: [ReferralSource]!
    ids: [ID]
    pageInfo: PageInfo
  }

  input AddPermissionRoleInput {
    organizationId: ID!
    role: String!
    inherits: [ID]
    mfaRequired: Boolean
    defaultBossPath: String
    allowedBossRouteGroups: [String]
  }

  input UpdatePermissionRoleInput {
    organizationId: ID
    role: String
    inherits: [ID]
    mfaRequired: Boolean
    defaultBossPath: String
    allowedBossRouteGroups: [String]
    removeAllowedBossRouteGroups: [String]
  }

  type PermissionRole {
    id: ID!
    role: String!
    inherits: [PermissionRole]
    global: Boolean
    mfaRequired: Boolean
    defaultBossPath: String
    allowedBossRouteGroups: [String]
    updatedAt: Date
    createdAt: Date
  }

  enum ResolverGroup {
    Analyze
    Integrations
    Notes
    Plans
    Services
    Addons
    Discounts
    Credits
    Tags
    Messaging
    Equipment
    Taxes
    Networking
    Subscriptions
    Subscribers
    Billing
    Organization
    System
    Segments
    Reporting
    Funding
  }

  input ResolverPermissionsInput {
    resolverName: String!
    roles: [Int]!
  }

  type ResolverPermission {
    resolverName: String
    resolverDescription: String
    roles: [PermissionRole]
    editable: Boolean
    group: ResolverGroup
  }

  enum CalixUploadType{
    alarm
    ont
    subscriber
  }

  type NetworkAlarm {
    id: ID!
    networkNode: NetworkNode!
    legacySystemId: ID
    facility: CalixAlarmFacility
    objectId: String,
    secondaryObject: String,
    secondaryObjectId: String,
    location: String
    alarmCode: Int
    alarmCodeDescription: String
    description: String
    severity: Int
    severityDescription: String
    action: Boolean
    serviceAffecting: Boolean
    suppressed: Boolean
    device: ID
    time: Date
  }

  type Location {
    lat: Float
    lon: Float
  }

  type RstData {
    id: ID!
    latency: Float
    jitter: Float
    packetLoss: Float
    upload: Float
    download: Float
    ipAddress: String
    ispName: String
    location: Location
    geolocationEnabled: Boolean
    browserName: String
    browserVersion: String
    deviceType: String
    deviceVendor: String
    deviceModel: String
    engineName: String
    engineVersion: String
    osName: String
    osVersion: String
    cpu: String
    createdAt: Date
    sort: String
  }

  type RstDataResult {
    results: [RstData]!
    total: Int!
  }

  input LocationInput {
    lat: Float
    lon: Float
  }

  input RstDataInput {
    latency: Float
    jitter: Float
    packetLoss: Float
    upload: Float
    download: Float
    ipAddress: String
    ispName: String
    location: LocationInput
    geolocationEnabled: Boolean
    browserName: String
    browserVersion: String
    deviceType: String
    deviceVendor: String
    deviceModel: String
    engineName: String
    engineVersion: String
    osName: String
    osVersion: String
    cpu: String
  }

  enum State {
    AL
    AK
    AS
    AZ
    AR
    CA
    CO
    CT
    DE
    DC
    FL
    GA
    GU
    HI
    ID
    IL
    IN
    IA
    KS
    KY
    LA
    ME
    MD
    MA
    MI
    MN
    MS
    MO
    MT
    NE
    NV
    NH
    NJ
    NM
    NY
    NC
    ND
    MP
    OH
    OK
    OR
    PA
    PR
    RI
    SC
    SD
    TN
    TX
    UT
    VT
    VA
    VI
    WA
    WV
    WI
    WY
  }

  enum ApplicantType {
    localIsp
    ruralCoop
    utility
    localGovernment
    broadbandConsultant
    investor
    other
  }

  enum FundingEstimate {
    hundredThounsandToOneMillion
    oneMillionToFiveMillion
    fiveMillionToTwentyFiveMillion
    twentyFiveMillionToOneHundredMillion
    oneHundredMillionPlus
    dontKnow
  }

  enum FundingType {
    dilutive
    nonDilutive
    forwardReceivables
    alternative
  }

  enum GrantApplicationSource {
    DIRECT_API
    BBM
  }

  input GrantApplicationInput {
    id: ID
    name: String
    email: String
    phone: String
    title: String
    states: [State]
    applicantType: ApplicantType
    website: String
    fccIspId: String
    organizationName: String
    fundingSoughtEstimate: FundingEstimate
    matchFunding: Boolean
    interestedInFunding: Boolean
    fundingTypes: [FundingType]
    hearAbout: String
    someWhereElseName: String
    howMuchExactly: String
    source: GrantApplicationSource
    rejected: Boolean
  }

  type GrantApplication {
    id: ID
    name: String
    email: String
    phone: String
    title: String
    states: [State]
    applicantType: ApplicantType
    website: String
    fccIspId: String
    organizationName: String
    fundingSoughtEstimate: FundingEstimate
    matchFunding: Boolean
    interestedInFunding: Boolean
    fundingTypes: [FundingType]
    hearAbout: String
    someWhereElseName: String
    howMuchExactly: String
    fundingApplication: FundingApplication
    createdAt: Date
    rejected: Boolean
  }

  type ProvisioningResponse {
    success: Boolean
    eventType: String
    deviceId: String
  }

  type FundingApplication {
    id: ID
    organization: Organization
    initiatorUser: User
    preEnrollmentApplication: GrantApplication
    authorizedRepresentative: Boolean
    submissionType: String
    federalAgencyName: String
    federalDomesticAssistanceNumber: String
    fundingOpportunityNumber: String
    competitionIdNumber: String
    applicationTitle: String
    congressionalDistrictsApplicant: [String]
    congressionalDistrictsProgram: [String]
    proposedProjectStartDate: Date
    proposedProjectEndDate: Date
    estimatedFederalFunding: Float
    estimatedApplicantFunding: Float
    estimatedStateFunding: Float
    estimatedLocalFunding: Float
    estimatedOtherFunding: Float
    estimatedProgramIncomeFunding: Float
    estimatedFundingTotal: Float
    applicationSubjectToStateReviewUnderExecutiveOrder12372: String
    applicationType: String
    applicantType: String
    applicantFederalDeliquent: Boolean
    attestation: String
    dateReceived: Date
    applicantId: String
    federalEntityId: String
    federalAwardId: String
    legalName: String
    einTnNumber: String
    organizationDuns: String
    address: Address
    organizationalUnit: String
    contactPoint: Boolean
    contactPrefix: String
    contactFirstName: String
    contactLastName: String
    contactSuffix: String
    contactTitle: String
    contactOrganizationAffiliation: String
    contactPhone: String
    contactFax: String
    contactEmail: String
    zones: [Zone]
    onboardingComplete: Boolean
    communityBeenEngaged: String
    necessaryPermitsNeeded: String
    existingNetwork: String
    physicalLimitations: String
    staffingAndTraining: String
    costEstimates: String
    middleMileInfra: String
    debtEquityFinancing: [String]
    organizationProjectFinancing: String
    communitySupportLetter: Boolean
    gaugeDemandSurveys: String
    publishOnIsp: Boolean
    competitors: String
    differentiateFromCompetition: String
    anticipatedGrantsSourcesInput: String
    debtEquityFinancingInput: String
    businessTime: String
    statesServed: [State]
    subscribersNumber: SubscribersNumber
    websitePricePage: String
    serviceOffer: [ServiceOffer]
    importantState: State
    fileNames:[String]
    subscriberBillingSoftware: String
    manageNetworkSoftware: String
    manageNetworkHardware: String
    monitorNetworkSoftware: String
    subscriberServicePortal: Boolean
    interestedSubscriberServicePortal: String
    entityTypesInput: String
    broadbandConstructionTypesInput: String
    networkConstructedTypesInput: String
    matchCapitalBefore: Boolean
    interestedMatchProduct: Boolean
    interestedAdvisor: Boolean
    potentialFinancingPartners: Boolean
    startConversation: Boolean
    financingPartnersType: String
    majorityOrSmallPartners: String
    handsOnPartners: String
    subscriberSignupSite: String
    arpuInput: String
    organizationFoundedYear: Date
    broadbandOperationsExperience: String
    entityTypes: [String]
    bssOssUpgrade: Boolean
    subscribersNumberRange: [String]
    noHomesPassedRange: [String]
    tenyrsNoHomesPassedRange: [String]
    takeRateRange: [String]
    tenyrsTakeRateRange: [String]
    arpuInputRange: [String]
    churnRateRange: [String]
    familiarMatchCapital: Boolean
    matchFundingRange: [String]
    matchCapitalRange: [String]
    workWithAdvisor: Boolean
    workingAdvisor: String
    matchFundingPartnersRange: [String]
    matchCapitalPartnersHelp: Boolean
    fundingSoughtEstimateRange: [String]
    fundingWonRange: [String]
    anticipatedGrantsSources: [String]
    donationsAmountRange: [String]
    donationsSources: String
    publicPrivatePartnership: Boolean
    companiesPartnersNames: String
    totalProjectCostRange: [String]
    geographicalCoverage: String
    projectSummary: String
    broadbandConstructionTypes: [String]
    networkConstructedTypes: [String]
    majorInfraDescription: String
    aerialInstallationRange: [String]
    undergroundInstallationRange: [String]
    evidenceEconomicallyDisadvantagedArea: String
    provideBroadbandImprovements: Boolean
    promoteJobGrowthDescription: String
    marketingPlan: String
    projectScability: String
    infraAndServicesDescription: String
    startedOutreach: Boolean
    environmentalIdentified: Boolean
    haveAttestation: Boolean
    projectCostExplain: String
    subscriberBillingSoftwareMulti: [String]
    manageNetworkHardwareMulti: [String]
    monitorNetworkSoftwareMulti: [String]
    createdAt: Date
    updatedAt: Date
  }

  input FundingApplicationInput {
    organization: OrganizationInput
    preEnrollmentApplication: GrantApplicationInput
    authorizedRepresentative: Boolean
    submissionType: String
    federalAgencyName: String
    federalDomesticAssistanceNumber: String
    fundingOpportunityNumber: String
    competitionIdNumber: String
    applicationTitle: String
    congressionalDistrictsApplicant: [String]
    congressionalDistrictsProgram: [String]
    proposedProjectStartDate: Date
    proposedProjectEndDate: Date
    estimatedFederalFunding: Float
    estimatedApplicantFunding: Float
    estimatedStateFunding: Float
    estimatedLocalFunding: Float
    estimatedOtherFunding: Float
    estimatedProgramIncomeFunding: Float
    estimatedFundingTotal: Float
    applicationSubjectToStateReviewUnderExecutiveOrder12372: String
    applicationType: String
    applicantType: String
    applicantFederalDeliquent: Boolean
    attestation: String
    dateReceived: Date
    applicantId: String
    federalEntityId: String
    federalAwardId: String
    legalName: String
    einTnNumber: String
    organizationDuns: String
    address: AddressInput
    organizationalUnit: String
    contactPoint: Boolean
    contactPrefix: String
    contactFirstName: String
    contactLastName: String
    contactSuffix: String
    contactTitle: String
    contactOrganizationAffiliation: String
    contactPhone: String
    contactFax: String
    contactEmail: String
    zoneIds: [ID]
    removeZoneIds: [ID]
    onboardingComplete: Boolean
    communityBeenEngaged: String
    necessaryPermitsNeeded: String
    existingNetwork: String
    physicalLimitations: String
    staffingAndTraining: String
    costEstimates: String
    middleMileInfra: String
    debtEquityFinancing: [String]
    organizationProjectFinancing: String
    communitySupportLetter: Boolean
    gaugeDemandSurveys: String
    publishOnIsp: Boolean
    competitors: String
    differentiateFromCompetition: String
    anticipatedGrantsSourcesInput: String
    debtEquityFinancingInput: String
    businessTime: String
    statesServed: [State]
    subscribersNumber: SubscribersNumber
    websitePricePage: String
    serviceOffer: [ServiceOffer]
    importantState: State
    subscriberBillingSoftware: String
    manageNetworkSoftware: String
    manageNetworkHardware: String
    monitorNetworkSoftware: String
    subscriberServicePortal: Boolean
    interestedSubscriberServicePortal: String
    entityTypesInput: String
    broadbandConstructionTypesInput: String
    networkConstructedTypesInput: String
    matchCapitalBefore: Boolean
    interestedMatchProduct: Boolean
    interestedAdvisor: Boolean
    potentialFinancingPartners: Boolean
    startConversation: Boolean
    financingPartnersType: String
    majorityOrSmallPartners: String
    handsOnPartners: String
    subscriberSignupSite: String
    arpuInput: String
    organizationFoundedYear: Date
    broadbandOperationsExperience: String
    entityTypes: [String]
    bssOssUpgrade: Boolean
    subscribersNumberRange: [String]
    noHomesPassedRange: [String]
    tenyrsNoHomesPassedRange: [String]
    takeRateRange: [String]
    tenyrsTakeRateRange: [String]
    arpuInputRange: [String]
    churnRateRange: [String]
    familiarMatchCapital: Boolean
    matchFundingRange: [String]
    matchCapitalRange: [String]
    workWithAdvisor: Boolean
    workingAdvisor: String
    matchFundingPartnersRange: [String]
    matchCapitalPartnersHelp: Boolean
    fundingSoughtEstimateRange: [String]
    fundingWonRange: [String]
    anticipatedGrantsSources: [String]
    donationsAmountRange: [String]
    donationsSources: String
    publicPrivatePartnership: Boolean
    companiesPartnersNames: String
    totalProjectCostRange: [String]
    geographicalCoverage: String
    projectSummary: String
    broadbandConstructionTypes: [String]
    networkConstructedTypes: [String]
    majorInfraDescription: String
    aerialInstallationRange: [String]
    undergroundInstallationRange: [String]
    evidenceEconomicallyDisadvantagedArea: String
    provideBroadbandImprovements: Boolean
    promoteJobGrowthDescription: String
    marketingPlan: String
    projectScability: String
    infraAndServicesDescription: String
    startedOutreach: Boolean
    environmentalIdentified: Boolean
    haveAttestation: Boolean
    projectCostExplain: String
    subscriberBillingSoftwareMulti: [String]
    manageNetworkHardwareMulti: [String]
    monitorNetworkSoftwareMulti: [String]
  }

  enum SubscribersNumber {
    lessThanOneThounsand
    oneThounsandToTenThounsand
    tenThounsandToOneHundredThounsand
    oneHundredThounsandToOneMillion
    moreThanOneMillion
  }

  enum ServiceOffer {
    Internet
    VoIP
    Telehealth
    Other
  }

  input E7TrapAlarm {
    "Id for the OLT which sounded the alarm"
    networkref: ID!
    "Object which sounded the alarm"
    e7TrapObjectClass: CalixAlarmFacility
    "Id for the Object which sounded the alarm"
    objectId: String
    "Secondary object of the alarm"
    e7TrapSecObjectClass: String
    "Id for the secondary object of the alarm"
    secondaryObjectId: String
    e7TrapAlarmType: String
    e7TrapAlarmStatus: String!
    e7TrapAlarmSeverityLevel: String!
    e7TrapTimeStamp: String
    e7TrapServiceAffecting: String!
    e7TrapAlarmLocationInfo: String
    e7TrapText: String!
    e7TrapTime: Date
    subscriberId: String
  }

  enum CalixAlarmFacility {
    ont
    ontGigEth
    ethGePort
    card
    olt
    ponPort
  }

  input ZoneInput {
    name: String
    coordinates: [[[[Float]]]]
    tagIds: [ID]
    removeTagIds: [ID]
    removeGeometry: Boolean
  }

  type Zone {
    id: ID!
    organization: Organization
    name: String
    geom: GeoJSONMultiPolygon
    tags: [Tag]
    createdAt: Date
    updatedAt: Date
  }

  type SetupMfaResult {
    mfaQr: String
    mfaSecret: String
  }

  enum PDFType {
    enterpriseSaasCustomerAgreement
    mutualNda
  }

  input MutualNDAInput {
    companyName: String
    companyAddress: String
    customerName: String
    customerTitle: String
  }

  input CustomerAgreementInput {
    companyName: String
    companyAddress: String
    customerName: String
    customerTitle: String
    customerEmail: String
  }

  type CreateSaasSubscriptionResponse {
    subscriptionId: ID
    clientSecret: String
    error: String
  }

  """
   Represents an application event
   eventCreated is stored as epoch in seconds
  """
  type BossEvent {
    id: ID!
    eventType: BossEventType!
    externalEventId: ID
    eventCreated: Int!
    data: String
  }

  input BossEventInput {
    eventType: BossEventType!
    externalEventId: ID
    eventCreated: Int!
    data: String
  }

  enum BossEventType {
    PAYMENT_SUCCEEDED
    PAYMENT_FAILED
    PAYMENT_CANCELLED
    PAYMENT_REFUND_SUCCEEDED
    PAYMENT_REFUND_FAILED
  }

  input FundingOrganizationInviteInput {
    email: Email!
    permissionRoleId: ID!
    firstName: String
    lastName: String
  }

  type Query {
    getNotifications(userId: ID!): [Notification]!
    getMessageRouteResults(userIds: [ID]!, routes: [MessageRoute]!): [MessageRouteResult]!
    getMessageTemplates(organizationId: ID!): [MessageTemplate]!
    getMessageTemplate(messageTemplateId: ID!): MessageTemplate
    getMessageEvents(organizationId: ID!): MessageEventsResult!
    getMessageEventsOverview(organizationId: ID!): MessageEventsOverviewResult!
    getMessageDashboardOverview(organizationId: ID!, startDate: Date, endDate: Date): MessageDashboardOverviewResult!
    getMessageEventData(messageId: ID): MessageEventData!
    getMessageEventDataForRecipient(messageId: String!, recipientId: ID!): [SendgridEvent]
    getAlianzaConfig: AlianzaConfigResponse!
    getAlianzaPhoneNumbers(zip: String): [AlianzaPhoneNumber]!
    getAlianzaPlans: [AlianzaPlan]!
    getUser(userId: ID!): User!
    getUserByAccountId(accountId: ID!): User!
    getUserByAccountSetupCode(accountSetupCode: ID!): UserAuth!
    getUserByEmail(email: Email!): User!
    getUserByMagicLinkCode(code: ID!): User!
    getNotes(userId: ID!, pagination: Pagination): NotesResult!
    getNote(noteId: ID!): Note
    getOrganization(organizationId: ID!): Organization!
    getPlan(planId: ID!): Plan!
    getPlans(organizationId: ID!, pagination: Pagination, cursorPagination: CursorPagination, filters: [FilterInput], sort: SortInput, selectedPlans: [ID], query: String): PlansResult!
    getService(serviceId: ID!): Service!
    getServices(organizationId: ID!, pagination: Pagination, cursorPagination: CursorPagination, query: String, sort: SortInput, filters: [FilterInput]): ServicesResult!
    getAddons(organizationId: ID!, pagination: Pagination, cursorPagination: CursorPagination, filters: [FilterInput], sort: SortInput, query: String): AddonsResult!
    getReasonCodes(organizationId: ID!, reasonCodeType: ReasonCodeType, cursorPagination: CursorPagination, filters: [FilterInput], sort: SortInput, query: String): ReasonCodeResult!
    getReferralSources(organizationId: ID!, cursorPagination: CursorPagination, filters: [FilterInput], sort: SortInput, query: String): ReferralSourceResult!
    getAddon(addonId: ID!): Addon!
    getSubscription(subscriptionId: ID!): Subscription!
    getSubscriptions(organizationId: ID!, pagination: Pagination, sort: SortInput ): [Subscription]!
    getSetupLinkByMAC(macAddress: String!): GenericResponse!
    getSubscribers(organizationId: ID, pagination: Pagination, filters: [FilterInput], sort: SortInput, query: String, cursorPagination: CursorPagination, pageKey: String, dataLoaderFilters: [DataLoaderFilterInput]): SubscribersResult!
    getSubscribersHUD(organizationId: ID!, filters: [FilterInput], sort: SortInput, query: String): SubscribersHUD!
    getSubscriberLocations(organizationId: ID!): [User]!
    getSubscriberBilling(userId: ID!, pagination: Pagination, query: String): SubscriberInvoicesResult!
    getOrganizationPermission(organizationPermissionId: ID!): OrganizationPermission!
    getOrganizationPermissions(organizationId: ID!, filter: FilterInput): [OrganizationPermission]!
    getTwilioMessages(dateSentAfter: Date, dateSentBefore: Date, limit: Int): [TwilioMessage]!
    getTwilioCalls(dateSentAfter: Date, dateSentBefore: Date, limit: Int): [TwilioCall]!
    getPaymentMethods(userId: ID, organizationId: ID): [PaymentMethod]!
    myOrganizations: [Organization]!
    mySubscriptions: [Subscription]!
    getDiscount(discountId: ID!): Discount!
    getDiscounts(organizationId: ID, organizationIds: [ID], pagination: Pagination, cursorPagination: CursorPagination, filters: [FilterInput], sort: SortInput, query: String): DiscountsResult
    getAvailableDiscountsForSubscription(organizationId: ID!, planIds: [ID], addonIds: [ID]): [Discount]
    getFinancialTransaction(invoiceId: ID!): GenericResponse!
    getDwollaAutopayAuth: DwollaAutopayAuth!
    retrievePaymentMethod(paymentId: ID!): PaymentMethod!
    retrieveTransaction(transactionId: ID!): FinancialTransaction!
    prevalidateVoIP(susbcriptionId: ID!, phoneNumber: String!, port: PortInfo): VoIPPrevalidateResponse!
    getFinancialTransactions(organizationId: ID!, pagination: Pagination, cursorPagination: CursorPagination, filters: [FilterInput], sort: SortInput, query: String): FinancialTransactionsResult!
    getProcessorTransaction(paymentId: ID!): FinancialTransaction!
    getDwollaBeneficialOwner(externalId: ID!): [DwollaBeneficialOwner]!
    getSegments(organizationId: ID!): [Segment]
    getCredit(creditId: ID!): Credit!
    getCredits(userId: ID, organizationId: ID, organizationIds: [ID], pagination: Pagination, cursorPagination: CursorPagination, filters: [FilterInput], sort: SortInput, query: String): CreditsResult!
    getDwollaBalance(externalId: ID!): Balance!
    getTags(organizationId: ID!, cursorPagination: CursorPagination, sort: SortInput, query: String): TagsResult!
    getTag(tagId: ID!): Tag!
    getInvoices(organizationId: ID, organizationIds: [ID], userId: ID, pagination: Pagination, cursorPagination: CursorPagination, filters: [FilterInput], sort: SortInput, query: String, todaysInvoices: Boolean): InvoicesResult!
    getInvoice(invoiceId: ID): SubscriberInvoice!
    verifyMfaCode(userId: ID!, mfaCode: String!): GenericResponse!
    verifyAddress(address: AddressInput!): VerifyAddressResponse!
    addressAutocomplete(address: AddressInput!): [Address]!
    getEquipment(organizationId: ID!, pagination: Pagination, cursorPagination: CursorPagination, filters: [FilterInput], sort: SortInput, query: String): EquipmentResult!
    getTowers(organizationId: ID!, pagination: Pagination, cursorPagination: CursorPagination, filters: [FilterInput], sort: SortInput query: String): TowersResult!
    getLines(organizationId: ID!, pagination: Pagination, cursorPagination: CursorPagination, filters: [FilterInput] sort: SortInput query: String): LinesResult!
    getFilledMessageTemplate(messageTemplateId: ID!, variables: String!): MessageTemplate
    getIP: GenericResponse!
    getGrowSegments(organizationId: ID!): [GrowSegment]!
    getAccountSetupCode(userId: ID!, address: AddressInput!, organizationId: ID!): GetAccountSetupCodeResponse!
    getSubscribersPayments(organizationId: ID!, initiatorInput: String!): SubscribersResult!
    generateReport(organizationIds: [ID!]!, reportType: ReportType!, subscriberFilters: [FilterInput], cursorPagination: CursorPagination, startDate: Date, endDate: Date, initiatorUserId: ID): Report!
    getIPPayReports(getIPPayReportsInput: GetIPPayReportsInput!): GenericResponse!
    getAuditEvents(organizationIds: [ID!]!, subscriberId: ID, title: String, initiatorUserId: ID, errored: Boolean, limit: Int, startDate: Date, endDate: Date, searchAfter: String, fetchModifiedUsers: Boolean): AuditEventsResult!
    getOrgAddressAutocomplete(organizationId: ID!, query: String): [Address]!
    verifyOrgAddress(email: Email, phoneNumber: String, organizationEmail: Email, address: AddressInput!): verifyOrgAddressResponse!
    resendVerificationEmail: GenericResponse
    resendVerificationEmailScheduled: GenericResponse
    getTaxes(organizationId: ID): [Tax]
    getTax(taxId: ID): Tax
    getAnalyzeSubscribersMapData(organizationId: ID!, body: String, filters: [FilterInput]): String
    getPermissionRoles(organizationId: ID!): [PermissionRole]!
    getPermissionRole(permissionRoleId: ID!): PermissionRole!
    getResolverPermissions(organizationId: ID!): [ResolverPermission]!
    getNetworkNodes(organizationId: ID!, daysAgo: Int): NetworkNodeResult!
    getAvalaraExemptions(organizationId: ID!): [AvalaraExemption]!
    calculateTaxes(planIds: [ID], addonIds: [ID], userId: ID!): GenericResponse!
    rstGetResult(id: ID!): RstData!
    rstGetResults(ip: String!, searchAfter: String, limit: Int): RstDataResult!
    getZonesLegacy: String
    getInstitutions: String
    getFundingApplication(id: ID!): FundingApplication!
    getFundingApplications(organizationId: ID!): [FundingApplication]!
    getCensusBlocks(isAggregateQuery: Boolean, body: String, filters: [FilterInput]): String
    getZone(id: ID!): Zone!
    getZones(organizationId: ID!, query: String): [Zone]!
    getPaymentProfiles(paymentUserId: ID!): [PaymentProfile]
    getPaymentUserAccounts(paymentUserId: ID!): [PaymentUserAccount]
    getNetworkAlarmFieldValues(organizationId: ID, organizationIds: [ID], field: String!): [String]!
    getAllowedBossRouteGroups: [RouteGroup]!
    getFundingSourcesToken(customerId: ID!, testMode: Boolean): String!
    getGrantApplications(filters: [FilterInput], sort: SortInput, query: String, cursorPagination: CursorPagination): GrantApplicationResult
    getGrantApplication(id: ID!): GrantApplication!

    # Scheduler queries
    createInvoicesScheduled(tenantId: ID!): GenericResponse!
    createPaymentScheduled(createPaymentInput: CreatePaymentInput!): GenericResponse!
    chargeSubscriberScheduled(userId: ID!): GenericResponse!
    suspendBillingScheduled(userId: ID!, suspend: Boolean!, reason: String): GenericResponse!
    sendMessageScheduled(eventTitle: String, eventDescription: String, scheduledMessageEventId: String, oneTime: Boolean, message: MessageInput): GenericResponse!
    activateSubscriptionsScheduled(userId: ID!): GenericResponse!
  }

  type Mutation {
    readMosaicFilesDaily(filename: String): GenericResponse
    importCalixCms(upload: Upload, uploadType: CalixUploadType): GenericResponse
    importCalixTrapAlarm(alarm: E7TrapAlarm!): GenericResponse
    seenNotification(notificationId: String!): GenericResponse
    addInvoiceNoteByUserIds(userIds: [ID]!, note: NoteInput!, regenerateInvoices: Boolean): [Note]!
    addInvoiceNotes(invoiceIds: [ID]!, notes: [NoteInput]!, regenerateInvoices: Boolean): [Note]!
    removeInvoiceNote(invoiceId: ID!, noteId: ID!, regenerateInvoice: Boolean): GenericResponse!
    updateMessageTemplate(messageTemplateId: ID!, updateMessageTemplate: CreateMessageTemplateInput!): MessageTemplate!
    createMessageTemplate(messageTemplate: CreateMessageTemplateInput!): MessageTemplate!
    # addAlianzaPlan(alianzaInput: AlianzaInput!): GenericResponse!
    updateAlianzaConfig(config: AlianzaConfigInput!): GenericResponse!
    sendMessage(message: MessageInput!, eventTitle: String, eventDescription: String bulkSelection: BulkSelection, isTest: Boolean): GenericResponse!
    userAuth(login: LoginInput!): UserAuth!
    downloadInvoice(invoiceId: ID!): String!
    createUser(user: CreateUserInput!, paymentsConfig: PaymentsConfig, test: Boolean): UserAuth!
    updateNote(noteId: ID!, note: NoteInput!): Note!
    addNote(userId: ID!, note: NoteInput!): Note!
    resetPassword(forgotPasswordCode: String!, newPassword: String!, mfaCode: String): GenericResponse!
    forgotPassword(email: Email!, sendResetEmail: Boolean): ForgotPasswordResponse!
    updateUser(userIds: [ID!]!, updateUser: UpdateUserInput!, bulkSelection: BulkSelection): GenericResponse!
    deleteUser(userId: ID!): GenericResponse!
    createSubscriber(user: CreateUserInput!, paymentsConfig: PaymentsConfig): UserAuth!
    createPlan(plan: CreatePlanInput): Plan!
    updatePlan(planIds: [ID!]!, updatePlan: UpdatePlanInput!): [Plan]!
    deletePlan(planId: ID!): GenericResponse!
    createService(service: CreateServiceInput!, taxes: [TaxInput]): Service!
    updateService(serviceIds: [ID!]!, updateService: UpdateServiceInput!): [Service]!
    deleteService(serviceId: ID!): GenericResponse!
    createAddon(addon: CreateAddonInput, taxes: [TaxInput]): Addon!
    updateAddon(addonIds: [ID!]!, updateAddon: UpdateAddonInput!): [Addon]!
    deleteAddon(addonId: ID!): GenericResponse!
    deleteSubscription(subscriptionId: ID!): GenericResponse!
    createSubscription(subscription: SubscriptionInput!, activateImmediately: Boolean, test: Boolean): Subscription!
    updateSubscription(subscriptionId: ID!, updateSubscription: SubscriptionInput, schedule: Boolean, suspendBilling: SuspendBillingInput): Subscription!
    cancelSubscription(subscriptionId: ID!, cancelReasonCodeId: ID, cancelSubReasonCodeId: ID): GenericResponse!
    uploadData(files: [Upload]!, location: Bucket = customer_uploads): UploadDataResponse!
    createOrganization(organization: OrganizationInput!, fundingConfig: OrganizationFundingConfig): Organization!
    updateOrganization(organizationIds: [ID!]!, updateOrganization: OrganizationInput!): [Organization]!
    deleteOrganization(organizationId: ID!): GenericResponse!
    createFinancialTransaction(financialTransactions: [CreateFinancialTransactionInput]!): [FinancialTransaction]!
    updateFinancialTransaction(financialTransactions: [CreateFinancialTransactionInput]!): [FinancialTransaction]!
    completeAccountSetup(accountSetupCode: String!, user: CreateUserInput!, paymentsConfig: PaymentsConfig): UserAuth!
    addOrganizationPermission(organizationPermission: CreateOrganizationPermissionInput!): OrganizationPermission!
    addOrganizationPermissionByEmail(organizationId: ID!, email: Email!, permissionRoleId: ID!, firstName: String, lastName: String): OrganizationPermission!
    deleteOrganizationPermission(organizationPermissionId: ID!): GenericResponse!
    updateOrganizationPermission(organizationPermissionId: ID!, role: OrganizationPermissionRole, permissionRoleId: ID!): OrganizationPermission!
    createInvoice(userId: ID!, addons: [CreateAddonInput], test: Boolean): SubscriberInvoice!
    regenerateCurrentInvoice(userId: ID!): GenericResponse!
    sendInvoice(userId: ID!, invoiceId: ID): GenericResponse!
    createPayment(createPaymentInput: CreatePaymentInput!): GenericResponse!
    addPaymentMethod(customerId: ID, paymentId: ID, userId: ID, verification: Verification, accountInput: AddPaymentMethodAccountInput, organizationId: ID, paymentMethod: PaymentMethodInput): String!
    verifyPaymentMethod(paymentId: ID, customerId: ID, verificationStage: String!, firstAmount: Float, secondAmount: Float): GenericResponse!
    updatePaymentMethod(paymentId: ID!, updateCardInput: UpdateCardInput, updateBankAccountInput: UpdateBankAccountInput): GenericResponse!
    deletePaymentMethod(paymentId: ID!): GenericResponse!
    completeAdditionalServiceSetup(externalServiceData: ExternalServiceDataInput!, subscriptionId: ID!): GenericResponse!
    cancelPayment(paymentId: ID!): GenericResponse!
    sendWelcomeEmail(userId: ID!, email: Email, organizationId: ID): GenericResponse!
    createDiscount(discount: CreateDiscountInput!): Discount!
    updateDiscount(discountIds: [ID!]!, updateDiscount: UpdateDiscountInput!): [Discount]!
    deleteDiscount(discountId: ID!): GenericResponse!
    createPaymentAccount(paymentsConfig: PaymentsConfig, organizationId: ID!): GenericResponse!
    deleteDwollaBeneficialOwner(externalId: ID!): GenericResponse!
    createDwollaBeneficialOwner(beneficialOwners: [BeneficialOwner]!, externalId: ID!): GenericResponse!
    createSegment(segment: CreateSegmentInput!): Segment!
    updateSegment(segmentId: ID!, updateSegment: CreateSegmentInput!): Segment!
    deleteSegment(segmentId: ID!): GenericResponse!
    deleteCredit(creditId: ID!): GenericResponse!
    voidCredit(creditIds: [ID!]!): [Credit]!
    createCredit(userIds: [ID], credit: CreateCreditInput!, bulkSelection: BulkSelection): GenericResponse!
    createReasonCodes(organizationId: ID!, reasonCodes: [ReasonCodeInput]!): [ReasonCode]!
    deleteReasonCodes(reasonCodeIds: [ID]!): GenericResponse!
    updateReasonCode(reasonCodeId: ID!, updateReasonCode: ReasonCodeInput!): ReasonCode!
    createReferralSources(organizationId: ID!, referralSources: [ReferralSourceInput]!): [ReferralSource]!
    deleteReferralSources(referralSourceIds: [ID]!): GenericResponse!
    updateReferralSource(referralSourceId: ID!, updateReferralSource: ReferralSourceInput!): ReferralSource!
    addTags(userIds: [ID], tagIds: [ID]!, bulkSelection: BulkSelection): GenericResponse!
    removeTags(userIds: [ID]!, tagIds: [ID]!): GenericResponse!
    createTag(organizationId: ID!, tag: TagInput!): Tag!
    updateTag(tagId: ID!, updateTag: TagInput!): Tag!
    deleteTag(tagId: ID!): GenericResponse!
    deleteInvoice(invoiceId: ID!): GenericResponse!
    updateInvoice(invoiceIds: [ID!]!, updateInvoice: UpdateInvoiceInput!): [SubscriberInvoice]!
    createRefund(financialTransactionIds: [ID]!): GenericResponse!
    suspendBilling(suspendBilling: SuspendBillingInput!): GenericResponse!
    resumeBilling(suspendBillingId: ID!): GenericResponse!
    deleteMessageTemplate(messageTemplateId: ID!): GenericResponse!
    createChildSubscriber(existingSubscriberId: ID, newSubscriber: CreateUserInput, parentSubscriptionId: ID!, planIds: [ID], addonIds: [ID], residentSubscriptionDiscount: Float, test: Boolean): User!
    removeChildSubscription(subscriptionId: ID!): GenericResponse!
    createIPPayToken(token: ID!): GenericResponse!
    createLine(line: CreateLineInput): Line!
    deleteLine(lineId: ID!): GenericResponse!
    createTower(tower: CreateTowerInput!): Tower!
    deleteTower(towerId: ID!): GenericResponse!
    createEquipment(equipment: CreateEquipmentInput!): Equipment!
    updateEquipment(equipmentId: ID!, equipment: CreateEquipmentInput!): Equipment!
    deleteEquipment(equipmentId: ID!): GenericResponse!
    createCombinedInvoicesPdf(invoiceIds: [ID]!): String!
    createTodaysCombinedInvoicesPdf(organizationId: ID!): String!
    createCsv(node: Node, filters: [FilterInput], sort: SortInput, query: String): Boolean
    createCsvReports(reportType: ReportType, organizationIds: [ID], subscriberFilters: [FilterInput], startDate: Date, endDate: Date): Boolean
    saveGrowSegment(segment: GrowSegmentInput!): GrowSegment!
    deleteGrowSegment(segmentId: ID!): GenericResponse!
    createReturnCheck(createReturnCheckInput: [CreateReturnCheckInput]!): GenericResponse!
    createAvalaraSettings(organizationId: ID!, avalaraSettingsInput: AvalaraSettingsInput!): GenericResponse!
    updateTaxes(taxes: [TaxInput]): [Tax]
    deleteTaxes(taxIds: [ID]): [Tax]
    addPermissionRole(permissionRole: AddPermissionRoleInput!): GenericResponse!
    deletePermissionRole(permissionRoleId: ID!): GenericResponse!
    updatePermissionRole(permissionRoleId: ID!, permissionRole: UpdatePermissionRoleInput!): GenericResponse!
    createTax(tax: TaxInput): GenericResponse
    updateResolverPermissions(organizationId: ID!, resolverPermissions: [ResolverPermissionsInput]!): GenericResponse!
    setDefaultMapView(organizationId: ID!, mapView: MapViewInput!): GenericResponse!
    rstAddData(data: RstDataInput!): GenericResponse!
    updateAvalaraExemptions(exemptions: [AvalaraExemptions]!): GenericResponse!
    createAvalaraExemptions(exemptions: [AvalaraExemptions]!, organizationId: ID!): GenericResponse!
    deleteAvalaraExemptions(exemptionIds: [ID]!): GenericResponse!
    createGrantApplication(application: GrantApplicationInput!): GenericResponse!
    updateGrantApplication(grantApplicationId: ID!, grantApplication: GrantApplicationInput!): GrantApplication!
    addTagsToPlans(planIds: [ID!]!, tagIds: [ID!]!): GenericResponse!
    removeTagsFromPlans(planIds: [ID!]!, tagIds: [ID!]!): GenericResponse!
    unsubscribeUserNotifications(code: String!): GenericResponse!
    createFundingApplication(application: FundingApplicationInput!): FundingApplication!
    updateFundingApplication(id: ID!, application: FundingApplicationInput!): FundingApplication!
    deleteFundingApplication(id: ID!): GenericResponse!
    createZone(zone: ZoneInput!): Zone!
    updateZone(id: ID!, zone: ZoneInput!): Zone!
    deleteZone(id: ID!): GenericResponse!
    sendMagicLink(email: String!): GenericResponse!
    magicLinkAuth(code: String!, mfaCode: String): UserAuth!
    setupMfa(userId: ID!): SetupMfaResult!
    uploadFundingFiles(files: [Upload]!, fundingApplicationId: ID!): UploadDataResponse!
    chargeSubscriber(amount: Float!, paymentProfileId: ID!): FinancialTransaction!
    createSignedPdf(pdfType: PDFType, mutualNda: MutualNDAInput, customerAgreement: CustomerAgreementInput): GenericResponse!
    createSaasSubscription: CreateSaasSubscriptionResponse!
    createPaymentProfile(paymentProfile: PaymentProfileInput!): PaymentProfile!
    onboardSubscriberPayment(userId: ID!, paymentProcessor: PaymentProcessor!, ipAddress: String): PaymentUserAccount!
    onboardOrganizationPayment(organizationId: ID!, onboardOrganizationInput: OnboardOrganizationInput!, paymentProcessor: PaymentProcessor!): PaymentUserAccount!
    voidPayment(financialTransactionId: ID!): FinancialTransaction!
    verifyBankAccount(paymentProfileId: ID!, firstAmount: Int!, secondAmount: Int!): PaymentProfile!
    handlePaymentEvents(bossEvent: BossEventInput!): GenericResponse!
    updatePaymentProfile(paymentProfileUpdate: PaymentProfileUpdate!): PaymentProfile!
    disablePaymentProfile(paymentProfileId: ID!): PaymentProfile!
    resendAccountSetup(userId: ID!): GenericResponse!
    createFundingOrganization(preEnrollmentApplicationId: ID!, organization: OrganizationInput!, initialInvites: [FundingOrganizationInviteInput]): Organization!
    resendFundingInvite(organizationId: ID!, userId: ID!): GenericResponse!
    deleteGrantApplication(id: ID!): GenericResponse!
    submitAcpApplication(userId: ID!, application: AcpApplication!): AcpApplicationResponse!
    sendFundingWelcomeEmail(name: String!, email: String!, organizationName: String!): GenericResponse!
  }
`
