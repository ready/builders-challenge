// import { StripeBusinessTypeCode, BossEventTypeCode } from './enums'
import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql'
// import StripeBusinessType = StripeBusinessTypeCode
// import BossEventType = BossEventTypeCode

enum StripeBusinessType {
  COMPANY = 'company',
  GOVERNMENT_ENTITY = 'government_entity',
  INDIVIDUAL = 'individual',
  NON_PROFIT = 'non_profit'
}

enum BossEventType {
  PAYMENT_SUCCEEDED = 'payment.succeeded',
  PAYMENT_FAILED = 'payment.failed',
  PAYMENT_CANCELLED = 'payment.cancelled',
  PAYMENT_REFUND_SUCCEEDED = 'payment.refund.succeeded',
  PAYMENT_REFUND_FAILED = 'payment.refund.failed'
}

export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
export type EnumResolverSignature<T, AllowedValues = any> = { [key in keyof T]?: AllowedValues }
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> }
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  BigInt: any
  Date: any
  Email: any
  GeoJSONFeature: any
  GeoJSONFeatureCollection: any
  GeoJSONGeometryCollection: any
  GeoJSONLineString: any
  GeoJSONMultiLineString: any
  GeoJSONMultiPoint: any
  GeoJSONMultiPolygon: any
  GeoJSONPoint: any
  GeoJSONPolygon: any
  Password: any
  StringOrInt: any
  Upload: any
}

export enum AccountStatus {
  /** Account has cancelled service */
  cancelled = 'cancelled',
  /** Account is ineligible for service or not yet economically viable */
  ineligible = 'ineligible',
  /** Largest pool, top of the sales funnel */
  lead = 'lead',
  /** Previous Ready Leads that have been imported and are now occupants */
  occupants = 'occupants',
  /** Leads who have been contacted */
  opportunity = 'opportunity',
  /** Account is a subscriber with service not yet activated */
  pending = 'pending',
  /** Opportunities who have replied with interest or used self-signup */
  prospect = 'prospect',
  /** Account has active service */
  subscriber = 'subscriber',
  /** Account has active service that cannot be disconnected */
  subscriberDND = 'subscriberDND',
  /** Account has suspended service */
  suspended = 'suspended'
}

/** Account Type can be either commercial, residential or MDU */
export enum AccountType {
  /** A subscription for a multi-dwelling unit */
  MDU = 'MDU',
  /** A subscription for a commercial subscriber */
  commercial = 'commercial',
  /** A subscription for a government subscriber */
  government = 'government',
  /** A subscription for a residential subscriber */
  residential = 'residential'
}

export interface AccountsReceivableAgingHud {
  __typename?: 'AccountsReceivableAgingHUD'
  currentDue?: Maybe<Scalars['Float']>
  pastDue30Days?: Maybe<Scalars['Float']>
  pastDue60Days?: Maybe<Scalars['Float']>
  pastDue90Days?: Maybe<Scalars['Float']>
  revenuePastDue?: Maybe<Scalars['Float']>
  totalDue?: Maybe<Scalars['Float']>
}

export interface AccountsReceivableAgingRecord {
  __typename?: 'AccountsReceivableAgingRecord'
  currentAmountDue?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['ID']>
  pastDue30Days?: Maybe<Scalars['Float']>
  pastDue60Days?: Maybe<Scalars['Float']>
  pastDue90Days?: Maybe<Scalars['Float']>
  subscriber?: Maybe<User>
  totalDue?: Maybe<Scalars['Float']>
}

export interface AccountsReceivableAgingReport {
  __typename?: 'AccountsReceivableAgingReport'
  accountsReceivableAgingRecords: Array<Maybe<AccountsReceivableAgingRecord>>
  hud: AccountsReceivableAgingHud
  pageInfo?: Maybe<PageInfo>
}

export interface AcpApplication {
  bqp?: Maybe<BenefitQualifyingPerson>
  consentId: Scalars['Boolean']
  dob: Scalars['Date']
  eligibilityProgramCode: Scalars['String']
  identificationNumber: Scalars['String']
  identificationType: IdentificationType
  isBqp: Scalars['Boolean']
  nationalVerifierId?: Maybe<Scalars['String']>
}

export interface AcpApplicationResponse {
  __typename?: 'AcpApplicationResponse'
  errors: Array<Maybe<Scalars['String']>>
  message?: Maybe<Scalars['String']>
  redirectLink: Scalars['String']
}

export interface AcpConfig {
  __typename?: 'AcpConfig'
  acpId: Scalars['String']
  acpKey: Scalars['String']
  id: Scalars['ID']
  organization: Organization
  studyAreaCodes?: Maybe<AcpStudyAreaCode[]>
}

export interface AcpConfigCreate {
  acpId: Scalars['String']
  acpKey: Scalars['String']
  organizationId: Scalars['ID']
  studyAreaCodes?: Maybe<AcpStudyAreaCodeInput[]>
}

export interface AcpConfigUpdate {
  acpId?: Maybe<Scalars['String']>
  acpKey?: Maybe<Scalars['String']>
  id: Scalars['ID']
  studyAreaCodes?: Maybe<AcpStudyAreaCodeInput[]>
}

export enum AcpStatus {
  ACCEPTED = 'ACCEPTED',
  NONE = 'NONE',
  PENDING = 'PENDING',
  REJECTED = 'REJECTED',
  UNVERIFIED = 'UNVERIFIED'
}

export interface AcpStudyAreaCode {
  __typename?: 'AcpStudyAreaCode'
  code: Scalars['String']
  zip: Scalars['String']
}

export interface AcpStudyAreaCodeInput {
  code: Scalars['String']
  zip: Scalars['String']
}

export interface AddPaymentMethodAccountInput {
  dwollaAccountInput?: Maybe<DwollaAccountInput>
  processor: Processor
}

export interface AddPermissionRoleInput {
  allowedBossRouteGroups?: Maybe<Array<Maybe<Scalars['String']>>>
  defaultBossPath?: Maybe<Scalars['String']>
  inherits?: Maybe<Array<Maybe<Scalars['ID']>>>
  mfaRequired?: Maybe<Scalars['Boolean']>
  organizationId: Scalars['ID']
  role: Scalars['String']
}

/** Addon type */
export interface Addon {
  __typename?: 'Addon'
  active?: Maybe<Scalars['Boolean']>
  appliedCount?: Maybe<Scalars['Int']>
  avalaraKeyPairs?: Maybe<Array<Maybe<AvalaraKeyPairs>>>
  billingCyclePeriod?: Maybe<Scalars['Int']>
  billingCycleUnit?: Maybe<BillingCycleUnit>
  createdAt: Scalars['Date']
  currentlySubscribed?: Maybe<Scalars['Boolean']>
  description?: Maybe<Scalars['String']>
  duration: BillingDuration
  endDate?: Maybe<Scalars['Date']>
  fixedAmount?: Maybe<Scalars['Float']>
  id: Scalars['ID']
  image?: Maybe<Scalars['String']>
  isFee: Scalars['Boolean']
  maxSubscriptionApplications?: Maybe<Scalars['Int']>
  name: Scalars['String']
  numberOfBillingCycles?: Maybe<Scalars['Int']>
  organizations?: Maybe<Array<Maybe<Organization>>>
  percentage?: Maybe<Scalars['Float']>
  startDate?: Maybe<Scalars['Date']>
  type: BillingType
}

export interface AddonsResult {
  __typename?: 'AddonsResult'
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>
  pageInfo?: Maybe<PageInfo>
  results: Array<Maybe<Addon>>
  total: Scalars['Int']
}

/** Address */
export interface Address {
  __typename?: 'Address'
  address1: Scalars['String']
  address2?: Maybe<Scalars['String']>
  buildingType?: Maybe<AddressBuildingType>
  censusMatch?: Maybe<CensusMatch>
  censusTract?: Maybe<Scalars['String']>
  city: Scalars['String']
  country?: Maybe<Scalars['String']>
  county?: Maybe<Scalars['String']>
  demographics?: Maybe<Demographics>
  hexCode?: Maybe<Scalars['String']>
  householdIncome?: Maybe<Scalars['Float']>
  id: Scalars['ID']
  lastAlarmedAt?: Maybe<Scalars['Date']>
  lat?: Maybe<Scalars['Float']>
  lon?: Maybe<Scalars['Float']>
  numberOfAdultsInHousehold?: Maybe<Scalars['Int']>
  numberOfChildrenInHousehold?: Maybe<Scalars['Int']>
  numberOfPersonsInHousehold?: Maybe<Scalars['Int']>
  ownOrRent?: Maybe<Scalars['String']>
  province?: Maybe<Scalars['String']>
  serviceStatus?: Maybe<ServiceStatus>
  state: Scalars['String']
  zip: Scalars['String']
}

export interface AddressComponents {
  __typename?: 'AddressComponents'
  addressType?: Maybe<Scalars['String']>
  carrierRoute?: Maybe<Scalars['String']>
  carrierRouteType?: Maybe<Scalars['String']>
  city?: Maybe<Scalars['String']>
  county?: Maybe<Scalars['String']>
  countyFips?: Maybe<Scalars['String']>
  defaultBuildingAddress?: Maybe<Scalars['Boolean']>
  deliveryPointBarcode?: Maybe<Scalars['String']>
  extraSecondaryDesignator?: Maybe<Scalars['String']>
  extraSecondaryNumber?: Maybe<Scalars['String']>
  latitude?: Maybe<Scalars['Float']>
  longitude?: Maybe<Scalars['Float']>
  pmbDesignator?: Maybe<Scalars['String']>
  pmbNumber?: Maybe<Scalars['String']>
  primaryNumber?: Maybe<Scalars['String']>
  recordType?: Maybe<Scalars['String']>
  secondaryDesignator?: Maybe<Scalars['String']>
  secondaryNumber?: Maybe<Scalars['String']>
  state?: Maybe<Scalars['String']>
  streetName?: Maybe<Scalars['String']>
  streetPostdirection?: Maybe<Scalars['String']>
  streetPredirection?: Maybe<Scalars['String']>
  streetSuffix?: Maybe<Scalars['String']>
  zipCode?: Maybe<Scalars['String']>
  zipCodePlus4?: Maybe<Scalars['String']>
  zipCodeType?: Maybe<Scalars['String']>
}

export interface AddressInput {
  /** The first line for an address */
  address1: Scalars['String']
  /** The second line for an address */
  address2?: Maybe<Scalars['String']>
  /** The method for matching this address to the census */
  censusMatch?: Maybe<CensusMatch>
  /** The census tract for an address */
  censusTract?: Maybe<Scalars['String']>
  /** The city for an address */
  city: Scalars['String']
  /** The country code for an address */
  country?: Maybe<Scalars['String']>
  /** Address county */
  county?: Maybe<Scalars['String']>
  /** Unique identifier for an address */
  id?: Maybe<Scalars['ID']>
  /** The latitude for an address */
  lat?: Maybe<Scalars['Float']>
  /** The longitude for an address */
  lon?: Maybe<Scalars['Float']>
  /** Address province */
  province?: Maybe<Scalars['String']>
  /** The state for an address */
  state: Scalars['String']
  /** The zip code for an address */
  zip: Scalars['String']
}

export interface AlianzaAddress {
  __typename?: 'AlianzaAddress'
  businessName?: Maybe<Scalars['String']>
  city?: Maybe<Scalars['String']>
  country?: Maybe<Scalars['String']>
  firstName?: Maybe<Scalars['String']>
  hexCode?: Maybe<Scalars['String']>
  lastName?: Maybe<Scalars['String']>
  postDirectional?: Maybe<Scalars['String']>
  postalCode?: Maybe<Scalars['String']>
  preDirectional?: Maybe<Scalars['String']>
  secondaryLocationDescription?: Maybe<Scalars['String']>
  state?: Maybe<Scalars['String']>
  streetName?: Maybe<Scalars['String']>
  streetNumber?: Maybe<Scalars['String']>
  streetNumberSuffix?: Maybe<Scalars['String']>
  streetSuffix?: Maybe<Scalars['String']>
  unit?: Maybe<Scalars['String']>
}

export interface AlianzaConfig {
  __typename?: 'AlianzaConfig'
  callHandlingSettings?: Maybe<CallHandlingSettings>
  callScreeningSettings?: Maybe<CallScreeningSettings>
  callerIdName?: Maybe<Scalars['String']>
  carrierStatus?: Maybe<Scalars['String']>
  directoryListingType?: Maybe<DirectoryListingType>
  phoneNumber?: Maybe<Scalars['String']>
  voicemailToEmailAddresses?: Maybe<Array<Maybe<Scalars['String']>>>
  voicemailToEmailEnabled?: Maybe<Scalars['Boolean']>
}

export interface AlianzaConfigInput {
  callHandlingSettings?: Maybe<CallHandlingSettingsInput>
  callScreeningSettings?: Maybe<CallScreeningSettingsInput>
  callerIdName?: Maybe<Scalars['String']>
  directoryListingType?: Maybe<DirectoryListingType>
  voicemailToEmailAddresses?: Maybe<Array<Maybe<Scalars['String']>>>
  voicemailToEmailEnabled?: Maybe<Scalars['Boolean']>
}

export interface AlianzaConfigResponse {
  __typename?: 'AlianzaConfigResponse'
  config?: Maybe<AlianzaConfig>
  message?: Maybe<Scalars['String']>
  success: Scalars['Boolean']
}

export interface AlianzaData {
  __typename?: 'AlianzaData'
  accountId: Scalars['String']
  deviceId?: Maybe<Scalars['String']>
  endUserId: Scalars['String']
  endUserUsername: Scalars['String']
  externalServiceType: ExternalService
  phoneNumber: Scalars['String']
  voicemailBoxId: Scalars['String']
}

export interface AlianzaDataInput {
  phoneNumber: Scalars['String']
  planIds?: Maybe<Array<Scalars['ID']>>
  portInfo?: Maybe<PortInfo>
}

export interface AlianzaPhoneNumber {
  __typename?: 'AlianzaPhoneNumber'
  Country?: Maybe<Scalars['String']>
  accountId?: Maybe<Scalars['String']>
  carrierId?: Maybe<Scalars['String']>
  claimTicketId?: Maybe<Scalars['String']>
  cooldownExpireDate?: Maybe<Scalars['Date']>
  cooldownRecoveredDate?: Maybe<Scalars['Date']>
  distance?: Maybe<Scalars['Int']>
  functionType?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['ID']>
  matchesZip?: Maybe<Scalars['Boolean']>
  partitionId?: Maybe<Scalars['String']>
  phoneNumber: Scalars['String']
  prefix?: Maybe<Scalars['String']>
  rateCenter?: Maybe<Scalars['String']>
  rateCenterReorderName?: Maybe<Scalars['String']>
  state?: Maybe<Scalars['String']>
}

export interface AlianzaPlan {
  __typename?: 'AlianzaPlan'
  allow411?: Maybe<Scalars['Boolean']>
  allowOperator?: Maybe<Scalars['Boolean']>
  allowOverage?: Maybe<Scalars['Boolean']>
  allowUnlimitedLocal?: Maybe<Scalars['Boolean']>
  callRateFor411?: Maybe<Scalars['Int']>
  callRateForOperator?: Maybe<Scalars['Int']>
  defaultPlan?: Maybe<Scalars['Boolean']>
  id?: Maybe<Scalars['ID']>
  name?: Maybe<Scalars['String']>
  partitionId?: Maybe<Scalars['String']>
  planMinutes?: Maybe<Scalars['Int']>
  preventForwarding?: Maybe<Scalars['Boolean']>
  rateIntraPartitionAsFree?: Maybe<Scalars['Boolean']>
  rateTypeFor411?: Maybe<AlianzaRateType>
  rateTypeForOperator?: Maybe<AlianzaRateType>
  unlimitedDisplay?: Maybe<Scalars['Boolean']>
}

export enum AlianzaRateType {
  PER_CALL = 'PER_CALL',
  PER_MINUTE = 'PER_MINUTE'
}

export enum ApplicantType {
  broadbandConsultant = 'broadbandConsultant',
  investor = 'investor',
  localGovernment = 'localGovernment',
  localIsp = 'localIsp',
  other = 'other',
  ruralCoop = 'ruralCoop',
  utility = 'utility'
}

export interface ArAgingHud {
  __typename?: 'ArAgingHUD'
  futureDue?: Maybe<Scalars['Float']>
  pastDue1To30Days?: Maybe<Scalars['Float']>
  pastDue31To60Days?: Maybe<Scalars['Float']>
  pastDue61To90Days?: Maybe<Scalars['Float']>
  pastDue90OrMoreDays?: Maybe<Scalars['Float']>
  revenuePastDue?: Maybe<Scalars['Float']>
}

export interface ArAgingReport {
  __typename?: 'ArAgingReport'
  hud: ArAgingHud
  pageInfo?: Maybe<PageInfo>
  records: Array<Maybe<ArAgingReportRecord>>
}

export interface ArAgingReportRecord {
  __typename?: 'ArAgingReportRecord'
  accountId?: Maybe<Scalars['String']>
  accountType?: Maybe<Scalars['String']>
  city?: Maybe<Scalars['String']>
  company?: Maybe<Scalars['String']>
  firstName?: Maybe<Scalars['String']>
  futureDue?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Int']>
  lastName?: Maybe<Scalars['String']>
  mrr?: Maybe<Scalars['Float']>
  pastDue1To30Days?: Maybe<Scalars['Float']>
  pastDue31To60Days?: Maybe<Scalars['Float']>
  pastDue61To90Days?: Maybe<Scalars['Float']>
  pastDue90OrMoreDays?: Maybe<Scalars['Float']>
  revenuePastDue?: Maybe<Scalars['Float']>
  subdivision?: Maybe<Scalars['String']>
  userId?: Maybe<Scalars['Int']>
}

export enum AttachmentType {
  cementPlant = 'cementPlant',
  commRoof = 'commRoof',
  commTower = 'commTower',
  grainLeg = 'grainLeg',
  grainSilo = 'grainSilo',
  pole = 'pole',
  residence = 'residence',
  waterTower = 'waterTower'
}

export interface AuditEvent {
  __typename?: 'AuditEvent'
  description?: Maybe<Scalars['String']>
  error?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['ID']>
  initiatorUser?: Maybe<User>
  modifiedUsers?: Maybe<Array<Maybe<User>>>
  organization?: Maybe<Organization>
  resolverName?: Maybe<Scalars['String']>
  sort?: Maybe<Scalars['String']>
  timestamp?: Maybe<Scalars['Date']>
  title?: Maybe<Scalars['String']>
  variables?: Maybe<Scalars['String']>
}

export interface AuditEventsResult {
  __typename?: 'AuditEventsResult'
  results?: Maybe<Array<Maybe<AuditEvent>>>
  total?: Maybe<Scalars['Int']>
}

export interface AuditTrailReport {
  __typename?: 'AuditTrailReport'
  events: Array<Maybe<AuditEvent>>
  pageInfo?: Maybe<PageInfo>
}

export interface AutopayFailingReport {
  __typename?: 'AutopayFailingReport'
  pageInfo?: Maybe<PageInfo>
  records: Array<Maybe<AutopayFailingReportRecord>>
}

export interface AutopayFailingReportRecord {
  __typename?: 'AutopayFailingReportRecord'
  accountId?: Maybe<Scalars['String']>
  accountType?: Maybe<Scalars['String']>
  amount?: Maybe<Scalars['Float']>
  autopay?: Maybe<Scalars['String']>
  company?: Maybe<Scalars['String']>
  firstName?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['Int']>
  lastName?: Maybe<Scalars['String']>
  paymentCreatedAt?: Maybe<Scalars['Date']>
  paymentStatus?: Maybe<Scalars['String']>
  paymentUpdatedAt?: Maybe<Scalars['Date']>
  subdivision?: Maybe<Scalars['String']>
  subscriberId?: Maybe<Scalars['Int']>
  transactionType?: Maybe<Scalars['String']>
}

export interface AutopayReport {
  __typename?: 'AutopayReport'
  pageInfo?: Maybe<PageInfo>
  records: Array<Maybe<AutopayReportRecord>>
}

export interface AutopayReportRecord {
  __typename?: 'AutopayReportRecord'
  autopay?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['Int']>
  percentOfMrr?: Maybe<Scalars['Float']>
  percentOfSubscribers?: Maybe<Scalars['Float']>
  subscribers?: Maybe<Scalars['Int']>
  totalMrr?: Maybe<Scalars['Float']>
}

export interface AvalaraExemption {
  __typename?: 'AvalaraExemption'
  avalaraSettingsId?: Maybe<Scalars['ID']>
  category?: Maybe<Scalars['Int']>
  domain?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['ID']>
  name?: Maybe<Scalars['String']>
  pcode?: Maybe<Scalars['Int']>
  scope?: Maybe<Scalars['Int']>
  taxType?: Maybe<Scalars['String']>
  userId?: Maybe<Scalars['ID']>
}

export interface AvalaraExemptions {
  category?: Maybe<Scalars['Int']>
  city?: Maybe<Scalars['String']>
  country?: Maybe<Scalars['String']>
  county?: Maybe<Scalars['String']>
  domain?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['ID']>
  key?: Maybe<Scalars['Int']>
  name?: Maybe<Scalars['String']>
  postalCode?: Maybe<Scalars['String']>
  region?: Maybe<Scalars['String']>
  scope?: Maybe<Array<Maybe<Scalars['String']>>>
  taxType?: Maybe<Scalars['String']>
  userId?: Maybe<Scalars['ID']>
}

export interface AvalaraKeyPairs {
  __typename?: 'AvalaraKeyPairs'
  avalaraServiceType?: Maybe<Scalars['Int']>
  avalaraTransactionType?: Maybe<Scalars['Int']>
  salesType?: Maybe<Scalars['String']>
}

export interface AvalaraSettings {
  __typename?: 'AvalaraSettings'
  avalaraPassword?: Maybe<Scalars['String']>
  avalaraUsername?: Maybe<Scalars['String']>
  bscl?: Maybe<Scalars['Int']>
  fclt?: Maybe<Scalars['Boolean']>
  frch?: Maybe<Scalars['Boolean']>
  reg?: Maybe<Scalars['Boolean']>
  svcl?: Maybe<Scalars['Int']>
}

export interface AvalaraSettingsInput {
  avalaraPassword?: Maybe<Scalars['String']>
  avalaraUsername?: Maybe<Scalars['String']>
  bscl?: Maybe<Scalars['Int']>
  clientId?: Maybe<Scalars['ID']>
  clientProfileId?: Maybe<Scalars['ID']>
  exemptions?: Maybe<Array<Maybe<AvalaraExemptions>>>
  fclt?: Maybe<Scalars['Boolean']>
  frch?: Maybe<Scalars['Boolean']>
  reg?: Maybe<Scalars['Boolean']>
  svcl?: Maybe<Scalars['Int']>
}

export interface AvalaraSubscriberSettings {
  __typename?: 'AvalaraSubscriberSettings'
  id?: Maybe<Scalars['ID']>
  incorporated?: Maybe<Scalars['Boolean']>
  lifeline?: Maybe<Scalars['Boolean']>
}

export interface AvalaraSubscriberSettingsInput {
  incorporated?: Maybe<Scalars['Boolean']>
  lifeline?: Maybe<Scalars['Boolean']>
}

export interface Balance {
  __typename?: 'Balance'
  amount?: Maybe<Scalars['Float']>
}

export interface BeneficialOwner {
  address: AddressInput
  dateOfBirth: Scalars['String']
  firstName: Scalars['String']
  lastName: Scalars['String']
  ssn: Scalars['String']
}

export interface BenefitQualifyingPerson {
  bqpDob: Scalars['Date']
  bqpFirstName: Scalars['String']
  bqpIdentificationNumber: Scalars['String']
  bqpIdentificationType: Scalars['String']
  bqpLastName: Scalars['String']
}

export enum BillingCycleUnit {
  /** Bill based on days */
  day = 'day',
  /** Bill based on months */
  month = 'month',
  /** Bill based on weeks */
  week = 'week',
  /** Bill based on years */
  year = 'year'
}

export enum BillingDuration {
  forever = 'forever',
  limitedPeriod = 'limitedPeriod',
  oneTime = 'oneTime'
}

export interface BillingTimePeriodEndReport {
  __typename?: 'BillingTimePeriodEndReport'
  pageInfo?: Maybe<PageInfo>
  records: Array<Maybe<BillingTimePeriodEndReportRecord>>
}

export interface BillingTimePeriodEndReportRecord {
  __typename?: 'BillingTimePeriodEndReportRecord'
  company?: Maybe<Scalars['String']>
  day?: Maybe<Scalars['Date']>
  discounts?: Maybe<Scalars['Float']>
  grossCashFlow?: Maybe<Scalars['Float']>
  grossCredits?: Maybe<Scalars['Float']>
  grossReceipts?: Maybe<Scalars['Float']>
  grossRefunds?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Int']>
  invoicedSales?: Maybe<Scalars['Float']>
  netCredits?: Maybe<Scalars['Float']>
  netRefunds?: Maybe<Scalars['Float']>
  netSales?: Maybe<Scalars['Float']>
  subdivision?: Maybe<Scalars['String']>
}

export interface BillingTimePeriodRecord {
  __typename?: 'BillingTimePeriodRecord'
  date: Scalars['Date']
  discounts: Scalars['Float']
  grossCashflow: Scalars['Float']
  grossCredits: Scalars['Float']
  grossReciepts: Scalars['Float']
  grossRefunds: Scalars['Float']
  id: Scalars['ID']
  invoicedSales: Scalars['Float']
  netCredits: Scalars['Float']
  netRefunds: Scalars['Float']
  netSales: Scalars['Float']
}

export interface BillingTimePeriodReport {
  __typename?: 'BillingTimePeriodReport'
  records: Array<Maybe<BillingTimePeriodRecord>>
}

export enum BillingType {
  fixedAmount = 'fixedAmount',
  percentage = 'percentage'
}

export enum BlockType {
  Allow = 'Allow',
  Block = 'Block',
  BlockWithPrompt = 'BlockWithPrompt',
  Forward = 'Forward',
  VipRing = 'VipRing',
  Voicemail = 'Voicemail'
}

/**
 * Represents an application event
 * eventCreated is stored as epoch in seconds
 */
export interface BossEvent {
  __typename?: 'BossEvent'
  data?: Maybe<Scalars['String']>
  eventCreated: Scalars['BigInt']
  eventType: BossEventType
  externalEventId?: Maybe<Scalars['ID']>
  id: Scalars['ID']
}

export interface BossEventInput {
  data?: Maybe<Scalars['String']>
  eventCreated: Scalars['BigInt']
  eventType: BossEventType
  externalEventId?: Maybe<Scalars['ID']>
}

export { BossEventType }

export enum Bucket {
  /** Default. Private bucket. Does not return a url. */
  customer_uploads = 'customer_uploads',
  /** Public bucket. Returns public url in url field. */
  public_assets = 'public_assets'
}

export interface BulkSelection {
  excludeIds?: Maybe<Array<Maybe<Scalars['ID']>>>
  filters?: Maybe<Array<Maybe<FilterInput>>>
  query?: Maybe<Scalars['String']>
}

export enum CalixAlarmFacility {
  card = 'card',
  ethGePort = 'ethGePort',
  olt = 'olt',
  ont = 'ont',
  ontGigEth = 'ontGigEth',
  ponPort = 'ponPort'
}

export enum CalixUploadType {
  alarm = 'alarm',
  ont = 'ont',
  subscriber = 'subscriber'
}

export interface CallHandling {
  __typename?: 'CallHandling'
  forwardToNumber?: Maybe<Scalars['String']>
  type?: Maybe<CallHandlingType>
}

export interface CallHandlingInput {
  forwardToNumber?: Maybe<Scalars['String']>
  type?: Maybe<CallHandlingType>
}

export enum CallHandlingOptionType {
  FindMeFollowMe = 'FindMeFollowMe',
  ForwardAlways = 'ForwardAlways',
  RingPhone = 'RingPhone',
  SimultaneousRing = 'SimultaneousRing'
}

export interface CallHandlingSettings {
  __typename?: 'CallHandlingSettings'
  callHandlingOptionType?: Maybe<CallHandlingOptionType>
  callWaitingEnabled?: Maybe<Scalars['Boolean']>
  doNotDisturbEnabled?: Maybe<Scalars['Boolean']>
  findMeFollowMeCallHandling?: Maybe<FindMeFollowMeCallHandling>
  forwardAlwaysToNumber?: Maybe<Scalars['String']>
  ringPhoneCallHandling?: Maybe<RingPhoneCallHandling>
  simultaneousRingCallHandling?: Maybe<SimultaneousRingCallHandling>
}

export interface CallHandlingSettingsInput {
  callHandlingOptionType?: Maybe<CallHandlingOptionType>
  callWaitingEnabled?: Maybe<Scalars['Boolean']>
  doNotDisturbEnabled?: Maybe<Scalars['Boolean']>
  findMeFollowMeCallHandling?: Maybe<FindMeFollowMeCallHandlingInput>
  forwardAlwaysToNumber?: Maybe<Scalars['String']>
  ringPhoneCallHandling?: Maybe<RingPhoneCallHandlingInput>
  simultaneousRingCallHandling?: Maybe<SimultaneousRingCallHandlingInput>
}

export enum CallHandlingType {
  Busy = 'Busy',
  Forward = 'Forward',
  RingForever = 'RingForever',
  Voicemail = 'Voicemail'
}

export interface CallHandlingWithTimeout {
  __typename?: 'CallHandlingWithTimeout'
  forwardToNumber?: Maybe<Scalars['String']>
  timeout?: Maybe<Scalars['Int']>
  type?: Maybe<CallHandlingType>
}

export interface CallHandlingWithTimeoutInput {
  forwardToNumber?: Maybe<Scalars['String']>
  timeout?: Maybe<Scalars['Int']>
  type?: Maybe<CallHandlingType>
}

export interface CallScreeningSettings {
  __typename?: 'CallScreeningSettings'
  anonymousCallScreen?: Maybe<BlockType>
  anonymousRingType?: Maybe<RingType>
  customCallScreenList?: Maybe<Array<Maybe<CustomCallScreen>>>
  defaultCallScreen?: Maybe<BlockType>
  defaultRingType?: Maybe<RingType>
  forwardTn?: Maybe<Scalars['String']>
  tollFreeCallScreen?: Maybe<BlockType>
  tollFreeRingType?: Maybe<RingType>
}

export interface CallScreeningSettingsInput {
  anonymousCallScreen?: Maybe<BlockType>
  anonymousRingType?: Maybe<RingType>
  customCallScreenList?: Maybe<Array<Maybe<CustomCallScreenInput>>>
  defaultCallScreen?: Maybe<BlockType>
  defaultRingType?: Maybe<RingType>
  forwardTn?: Maybe<Scalars['String']>
  tollFreeCallScreen?: Maybe<BlockType>
  tollFreeRingType?: Maybe<RingType>
}

/** Census Match for an addres */
export enum CensusMatch {
  /** Address is matched to census via GPS */
  GPS = 'GPS',
  Postal = 'Postal',
  /** Address is matched to census via US Postal address verification */
  US = 'US'
}

/** Connection Types for internet service */
export enum ConnectionType {
  BROADBAND = 'BROADBAND',
  CABLE = 'CABLE',
  DSL = 'DSL',
  FIBER = 'FIBER',
  HYBRID = 'HYBRID',
  LTE = 'LTE',
  PPPOE = 'PPPOE',
  SATELLITE = 'SATELLITE',
  WIMAX = 'WIMAX',
  WIRELESS = 'WIRELESS'
}

/** A Contract represents a legal agreement to a plan */
export interface Contract {
  __typename?: 'Contract'
  endDate?: Maybe<Scalars['Date']>
  id: Scalars['ID']
  startDate?: Maybe<Scalars['Date']>
}

export interface ContractInput {
  /** The date which a contract is ended */
  endDate?: Maybe<Scalars['Date']>
  /** The date which a contract is started */
  startDate?: Maybe<Scalars['Date']>
}

export interface ContrivedResponse {
  __typename?: 'ContrivedResponse'
  organization: Organization
  plan: Plan
  subscription: Subscription
}

/** Addon type */
export interface CreateAddonInput {
  /** Is addon activated */
  active?: Maybe<Scalars['Boolean']>
  /** to create tax if avalara */
  avalaraSalesType?: Maybe<Scalars['Int']>
  /** to create tax if avalara */
  avalaraServiceType?: Maybe<Scalars['Int']>
  /** to create tax if avalara */
  avalaraTransactionType?: Maybe<Scalars['Int']>
  /** Specify how frequently customer is billed. To bill a customer every 6 months, enter 6 with a billingCyclePeriod of month */
  billingCyclePeriod?: Maybe<Scalars['Int']>
  /** The billing frequency unit in which a customer is billed (day, week, month, year) */
  billingCycleUnit?: Maybe<BillingCycleUnit>
  /** Description of an addon */
  description?: Maybe<Scalars['String']>
  /** Specify the duration to charge this addon (oneTime, forever, limitedPeriod) */
  duration: BillingDuration
  /** Fixed Amount price of an addon */
  fixedAmount?: Maybe<Scalars['Float']>
  /** The uploaded image for a plan */
  image?: Maybe<Scalars['Upload']>
  /** Denotes if it's a fee */
  isFee?: Maybe<Scalars['Boolean']>
  /** Name of an addon */
  name: Scalars['String']
  /** The number of billing cycles to charge the subscriber for a limitedPeriod duration addon */
  numberOfBillingCycles?: Maybe<Scalars['Int']>
  /** Unique identifier of an organization for an addon */
  organizationIds?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Percentage of total to charge for an addon */
  percentage?: Maybe<Scalars['Float']>
  /** Type of an addon */
  type: BillingType
}

export interface CreateCreditInput {
  amount: Scalars['Float']
  note?: Maybe<Scalars['String']>
  organizationId?: Maybe<Scalars['ID']>
  reasonCodeId?: Maybe<Scalars['ID']>
  subReasonCodeId?: Maybe<Scalars['ID']>
  userId?: Maybe<Scalars['ID']>
}

export interface CreateDeviceInput {
  deviceType?: Maybe<Scalars['String']>
  emergencyPhoneNumber?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['ID']>
  lineNumber?: Maybe<Scalars['Int']>
  macAddress?: Maybe<Scalars['String']>
}

export interface CreateDiscountInput {
  applicableAddonIds?: Maybe<Array<Maybe<Scalars['ID']>>>
  applicablePlanIds?: Maybe<Array<Maybe<Scalars['ID']>>>
  applyOn: DiscountApplication
  avalaraDiscountType?: Maybe<Scalars['Int']>
  description?: Maybe<Scalars['String']>
  discountAmount?: Maybe<Scalars['Float']>
  discountPercentage?: Maybe<Scalars['Float']>
  discountType: BillingType
  duration: BillingDuration
  enabled?: Maybe<Scalars['Boolean']>
  limitedPeriodMonths?: Maybe<Scalars['Int']>
  maxRedemptions?: Maybe<Scalars['Int']>
  name: Scalars['String']
  organizationIds: Array<Maybe<Scalars['ID']>>
  reasonCodeId?: Maybe<Scalars['ID']>
  subReasonCodeId?: Maybe<Scalars['ID']>
  validUntil?: Maybe<Scalars['Date']>
}

export interface CreateEquipmentInput {
  currentlyProvisioned?: Maybe<Scalars['Boolean']>
  deviceId?: Maybe<Scalars['String']>
  deviceStatus?: Maybe<DeviceStatus>
  lastProvisionedDate?: Maybe<Scalars['Date']>
  legacySystemId?: Maybe<Scalars['String']>
  make?: Maybe<Scalars['String']>
  model?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  organizationId?: Maybe<Scalars['ID']>
  planId?: Maybe<Scalars['ID']>
  provisionedToSubscriberId?: Maybe<Scalars['ID']>
  serviceId?: Maybe<Scalars['ID']>
  servicePassword?: Maybe<Scalars['String']>
  serviceUsername?: Maybe<Scalars['String']>
  smtp?: Maybe<Scalars['Boolean']>
  staticIp?: Maybe<Scalars['String']>
  subscriberId?: Maybe<Scalars['ID']>
  subscriptionId?: Maybe<Scalars['ID']>
  type?: Maybe<EquipmentType>
}

export interface CreateFinancialTransactionInput {
  /** Amount sent by financial transaction */
  amount?: Maybe<Scalars['Float']>
  /** Description for a financial transaction */
  description?: Maybe<Scalars['String']>
  /** Destination ID */
  destination?: Maybe<Scalars['ID']>
  /** Unique identifier for the external transaction of a financial transaction */
  externalTransactionId?: Maybe<Scalars['ID']>
  /** Unique identifier for a financial transaction */
  id?: Maybe<Scalars['ID']>
  /** Unique identifier of an invoice for a financial transaction */
  invoiceId?: Maybe<Scalars['ID']>
  /** Secret for the payment intent of a financial transaction */
  paymentIntentClientSecret?: Maybe<Scalars['ID']>
  /** Source ID */
  source?: Maybe<Scalars['ID']>
  /** Financial Transaction Status */
  status?: Maybe<Scalars['String']>
  /** Subscriber ID */
  subscriberId?: Maybe<Scalars['ID']>
  /** Type for a financial transaction */
  transactionType?: Maybe<TransactionType>
}

export interface CreateLineInput {
  geometryCoordinates?: Maybe<Array<Maybe<Scalars['String']>>>
  geometryType?: Maybe<GeometryType>
  lineType?: Maybe<LineType>
  name?: Maybe<Scalars['String']>
}

export interface CreateMessageTemplateInput {
  description: Scalars['String']
  emailTemplate?: Maybe<MessagePathTemplateInput>
  mailTemplate?: Maybe<MessagePathTemplateInput>
  name: Scalars['String']
  notificationTemplate?: Maybe<MessagePathTemplateInput>
  organizationId: Scalars['ID']
  postcardTemplate?: Maybe<MessagePathTemplateInput>
  smsTemplate?: Maybe<MessagePathTemplateInput>
  supportedRoutes: Scalars['String']
  type: MessageType
  /** JSON of variable types. Supported types : [ string, plan, service, discount, credit ]. Ex. { 'mainPlan': 'plan', 'greeting': 'string', 'promotedDiscount': 'discount } */
  variableTypes: Scalars['String']
}

/** OrganizationPermission input */
export interface CreateOrganizationPermissionInput {
  /** Unique Identifier for an organization for an organization permission */
  organizationId: Scalars['ID']
  /** Permission role id */
  permissionRoleId: Scalars['ID']
  /** Role for a organization permission */
  role?: Maybe<OrganizationPermissionRole>
  /** Unique Identifier for a user for an organization permission */
  userId: Scalars['ID']
}

/**
 * Definitions:
 * * 'source' : Must be a funding source id ( dwolla funding source url or stripe payment method id )
 * * 'destination' : Must be a funding source id ( dwolla funding source url or stripe payment method id )
 * * 'invoiceId' : id of invoice, set to use price of specific invoice
 * * 'userId' : id of user, used to find the user's default payment method and/or the price of the most recent invoice
 * * 'useDefault' : set to true if want to provide no source and use default payment method instead
 * * 'stripeCustomerId' : id of stripe customer
 *
 * Either one of the following variables **must** be provided to set the price of the payment:
 *  * price: To use a specific price
 *  * invoiceId: To use the price of a specific invoice
 *  * userId: To use the price of the latest invoice
 * (price > invoiceId > userId)
 *
 * The following variables **must** be provided to...
 * * Make a dwolla payment:{source: , destination: , invoiceId/userId:}
 *
 * * Make a stripe payment with a saved card: {stripeCustomerId: , source: , destination: , invoiceId/userId: }
 *
 * * Make a stripe payment with a new card: {destination: , invoiceId/userId: } - Expect the 'client secret' in the {message: } response
 *
 * * Make a stripe payment with a bank account: {stripeCustomerId: , source: , destination: , invoiceId/userId: }
 *
 * * Make a payment with a user's default payment method: {useDefault: true, userId: }
 */
export interface CreatePaymentInput {
  destination?: Maybe<Scalars['String']>
  invoiceId?: Maybe<Scalars['ID']>
  organizationId?: Maybe<Scalars['ID']>
  paymentMethod?: Maybe<PaymentMethodInput>
  price?: Maybe<Scalars['Float']>
  refund?: Maybe<Scalars['Boolean']>
  source?: Maybe<Scalars['String']>
  stripeCustomerId?: Maybe<Scalars['ID']>
  subscriberId?: Maybe<Scalars['ID']>
  useDefault?: Maybe<Scalars['Boolean']>
  userId?: Maybe<Scalars['ID']>
}

export interface CreatePlanInput {
  active?: Maybe<Scalars['Boolean']>
  /** Specify how frequently customer is billed. To bill a customer every 6 months, enter 6 */
  billingCyclePeriod: Scalars['Int']
  /** The billing frequency unit in which a customer is billed */
  billingCycleUnit: BillingCycleUnit
  childPlanIds?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** The description for a plan */
  description?: Maybe<Scalars['String']>
  externalPlanId?: Maybe<Scalars['ID']>
  /** The uploaded image for a plan */
  image?: Maybe<Scalars['Upload']>
  /** The name for a plan */
  name: Scalars['String']
  /** Number of billing cycles a subscription should be charged. After the billing cycles are spent, the subscription will be cancelled */
  numberOfBillingCycles?: Maybe<Scalars['Int']>
  /** Unique identifier of an organization for a plan */
  organizationIds: Array<Maybe<Scalars['ID']>>
  price?: Maybe<Scalars['Float']>
  /** The pricing model for a plan */
  pricingModel: PricingModel
  recommended?: Maybe<Scalars['Boolean']>
  /** The list of selling points for a plan */
  sellingPoints?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Services that make up the plan */
  serviceIds: Array<Maybe<Scalars['ID']>>
  /** external plan id (alianza) */
  standAlone?: Maybe<Scalars['Boolean']>
}

export interface CreateReturnCheckInput {
  amount?: Maybe<Scalars['Float']>
  subscriberId?: Maybe<Scalars['ID']>
  transactionId?: Maybe<Scalars['ID']>
}

export interface CreateSaasSubscriptionResponse {
  __typename?: 'CreateSaasSubscriptionResponse'
  clientSecret?: Maybe<Scalars['String']>
  error?: Maybe<Scalars['String']>
  subscriptionId?: Maybe<Scalars['ID']>
}

export interface CreateSegmentInput {
  filters?: Maybe<Array<Maybe<FilterInput>>>
  name: Scalars['String']
  node: SegmentNode
  organizationId: Scalars['ID']
  sort?: Maybe<SortInput>
}

export interface CreateServiceInput {
  active?: Maybe<Scalars['Boolean']>
  avalaraSalesType?: Maybe<Scalars['Int']>
  avalaraServiceType?: Maybe<Scalars['Int']>
  avalaraTransactionType?: Maybe<Scalars['Int']>
  bandwidthCap?: Maybe<Scalars['String']>
  connectionType?: Maybe<ConnectionType>
  downloadSpeed?: Maybe<Scalars['String']>
  name: Scalars['String']
  organizationIds: Array<Maybe<Scalars['ID']>>
  price: Scalars['Float']
  provisioningId?: Maybe<Scalars['String']>
  smtp?: Maybe<Scalars['Boolean']>
  type: ServiceType
  uploadSpeed?: Maybe<Scalars['String']>
}

export interface CreateTowerInput {
  attachmentType?: Maybe<AttachmentType>
  geometryCoordinates?: Maybe<Array<Maybe<Scalars['String']>>>
  geometryType?: Maybe<GeometryType>
  lat?: Maybe<Scalars['Float']>
  lon?: Maybe<Scalars['Float']>
  name?: Maybe<Scalars['String']>
  status?: Maybe<TowerStatus>
}

export interface CreateUserInput {
  /** If true, the user's account has not been setup */
  accountSetupNotComplete?: Maybe<Scalars['Boolean']>
  /** An account status for a user */
  accountStatus?: Maybe<AccountStatus>
  /** Residential, Commercial or MDU */
  accountType?: Maybe<AccountType>
  acpStatus?: Maybe<AcpStatus>
  /** User active */
  active?: Maybe<Scalars['Boolean']>
  /** Autopay */
  autopay?: Maybe<Scalars['Boolean']>
  avalaraSubscriberSettings?: Maybe<AvalaraSubscriberSettingsInput>
  /** Name of the company a user belongs to */
  company?: Maybe<Scalars['String']>
  /** The date which a user becomes a customer */
  customerSince?: Maybe<Scalars['Date']>
  /** Default payment method */
  default_payment_method?: Maybe<Scalars['String']>
  /** Device (Used in alianza setup) */
  device?: Maybe<CreateDeviceInput>
  /** The unique identifier of a user in Dwolla */
  dwollaCustomerUrl?: Maybe<Scalars['String']>
  /** The primary email for a user */
  email?: Maybe<Scalars['Email']>
  enableNotifications?: Maybe<Scalars['Boolean']>
  /** First name of a user */
  firstName?: Maybe<Scalars['String']>
  /** Industry of business account */
  industry?: Maybe<Industry>
  /** Invoice method setting */
  invoiceMethod?: Maybe<InvoiceMethod>
  /** If true, the user has a critical job and cannot be disconnected from service */
  isCritical?: Maybe<Scalars['Boolean']>
  /** If true, user is pinned */
  isPinned?: Maybe<Scalars['Boolean']>
  /** Last name of a user */
  lastName?: Maybe<Scalars['String']>
  /** Data source where lead was found */
  leadSource?: Maybe<LeadSource>
  /** Input links */
  links?: Maybe<Array<Maybe<ExternalLinkInput>>>
  /** Mailing address for a user */
  mailingAddress?: Maybe<AddressInput>
  networkNodeId?: Maybe<Scalars['ID']>
  /** notes for a user */
  notes?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Unique identifier of an organization for a user */
  organizationId?: Maybe<Scalars['Int']>
  /** The password for a user */
  password?: Maybe<Scalars['Password']>
  /** Payment status, defaults to current */
  paymentStatus?: Maybe<PaymentStatus>
  /** Code for email verifying a payment method */
  payment_email_code?: Maybe<Scalars['String']>
  /** The primary phone number for a user */
  phoneNumber?: Maybe<Scalars['String']>
  /** The users preferred method of contact */
  preferredContact?: Maybe<PreferredContact>
  /** Uploaded image for a user's profile */
  profileImage?: Maybe<Scalars['Upload']>
  /** Prospective service address for leads/opportunities */
  prospectiveServiceAddress?: Maybe<AddressInput>
  referralSourceId?: Maybe<Scalars['ID']>
  /** The role of a user */
  role?: Maybe<UserRole>
  /** Service Address for a User */
  serviceAddress?: Maybe<AddressInput>
  /** The unique identifier of a user in Stripe */
  stripeUserId?: Maybe<Scalars['String']>
  /** Unique identifiers for the tags for a user */
  tagIds?: Maybe<Array<Maybe<Scalars['ID']>>>
}

export interface Credit {
  __typename?: 'Credit'
  amount: Scalars['Float']
  createdAt: Scalars['Date']
  id: Scalars['ID']
  note?: Maybe<Scalars['String']>
  organization?: Maybe<Organization>
  /** Top level reason code */
  reasonCode?: Maybe<ReasonCode>
  redeemed?: Maybe<Scalars['Boolean']>
  /** Sub reason code */
  subReasonCode?: Maybe<ReasonCode>
  user?: Maybe<User>
  userId?: Maybe<Scalars['ID']>
  voided?: Maybe<Scalars['Boolean']>
}

export interface CreditReport {
  __typename?: 'CreditReport'
  credits?: Maybe<Array<Maybe<Credit>>>
}

export interface CreditsResult {
  __typename?: 'CreditsResult'
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>
  pageInfo?: Maybe<PageInfo>
  results: Array<Maybe<Credit>>
  total: Scalars['Int']
}

export interface CursorPagination {
  all?: Maybe<Scalars['Boolean']>
  back?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  next?: Maybe<Scalars['String']>
}

export interface CustomCallScreen {
  __typename?: 'CustomCallScreen'
  blockType?: Maybe<BlockType>
  ringType?: Maybe<RingType>
  telephoneNumber?: Maybe<Scalars['String']>
}

export interface CustomCallScreenInput {
  blockType?: Maybe<BlockType>
  ringType?: Maybe<RingType>
  telephoneNumber?: Maybe<Scalars['String']>
}

export interface CustomerAgreementInput {
  companyAddress?: Maybe<Scalars['String']>
  companyName?: Maybe<Scalars['String']>
  customerEmail?: Maybe<Scalars['String']>
  customerName?: Maybe<Scalars['String']>
  customerTitle?: Maybe<Scalars['String']>
}

/** Choose Ready customer type */
export enum CustomerType {
  business = 'business',
  subscriber = 'subscriber'
}

export interface DailyBillingRecord {
  __typename?: 'DailyBillingRecord'
  date: Scalars['Date']
  discounts: Scalars['Float']
  grossCashflow: Scalars['Float']
  grossCredits: Scalars['Float']
  grossReciepts: Scalars['Float']
  grossRefunds: Scalars['Float']
  invoicedSales: Scalars['Float']
  netCredits: Scalars['Float']
  netRefunds: Scalars['Float']
  netSales: Scalars['Float']
}

export interface DailyBillingReport {
  __typename?: 'DailyBillingReport'
  dailyBillingRecords: Array<Maybe<DailyBillingRecord>>
}

export interface DataLoaderFilterInput {
  condition: FilterCondition
  fieldName: Scalars['String']
  value?: Maybe<Array<Maybe<Scalars['String']>>>
}

export interface DeliverabilityAnalysis {
  __typename?: 'DeliverabilityAnalysis'
  dpvActive?: Maybe<Scalars['String']>
  dpvCmra?: Maybe<Scalars['String']>
  dpvConfirmation?: Maybe<Scalars['String']>
  dpvFootnotes?: Maybe<Array<Maybe<Scalars['String']>>>
  dpvVacant?: Maybe<Scalars['String']>
  ewsMatch?: Maybe<Scalars['Boolean']>
  lacsIndicator?: Maybe<Scalars['String']>
  lacsReturnCode?: Maybe<Scalars['String']>
  suiteReturnCode?: Maybe<Scalars['String']>
}

/** Demographics data by location */
export interface Demographics {
  __typename?: 'Demographics'
  censusBlockGroup: Scalars['String']
  createdAt?: Maybe<Scalars['Date']>
  educationOverBachelorRate?: Maybe<Scalars['Float']>
  employmentRate?: Maybe<Scalars['Float']>
  housingUnitsWithChildrenInSchool?: Maybe<Scalars['Int']>
  medianHouseholdIncome?: Maybe<Scalars['Int']>
  numberOfHouseholds?: Maybe<Scalars['Int']>
  numberOfHousingUnits?: Maybe<Scalars['Int']>
  ownerOccupiedHousingUnitRate?: Maybe<Scalars['Float']>
  percentageOfChildrenInSchool?: Maybe<Scalars['Float']>
  population?: Maybe<Scalars['Int']>
  populationDensity?: Maybe<Scalars['Float']>
  singleFamilyHomePrice202009?: Maybe<Scalars['Int']>
  singleFamilyHomePrice202012?: Maybe<Scalars['Int']>
}

/** Alianza */
export interface Device {
  __typename?: 'Device'
  deviceType?: Maybe<Scalars['String']>
  emergencyPhoneNumber?: Maybe<Scalars['String']>
  id: Scalars['ID']
  lineNumber?: Maybe<Scalars['Int']>
  macAddress?: Maybe<Scalars['String']>
}

export enum DeviceStatus {
  ACTIVE = 'ACTIVE',
  OFFLINE = 'OFFLINE'
}

export enum DirectoryListingType {
  LIST_NOT_PUBLISH = 'LIST_NOT_PUBLISH',
  LIST_PUBLISH = 'LIST_PUBLISH',
  NOT_LIST_NOT_PUBLISH = 'NOT_LIST_NOT_PUBLISH',
  PORTED = 'PORTED'
}

/**
 * Discount - represents a reduction of standalone, nonrecurring charges on a subscription
 *     Can be applied to an invoice amount or to specific plans
 *     TODO: will eventually need to be applied to addons as well
 *
 *     The maxRedemptions, redemptions and validUntil fields apply to the
 *     discount across every subscriber in an organization. For example,
 *     to restrict the discount to the first 50 customers who use it or
 *     to require it be redeemed by a certain date
 */
export interface Discount {
  __typename?: 'Discount'
  /** Active = enabled && discount isn't past valid until date && # of redemptions < max total redemptions */
  active: Scalars['Boolean']
  /** Addons the discount can be applied to (optional, depends on value of applyOn) */
  applicableAddons?: Maybe<Array<Maybe<Addon>>>
  /** Plans the discount can be applied to (optional, depends on value of applyOn) */
  applicablePlans?: Maybe<Array<Maybe<Plan>>>
  /** Addon on the subscription a specific item discount is applied to */
  appliedAddonId?: Maybe<Scalars['ID']>
  /**
   * The following fields are only available when the discount is a property of a subscription object.
   * Applied count tracks the # of times an instance of a discount has been applied to an individual subscription
   */
  appliedCount?: Maybe<Scalars['Int']>
  /** Plan on the subscription a specific item discount is applied to */
  appliedPlanId?: Maybe<Scalars['ID']>
  /** Does the discount apply to the invoice total or specific plans */
  applyOn: DiscountApplication
  avalaraDiscountType?: Maybe<Scalars['Int']>
  description?: Maybe<Scalars['String']>
  /** For fixed amount discounts */
  discountAmount?: Maybe<Scalars['Float']>
  /** For percentage discounts */
  discountPercentage?: Maybe<Scalars['Float']>
  /** Fixed amount or percentage discount */
  discountType: BillingType
  /** Is the discount available as a one-time use, a limited period, or forever */
  duration: BillingDuration
  /** Discounts can be manually disabled */
  enabled: Scalars['Boolean']
  id: Scalars['ID']
  /** Number of months for limited period discounts */
  limitedPeriodMonths?: Maybe<Scalars['Int']>
  /** The max number of times the discount can be applied across the entire organization */
  maxRedemptions?: Maybe<Scalars['Int']>
  /** Max number of times an instance of a discount can be applied to an individual subscription */
  maxSubscriptionApplications?: Maybe<Scalars['Int']>
  name: Scalars['String']
  organizations?: Maybe<Array<Maybe<Organization>>>
  /** Top level reason code */
  reasonCode?: Maybe<ReasonCode>
  /** Number of times it has been redeemed across the entire organization */
  redemptions?: Maybe<Scalars['Int']>
  /** Sub reason code */
  subReasonCode?: Maybe<ReasonCode>
  /** Date when discount expires and becomes inactive */
  validUntil?: Maybe<Scalars['Date']>
}

export enum DiscountApplication {
  invoiceAmount = 'invoiceAmount',
  specifiedItems = 'specifiedItems'
}

export interface DiscountsResult {
  __typename?: 'DiscountsResult'
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>
  pageInfo?: Maybe<PageInfo>
  results: Array<Maybe<Discount>>
  total: Scalars['Int']
}

export interface DwollaAccountInput {
  address1?: Maybe<Scalars['String']>
  beneficialOwners?: Maybe<Array<Maybe<BeneficialOwner>>>
  businessClassification?: Maybe<Scalars['String']>
  businessName?: Maybe<Scalars['String']>
  businessType?: Maybe<Scalars['String']>
  city?: Maybe<Scalars['String']>
  controller?: Maybe<DwollaController>
  ein?: Maybe<Scalars['String']>
  email: Scalars['Email']
  firstName: Scalars['String']
  ipAddress: Scalars['String']
  lastName: Scalars['String']
  postalCode?: Maybe<Scalars['String']>
  state?: Maybe<Scalars['String']>
  type?: Maybe<Scalars['String']>
}

/** Type for dwolla autopay/on-demand auth */
export interface DwollaAutopayAuth {
  __typename?: 'DwollaAutopayAuth'
  authLink: Scalars['String']
  bodyText: Scalars['String']
  buttonText: Scalars['String']
  success: Scalars['Boolean']
}

export interface DwollaBeneficialOwner {
  __typename?: 'DwollaBeneficialOwner'
  address1: Scalars['String']
  city: Scalars['String']
  dateOfBirth: Scalars['String']
  firstName: Scalars['String']
  id: Scalars['ID']
  lastName: Scalars['String']
  postalCode: Scalars['String']
  ssn: Scalars['String']
  state: Scalars['String']
  verificationStatus: Scalars['String']
}

export interface DwollaController {
  address: AddressInput
  dateOfBirth: Scalars['String']
  firstName: Scalars['String']
  lastName: Scalars['String']
  ssn: Scalars['String']
  title: Scalars['String']
}

export interface E7TrapAlarm {
  e7TrapAlarmLocationInfo?: Maybe<Scalars['String']>
  e7TrapAlarmSeverityLevel: Scalars['String']
  e7TrapAlarmStatus: Scalars['String']
  e7TrapAlarmType?: Maybe<Scalars['String']>
  /** Object which sounded the alarm */
  e7TrapObjectClass?: Maybe<CalixAlarmFacility>
  /** Secondary object of the alarm */
  e7TrapSecObjectClass?: Maybe<Scalars['String']>
  e7TrapServiceAffecting: Scalars['String']
  e7TrapText: Scalars['String']
  e7TrapTime?: Maybe<Scalars['Date']>
  e7TrapTimeStamp?: Maybe<Scalars['String']>
  /** Id for the OLT which sounded the alarm */
  networkref: Scalars['ID']
  /** Id for the Object which sounded the alarm */
  objectId?: Maybe<Scalars['String']>
  /** Id for the secondary object of the alarm */
  secondaryObjectId?: Maybe<Scalars['String']>
  subscriberId?: Maybe<Scalars['String']>
}

export interface EmailEventData {
  __typename?: 'EmailEventData'
  bounce?: Maybe<Array<Maybe<SingleMessage>>>
  click?: Maybe<Array<Maybe<SingleMessage>>>
  deferred?: Maybe<Array<Maybe<SingleMessage>>>
  delivered?: Maybe<Array<Maybe<SingleMessage>>>
  dropped?: Maybe<Array<Maybe<SingleMessage>>>
  open?: Maybe<Array<Maybe<SingleMessage>>>
  processed?: Maybe<Array<Maybe<SingleMessage>>>
}

export interface EmailTemplate {
  __typename?: 'EmailTemplate'
  body: Scalars['String']
  subject: Scalars['String']
}

export interface EmailTemplateInput {
  body: Scalars['String']
  subject: Scalars['String']
}

export interface Equipment {
  __typename?: 'Equipment'
  createdAt?: Maybe<Scalars['Date']>
  currentlyProvisioned?: Maybe<Scalars['Boolean']>
  deviceId?: Maybe<Scalars['String']>
  deviceStatus?: Maybe<DeviceStatus>
  id?: Maybe<Scalars['ID']>
  lastAlarmedAt?: Maybe<Scalars['Date']>
  lastProvisionedDate?: Maybe<Scalars['Date']>
  make?: Maybe<Scalars['String']>
  model?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  networkAlarms?: Maybe<Array<Maybe<NetworkAlarm>>>
  networkMapId?: Maybe<Scalars['String']>
  networkNode?: Maybe<NetworkNode>
  organization?: Maybe<Organization>
  plan?: Maybe<Plan>
  provisionedToSubscriber?: Maybe<User>
  service?: Maybe<Service>
  servicePassword?: Maybe<Scalars['String']>
  serviceStatus?: Maybe<ServiceStatus>
  serviceUsername?: Maybe<Scalars['String']>
  smtp?: Maybe<Scalars['Boolean']>
  staticIp?: Maybe<Scalars['String']>
  subscription?: Maybe<Subscription>
  type?: Maybe<EquipmentType>
}

export interface EquipmentResult {
  __typename?: 'EquipmentResult'
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>
  pageInfo?: Maybe<PageInfo>
  results: Array<Maybe<Equipment>>
  total: Scalars['Int']
}

export enum EquipmentType {
  HANDSET = 'HANDSET',
  MISC = 'MISC',
  MODEM = 'MODEM',
  ONT = 'ONT',
  ROUTER = 'ROUTER'
}

export interface Event {
  __typename?: 'Event'
  category?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  eventId?: Maybe<Scalars['String']>
  initiator?: Maybe<Scalars['ID']>
  initiatorUser?: Maybe<User>
  /** Contains the Message map */
  message?: Maybe<Message>
  object?: Maybe<Scalars['String']>
  origin?: Maybe<Scalars['ID']>
  subscribersInvolved?: Maybe<Array<Maybe<Scalars['ID']>>>
  subscribersInvolvedUsers?: Maybe<Array<Maybe<User>>>
  timeStamp?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  type?: Maybe<Scalars['String']>
}

export interface EventFields {
  age?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  origin?: Maybe<Scalars['ID']>
  subject?: Maybe<Scalars['String']>
  subscribers?: Maybe<Array<Maybe<Scalars['ID']>>>
  timestamp?: Maybe<Scalars['Date']>
  type?: Maybe<Scalars['String']>
}

/** External bank account type for Stripe account creation */
export interface ExternalAccountInput {
  accountNumber: Scalars['String']
  country: Scalars['String']
  currency: Scalars['String']
  object: Scalars['String']
  routingNumber: Scalars['String']
}

export interface ExternalLink {
  __typename?: 'ExternalLink'
  createdAt?: Maybe<Scalars['Date']>
  externalId?: Maybe<Scalars['String']>
  id: Scalars['ID']
  name?: Maybe<Scalars['String']>
  url?: Maybe<Scalars['String']>
  urlTemplate?: Maybe<Scalars['String']>
}

export interface ExternalLinkInput {
  /** External Id */
  externalId?: Maybe<Scalars['String']>
  /** Name */
  name?: Maybe<Scalars['String']>
  /** Template string for CRM url, Example: https://somecrm.com/id/{externalId} */
  urlTemplate?: Maybe<Scalars['String']>
}

export enum ExternalService {
  alianza = 'alianza'
}

export interface ExternalServiceData {
  __typename?: 'ExternalServiceData'
  alianza?: Maybe<AlianzaData>
}

export interface ExternalServiceDataInput {
  alianza?: Maybe<AlianzaDataInput>
}

/** Upload file object */
export interface File {
  __typename?: 'File'
  encoding: Scalars['String']
  filename: Scalars['String']
  mimetype: Scalars['String']
}

export interface Filter {
  __typename?: 'Filter'
  condition: FilterCondition
  fieldName: Scalars['String']
  value?: Maybe<Array<Maybe<Scalars['String']>>>
}

export enum FilterCondition {
  /** Date filter conditions */
  between = 'between',
  /** String filter conditions */
  contains = 'contains',
  doesNotContain = 'doesNotContain',
  doesNotEqual = 'doesNotEqual',
  endsWith = 'endsWith',
  /** Number filter conditions */
  equals = 'equals',
  geoDistance = 'geoDistance',
  /** Geo filter conditions */
  geoShape = 'geoShape',
  greaterThan = 'greaterThan',
  isAfter = 'isAfter',
  isBefore = 'isBefore',
  isExactly = 'isExactly',
  isNot = 'isNot',
  lessThan = 'lessThan',
  startsWith = 'startsWith',
  thisMonth = 'thisMonth',
  thisYear = 'thisYear',
  today = 'today'
}

export interface FilterInput {
  condition: FilterCondition
  fieldName: Scalars['String']
  value?: Maybe<Array<Maybe<Scalars['String']>>>
}

/** Financial Transaction */
export interface FinancialTransaction {
  __typename?: 'FinancialTransaction'
  amount: Scalars['Float']
  cancelId?: Maybe<Scalars['ID']>
  createdAt?: Maybe<Scalars['Date']>
  description?: Maybe<Scalars['String']>
  destination?: Maybe<Scalars['String']>
  destinationPaymentProfile?: Maybe<PaymentProfile>
  externalTransactionId?: Maybe<Scalars['ID']>
  id: Scalars['ID']
  invoiceId?: Maybe<Scalars['ID']>
  paymentIntentClientSecret?: Maybe<Scalars['ID']>
  paymentMethodType?: Maybe<PaymentMethodType>
  refundTransactionId?: Maybe<Scalars['ID']>
  source?: Maybe<Scalars['String']>
  sourcePaymentProfile?: Maybe<PaymentProfile>
  status?: Maybe<FinancialTransactionStatus>
  subscriberId?: Maybe<Scalars['ID']>
  transactionFee?: Maybe<Scalars['Float']>
  transactionType?: Maybe<TransactionType>
  user?: Maybe<User>
}

export interface FinancialTransactionInput {
  amount: Scalars['Float']
  description?: Maybe<Scalars['String']>
  destinationPaymentProfileId?: Maybe<Scalars['String']>
  externalTransactionId?: Maybe<Scalars['ID']>
  paymentMethodType?: Maybe<PaymentMethodType>
  refundTransactionId?: Maybe<Scalars['ID']>
  sourcePaymentProfileId?: Maybe<Scalars['String']>
  status?: Maybe<FinancialTransactionStatus>
  transactionFee?: Maybe<Scalars['Float']>
}

export enum FinancialTransactionStatus {
  CANCELLED = 'CANCELLED',
  FAILED = 'FAILED',
  PENDING = 'PENDING',
  REFUNDED = 'REFUNDED',
  REFUND_FAILED = 'REFUND_FAILED',
  REFUND_PENDING = 'REFUND_PENDING',
  SUCCEEDED = 'SUCCEEDED'
}

export interface FinancialTransactionsResult {
  __typename?: 'FinancialTransactionsResult'
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>
  pageInfo?: Maybe<PageInfo>
  results: Array<Maybe<FinancialTransaction>>
  total: Scalars['Int']
}

export interface FindMeEndpoint {
  __typename?: 'FindMeEndpoint'
  ringUserDevice?: Maybe<Scalars['Boolean']>
  timeout?: Maybe<Scalars['Int']>
  toNumber?: Maybe<Scalars['String']>
}

export interface FindMeEndpointInput {
  ringUserDevice?: Maybe<Scalars['Boolean']>
  timeout?: Maybe<Scalars['Int']>
  toNumber?: Maybe<Scalars['String']>
}

export interface FindMeFollowMeCallHandling {
  __typename?: 'FindMeFollowMeCallHandling'
  findMeEndpoints?: Maybe<Array<Maybe<FindMeEndpoint>>>
  timeoutType?: Maybe<CallHandlingType>
}

export interface FindMeFollowMeCallHandlingInput {
  findMeEndpoints?: Maybe<Array<Maybe<FindMeEndpointInput>>>
  timeoutType?: Maybe<CallHandlingType>
}

/** The UserAuth object containing the authenticated user, a JWT token, and a success boolean */
export interface ForgotPasswordResponse {
  __typename?: 'ForgotPasswordResponse'
  /** A code to authenticate the reset of a user's password */
  forgotPasswordCode?: Maybe<Scalars['String']>
  /** A message to specify the status of an api request */
  message?: Maybe<Scalars['String']>
  /** If true, the user is authenticated */
  success: Scalars['Boolean']
}

export interface Form477Report {
  __typename?: 'Form477Report'
  pageInfo?: Maybe<PageInfo>
  records: Array<Maybe<Form477ReportRecord>>
}

export interface Form477ReportRecord {
  __typename?: 'Form477ReportRecord'
  advertisedDownstreamBandwidth?: Maybe<Scalars['Float']>
  advertisedUpstreamBandwidth?: Maybe<Scalars['Float']>
  company?: Maybe<Scalars['String']>
  consumerConnections?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['Int']>
  subdivision?: Maybe<Scalars['String']>
  technologyOfTransmission?: Maybe<Scalars['Int']>
  totalConnections?: Maybe<Scalars['Int']>
  tract?: Maybe<Scalars['String']>
}

export interface FundingApplication {
  __typename?: 'FundingApplication'
  address?: Maybe<Address>
  aerialInstallationRange?: Maybe<Array<Maybe<Scalars['String']>>>
  anticipatedGrantsSources?: Maybe<Array<Maybe<Scalars['String']>>>
  anticipatedGrantsSourcesInput?: Maybe<Scalars['String']>
  applicantFederalDeliquent?: Maybe<Scalars['Boolean']>
  applicantId?: Maybe<Scalars['String']>
  applicantType?: Maybe<Scalars['String']>
  applicationSubjectToStateReviewUnderExecutiveOrder12372?: Maybe<Scalars['String']>
  applicationTitle?: Maybe<Scalars['String']>
  applicationType?: Maybe<Scalars['String']>
  arpuInput?: Maybe<Scalars['String']>
  arpuInputRange?: Maybe<Array<Maybe<Scalars['String']>>>
  attestation?: Maybe<Scalars['String']>
  authorizedRepresentative?: Maybe<Scalars['Boolean']>
  broadbandConstructionTypes?: Maybe<Array<Maybe<Scalars['String']>>>
  broadbandConstructionTypesInput?: Maybe<Scalars['String']>
  broadbandOperationsExperience?: Maybe<Scalars['String']>
  bssOssUpgrade?: Maybe<Scalars['Boolean']>
  businessTime?: Maybe<Scalars['String']>
  churnRateRange?: Maybe<Array<Maybe<Scalars['String']>>>
  communityBeenEngaged?: Maybe<Scalars['String']>
  communitySupportLetter?: Maybe<Scalars['Boolean']>
  companiesPartnersNames?: Maybe<Scalars['String']>
  competitionIdNumber?: Maybe<Scalars['String']>
  competitors?: Maybe<Scalars['String']>
  congressionalDistrictsApplicant?: Maybe<Array<Maybe<Scalars['String']>>>
  congressionalDistrictsProgram?: Maybe<Array<Maybe<Scalars['String']>>>
  contactEmail?: Maybe<Scalars['String']>
  contactFax?: Maybe<Scalars['String']>
  contactFirstName?: Maybe<Scalars['String']>
  contactLastName?: Maybe<Scalars['String']>
  contactOrganizationAffiliation?: Maybe<Scalars['String']>
  contactPhone?: Maybe<Scalars['String']>
  contactPoint?: Maybe<Scalars['Boolean']>
  contactPrefix?: Maybe<Scalars['String']>
  contactSuffix?: Maybe<Scalars['String']>
  contactTitle?: Maybe<Scalars['String']>
  costEstimates?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['Date']>
  dateReceived?: Maybe<Scalars['Date']>
  debtEquityFinancing?: Maybe<Array<Maybe<Scalars['String']>>>
  debtEquityFinancingInput?: Maybe<Scalars['String']>
  differentiateFromCompetition?: Maybe<Scalars['String']>
  donationsAmountRange?: Maybe<Array<Maybe<Scalars['String']>>>
  donationsSources?: Maybe<Scalars['String']>
  einTnNumber?: Maybe<Scalars['String']>
  entityTypes?: Maybe<Array<Maybe<Scalars['String']>>>
  entityTypesInput?: Maybe<Scalars['String']>
  environmentalIdentified?: Maybe<Scalars['Boolean']>
  estimatedApplicantFunding?: Maybe<Scalars['Float']>
  estimatedFederalFunding?: Maybe<Scalars['Float']>
  estimatedFundingTotal?: Maybe<Scalars['Float']>
  estimatedLocalFunding?: Maybe<Scalars['Float']>
  estimatedOtherFunding?: Maybe<Scalars['Float']>
  estimatedProgramIncomeFunding?: Maybe<Scalars['Float']>
  estimatedStateFunding?: Maybe<Scalars['Float']>
  evidenceEconomicallyDisadvantagedArea?: Maybe<Scalars['String']>
  existingNetwork?: Maybe<Scalars['String']>
  familiarMatchCapital?: Maybe<Scalars['Boolean']>
  federalAgencyName?: Maybe<Scalars['String']>
  federalAwardId?: Maybe<Scalars['String']>
  federalDomesticAssistanceNumber?: Maybe<Scalars['String']>
  federalEntityId?: Maybe<Scalars['String']>
  fileNames?: Maybe<Array<Maybe<Scalars['String']>>>
  financingPartnersType?: Maybe<Scalars['String']>
  fundingOpportunityNumber?: Maybe<Scalars['String']>
  fundingSoughtEstimateRange?: Maybe<Array<Maybe<Scalars['String']>>>
  fundingWonRange?: Maybe<Array<Maybe<Scalars['String']>>>
  gaugeDemandSurveys?: Maybe<Scalars['String']>
  geographicalCoverage?: Maybe<Scalars['String']>
  handsOnPartners?: Maybe<Scalars['String']>
  haveAttestation?: Maybe<Scalars['Boolean']>
  id?: Maybe<Scalars['ID']>
  importantState?: Maybe<State>
  infraAndServicesDescription?: Maybe<Scalars['String']>
  initiatorUser?: Maybe<User>
  interestedAdvisor?: Maybe<Scalars['Boolean']>
  interestedMatchProduct?: Maybe<Scalars['Boolean']>
  interestedSubscriberServicePortal?: Maybe<Scalars['String']>
  legalName?: Maybe<Scalars['String']>
  majorInfraDescription?: Maybe<Scalars['String']>
  majorityOrSmallPartners?: Maybe<Scalars['String']>
  manageNetworkHardware?: Maybe<Scalars['String']>
  manageNetworkHardwareMulti?: Maybe<Array<Maybe<Scalars['String']>>>
  manageNetworkSoftware?: Maybe<Scalars['String']>
  marketingPlan?: Maybe<Scalars['String']>
  matchCapitalBefore?: Maybe<Scalars['Boolean']>
  matchCapitalPartnersHelp?: Maybe<Scalars['Boolean']>
  matchCapitalRange?: Maybe<Array<Maybe<Scalars['String']>>>
  matchFundingPartnersRange?: Maybe<Array<Maybe<Scalars['String']>>>
  matchFundingRange?: Maybe<Array<Maybe<Scalars['String']>>>
  middleMileInfra?: Maybe<Scalars['String']>
  monitorNetworkSoftware?: Maybe<Scalars['String']>
  monitorNetworkSoftwareMulti?: Maybe<Array<Maybe<Scalars['String']>>>
  necessaryPermitsNeeded?: Maybe<Scalars['String']>
  networkConstructedTypes?: Maybe<Array<Maybe<Scalars['String']>>>
  networkConstructedTypesInput?: Maybe<Scalars['String']>
  noHomesPassedRange?: Maybe<Array<Maybe<Scalars['String']>>>
  onboardingComplete?: Maybe<Scalars['Boolean']>
  organization?: Maybe<Organization>
  organizationDuns?: Maybe<Scalars['String']>
  organizationFoundedYear?: Maybe<Scalars['Date']>
  organizationProjectFinancing?: Maybe<Scalars['String']>
  organizationalUnit?: Maybe<Scalars['String']>
  physicalLimitations?: Maybe<Scalars['String']>
  potentialFinancingPartners?: Maybe<Scalars['Boolean']>
  preEnrollmentApplication?: Maybe<GrantApplication>
  projectCostExplain?: Maybe<Scalars['String']>
  projectScability?: Maybe<Scalars['String']>
  projectSummary?: Maybe<Scalars['String']>
  promoteJobGrowthDescription?: Maybe<Scalars['String']>
  proposedProjectEndDate?: Maybe<Scalars['Date']>
  proposedProjectStartDate?: Maybe<Scalars['Date']>
  provideBroadbandImprovements?: Maybe<Scalars['Boolean']>
  publicPrivatePartnership?: Maybe<Scalars['Boolean']>
  publishOnIsp?: Maybe<Scalars['Boolean']>
  serviceOffer?: Maybe<Array<Maybe<ServiceOffer>>>
  staffingAndTraining?: Maybe<Scalars['String']>
  startConversation?: Maybe<Scalars['Boolean']>
  startedOutreach?: Maybe<Scalars['Boolean']>
  statesServed?: Maybe<Array<Maybe<State>>>
  submissionType?: Maybe<Scalars['String']>
  subscriberBillingSoftware?: Maybe<Scalars['String']>
  subscriberBillingSoftwareMulti?: Maybe<Array<Maybe<Scalars['String']>>>
  subscriberServicePortal?: Maybe<Scalars['Boolean']>
  subscriberSignupSite?: Maybe<Scalars['String']>
  subscribersNumber?: Maybe<SubscribersNumber>
  subscribersNumberRange?: Maybe<Array<Maybe<Scalars['String']>>>
  takeRateRange?: Maybe<Array<Maybe<Scalars['String']>>>
  tenyrsNoHomesPassedRange?: Maybe<Array<Maybe<Scalars['String']>>>
  tenyrsTakeRateRange?: Maybe<Array<Maybe<Scalars['String']>>>
  totalProjectCostRange?: Maybe<Array<Maybe<Scalars['String']>>>
  undergroundInstallationRange?: Maybe<Array<Maybe<Scalars['String']>>>
  updatedAt?: Maybe<Scalars['Date']>
  websitePricePage?: Maybe<Scalars['String']>
  workWithAdvisor?: Maybe<Scalars['Boolean']>
  workingAdvisor?: Maybe<Scalars['String']>
  zones?: Maybe<Array<Maybe<Zone>>>
}

export interface FundingApplicationInput {
  address?: Maybe<AddressInput>
  aerialInstallationRange?: Maybe<Array<Maybe<Scalars['String']>>>
  anticipatedGrantsSources?: Maybe<Array<Maybe<Scalars['String']>>>
  anticipatedGrantsSourcesInput?: Maybe<Scalars['String']>
  applicantFederalDeliquent?: Maybe<Scalars['Boolean']>
  applicantId?: Maybe<Scalars['String']>
  applicantType?: Maybe<Scalars['String']>
  applicationSubjectToStateReviewUnderExecutiveOrder12372?: Maybe<Scalars['String']>
  applicationTitle?: Maybe<Scalars['String']>
  applicationType?: Maybe<Scalars['String']>
  arpuInput?: Maybe<Scalars['String']>
  arpuInputRange?: Maybe<Array<Maybe<Scalars['String']>>>
  attestation?: Maybe<Scalars['String']>
  authorizedRepresentative?: Maybe<Scalars['Boolean']>
  broadbandConstructionTypes?: Maybe<Array<Maybe<Scalars['String']>>>
  broadbandConstructionTypesInput?: Maybe<Scalars['String']>
  broadbandOperationsExperience?: Maybe<Scalars['String']>
  bssOssUpgrade?: Maybe<Scalars['Boolean']>
  businessTime?: Maybe<Scalars['String']>
  churnRateRange?: Maybe<Array<Maybe<Scalars['String']>>>
  communityBeenEngaged?: Maybe<Scalars['String']>
  communitySupportLetter?: Maybe<Scalars['Boolean']>
  companiesPartnersNames?: Maybe<Scalars['String']>
  competitionIdNumber?: Maybe<Scalars['String']>
  competitors?: Maybe<Scalars['String']>
  congressionalDistrictsApplicant?: Maybe<Array<Maybe<Scalars['String']>>>
  congressionalDistrictsProgram?: Maybe<Array<Maybe<Scalars['String']>>>
  contactEmail?: Maybe<Scalars['String']>
  contactFax?: Maybe<Scalars['String']>
  contactFirstName?: Maybe<Scalars['String']>
  contactLastName?: Maybe<Scalars['String']>
  contactOrganizationAffiliation?: Maybe<Scalars['String']>
  contactPhone?: Maybe<Scalars['String']>
  contactPoint?: Maybe<Scalars['Boolean']>
  contactPrefix?: Maybe<Scalars['String']>
  contactSuffix?: Maybe<Scalars['String']>
  contactTitle?: Maybe<Scalars['String']>
  costEstimates?: Maybe<Scalars['String']>
  dateReceived?: Maybe<Scalars['Date']>
  debtEquityFinancing?: Maybe<Array<Maybe<Scalars['String']>>>
  debtEquityFinancingInput?: Maybe<Scalars['String']>
  differentiateFromCompetition?: Maybe<Scalars['String']>
  donationsAmountRange?: Maybe<Array<Maybe<Scalars['String']>>>
  donationsSources?: Maybe<Scalars['String']>
  einTnNumber?: Maybe<Scalars['String']>
  entityTypes?: Maybe<Array<Maybe<Scalars['String']>>>
  entityTypesInput?: Maybe<Scalars['String']>
  environmentalIdentified?: Maybe<Scalars['Boolean']>
  estimatedApplicantFunding?: Maybe<Scalars['Float']>
  estimatedFederalFunding?: Maybe<Scalars['Float']>
  estimatedFundingTotal?: Maybe<Scalars['Float']>
  estimatedLocalFunding?: Maybe<Scalars['Float']>
  estimatedOtherFunding?: Maybe<Scalars['Float']>
  estimatedProgramIncomeFunding?: Maybe<Scalars['Float']>
  estimatedStateFunding?: Maybe<Scalars['Float']>
  evidenceEconomicallyDisadvantagedArea?: Maybe<Scalars['String']>
  existingNetwork?: Maybe<Scalars['String']>
  familiarMatchCapital?: Maybe<Scalars['Boolean']>
  federalAgencyName?: Maybe<Scalars['String']>
  federalAwardId?: Maybe<Scalars['String']>
  federalDomesticAssistanceNumber?: Maybe<Scalars['String']>
  federalEntityId?: Maybe<Scalars['String']>
  financingPartnersType?: Maybe<Scalars['String']>
  fundingOpportunityNumber?: Maybe<Scalars['String']>
  fundingSoughtEstimateRange?: Maybe<Array<Maybe<Scalars['String']>>>
  fundingWonRange?: Maybe<Array<Maybe<Scalars['String']>>>
  gaugeDemandSurveys?: Maybe<Scalars['String']>
  geographicalCoverage?: Maybe<Scalars['String']>
  handsOnPartners?: Maybe<Scalars['String']>
  haveAttestation?: Maybe<Scalars['Boolean']>
  importantState?: Maybe<State>
  infraAndServicesDescription?: Maybe<Scalars['String']>
  interestedAdvisor?: Maybe<Scalars['Boolean']>
  interestedMatchProduct?: Maybe<Scalars['Boolean']>
  interestedSubscriberServicePortal?: Maybe<Scalars['String']>
  legalName?: Maybe<Scalars['String']>
  majorInfraDescription?: Maybe<Scalars['String']>
  majorityOrSmallPartners?: Maybe<Scalars['String']>
  manageNetworkHardware?: Maybe<Scalars['String']>
  manageNetworkHardwareMulti?: Maybe<Array<Maybe<Scalars['String']>>>
  manageNetworkSoftware?: Maybe<Scalars['String']>
  marketingPlan?: Maybe<Scalars['String']>
  matchCapitalBefore?: Maybe<Scalars['Boolean']>
  matchCapitalPartnersHelp?: Maybe<Scalars['Boolean']>
  matchCapitalRange?: Maybe<Array<Maybe<Scalars['String']>>>
  matchFundingPartnersRange?: Maybe<Array<Maybe<Scalars['String']>>>
  matchFundingRange?: Maybe<Array<Maybe<Scalars['String']>>>
  middleMileInfra?: Maybe<Scalars['String']>
  monitorNetworkSoftware?: Maybe<Scalars['String']>
  monitorNetworkSoftwareMulti?: Maybe<Array<Maybe<Scalars['String']>>>
  necessaryPermitsNeeded?: Maybe<Scalars['String']>
  networkConstructedTypes?: Maybe<Array<Maybe<Scalars['String']>>>
  networkConstructedTypesInput?: Maybe<Scalars['String']>
  noHomesPassedRange?: Maybe<Array<Maybe<Scalars['String']>>>
  onboardingComplete?: Maybe<Scalars['Boolean']>
  organization?: Maybe<OrganizationInput>
  organizationDuns?: Maybe<Scalars['String']>
  organizationFoundedYear?: Maybe<Scalars['Date']>
  organizationProjectFinancing?: Maybe<Scalars['String']>
  organizationalUnit?: Maybe<Scalars['String']>
  physicalLimitations?: Maybe<Scalars['String']>
  potentialFinancingPartners?: Maybe<Scalars['Boolean']>
  preEnrollmentApplication?: Maybe<GrantApplicationInput>
  projectCostExplain?: Maybe<Scalars['String']>
  projectScability?: Maybe<Scalars['String']>
  projectSummary?: Maybe<Scalars['String']>
  promoteJobGrowthDescription?: Maybe<Scalars['String']>
  proposedProjectEndDate?: Maybe<Scalars['Date']>
  proposedProjectStartDate?: Maybe<Scalars['Date']>
  provideBroadbandImprovements?: Maybe<Scalars['Boolean']>
  publicPrivatePartnership?: Maybe<Scalars['Boolean']>
  publishOnIsp?: Maybe<Scalars['Boolean']>
  removeZoneIds?: Maybe<Array<Maybe<Scalars['ID']>>>
  serviceOffer?: Maybe<Array<Maybe<ServiceOffer>>>
  staffingAndTraining?: Maybe<Scalars['String']>
  startConversation?: Maybe<Scalars['Boolean']>
  startedOutreach?: Maybe<Scalars['Boolean']>
  statesServed?: Maybe<Array<Maybe<State>>>
  submissionType?: Maybe<Scalars['String']>
  subscriberBillingSoftware?: Maybe<Scalars['String']>
  subscriberBillingSoftwareMulti?: Maybe<Array<Maybe<Scalars['String']>>>
  subscriberServicePortal?: Maybe<Scalars['Boolean']>
  subscriberSignupSite?: Maybe<Scalars['String']>
  subscribersNumber?: Maybe<SubscribersNumber>
  subscribersNumberRange?: Maybe<Array<Maybe<Scalars['String']>>>
  takeRateRange?: Maybe<Array<Maybe<Scalars['String']>>>
  tenyrsNoHomesPassedRange?: Maybe<Array<Maybe<Scalars['String']>>>
  tenyrsTakeRateRange?: Maybe<Array<Maybe<Scalars['String']>>>
  totalProjectCostRange?: Maybe<Array<Maybe<Scalars['String']>>>
  undergroundInstallationRange?: Maybe<Array<Maybe<Scalars['String']>>>
  websitePricePage?: Maybe<Scalars['String']>
  workWithAdvisor?: Maybe<Scalars['Boolean']>
  workingAdvisor?: Maybe<Scalars['String']>
  zoneIds?: Maybe<Array<Maybe<Scalars['ID']>>>
}

export enum FundingEstimate {
  dontKnow = 'dontKnow',
  fiveMillionToTwentyFiveMillion = 'fiveMillionToTwentyFiveMillion',
  hundredThounsandToOneMillion = 'hundredThounsandToOneMillion',
  oneHundredMillionPlus = 'oneHundredMillionPlus',
  oneMillionToFiveMillion = 'oneMillionToFiveMillion',
  twentyFiveMillionToOneHundredMillion = 'twentyFiveMillionToOneHundredMillion'
}

export interface FundingOrganizationInviteInput {
  email: Scalars['Email']
  firstName?: Maybe<Scalars['String']>
  lastName?: Maybe<Scalars['String']>
  permissionRoleId: Scalars['ID']
}

export interface FundingSingleMessage {
  __typename?: 'FundingSingleMessage'
  createdAt?: Maybe<Scalars['Date']>
  currentStatus?: Maybe<Scalars['String']>
  deliveredStatus?: Maybe<Scalars['Boolean']>
  errorStatus?: Maybe<Scalars['Boolean']>
  eventId: Scalars['ID']
  fromEmail?: Maybe<Scalars['String']>
  hardTemplateId?: Maybe<Scalars['String']>
  id: Scalars['ID']
  organizationId: Scalars['ID']
  recipient?: Maybe<User>
  recipientId: Scalars['ID']
  route?: Maybe<SingleMessageRoute>
  routeInfo?: Maybe<Scalars['String']>
  routeType?: Maybe<Scalars['String']>
  statusList?: Maybe<Array<Maybe<Scalars['String']>>>
  subject?: Maybe<Scalars['String']>
  templateData?: Maybe<Scalars['String']>
  type?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['Date']>
}

export enum FundingType {
  alternative = 'alternative',
  dilutive = 'dilutive',
  forwardReceivables = 'forwardReceivables',
  nonDilutive = 'nonDilutive'
}

/** Generic operation completed type */
export interface GenericResponse {
  __typename?: 'GenericResponse'
  /** The message for a generic response */
  message?: Maybe<Scalars['String']>
  /** Record ids */
  recordIds?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** If true, an api request is successful */
  success: Scalars['Boolean']
  /** Modified userIds */
  userIds?: Maybe<Array<Maybe<Scalars['ID']>>>
}

export enum GeometryType {
  segment = 'segment',
  shape = 'shape'
}

export interface GetAccountSetupCodeResponse {
  __typename?: 'GetAccountSetupCodeResponse'
  accountSetupCode?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
  success: Scalars['Boolean']
}

export interface GetIpPayReportsInput {
  amount?: Maybe<Scalars['Float']>
  merchantId?: Maybe<Scalars['ID']>
  terminalId?: Maybe<Scalars['ID']>
  transactionEndTime?: Maybe<Scalars['String']>
  transactionStartTime?: Maybe<Scalars['String']>
  transactionType?: Maybe<TransactionType>
}

export interface GrantApplication {
  __typename?: 'GrantApplication'
  applicantType?: Maybe<ApplicantType>
  createdAt?: Maybe<Scalars['Date']>
  email?: Maybe<Scalars['String']>
  fccIspId?: Maybe<Scalars['String']>
  fundingApplication?: Maybe<FundingApplication>
  fundingSoughtEstimate?: Maybe<FundingEstimate>
  fundingTypes?: Maybe<Array<Maybe<FundingType>>>
  hearAbout?: Maybe<Scalars['String']>
  howMuchExactly?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['ID']>
  interestedInFunding?: Maybe<Scalars['Boolean']>
  matchFunding?: Maybe<Scalars['Boolean']>
  name?: Maybe<Scalars['String']>
  organizationName?: Maybe<Scalars['String']>
  phone?: Maybe<Scalars['String']>
  rejected?: Maybe<Scalars['Boolean']>
  someWhereElseName?: Maybe<Scalars['String']>
  states?: Maybe<Array<Maybe<State>>>
  title?: Maybe<Scalars['String']>
  website?: Maybe<Scalars['String']>
}

export interface GrantApplicationInput {
  applicantType?: Maybe<ApplicantType>
  email?: Maybe<Scalars['String']>
  fccIspId?: Maybe<Scalars['String']>
  fundingSoughtEstimate?: Maybe<FundingEstimate>
  fundingTypes?: Maybe<Array<Maybe<FundingType>>>
  hearAbout?: Maybe<Scalars['String']>
  howMuchExactly?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['ID']>
  interestedInFunding?: Maybe<Scalars['Boolean']>
  matchFunding?: Maybe<Scalars['Boolean']>
  name?: Maybe<Scalars['String']>
  organizationName?: Maybe<Scalars['String']>
  phone?: Maybe<Scalars['String']>
  rejected?: Maybe<Scalars['Boolean']>
  someWhereElseName?: Maybe<Scalars['String']>
  source?: Maybe<GrantApplicationSource>
  states?: Maybe<Array<Maybe<State>>>
  title?: Maybe<Scalars['String']>
  website?: Maybe<Scalars['String']>
}

export interface GrantApplicationResult {
  __typename?: 'GrantApplicationResult'
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>
  pageInfo?: Maybe<PageInfo>
  results: Array<Maybe<GrantApplication>>
}

export enum GrantApplicationSource {
  BBM = 'BBM',
  DIRECT_API = 'DIRECT_API'
}

export enum GrowDrawType {
  line = 'line',
  point = 'point',
  polygon = 'polygon'
}

export interface GrowFilter {
  __typename?: 'GrowFilter'
  condition?: Maybe<Scalars['String']>
  coordinates?: Maybe<Array<Maybe<Scalars['String']>>>
  createdAt: Scalars['Date']
  drawType?: Maybe<GrowDrawType>
  filterField?: Maybe<Scalars['String']>
  filterType: GrowFilterType
  id: Scalars['ID']
  lowerBound?: Maybe<Scalars['Float']>
  radius?: Maybe<Scalars['Float']>
  unit?: Maybe<Scalars['String']>
  upload?: Maybe<Scalars['Boolean']>
  upperBound?: Maybe<Scalars['Float']>
  value?: Maybe<Array<Maybe<Scalars['String']>>>
}

export interface GrowFilterInput {
  condition?: Maybe<Scalars['String']>
  coordinates?: Maybe<Array<Maybe<Scalars['String']>>>
  drawType?: Maybe<GrowDrawType>
  filterField?: Maybe<Scalars['String']>
  filterType: GrowFilterType
  lowerBound?: Maybe<Scalars['Float']>
  radius?: Maybe<Scalars['Float']>
  unit?: Maybe<Scalars['String']>
  upload?: Maybe<Scalars['Boolean']>
  upperBound?: Maybe<Scalars['Float']>
  value?: Maybe<Array<Maybe<Scalars['String']>>>
}

export enum GrowFilterType {
  general = 'general',
  range = 'range',
  shape = 'shape'
}

export interface GrowSegment {
  __typename?: 'GrowSegment'
  createdAt: Scalars['Date']
  growFilters: GrowFilter[]
  id?: Maybe<Scalars['ID']>
  name: Scalars['String']
}

export interface GrowSegmentInput {
  growFilters: GrowFilterInput[]
  name: Scalars['String']
  organizationId: Scalars['ID']
}

export enum IdentificationType {
  SSN = 'SSN',
  TRIBAL_ID = 'TRIBAL_ID'
}

/** Industries for business accounts */
export enum Industry {
  ACCOMMODATION_AND_FOOD_SERVICES = 'ACCOMMODATION_AND_FOOD_SERVICES',
  ADMINISTRATIVE_AND_SUPPORT_AND_WASTE_MANAGEMENT = 'ADMINISTRATIVE_AND_SUPPORT_AND_WASTE_MANAGEMENT',
  AGRICULTURE_FORESTRY_FISHING_AND_HUNTING = 'AGRICULTURE_FORESTRY_FISHING_AND_HUNTING',
  ARTS_ENTERTAINMENT_AND_RECREATION = 'ARTS_ENTERTAINMENT_AND_RECREATION',
  CONSTRUCTION = 'CONSTRUCTION',
  EDUCATIONAL_SERVICES = 'EDUCATIONAL_SERVICES',
  FINANCE_AND_INSURANCE = 'FINANCE_AND_INSURANCE',
  HEALTH_CARE_AND_SOCIAL_ASSISTANCE = 'HEALTH_CARE_AND_SOCIAL_ASSISTANCE',
  INFORMATION = 'INFORMATION',
  MANUFACTURING = 'MANUFACTURING',
  NOT_KNOWN = 'NOT_KNOWN',
  OTHER_SERVICES = 'OTHER_SERVICES',
  PROFESSIONAL_SCIENTIFIC_AND_TECHNICAL = 'PROFESSIONAL_SCIENTIFIC_AND_TECHNICAL',
  PUBLIC_ADMINISTRATION = 'PUBLIC_ADMINISTRATION',
  REAL_ESTATE_RENTAL_AND_LEASING = 'REAL_ESTATE_RENTAL_AND_LEASING',
  RETAIL = 'RETAIL',
  TRANSPORTATION_AND_WAREHOUSING = 'TRANSPORTATION_AND_WAREHOUSING',
  UTILITIES = 'UTILITIES',
  WHOLESALE_TRADE = 'WHOLESALE_TRADE'
}

export interface InvoiceItem {
  __typename?: 'InvoiceItem'
  amountDue: Scalars['Float']
  credit?: Maybe<Credit>
  description?: Maybe<Scalars['String']>
  discountAmount?: Maybe<Scalars['Float']>
  discountPercentage?: Maybe<Scalars['Float']>
  display?: Maybe<Scalars['Boolean']>
  financialTransaction?: Maybe<FinancialTransaction>
  id: Scalars['ID']
  name: Scalars['String']
  price: Scalars['Float']
  quantity?: Maybe<Scalars['Int']>
  taxAmount?: Maybe<Scalars['Float']>
  taxRate?: Maybe<Scalars['Float']>
  type?: Maybe<InvoiceItemType>
}

export enum InvoiceItemType {
  ADDON = 'ADDON',
  CREDIT = 'CREDIT',
  DISCOUNT = 'DISCOUNT',
  PAYMENT = 'PAYMENT',
  PLAN = 'PLAN',
  PREVIOUS_BALANCE = 'PREVIOUS_BALANCE',
  PRORATION = 'PRORATION'
}

export enum InvoiceMethod {
  electronic = 'electronic',
  email = 'email',
  paper = 'paper',
  sms = 'sms'
}

export interface InvoiceReport {
  __typename?: 'InvoiceReport'
  invoices: InvoicesResult
}

export enum InvoiceStatus {
  draft = 'draft',
  open = 'open',
  paid = 'paid',
  uncollectible = 'uncollectible',
  void = 'void'
}

export interface InvoicesResult {
  __typename?: 'InvoicesResult'
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>
  pageInfo?: Maybe<PageInfo>
  results: Array<Maybe<SubscriberInvoice>>
  total: Scalars['Int']
}

/** Data source where lead was found */
export enum LeadSource {
  ISP = 'ISP',
  READY = 'READY',
  THIRD_PARTY = 'THIRD_PARTY'
}

export interface Line {
  __typename?: 'Line'
  createdAt?: Maybe<Scalars['Date']>
  geometryCoordinates?: Maybe<Array<Maybe<Scalars['String']>>>
  geometryType?: Maybe<GeometryType>
  id?: Maybe<Scalars['ID']>
  lineType?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  organization?: Maybe<Organization>
}

export enum LineType {
  distribution = 'distribution',
  drop = 'drop',
  looseTube = 'looseTube',
  transport = 'transport'
}

export interface LinesResult {
  __typename?: 'LinesResult'
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>
  pageInfo?: Maybe<PageInfo>
  results: Array<Maybe<Line>>
  total: Scalars['Int']
}

export interface LobConfidenceScore {
  __typename?: 'LobConfidenceScore'
  level?: Maybe<Scalars['String']>
  score?: Maybe<Scalars['Float']>
}

export interface Location {
  __typename?: 'Location'
  lat?: Maybe<Scalars['Float']>
  lon?: Maybe<Scalars['Float']>
}

export interface LocationInput {
  lat?: Maybe<Scalars['Float']>
  lon?: Maybe<Scalars['Float']>
}

export interface LoginInput {
  email: Scalars['Email']
  mfaCode?: Maybe<Scalars['String']>
  password: Scalars['Password']
}

export interface MapView {
  __typename?: 'MapView'
  createdAt?: Maybe<Scalars['Date']>
  id: Scalars['ID']
  lat?: Maybe<Scalars['Float']>
  lon?: Maybe<Scalars['Float']>
  precision?: Maybe<Scalars['Float']>
  updatedAt?: Maybe<Scalars['Date']>
}

export interface MapViewInput {
  lat?: Maybe<Scalars['Float']>
  lon?: Maybe<Scalars['Float']>
  precision?: Maybe<Scalars['Float']>
}

export interface Message {
  __typename?: 'Message'
  Sender?: Maybe<Scalars['ID']>
  customTemplate?: Maybe<MessageTemplate>
  hardTemplateName?: Maybe<Scalars['String']>
  organizationId?: Maybe<Scalars['ID']>
  origin?: Maybe<Scalars['String']>
  recipientIds: Array<Maybe<Scalars['ID']>>
  route?: Maybe<Scalars['String']>
  savedTemplateId?: Maybe<Scalars['ID']>
  savedTemplateName?: Maybe<Scalars['String']>
  variables?: Maybe<Scalars['String']>
}

export interface MessageDashboardOverviewResult {
  __typename?: 'MessageDashboardOverviewResult'
  emailMessages?: Maybe<Array<Maybe<SingleMessage>>>
  emailTotals?: Maybe<MessageEventResultsTotals>
  messageEvents?: Maybe<Array<Maybe<MessageEventInfo>>>
  messagingTotals?: Maybe<MessagingTotals>
  routeTotals?: Maybe<RouteTotals>
  smsMessages?: Maybe<Array<Maybe<SingleMessage>>>
  smsTotals?: Maybe<SmsTotalsResults>
}

export interface MessageEvent {
  __typename?: 'MessageEvent'
  createdAt?: Maybe<Scalars['Date']>
  deliveredRate?: Maybe<Scalars['Int']>
  emailErrorCount?: Maybe<Scalars['Int']>
  emailTotals?: Maybe<MessageEventResultsTotals>
  errorFlag?: Maybe<Scalars['Boolean']>
  fromEmail?: Maybe<Scalars['String']>
  fromNumber?: Maybe<Scalars['String']>
  hardTemplateId?: Maybe<Scalars['String']>
  hardTemplateName?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
  initiator?: Maybe<User>
  initiatorId?: Maybe<Scalars['ID']>
  messageTemplateId?: Maybe<Scalars['String']>
  organizationId?: Maybe<Scalars['ID']>
  recipients?: Maybe<Array<Maybe<MessageEventsUser>>>
  route?: Maybe<Scalars['String']>
  routeCount?: Maybe<RouteCount>
  routeInfo?: Maybe<Scalars['String']>
  routeType?: Maybe<Scalars['String']>
  sentFrom?: Maybe<Scalars['String']>
  smsErrorCount?: Maybe<Scalars['Int']>
  smsTotals?: Maybe<SmsTotalsResults>
  subject?: Maybe<Scalars['String']>
  templateData?: Maybe<Scalars['String']>
  textBody?: Maybe<Scalars['String']>
  totalErrors?: Maybe<Scalars['Int']>
  updatedAt?: Maybe<Scalars['Date']>
}

export interface MessageEventData {
  __typename?: 'MessageEventData'
  recipientsData: Array<Maybe<MessageEventsUser>>
  sgEvents: MessageEventResultsTotals
}

export interface MessageEventInfo {
  __typename?: 'MessageEventInfo'
  createdAt?: Maybe<Scalars['Date']>
  emailCount?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['Int']>
  messageCount?: Maybe<Scalars['Int']>
  smsCount?: Maybe<Scalars['Int']>
}

export interface MessageEventResultsTotals {
  __typename?: 'MessageEventResultsTotals'
  bounce?: Maybe<Scalars['Int']>
  click?: Maybe<Scalars['Int']>
  deferred?: Maybe<Scalars['Int']>
  delivered?: Maybe<Scalars['Int']>
  dropped?: Maybe<Scalars['Int']>
  group_resubscribe?: Maybe<Scalars['Int']>
  group_unsubscribe?: Maybe<Scalars['Int']>
  open?: Maybe<Scalars['Int']>
  processed?: Maybe<Scalars['Int']>
  spamreport?: Maybe<Scalars['Int']>
  unsubscribe?: Maybe<Scalars['Int']>
}

export interface MessageEventsOverviewResult {
  __typename?: 'MessageEventsOverviewResult'
  emailEventData?: Maybe<EmailEventData>
  messagingTotals?: Maybe<MessagingTotals>
  smsEventData?: Maybe<SmsEventData>
}

export interface MessageEventsResult {
  __typename?: 'MessageEventsResult'
  results?: Maybe<Array<Maybe<MessageEvent>>>
}

export interface MessageEventsUser {
  __typename?: 'MessageEventsUser'
  messageStatus?: Maybe<Scalars['String']>
  route?: Maybe<Scalars['String']>
  user?: Maybe<User>
}

export interface MessageInput {
  bulkSelection?: Maybe<BulkSelection>
  cronString?: Maybe<Scalars['String']>
  customTemplate?: Maybe<MessageTemplateInput>
  hardTemplateName?: Maybe<Scalars['String']>
  /** Overides unsubscribe groups */
  isUrgent?: Maybe<Scalars['Boolean']>
  organizationId?: Maybe<Scalars['ID']>
  recipientIds?: Maybe<Array<Maybe<Scalars['ID']>>>
  route?: Maybe<MessageRoute>
  savedTemplateId?: Maybe<Scalars['ID']>
  savedTemplateName?: Maybe<Scalars['String']>
  sendAt?: Maybe<Scalars['Date']>
  variables?: Maybe<Scalars['String']>
}

export interface MessagePathTemplate {
  __typename?: 'MessagePathTemplate'
  back?: Maybe<Scalars['String']>
  body?: Maybe<Scalars['String']>
  file?: Maybe<Scalars['String']>
  from?: Maybe<Scalars['String']>
  front?: Maybe<Scalars['String']>
  html?: Maybe<Scalars['String']>
  replyTo?: Maybe<Scalars['String']>
  subject?: Maybe<Scalars['String']>
  to?: Maybe<Scalars['String']>
}

export interface MessagePathTemplateInput {
  /** postcard back html */
  back?: Maybe<Scalars['String']>
  /** sms text, notificatioon text */
  body?: Maybe<Scalars['String']>
  /** mail html */
  file?: Maybe<Scalars['String']>
  /** email: email address, sms: phone number, mail: JSON of address */
  from?: Maybe<Scalars['String']>
  /** Used for mail */
  fromCompany?: Maybe<Scalars['String']>
  /** potscard front html */
  front?: Maybe<Scalars['String']>
  /** email html */
  html?: Maybe<Scalars['String']>
  replyTo?: Maybe<Scalars['String']>
  /** email subject text, notification subject text */
  subject?: Maybe<Scalars['String']>
  to?: Maybe<Scalars['String']>
}

/** Message is the object created when a message is sent and stored in events */
export enum MessageRoute {
  /** email and sms */
  all = 'all',
  email = 'email',
  mail = 'mail',
  /** notification displayed in Subscriber Portal */
  notification = 'notification',
  postcard = 'postcard',
  /** email or sms */
  preferred = 'preferred',
  sms = 'sms'
}

export interface MessageRouteResult {
  __typename?: 'MessageRouteResult'
  email?: Maybe<Array<Maybe<User>>>
  mail?: Maybe<Array<Maybe<User>>>
  outstanding?: Maybe<Array<Maybe<User>>>
  postcard?: Maybe<Array<Maybe<User>>>
  route: MessageRoute
  sms?: Maybe<Array<Maybe<User>>>
}

export interface MessageTemplate {
  __typename?: 'MessageTemplate'
  description: Scalars['String']
  emailTemplate?: Maybe<MessagePathTemplate>
  id: Scalars['ID']
  mailTemplate?: Maybe<MessagePathTemplate>
  name: Scalars['String']
  notificationTemplate?: Maybe<MessagePathTemplate>
  organizationId?: Maybe<Scalars['ID']>
  postcardTemplate?: Maybe<MessagePathTemplate>
  smsTemplate?: Maybe<MessagePathTemplate>
  supportedRoutes: Scalars['String']
  /** Used for subscription groups */
  type?: Maybe<MessageType>
  /** JSON of variable types. Supported types : [ string, plan, service, discount, credit ]. Ex. { 'mainPlan': 'plan', 'greeting': 'string', 'promotedDiscount': 'discount } */
  variableTypes: Scalars['String']
}

export interface MessageTemplateInput {
  emailTemplate: EmailTemplateInput
  smsTemplate: SmsTemplateInput
}

export enum MessageTemplateType {
  custom = 'custom',
  sampleMessage = 'sampleMessage'
}

export enum MessageType {
  billing = 'billing',
  marketing = 'marketing',
  outage = 'outage',
  system = 'system'
}

export interface MessagingTotals {
  __typename?: 'MessagingTotals'
  emailCount?: Maybe<Scalars['Int']>
  emailDelivered?: Maybe<Scalars['Int']>
  emailErrorCount?: Maybe<Scalars['Int']>
  emailEvents?: Maybe<Scalars['Int']>
  eventsCount?: Maybe<Scalars['Int']>
  messageCount?: Maybe<Scalars['Int']>
  smsCount?: Maybe<Scalars['Int']>
  smsDelivered?: Maybe<Scalars['Int']>
  smsErrorCount?: Maybe<Scalars['Int']>
  smsEvents?: Maybe<Scalars['Int']>
  totalError?: Maybe<Scalars['Int']>
}

export interface Mutation {
  __typename?: 'Mutation'
  addInvoiceNoteByUserIds: Array<Maybe<Note>>
  addInvoiceNotes: Array<Maybe<Note>>
  addNote: Note
  addOrganizationPermission: OrganizationPermission
  addOrganizationPermissionByEmail: OrganizationPermission
  addPaymentMethod: Scalars['String']
  addPermissionRole: GenericResponse
  addTags: GenericResponse
  addTagsToPlans: GenericResponse
  cancelPayment: GenericResponse
  cancelSubscription: GenericResponse
  chargeSubscriber: FinancialTransaction
  completeAccountSetup: UserAuth
  completeAdditionalServiceSetup: GenericResponse
  createAcpConfig?: Maybe<AcpConfig>
  createAddon: Addon
  createAvalaraExemptions: GenericResponse
  createAvalaraSettings: GenericResponse
  createChildSubscriber: User
  createCombinedInvoicesPdf: Scalars['String']
  createCredit: GenericResponse
  createCsv?: Maybe<Scalars['Boolean']>
  createCsvReports?: Maybe<Scalars['Boolean']>
  createDiscount: Discount
  createDwollaBeneficialOwner: GenericResponse
  createEquipment: Equipment
  createFinancialTransaction: Array<Maybe<FinancialTransaction>>
  createFundingApplication: FundingApplication
  createFundingOrganization: Organization
  createGrantApplication: GenericResponse
  createIPPayToken: GenericResponse
  createInvoice: SubscriberInvoice
  createLine: Line
  createMessageTemplate: MessageTemplate
  createOrganization: Organization
  createPayment: GenericResponse
  createPaymentAccount: GenericResponse
  createPaymentProfile: PaymentProfile
  createPlan: Plan
  createReasonCodes: Array<Maybe<ReasonCode>>
  createReferralSources: Array<Maybe<ReferralSource>>
  createRefund: GenericResponse
  createReturnCheck: GenericResponse
  createSaasSubscription: CreateSaasSubscriptionResponse
  createSegment: Segment
  createService: Service
  createSignedPdf: GenericResponse
  createSubscriber: UserAuth
  createSubscription: Subscription
  createTag: Tag
  createTax?: Maybe<GenericResponse>
  createTodaysCombinedInvoicesPdf: Scalars['String']
  createTower: Tower
  createUser: UserAuth
  createZone: Zone
  deleteAddon: GenericResponse
  deleteAvalaraExemptions: GenericResponse
  deleteCredit: GenericResponse
  deleteDiscount: GenericResponse
  deleteDwollaBeneficialOwner: GenericResponse
  deleteEquipment: GenericResponse
  deleteFundingApplication: GenericResponse
  deleteGrantApplication: GenericResponse
  deleteGrowSegment: GenericResponse
  deleteInvoice: GenericResponse
  deleteLine: GenericResponse
  deleteMessageTemplate: GenericResponse
  deleteOrganization: GenericResponse
  deleteOrganizationPermission: GenericResponse
  deletePaymentMethod: GenericResponse
  deletePermissionRole: GenericResponse
  deletePlan: GenericResponse
  deleteReasonCodes: GenericResponse
  deleteReferralSources: GenericResponse
  deleteSegment: GenericResponse
  deleteService: GenericResponse
  deleteSubscription: GenericResponse
  deleteTag: GenericResponse
  deleteTaxes?: Maybe<Array<Maybe<Tax>>>
  deleteTower: GenericResponse
  deleteUser: GenericResponse
  deleteZone: GenericResponse
  disablePaymentProfile: PaymentProfile
  downloadInvoice: Scalars['String']
  forgotPassword: ForgotPasswordResponse
  handlePaymentEvents: GenericResponse
  importCalixCms?: Maybe<GenericResponse>
  importCalixTrapAlarm?: Maybe<GenericResponse>
  importMosaicRecords?: Maybe<GenericResponse>
  magicLinkAuth: UserAuth
  onboardOrganizationPayment: PaymentUserAccount
  onboardSubscriberPayment: PaymentUserAccount
  regenerateCurrentInvoice: GenericResponse
  removeChildSubscription: GenericResponse
  removeInvoiceNote: GenericResponse
  removeTags: GenericResponse
  removeTagsFromPlans: GenericResponse
  resendAccountSetup: GenericResponse
  resendFundingInvite: GenericResponse
  resetPassword: GenericResponse
  resumeBilling: GenericResponse
  rstAddData: GenericResponse
  saveGrowSegment: GrowSegment
  seenNotification?: Maybe<GenericResponse>
  sendFundingWelcomeEmail: GenericResponse
  sendInvoice: GenericResponse
  sendMagicLink: GenericResponse
  sendMessage: GenericResponse
  sendWelcomeEmail: GenericResponse
  setDefaultMapView: GenericResponse
  setupMfa: SetupMfaResult
  submitAcpApplication: AcpApplicationResponse
  suspendBilling: GenericResponse
  unsubscribeUserNotifications: GenericResponse
  updateAcpConfig?: Maybe<AcpConfig>
  updateAddon: Array<Maybe<Addon>>
  updateAlianzaConfig: GenericResponse
  updateAvalaraExemptions: GenericResponse
  updateDiscount: Array<Maybe<Discount>>
  updateEquipment: Equipment
  updateFinancialTransaction: Array<Maybe<FinancialTransaction>>
  updateFundingApplication: FundingApplication
  updateGrantApplication: GrantApplication
  updateInvoice: Array<Maybe<SubscriberInvoice>>
  updateMessageTemplate: MessageTemplate
  updateNote: Note
  updateOrganization: Array<Maybe<Organization>>
  updateOrganizationPermission: OrganizationPermission
  updatePaymentMethod: GenericResponse
  updatePaymentProfile: PaymentProfile
  updatePermissionRole: GenericResponse
  updatePlan: Array<Maybe<Plan>>
  updateReasonCode: ReasonCode
  updateReferralSource: ReferralSource
  updateResolverPermissions: GenericResponse
  updateSegment: Segment
  updateService: Array<Maybe<Service>>
  updateSubscription: Subscription
  updateTag: Tag
  updateTaxes?: Maybe<Array<Maybe<Tax>>>
  updateUser: GenericResponse
  updateZone: Zone
  uploadData: UploadDataResponse
  uploadFundingFiles: UploadDataResponse
  uploadMosaicCsv?: Maybe<UploadMosaicCsvResponse>
  userAuth: UserAuth
  verifyBankAccount: PaymentProfile
  verifyPaymentMethod: GenericResponse
  voidCredit: Array<Maybe<Credit>>
  voidPayment: FinancialTransaction
}

export interface MutationAddInvoiceNoteByUserIdsArgs {
  note: NoteInput
  regenerateInvoices?: Maybe<Scalars['Boolean']>
  userIds: Array<Maybe<Scalars['ID']>>
}

export interface MutationAddInvoiceNotesArgs {
  invoiceIds: Array<Maybe<Scalars['ID']>>
  notes: Array<Maybe<NoteInput>>
  regenerateInvoices?: Maybe<Scalars['Boolean']>
}

export interface MutationAddNoteArgs {
  note: NoteInput
  userId: Scalars['ID']
}

export interface MutationAddOrganizationPermissionArgs {
  organizationPermission: CreateOrganizationPermissionInput
}

export interface MutationAddOrganizationPermissionByEmailArgs {
  dontSendEmail?: Maybe<Scalars['Boolean']>
  email: Scalars['Email']
  firstName?: Maybe<Scalars['String']>
  lastName?: Maybe<Scalars['String']>
  organizationId: Scalars['ID']
  permissionRoleId: Scalars['ID']
}

export interface MutationAddPaymentMethodArgs {
  accountInput?: Maybe<AddPaymentMethodAccountInput>
  customerId?: Maybe<Scalars['ID']>
  organizationId?: Maybe<Scalars['ID']>
  paymentId?: Maybe<Scalars['ID']>
  paymentMethod?: Maybe<PaymentMethodInput>
  userId?: Maybe<Scalars['ID']>
  verification?: Maybe<Verification>
}

export interface MutationAddPermissionRoleArgs {
  permissionRole: AddPermissionRoleInput
}

export interface MutationAddTagsArgs {
  bulkSelection?: Maybe<BulkSelection>
  tagIds: Array<Maybe<Scalars['ID']>>
  userIds?: Maybe<Array<Maybe<Scalars['ID']>>>
}

export interface MutationAddTagsToPlansArgs {
  planIds: Array<Scalars['ID']>
  tagIds: Array<Scalars['ID']>
}

export interface MutationCancelPaymentArgs {
  paymentId: Scalars['ID']
}

export interface MutationCancelSubscriptionArgs {
  cancelReasonCodeId?: Maybe<Scalars['ID']>
  cancelSubReasonCodeId?: Maybe<Scalars['ID']>
  subscriptionId: Scalars['ID']
}

export interface MutationChargeSubscriberArgs {
  amount: Scalars['Float']
  paymentProfileId: Scalars['ID']
  idempotencyKey: Scalars['String']
  transactionFee?: Maybe<Scalars['Float']>
}

export interface MutationCompleteAccountSetupArgs {
  accountSetupCode: Scalars['String']
  paymentsConfig?: Maybe<PaymentsConfig>
  user: CreateUserInput
}

export interface MutationCompleteAdditionalServiceSetupArgs {
  externalServiceData: ExternalServiceDataInput
  subscriptionId: Scalars['ID']
}

export interface MutationCreateAcpConfigArgs {
  acpConfig: AcpConfigCreate
}

export interface MutationCreateAddonArgs {
  addon?: Maybe<CreateAddonInput>
  taxes?: Maybe<Array<Maybe<TaxInput>>>
}

export interface MutationCreateAvalaraExemptionsArgs {
  exemptions: Array<Maybe<AvalaraExemptions>>
  organizationId: Scalars['ID']
}

export interface MutationCreateAvalaraSettingsArgs {
  avalaraSettingsInput: AvalaraSettingsInput
  organizationId: Scalars['ID']
}

export interface MutationCreateChildSubscriberArgs {
  addonIds?: Maybe<Array<Maybe<Scalars['ID']>>>
  existingSubscriberId?: Maybe<Scalars['ID']>
  newSubscriber?: Maybe<CreateUserInput>
  parentSubscriptionId: Scalars['ID']
  planIds?: Maybe<Array<Maybe<Scalars['ID']>>>
  residentSubscriptionDiscount?: Maybe<Scalars['Float']>
  test?: Maybe<Scalars['Boolean']>
}

export interface MutationCreateCombinedInvoicesPdfArgs {
  invoiceIds: Array<Maybe<Scalars['ID']>>
}

export interface MutationCreateCreditArgs {
  bulkSelection?: Maybe<BulkSelection>
  credit: CreateCreditInput
  userIds?: Maybe<Array<Maybe<Scalars['ID']>>>
}

export interface MutationCreateCsvArgs {
  filters?: Maybe<Array<Maybe<FilterInput>>>
  node?: Maybe<Node>
  query?: Maybe<Scalars['String']>
  sort?: Maybe<SortInput>
}

export interface MutationCreateCsvReportsArgs {
  endDate?: Maybe<Scalars['Date']>
  organizationIds?: Maybe<Array<Maybe<Scalars['ID']>>>
  reportType?: Maybe<ReportType>
  startDate?: Maybe<Scalars['Date']>
  subscriberFilters?: Maybe<Array<Maybe<FilterInput>>>
}

export interface MutationCreateDiscountArgs {
  discount: CreateDiscountInput
}

export interface MutationCreateDwollaBeneficialOwnerArgs {
  beneficialOwners: Array<Maybe<BeneficialOwner>>
  externalId: Scalars['ID']
}

export interface MutationCreateEquipmentArgs {
  equipment: CreateEquipmentInput
}

export interface MutationCreateFinancialTransactionArgs {
  financialTransactions: Array<Maybe<CreateFinancialTransactionInput>>
}

export interface MutationCreateFundingApplicationArgs {
  application: FundingApplicationInput
}

export interface MutationCreateFundingOrganizationArgs {
  initialInvites?: Maybe<Array<Maybe<FundingOrganizationInviteInput>>>
  organization: OrganizationInput
  preEnrollmentApplicationId: Scalars['ID']
}

export interface MutationCreateGrantApplicationArgs {
  application: GrantApplicationInput
}

export interface MutationCreateIpPayTokenArgs {
  token: Scalars['ID']
}

export interface MutationCreateInvoiceArgs {
  addons?: Maybe<Array<Maybe<CreateAddonInput>>>
  test?: Maybe<Scalars['Boolean']>
  userId: Scalars['ID']
}

export interface MutationCreateLineArgs {
  line?: Maybe<CreateLineInput>
}

export interface MutationCreateMessageTemplateArgs {
  messageTemplate: CreateMessageTemplateInput
}

export interface MutationCreateOrganizationArgs {
  fundingConfig?: Maybe<OrganizationFundingConfig>
  organization: OrganizationInput
}

export interface MutationCreatePaymentArgs {
  createPaymentInput: CreatePaymentInput
}

export interface MutationCreatePaymentAccountArgs {
  organizationId: Scalars['ID']
  paymentsConfig?: Maybe<PaymentsConfig>
}

export interface MutationCreatePaymentProfileArgs {
  paymentProfile: PaymentProfileInput
}

export interface MutationCreatePlanArgs {
  plan?: Maybe<CreatePlanInput>
}

export interface MutationCreateReasonCodesArgs {
  organizationId: Scalars['ID']
  reasonCodes: Array<Maybe<ReasonCodeInput>>
}

export interface MutationCreateReferralSourcesArgs {
  organizationId: Scalars['ID']
  referralSources: Array<Maybe<ReferralSourceInput>>
}

export interface MutationCreateRefundArgs {
  financialTransactionIds: Array<Maybe<Scalars['ID']>>
}

export interface MutationCreateReturnCheckArgs {
  createReturnCheckInput: Array<Maybe<CreateReturnCheckInput>>
}

export interface MutationCreateSegmentArgs {
  segment: CreateSegmentInput
}

export interface MutationCreateServiceArgs {
  service: CreateServiceInput
  taxes?: Maybe<Array<Maybe<TaxInput>>>
}

export interface MutationCreateSignedPdfArgs {
  customerAgreement?: Maybe<CustomerAgreementInput>
  mutualNda?: Maybe<MutualNdaInput>
  pdfType?: Maybe<PdfType>
}

export interface MutationCreateSubscriberArgs {
  paymentsConfig?: Maybe<PaymentsConfig>
  user: CreateUserInput
}

export interface MutationCreateSubscriptionArgs {
  activateImmediately?: Maybe<Scalars['Boolean']>
  subscription: SubscriptionInput
  test?: Maybe<Scalars['Boolean']>
}

export interface MutationCreateTagArgs {
  organizationId: Scalars['ID']
  tag: TagInput
}

export interface MutationCreateTaxArgs {
  tax?: Maybe<TaxInput>
}

export interface MutationCreateTodaysCombinedInvoicesPdfArgs {
  organizationId: Scalars['ID']
}

export interface MutationCreateTowerArgs {
  tower: CreateTowerInput
}

export interface MutationCreateUserArgs {
  paymentsConfig?: Maybe<PaymentsConfig>
  test?: Maybe<Scalars['Boolean']>
  user: CreateUserInput
}

export interface MutationCreateZoneArgs {
  zone: ZoneInput
}

export interface MutationDeleteAddonArgs {
  addonId: Scalars['ID']
}

export interface MutationDeleteAvalaraExemptionsArgs {
  exemptionIds: Array<Maybe<Scalars['ID']>>
}

export interface MutationDeleteCreditArgs {
  creditId: Scalars['ID']
}

export interface MutationDeleteDiscountArgs {
  discountId: Scalars['ID']
}

export interface MutationDeleteDwollaBeneficialOwnerArgs {
  externalId: Scalars['ID']
}

export interface MutationDeleteEquipmentArgs {
  equipmentId: Scalars['ID']
}

export interface MutationDeleteFundingApplicationArgs {
  id: Scalars['ID']
}

export interface MutationDeleteGrantApplicationArgs {
  id: Scalars['ID']
}

export interface MutationDeleteGrowSegmentArgs {
  segmentId: Scalars['ID']
}

export interface MutationDeleteInvoiceArgs {
  invoiceId: Scalars['ID']
}

export interface MutationDeleteLineArgs {
  lineId: Scalars['ID']
}

export interface MutationDeleteMessageTemplateArgs {
  messageTemplateId: Scalars['ID']
}

export interface MutationDeleteOrganizationArgs {
  organizationId: Scalars['ID']
}

export interface MutationDeleteOrganizationPermissionArgs {
  organizationPermissionId: Scalars['ID']
}

export interface MutationDeletePaymentMethodArgs {
  paymentId: Scalars['ID']
}

export interface MutationDeletePermissionRoleArgs {
  permissionRoleId: Scalars['ID']
}

export interface MutationDeletePlanArgs {
  planId: Scalars['ID']
}

export interface MutationDeleteReasonCodesArgs {
  reasonCodeIds: Array<Maybe<Scalars['ID']>>
}

export interface MutationDeleteReferralSourcesArgs {
  referralSourceIds: Array<Maybe<Scalars['ID']>>
}

export interface MutationDeleteSegmentArgs {
  segmentId: Scalars['ID']
}

export interface MutationDeleteServiceArgs {
  serviceId: Scalars['ID']
}

export interface MutationDeleteSubscriptionArgs {
  subscriptionId: Scalars['ID']
}

export interface MutationDeleteTagArgs {
  tagId: Scalars['ID']
}

export interface MutationDeleteTaxesArgs {
  taxIds?: Maybe<Array<Maybe<Scalars['ID']>>>
}

export interface MutationDeleteTowerArgs {
  towerId: Scalars['ID']
}

export interface MutationDeleteUserArgs {
  userId: Scalars['ID']
}

export interface MutationDeleteZoneArgs {
  id: Scalars['ID']
}

export interface MutationDisablePaymentProfileArgs {
  paymentProfileId: Scalars['ID']
}

export interface MutationDownloadInvoiceArgs {
  invoiceId: Scalars['ID']
}

export interface MutationForgotPasswordArgs {
  email: Scalars['Email']
  sendResetEmail?: Maybe<Scalars['Boolean']>
}

export interface MutationHandlePaymentEventsArgs {
  bossEvent: BossEventInput
}

export interface MutationImportCalixCmsArgs {
  upload?: Maybe<Scalars['Upload']>
  uploadType?: Maybe<CalixUploadType>
}

export interface MutationImportCalixTrapAlarmArgs {
  alarm: E7TrapAlarm
}

export interface MutationMagicLinkAuthArgs {
  code: Scalars['String']
  mfaCode?: Maybe<Scalars['String']>
}

export interface MutationOnboardOrganizationPaymentArgs {
  onboardOrganizationInput: OnboardOrganizationInput
  organizationId: Scalars['ID']
  paymentProcessor: PaymentProcessor
}

export interface MutationOnboardSubscriberPaymentArgs {
  ipAddress?: Maybe<Scalars['String']>
  paymentProcessor: PaymentProcessor
  userId: Scalars['ID']
}

export interface MutationRegenerateCurrentInvoiceArgs {
  userId: Scalars['ID']
}

export interface MutationRemoveChildSubscriptionArgs {
  subscriptionId: Scalars['ID']
}

export interface MutationRemoveInvoiceNoteArgs {
  invoiceId: Scalars['ID']
  noteId: Scalars['ID']
  regenerateInvoice?: Maybe<Scalars['Boolean']>
}

export interface MutationRemoveTagsArgs {
  tagIds: Array<Maybe<Scalars['ID']>>
  userIds: Array<Maybe<Scalars['ID']>>
}

export interface MutationRemoveTagsFromPlansArgs {
  planIds: Array<Scalars['ID']>
  tagIds: Array<Scalars['ID']>
}

export interface MutationResendAccountSetupArgs {
  userId: Scalars['ID']
}

export interface MutationResendFundingInviteArgs {
  organizationId: Scalars['ID']
  userId: Scalars['ID']
}

export interface MutationResetPasswordArgs {
  forgotPasswordCode: Scalars['String']
  mfaCode?: Maybe<Scalars['String']>
  newPassword: Scalars['String']
}

export interface MutationResumeBillingArgs {
  suspendBillingId: Scalars['ID']
}

export interface MutationRstAddDataArgs {
  data: RstDataInput
}

export interface MutationSaveGrowSegmentArgs {
  segment: GrowSegmentInput
}

export interface MutationSeenNotificationArgs {
  notificationId: Scalars['String']
}

export interface MutationSendFundingWelcomeEmailArgs {
  email: Scalars['String']
  name: Scalars['String']
  organizationId: Scalars['ID']
  organizationName: Scalars['String']
}

export interface MutationSendInvoiceArgs {
  invoiceId?: Maybe<Scalars['ID']>
  userId: Scalars['ID']
}

export interface MutationSendMagicLinkArgs {
  email: Scalars['String']
}

export interface MutationSendMessageArgs {
  bulkSelection?: Maybe<BulkSelection>
  eventDescription?: Maybe<Scalars['String']>
  eventTitle?: Maybe<Scalars['String']>
  isTest?: Maybe<Scalars['Boolean']>
  message: MessageInput
}

export interface MutationSendWelcomeEmailArgs {
  email?: Maybe<Scalars['Email']>
  organizationId?: Maybe<Scalars['ID']>
  userId: Scalars['ID']
}

export interface MutationSetDefaultMapViewArgs {
  mapView: MapViewInput
  organizationId: Scalars['ID']
}

export interface MutationSetupMfaArgs {
  userId: Scalars['ID']
}

export interface MutationSubmitAcpApplicationArgs {
  application: AcpApplication
  userId: Scalars['ID']
}

export interface MutationSuspendBillingArgs {
  suspendBilling: SuspendBillingInput
}

export interface MutationUnsubscribeUserNotificationsArgs {
  code: Scalars['String']
}

export interface MutationUpdateAcpConfigArgs {
  acpConfig: AcpConfigUpdate
}

export interface MutationUpdateAddonArgs {
  addonIds: Array<Scalars['ID']>
  updateAddon: UpdateAddonInput
}

export interface MutationUpdateAlianzaConfigArgs {
  config: AlianzaConfigInput
}

export interface MutationUpdateAvalaraExemptionsArgs {
  exemptions: Array<Maybe<AvalaraExemptions>>
}

export interface MutationUpdateDiscountArgs {
  discountIds: Array<Scalars['ID']>
  updateDiscount: UpdateDiscountInput
}

export interface MutationUpdateEquipmentArgs {
  equipment: CreateEquipmentInput
  equipmentId: Scalars['ID']
}

export interface MutationUpdateFinancialTransactionArgs {
  financialTransactions: Array<Maybe<CreateFinancialTransactionInput>>
}

export interface MutationUpdateFundingApplicationArgs {
  application: FundingApplicationInput
  id: Scalars['ID']
}

export interface MutationUpdateGrantApplicationArgs {
  grantApplication: GrantApplicationInput
  grantApplicationId: Scalars['ID']
}

export interface MutationUpdateInvoiceArgs {
  invoiceIds: Array<Scalars['ID']>
  updateInvoice: UpdateInvoiceInput
}

export interface MutationUpdateMessageTemplateArgs {
  messageTemplateId: Scalars['ID']
  updateMessageTemplate: CreateMessageTemplateInput
}

export interface MutationUpdateNoteArgs {
  note: NoteInput
  noteId: Scalars['ID']
}

export interface MutationUpdateOrganizationArgs {
  organizationIds: Array<Scalars['ID']>
  updateOrganization: OrganizationInput
}

export interface MutationUpdateOrganizationPermissionArgs {
  organizationPermissionId: Scalars['ID']
  permissionRoleId: Scalars['ID']
  role?: Maybe<OrganizationPermissionRole>
}

export interface MutationUpdatePaymentMethodArgs {
  paymentId: Scalars['ID']
  updateBankAccountInput?: Maybe<UpdateBankAccountInput>
  updateCardInput?: Maybe<UpdateCardInput>
}

export interface MutationUpdatePaymentProfileArgs {
  paymentProfileUpdate: PaymentProfileUpdate
}

export interface MutationUpdatePermissionRoleArgs {
  permissionRole: UpdatePermissionRoleInput
  permissionRoleId: Scalars['ID']
}

export interface MutationUpdatePlanArgs {
  planIds: Array<Scalars['ID']>
  updatePlan: UpdatePlanInput
}

export interface MutationUpdateReasonCodeArgs {
  reasonCodeId: Scalars['ID']
  updateReasonCode: ReasonCodeInput
}

export interface MutationUpdateReferralSourceArgs {
  referralSourceId: Scalars['ID']
  updateReferralSource: ReferralSourceInput
}

export interface MutationUpdateResolverPermissionsArgs {
  organizationId: Scalars['ID']
  resolverPermissions: Array<Maybe<ResolverPermissionsInput>>
}

export interface MutationUpdateSegmentArgs {
  segmentId: Scalars['ID']
  updateSegment: CreateSegmentInput
}

export interface MutationUpdateServiceArgs {
  serviceIds: Array<Scalars['ID']>
  updateService: UpdateServiceInput
}

export interface MutationUpdateSubscriptionArgs {
  schedule?: Maybe<Scalars['Boolean']>
  subscriptionId: Scalars['ID']
  suspendBilling?: Maybe<SuspendBillingInput>
  updateSubscription?: Maybe<SubscriptionInput>
}

export interface MutationUpdateTagArgs {
  tagId: Scalars['ID']
  updateTag: TagInput
}

export interface MutationUpdateTaxesArgs {
  taxes?: Maybe<Array<Maybe<TaxInput>>>
}

export interface MutationUpdateUserArgs {
  bulkSelection?: Maybe<BulkSelection>
  updateUser: UpdateUserInput
  userIds: Array<Scalars['ID']>
}

export interface MutationUpdateZoneArgs {
  id: Scalars['ID']
  zone: ZoneInput
}

export interface MutationUploadDataArgs {
  files: Array<Maybe<Scalars['Upload']>>
  location?: Maybe<Bucket>
}

export interface MutationUploadFundingFilesArgs {
  files: Array<Maybe<Scalars['Upload']>>
  fundingApplicationId: Scalars['ID']
}

export interface MutationUserAuthArgs {
  login: LoginInput
}

export interface MutationVerifyBankAccountArgs {
  firstAmount: Scalars['Int']
  paymentProfileId: Scalars['ID']
  secondAmount: Scalars['Int']
}

export interface MutationVerifyPaymentMethodArgs {
  customerId?: Maybe<Scalars['ID']>
  firstAmount?: Maybe<Scalars['Float']>
  paymentId?: Maybe<Scalars['ID']>
  secondAmount?: Maybe<Scalars['Float']>
  verificationStage: Scalars['String']
}

export interface MutationVoidCreditArgs {
  creditIds: Array<Scalars['ID']>
}

export interface MutationVoidPaymentArgs {
  financialTransactionId: Scalars['ID']
}

export interface MutualNdaInput {
  companyAddress?: Maybe<Scalars['String']>
  companyName?: Maybe<Scalars['String']>
  customerName?: Maybe<Scalars['String']>
  customerTitle?: Maybe<Scalars['String']>
}

export interface NetworkAlarm {
  __typename?: 'NetworkAlarm'
  action?: Maybe<Scalars['Boolean']>
  alarmCode?: Maybe<Scalars['Int']>
  alarmCodeDescription?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  device?: Maybe<Scalars['ID']>
  facility?: Maybe<CalixAlarmFacility>
  id: Scalars['ID']
  legacySystemId?: Maybe<Scalars['ID']>
  location?: Maybe<Scalars['String']>
  networkNode: NetworkNode
  objectId?: Maybe<Scalars['String']>
  secondaryObject?: Maybe<Scalars['String']>
  secondaryObjectId?: Maybe<Scalars['String']>
  serviceAffecting?: Maybe<Scalars['Boolean']>
  severity?: Maybe<Scalars['Int']>
  severityDescription?: Maybe<Scalars['String']>
  suppressed?: Maybe<Scalars['Boolean']>
  time?: Maybe<Scalars['Date']>
}

export interface NetworkNode {
  __typename?: 'NetworkNode'
  createdAt?: Maybe<Scalars['Date']>
  id?: Maybe<Scalars['ID']>
  lastAlarmedAt?: Maybe<Scalars['Date']>
  lat?: Maybe<Scalars['Float']>
  legacySystemId?: Maybe<Scalars['ID']>
  legacySystemStringId?: Maybe<Scalars['String']>
  lon?: Maybe<Scalars['Float']>
  name?: Maybe<Scalars['String']>
  networkAlarms?: Maybe<Array<Maybe<NetworkAlarm>>>
  provisionId?: Maybe<Scalars['ID']>
  serviceStatus?: Maybe<ServiceStatus>
  updatedAt?: Maybe<Scalars['Date']>
}

export interface NetworkNodeResult {
  __typename?: 'NetworkNodeResult'
  results: Array<Maybe<NetworkNode>>
  total: Scalars['Int']
}

export enum Node {
  getAddons = 'getAddons',
  getCredits = 'getCredits',
  getDiscounts = 'getDiscounts',
  getEquipment = 'getEquipment',
  getInvoices = 'getInvoices',
  getLines = 'getLines',
  getPayments = 'getPayments',
  getPlans = 'getPlans',
  getServices = 'getServices',
  getSubscribers = 'getSubscribers',
  getTowers = 'getTowers'
}

/** A Note is an object with some string content */
export interface Note {
  __typename?: 'Note'
  archived?: Maybe<Scalars['Boolean']>
  content: Scalars['String']
  createdAt?: Maybe<Scalars['Date']>
  creator?: Maybe<User>
  id?: Maybe<Scalars['ID']>
  title?: Maybe<Scalars['String']>
}

/** NoteInput is an input object for notes */
export interface NoteInput {
  /** If a note is archived or not */
  archived?: Maybe<Scalars['Boolean']>
  /** The content of a note */
  content: Scalars['String']
  /** The user who created this note */
  creatorId?: Maybe<Scalars['ID']>
  /** Unique identifier for a note */
  id?: Maybe<Scalars['ID']>
  /** The title of a note */
  title: Scalars['String']
}

/** Notes result */
export interface NotesResult {
  __typename?: 'NotesResult'
  results: Array<Maybe<Note>>
  total: Scalars['Int']
}

export interface Notification {
  __typename?: 'Notification'
  body?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
  link?: Maybe<Scalars['String']>
  organizationId?: Maybe<Scalars['ID']>
  recipientId: Scalars['ID']
  seen?: Maybe<Scalars['Boolean']>
  seenAt?: Maybe<Scalars['Date']>
  sentAt?: Maybe<Scalars['Date']>
  subject?: Maybe<Scalars['String']>
  type?: Maybe<Scalars['String']>
}

/** Onboarding inputs */
export interface OnboardOrganizationInput {
  dwollaAccountInput?: Maybe<DwollaAccountInput>
  stripeAccountInput?: Maybe<StripeAccountInput>
}

/** A Organization is an ISP with admin users, plans, and services */
export interface Organization {
  __typename?: 'Organization'
  acpConfig?: Maybe<AcpConfig>
  acpEnabled: Scalars['Boolean']
  alarmLastImported?: Maybe<Scalars['Date']>
  avalaraSettings?: Maybe<AvalaraSettings>
  businessAddress?: Maybe<Address>
  childOrganizations?: Maybe<Array<Maybe<Organization>>>
  createdAt: Scalars['Date']
  customerAgreementId?: Maybe<Scalars['String']>
  defaultMapView?: Maybe<MapView>
  defaultSubOrgId?: Maybe<Scalars['ID']>
  description?: Maybe<Scalars['String']>
  enableProvisioning?: Maybe<Scalars['Boolean']>
  equipment?: Maybe<Array<Maybe<Equipment>>>
  explore?: Maybe<Scalars['Boolean']>
  financeEmail?: Maybe<Scalars['String']>
  fundingEnabled?: Maybe<Scalars['Boolean']>
  hasSignedTos?: Maybe<Scalars['Boolean']>
  id: Scalars['ID']
  isEmailAlertsEnabled?: Maybe<Scalars['Boolean']>
  lines?: Maybe<Array<Maybe<Line>>>
  logo?: Maybe<Scalars['String']>
  mark?: Maybe<Scalars['String']>
  name: Scalars['String']
  ndaId?: Maybe<Scalars['String']>
  networkNodes?: Maybe<Array<Maybe<NetworkNode>>>
  organizationCodes?: Maybe<Array<Maybe<OrganizationCode>>>
  parentOrganization?: Maybe<Organization>
  paymentProfileOwnerId?: Maybe<Scalars['ID']>
  paymentUserAccounts?: Maybe<PaymentUserAccount[]>
  paymentUserId: Scalars['ID']
  paymentsConfig?: Maybe<PaymentSetup>
  phoneNumber?: Maybe<Scalars['String']>
  qrCode?: Maybe<Scalars['String']>
  saasSubscribed?: Maybe<Scalars['Boolean']>
  socialMedia?: Maybe<SocialMedia>
  sssConfig?: Maybe<SssConfig>
  tags?: Maybe<Array<Maybe<Tag>>>
  taxMethod?: Maybe<Scalars['String']>
  taxRate?: Maybe<Scalars['Float']>
  taxType?: Maybe<Scalars['String']>
  tenantId?: Maybe<Scalars['String']>
  test: Scalars['Boolean']
  totalSubscribers?: Maybe<Scalars['Int']>
  towers?: Maybe<Array<Maybe<Tower>>>
}

export interface OrganizationCode {
  __typename?: 'OrganizationCode'
  code: Scalars['String']
  default?: Maybe<Scalars['Boolean']>
  organizationId?: Maybe<Scalars['ID']>
}

export interface OrganizationCodeInput {
  code: Scalars['String']
  default?: Maybe<Scalars['Boolean']>
}

export interface OrganizationFundingConfig {
  preEnrollmentApplicationId?: Maybe<Scalars['ID']>
}

export interface OrganizationInput {
  acpEnabled?: Maybe<Scalars['Boolean']>
  /** Business address for an organization */
  businessAddress?: Maybe<AddressInput>
  defaultMapViewId?: Maybe<Scalars['ID']>
  defaultSubOrgId?: Maybe<Scalars['ID']>
  /** Description */
  description?: Maybe<Scalars['String']>
  enableProvisioning?: Maybe<Scalars['Boolean']>
  explore?: Maybe<Scalars['Boolean']>
  financeEmail?: Maybe<Scalars['String']>
  fundingEnabled?: Maybe<Scalars['Boolean']>
  hasSignedTos?: Maybe<Scalars['Boolean']>
  id?: Maybe<Scalars['ID']>
  /** enable alerts via email */
  isEmailAlertsEnabled?: Maybe<Scalars['Boolean']>
  /** The logo for an organization */
  logo?: Maybe<Scalars['Upload']>
  /** The mark for an organization */
  mark?: Maybe<Scalars['Upload']>
  /** The name for an organization */
  name?: Maybe<Scalars['String']>
  /** Used as part of Subscriber account IDs */
  organizationCodes?: Maybe<Array<Maybe<OrganizationCodeInput>>>
  /** The unique identifier for the parent organization */
  parentOrganizationId?: Maybe<Scalars['ID']>
  paymentsConfig?: Maybe<PaymentSetupInput>
  /** The phone number for an organization */
  phoneNumber?: Maybe<Scalars['String']>
  /** The qr code for an organization */
  qrCode?: Maybe<Scalars['Upload']>
  resolverPermissions?: Maybe<Scalars['String']>
  /** TEMP: this flag should not be editable from the frontend once stripe saas signup flow completed */
  saasSubscribed?: Maybe<Scalars['Boolean']>
  socialMedia?: Maybe<SocialMediaInput>
  sssConfig?: Maybe<SssConfigInput>
  /** manual/integration */
  taxMethod?: Maybe<Scalars['String']>
  /** The org wide tax rate */
  taxRate?: Maybe<Scalars['Float']>
  /** inclusive/exclusive */
  taxType?: Maybe<Scalars['String']>
}

/** OrganizationPermission */
export interface OrganizationPermission {
  __typename?: 'OrganizationPermission'
  createdAt?: Maybe<Scalars['Date']>
  id: Scalars['ID']
  organization?: Maybe<Organization>
  organizationId?: Maybe<Scalars['ID']>
  permissionRole?: Maybe<PermissionRole>
  /** Has the user setup their account (Does the user have an accountSetupCode) */
  registered?: Maybe<Scalars['Boolean']>
  role?: Maybe<OrganizationPermissionRole>
  user?: Maybe<User>
}

/** OrganizationPermissionRole enum */
export enum OrganizationPermissionRole {
  admin = 'admin',
  editor = 'editor',
  subscriber = 'subscriber',
  viewer = 'viewer'
}

export enum PdfType {
  enterpriseSaasCustomerAgreement = 'enterpriseSaasCustomerAgreement',
  mutualNda = 'mutualNda'
}

export interface PageInfo {
  __typename?: 'PageInfo'
  hasNext?: Maybe<Scalars['Boolean']>
  hasPrevious?: Maybe<Scalars['Boolean']>
  next?: Maybe<Scalars['String']>
  previous?: Maybe<Scalars['String']>
  remaining?: Maybe<Scalars['Int']>
  total?: Maybe<Scalars['Int']>
}

/** Array results pagination */
export interface Pagination {
  /** Number of results to display per page */
  limit: Scalars['Int']
  /** The offset for pagination */
  offset: Scalars['Int']
}

/** Return type of a payment method */
export interface PaymentMethod {
  __typename?: 'PaymentMethod'
  accountNumber?: Maybe<Scalars['Int']>
  amount?: Maybe<Scalars['Float']>
  bankAccountType?: Maybe<Scalars['String']>
  bankName?: Maybe<Scalars['String']>
  cardNumber?: Maybe<Scalars['Int']>
  expMonth?: Maybe<Scalars['String']>
  expYear?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['ID']>
  lastFour?: Maybe<Scalars['Int']>
  name?: Maybe<Scalars['String']>
  removed?: Maybe<Scalars['Boolean']>
  routingNumber?: Maybe<Scalars['Int']>
  status?: Maybe<Scalars['String']>
  type?: Maybe<Scalars['String']>
}

/** Input type of a payment method */
export interface PaymentMethodInput {
  accountNumber?: Maybe<Scalars['ID']>
  achToken?: Maybe<Scalars['String']>
  bankAccountType?: Maybe<Scalars['String']>
  bankName?: Maybe<Scalars['String']>
  cardName?: Maybe<Scalars['String']>
  cardNumber?: Maybe<Scalars['String']>
  cardToken?: Maybe<Scalars['String']>
  checkNumber?: Maybe<Scalars['Int']>
  cvv?: Maybe<Scalars['Int']>
  expMonth?: Maybe<Scalars['String']>
  expYear?: Maybe<Scalars['String']>
  feeAmount?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['ID']>
  lastFour?: Maybe<Scalars['Int']>
  name?: Maybe<Scalars['String']>
  routingNumber?: Maybe<Scalars['ID']>
  totalAmount?: Maybe<Scalars['Float']>
}

export enum PaymentMethodType {
  ACH = 'ACH',
  CARD = 'CARD',
  CASH = 'CASH',
  CHECK = 'CHECK'
}

export enum PaymentProcessor {
  DWOLLA = 'DWOLLA',
  IPPAY = 'IPPAY',
  STRIPE = 'STRIPE'
}

/** Payment Profile */
export interface PaymentProfile {
  __typename?: 'PaymentProfile'
  credits?: Maybe<FinancialTransaction[]>
  debits?: Maybe<FinancialTransaction[]>
  displayName?: Maybe<Scalars['String']>
  lastFour?: Maybe<Scalars['String']>
  expirationDate?: Maybe<Scalars['String']>
  brand?: Maybe<Scalars['String']>
  enabled: Scalars['Boolean']
  id: Scalars['ID']
  isDefault: Scalars['Boolean']
  isVerified: Scalars['Boolean']
  paymentMethodId: Scalars['String']
  paymentMethodType: PaymentMethodType
  paymentUserAccount: PaymentUserAccount
}

export interface PaymentProfileInput {
  displayName?: Maybe<Scalars['String']>
  lastFour?: Maybe<Scalars['String']>
  expirationDate?: Maybe<Scalars['String']>
  brand?: Maybe<Scalars['String']>
  isDefault: Scalars['Boolean']
  isVerified: Scalars['Boolean']
  paymentMethodId: Scalars['String']
  paymentMethodType: PaymentMethodType
  paymentUserAccountId: Scalars['ID']
}

export interface PaymentProfileUpdate {
  displayName?: Maybe<Scalars['String']>
  id: Scalars['ID']
  isDefault?: Maybe<Scalars['Boolean']>
}

export interface PaymentSetup {
  __typename?: 'PaymentSetup'
  defaultPaymentMethod?: Maybe<Scalars['String']>
  dwollaCustomerUrl?: Maybe<Scalars['ID']>
  id?: Maybe<Scalars['ID']>
  stripeUserId?: Maybe<Scalars['ID']>
  terminalId?: Maybe<Scalars['ID']>
}

export interface PaymentSetupInput {
  defaultPaymentMethod?: Maybe<Scalars['String']>
  dwollaCustomerUrl?: Maybe<Scalars['ID']>
  id?: Maybe<Scalars['ID']>
  stripeUserId?: Maybe<Scalars['ID']>
  terminalId?: Maybe<Scalars['ID']>
}

export enum PaymentStatus {
  /** Payment is current */
  current = 'current',
  /** Payment is past due */
  pastDue = 'pastDue'
}

/** Payment User Account */
export interface PaymentUserAccount {
  __typename?: 'PaymentUserAccount'
  customerId: Scalars['String']
  enabled?: Scalars['Boolean']
  id: Scalars['ID']
  organization?: Maybe<Organization>
  paymentProcessor: PaymentProcessor
  paymentProfiles?: Maybe<PaymentProfile[]>
  paymentUserId?: Scalars['ID']
  subscriber?: Maybe<User>
  type?: PaymentUserAccountType
}

export interface PaymentUserAccountInput {
  customerId: Scalars['String']
  paymentProcessor: PaymentProcessor
  paymentUserId: Scalars['ID']
  type: PaymentUserAccountType
}

export enum PaymentUserAccountType {
  ORGANIZATION = 'ORGANIZATION',
  SUBSCRIBER = 'SUBSCRIBER'
}

/** Payments configuration called during createUser */
export interface PaymentsConfig {
  body?: Maybe<Scalars['String']>
  customerType: CustomerType
  customerUrl?: Maybe<Scalars['String']>
  dwollaAccountInput?: Maybe<DwollaAccountInput>
  processor: Processor
  stripeAccountInput?: Maybe<StripeAccountInput>
  verification?: Maybe<Scalars['Boolean']>
}

export interface PermissionRole {
  __typename?: 'PermissionRole'
  allowedBossRouteGroups?: Maybe<Array<Maybe<Scalars['String']>>>
  createdAt?: Maybe<Scalars['Date']>
  defaultBossPath?: Maybe<Scalars['String']>
  global?: Maybe<Scalars['Boolean']>
  id: Scalars['ID']
  inherits?: Maybe<Array<Maybe<PermissionRole>>>
  mfaRequired?: Maybe<Scalars['Boolean']>
  role: Scalars['String']
  updatedAt?: Maybe<Scalars['Date']>
}

/** A Plan is an object which a user can subscriber to */
export interface Plan {
  __typename?: 'Plan'
  active: Scalars['Boolean']
  billingCyclePeriod: Scalars['Int']
  billingCycleUnit: BillingCycleUnit
  childPlans?: Maybe<Array<Maybe<Plan>>>
  createdAt: Scalars['Date']
  currentlySubscribed?: Maybe<Scalars['Boolean']>
  description?: Maybe<Scalars['String']>
  endDate?: Maybe<Scalars['Date']>
  externalPlanId?: Maybe<Scalars['ID']>
  id: Scalars['ID']
  image?: Maybe<Scalars['String']>
  name: Scalars['String']
  numberOfBillingCycles?: Maybe<Scalars['Int']>
  organizations: Array<Maybe<Organization>>
  price: Scalars['Float']
  pricingModel: PricingModel
  pricingTier?: Maybe<PricingTier>
  recommended?: Maybe<Scalars['Boolean']>
  sellingPoints?: Maybe<Array<Maybe<Scalars['String']>>>
  services: Array<Maybe<Service>>
  standAlone?: Maybe<Scalars['Boolean']>
  startDate?: Maybe<Scalars['Date']>
  tags?: Maybe<Array<Maybe<Tag>>>
  taxAmount?: Maybe<Scalars['Float']>
  taxMethod?: Maybe<Scalars['String']>
}

export interface PlanCountRecord {
  __typename?: 'PlanCountRecord'
  monthlyRevenue?: Maybe<Scalars['Float']>
  monthlySubscriberCount?: Maybe<Scalars['Int']>
  plan?: Maybe<Plan>
  todaysRevenue?: Maybe<Scalars['Float']>
  todaysSubscriberCount?: Maybe<Scalars['Int']>
  yearlyRevenue?: Maybe<Scalars['Float']>
  yearlySubscriberCount?: Maybe<Scalars['Int']>
}

export interface PlanCountReport {
  __typename?: 'PlanCountReport'
  planCountRecords: Array<Maybe<PlanCountRecord>>
}

export enum PlanName {
  ALIANZA_CENTRIC_GIGACALL_LOCAL = 'ALIANZA_CENTRIC_GIGACALL_LOCAL',
  ALIANZA_CENTRIC_GIGICALL_GLOBAL_ACCESS = 'ALIANZA_CENTRIC_GIGICALL_GLOBAL_ACCESS',
  ALIANZA_CENTRIC_GIGICALL_LATIN_AMERICA = 'ALIANZA_CENTRIC_GIGICALL_LATIN_AMERICA',
  ALIANZA_CENTRIC_VOIP_PLUS_PLUS = 'ALIANZA_CENTRIC_VOIP_PLUS_PLUS'
}

export interface PlansResult {
  __typename?: 'PlansResult'
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>
  pageInfo?: Maybe<PageInfo>
  results: Array<Maybe<Plan>>
  total: Scalars['Int']
}

export interface PortInfo {
  account?: Maybe<Scalars['String']>
  pin?: Maybe<Scalars['String']>
  portingAuthorizedName?: Maybe<Scalars['String']>
  portingWireType?: Maybe<PortingWireType>
}

export enum PortingWireType {
  Wireless = 'Wireless',
  Wireline = 'Wireline'
}

export enum PreferredContact {
  email = 'email',
  sms = 'sms'
}

export enum PricingModel {
  /** Charge a recurring single price */
  flatFee = 'flatFee',
  /** Charge the price for each unit of the plan on a recurring basis */
  perUnit = 'perUnit',
  /** Charge a price for a range */
  stairstep = 'stairstep',
  /** Charge a different price per unit based on quantity of the plan purchased from every tier on a recurring basis */
  tiered = 'tiered',
  /** Charge a different price per unit based on quantity of the plan purchased based on the tier under which it falls */
  volume = 'volume'
}

/** A PricingTier is used for tiered, volume and stairstep pricing models */
export interface PricingTier {
  __typename?: 'PricingTier'
  /** The upper limit of a range of units for the tier. Min = 1 */
  endingUnit?: Maybe<Scalars['Int']>
  /** Unique identifier for a plan */
  planId: Scalars['ID']
  /** The lower limit of a range of units for the tier. Min = 1 */
  startingUnit: Scalars['Int']
  /** For stairstep pricing: the price of the tier. For tiered/volume pricing: the price of each unit in the tier */
  tierPrice: Scalars['Float']
}

/** Choose payment processor */
export enum Processor {
  both = 'both',
  dwolla = 'dwolla',
  stripe = 'stripe'
}

export interface ProvisioningResponse {
  __typename?: 'ProvisioningResponse'
  deviceId?: Maybe<Scalars['String']>
  eventType?: Maybe<Scalars['String']>
  success?: Maybe<Scalars['Boolean']>
}

export interface Query {
  __typename?: 'Query'
  activateSubscriptionsScheduled: GenericResponse
  addressAutocomplete: Array<Maybe<Address>>
  calculateTaxes: GenericResponse
  chargeSubscriberScheduled: GenericResponse
  createInvoicesScheduled: GenericResponse
  createPaymentScheduled: GenericResponse
  generateReport: Report
  getAccountSetupCode: GetAccountSetupCodeResponse
  getAddon: Addon
  getAddons: AddonsResult
  getAlianzaConfig: AlianzaConfigResponse
  getAlianzaPhoneNumbers: Array<Maybe<AlianzaPhoneNumber>>
  getAlianzaPlans: Array<Maybe<AlianzaPlan>>
  getAllowedBossRouteGroups: Array<Maybe<RouteGroup>>
  getAnalyzeSubscribersMapData?: Maybe<Scalars['String']>
  getAuditEvents: AuditEventsResult
  getAvailableDiscountsForSubscription?: Maybe<Array<Maybe<Discount>>>
  getAvalaraExemptions: Array<Maybe<AvalaraExemption>>
  getCensusBlocks?: Maybe<Scalars['String']>
  getCounty?: Maybe<Scalars['String']>
  getCredit: Credit
  getCredits: CreditsResult
  getDiscount: Discount
  getDiscounts?: Maybe<DiscountsResult>
  getDwollaAutopayAuth: DwollaAutopayAuth
  getDwollaBalance: Balance
  getDwollaBeneficialOwner: Array<Maybe<DwollaBeneficialOwner>>
  getEquipment: EquipmentResult
  getFilledMessageTemplate?: Maybe<MessageTemplate>
  getFinancialTransaction: GenericResponse
  getFinancialTransactions: FinancialTransactionsResult
  getFundingApplication: FundingApplication
  getFundingApplications: Array<Maybe<FundingApplication>>
  getFundingSourcesToken: Scalars['String']
  getGrantApplication: GrantApplication
  getGrantApplicationMessage?: Maybe<Array<Maybe<FundingSingleMessage>>>
  getGrantApplications?: Maybe<GrantApplicationResult>
  getGrowSegments: Array<Maybe<GrowSegment>>
  getHistoricalPerformance?: Maybe<Scalars['String']>
  getIP: GenericResponse
  getIPPayReports: GenericResponse
  getInstitutions?: Maybe<Scalars['String']>
  getInvoice: SubscriberInvoice
  getInvoices: InvoicesResult
  getLines: LinesResult
  getMessageDashboardOverview: MessageDashboardOverviewResult
  getMessageEventData: MessageEventData
  getMessageEventDataForRecipient?: Maybe<Array<Maybe<SendgridEvent>>>
  getMessageEvents: MessageEventsResult
  getMessageEventsOverview: MessageEventsOverviewResult
  getMessageRouteResults: Array<Maybe<MessageRouteResult>>
  getMessageTemplate?: Maybe<MessageTemplate>
  getMessageTemplates: Array<Maybe<MessageTemplate>>
  getNetworkAlarmFieldValues: Array<Maybe<Scalars['String']>>
  getNetworkNodes: NetworkNodeResult
  getNote?: Maybe<Note>
  getNotes: NotesResult
  getNotifications: Array<Maybe<Notification>>
  getOrgAddressAutocomplete: Array<Maybe<Address>>
  getOrganization: Organization
  getOrganizationPermission: OrganizationPermission
  getOrganizationPermissions: Array<Maybe<OrganizationPermission>>
  getPaymentMethods: Array<Maybe<PaymentMethod>>
  getPaymentProfiles?: Maybe<Array<Maybe<PaymentProfile>>>
  getPaymentUserAccounts?: Maybe<Array<Maybe<PaymentUserAccount>>>
  getPermissionRole: PermissionRole
  getPermissionRoles: Array<Maybe<PermissionRole>>
  getPlan: Plan
  getPlans: PlansResult
  getProcessorTransaction: FinancialTransaction
  getReasonCodes: ReasonCodeResult
  getReferralSources: ReferralSourceResult
  getResolverPermissions: Array<Maybe<ResolverPermission>>
  getSegments?: Maybe<Array<Maybe<Segment>>>
  getService: Service
  getServices: ServicesResult
  getSetupLinkByMAC: GenericResponse
  getState?: Maybe<Scalars['String']>
  getSubscriberBilling: SubscriberInvoicesResult
  getSubscriberLocations: Array<Maybe<User>>
  getSubscribers: SubscribersResult
  getSubscribersFast: SubscribersResult
  getSubscribersHUD: SubscribersHud
  getSubscribersPayments: SubscribersResult
  getSubscription: Subscription
  getSubscriptions: Array<Maybe<Subscription>>
  getTag: Tag
  getTags: TagsResult
  getTax?: Maybe<Tax>
  getTaxes?: Maybe<Array<Maybe<Tax>>>
  getTowers: TowersResult
  getTwilioCalls: Array<Maybe<TwilioCall>>
  getTwilioMessages: Array<Maybe<TwilioMessage>>
  getUser: User
  getUserByAccountId: User
  getUserByAccountSetupCode: UserAuth
  getUserByEmail: User
  getUserByMagicLinkCode: User
  getZone: Zone
  getZones: Array<Maybe<Zone>>
  getZonesLegacy?: Maybe<Scalars['String']>
  myOrganizations: Array<Maybe<Organization>>
  mySubscriptions: Array<Maybe<Subscription>>
  prevalidateVoIP: VoIpPrevalidateResponse
  resendVerificationEmail?: Maybe<GenericResponse>
  resendVerificationEmailScheduled?: Maybe<GenericResponse>
  retrievePaymentMethod: PaymentMethod
  retrieveTransaction: FinancialTransaction
  rstGetResult: RstData
  rstGetResults: RstDataResult
  sendMessageScheduled: GenericResponse
  suspendBillingScheduled: GenericResponse
  uploadMosaicCsvScheduled: GenericResponse
  uploadMosaicRecordsScheduled: GenericResponse
  verifyAddress: VerifyAddressResponse
  verifyMfaCode: GenericResponse
  verifyOrgAddress: VerifyOrgAddressResponse
}

export interface QueryActivateSubscriptionsScheduledArgs {
  userId: Scalars['ID']
}

export interface QueryAddressAutocompleteArgs {
  address: AddressInput
}

export interface QueryCalculateTaxesArgs {
  addonIds?: Maybe<Array<Maybe<Scalars['ID']>>>
  planIds?: Maybe<Array<Maybe<Scalars['ID']>>>
  userId: Scalars['ID']
}

export interface QueryChargeSubscriberScheduledArgs {
  userId: Scalars['ID']
}

export interface QueryCreateInvoicesScheduledArgs {
  tenantId: Scalars['ID']
}

export interface QueryCreatePaymentScheduledArgs {
  createPaymentInput: CreatePaymentInput
}

export interface QueryGenerateReportArgs {
  cursorPagination?: Maybe<CursorPagination>
  endDate?: Maybe<Scalars['Date']>
  initiatorUserId?: Maybe<Scalars['ID']>
  organizationIds: Array<Scalars['ID']>
  reportType: ReportType
  startDate?: Maybe<Scalars['Date']>
  subscriberFilters?: Maybe<Array<Maybe<FilterInput>>>
}

export interface QueryGetAccountSetupCodeArgs {
  address: AddressInput
  organizationId: Scalars['ID']
  userId: Scalars['ID']
}

export interface QueryGetAddonArgs {
  addonId: Scalars['ID']
}

export interface QueryGetAddonsArgs {
  cursorPagination?: Maybe<CursorPagination>
  filters?: Maybe<Array<Maybe<FilterInput>>>
  organizationId: Scalars['ID']
  pagination?: Maybe<Pagination>
  query?: Maybe<Scalars['String']>
  sort?: Maybe<SortInput>
}

export interface QueryGetAlianzaPhoneNumbersArgs {
  zip?: Maybe<Scalars['String']>
}

export interface QueryGetAnalyzeSubscribersMapDataArgs {
  body?: Maybe<Scalars['String']>
  filters?: Maybe<Array<Maybe<FilterInput>>>
  organizationId: Scalars['ID']
}

export interface QueryGetAuditEventsArgs {
  endDate?: Maybe<Scalars['Date']>
  errored?: Maybe<Scalars['Boolean']>
  fetchModifiedUsers?: Maybe<Scalars['Boolean']>
  initiatorUserId?: Maybe<Scalars['ID']>
  limit?: Maybe<Scalars['Int']>
  organizationIds: Array<Scalars['ID']>
  searchAfter?: Maybe<Scalars['String']>
  startDate?: Maybe<Scalars['Date']>
  subscriberId?: Maybe<Scalars['ID']>
  title?: Maybe<Scalars['String']>
}

export interface QueryGetAvailableDiscountsForSubscriptionArgs {
  addonIds?: Maybe<Array<Maybe<Scalars['ID']>>>
  organizationId: Scalars['ID']
  planIds?: Maybe<Array<Maybe<Scalars['ID']>>>
}

export interface QueryGetAvalaraExemptionsArgs {
  organizationId: Scalars['ID']
}

export interface QueryGetCensusBlocksArgs {
  body?: Maybe<Scalars['String']>
  filters?: Maybe<Array<Maybe<FilterInput>>>
  isAggregateQuery?: Maybe<Scalars['Boolean']>
}

export interface QueryGetCountyArgs {
  body?: Maybe<Scalars['String']>
  filters?: Maybe<Array<Maybe<FilterInput>>>
  isAggregateQuery?: Maybe<Scalars['Boolean']>
}

export interface QueryGetCreditArgs {
  creditId: Scalars['ID']
}

export interface QueryGetCreditsArgs {
  cursorPagination?: Maybe<CursorPagination>
  filters?: Maybe<Array<Maybe<FilterInput>>>
  organizationId?: Maybe<Scalars['ID']>
  organizationIds?: Maybe<Array<Maybe<Scalars['ID']>>>
  pagination?: Maybe<Pagination>
  query?: Maybe<Scalars['String']>
  sort?: Maybe<SortInput>
  userId?: Maybe<Scalars['ID']>
}

export interface QueryGetDiscountArgs {
  discountId: Scalars['ID']
}

export interface QueryGetDiscountsArgs {
  cursorPagination?: Maybe<CursorPagination>
  filters?: Maybe<Array<Maybe<FilterInput>>>
  organizationId?: Maybe<Scalars['ID']>
  organizationIds?: Maybe<Array<Maybe<Scalars['ID']>>>
  pagination?: Maybe<Pagination>
  query?: Maybe<Scalars['String']>
  sort?: Maybe<SortInput>
}

export interface QueryGetDwollaBalanceArgs {
  externalId: Scalars['ID']
}

export interface QueryGetDwollaBeneficialOwnerArgs {
  externalId: Scalars['ID']
}

export interface QueryGetEquipmentArgs {
  cursorPagination?: Maybe<CursorPagination>
  filters?: Maybe<Array<Maybe<FilterInput>>>
  organizationId: Scalars['ID']
  pagination?: Maybe<Pagination>
  query?: Maybe<Scalars['String']>
  sort?: Maybe<SortInput>
}

export interface QueryGetFilledMessageTemplateArgs {
  messageTemplateId: Scalars['ID']
  variables: Scalars['String']
}

export interface QueryGetFinancialTransactionArgs {
  invoiceId: Scalars['ID']
}

export interface QueryGetFinancialTransactionsArgs {
  cursorPagination?: Maybe<CursorPagination>
  filters?: Maybe<Array<Maybe<FilterInput>>>
  organizationId: Scalars['ID']
  pagination?: Maybe<Pagination>
  query?: Maybe<Scalars['String']>
  sort?: Maybe<SortInput>
}

export interface QueryGetFundingApplicationArgs {
  id: Scalars['ID']
}

export interface QueryGetFundingApplicationsArgs {
  organizationId: Scalars['ID']
}

export interface QueryGetFundingSourcesTokenArgs {
  customerId: Scalars['ID']
  testMode?: Maybe<Scalars['Boolean']>
}

export interface QueryGetGrantApplicationArgs {
  id: Scalars['ID']
}

export interface QueryGetGrantApplicationMessageArgs {
  userEmail: Scalars['String']
}

export interface QueryGetGrantApplicationsArgs {
  cursorPagination?: Maybe<CursorPagination>
  filters?: Maybe<Array<Maybe<FilterInput>>>
  query?: Maybe<Scalars['String']>
  sort?: Maybe<SortInput>
}

export interface QueryGetGrowSegmentsArgs {
  organizationId: Scalars['ID']
}

export interface QueryGetHistoricalPerformanceArgs {
  body?: Maybe<Scalars['String']>
  filters?: Maybe<Array<Maybe<FilterInput>>>
}

export interface QueryGetIpPayReportsArgs {
  getIPPayReportsInput: GetIpPayReportsInput
}

export interface QueryGetInvoiceArgs {
  invoiceId?: Maybe<Scalars['ID']>
}

export interface QueryGetInvoicesArgs {
  cursorPagination?: Maybe<CursorPagination>
  filters?: Maybe<Array<Maybe<FilterInput>>>
  organizationId?: Maybe<Scalars['ID']>
  organizationIds?: Maybe<Array<Maybe<Scalars['ID']>>>
  pagination?: Maybe<Pagination>
  query?: Maybe<Scalars['String']>
  sort?: Maybe<SortInput>
  todaysInvoices?: Maybe<Scalars['Boolean']>
  userId?: Maybe<Scalars['ID']>
}

export interface QueryGetLinesArgs {
  cursorPagination?: Maybe<CursorPagination>
  filters?: Maybe<Array<Maybe<FilterInput>>>
  organizationId: Scalars['ID']
  pagination?: Maybe<Pagination>
  query?: Maybe<Scalars['String']>
  sort?: Maybe<SortInput>
}

export interface QueryGetMessageDashboardOverviewArgs {
  endDate?: Maybe<Scalars['Date']>
  organizationId: Scalars['ID']
  startDate?: Maybe<Scalars['Date']>
}

export interface QueryGetMessageEventDataArgs {
  messageId?: Maybe<Scalars['ID']>
}

export interface QueryGetMessageEventDataForRecipientArgs {
  messageId: Scalars['String']
  recipientId: Scalars['ID']
}

export interface QueryGetMessageEventsArgs {
  organizationId: Scalars['ID']
}

export interface QueryGetMessageEventsOverviewArgs {
  organizationId: Scalars['ID']
}

export interface QueryGetMessageRouteResultsArgs {
  routes: Array<Maybe<MessageRoute>>
  userIds: Array<Maybe<Scalars['ID']>>
}

export interface QueryGetMessageTemplateArgs {
  messageTemplateId: Scalars['ID']
}

export interface QueryGetMessageTemplatesArgs {
  organizationId: Scalars['ID']
}

export interface QueryGetNetworkAlarmFieldValuesArgs {
  field: Scalars['String']
  organizationId?: Maybe<Scalars['ID']>
  organizationIds?: Maybe<Array<Maybe<Scalars['ID']>>>
}

export interface QueryGetNetworkNodesArgs {
  alarmsInPastDays?: Maybe<Scalars['Int']>
  numAlarmsPerNode?: Maybe<Scalars['Int']>
  organizationId: Scalars['ID']
}

export interface QueryGetNoteArgs {
  noteId: Scalars['ID']
}

export interface QueryGetNotesArgs {
  pagination?: Maybe<Pagination>
  userId: Scalars['ID']
}

export interface QueryGetNotificationsArgs {
  userId: Scalars['ID']
}

export interface QueryGetOrgAddressAutocompleteArgs {
  organizationId: Scalars['ID']
  query?: Maybe<Scalars['String']>
}

export interface QueryGetOrganizationArgs {
  organizationId: Scalars['ID']
}

export interface QueryGetOrganizationPermissionArgs {
  organizationPermissionId: Scalars['ID']
}

export interface QueryGetOrganizationPermissionsArgs {
  filter?: Maybe<FilterInput>
  organizationId: Scalars['ID']
}

export interface QueryGetPaymentMethodsArgs {
  organizationId?: Maybe<Scalars['ID']>
  userId?: Maybe<Scalars['ID']>
}

export interface QueryGetPaymentProfilesArgs {
  paymentUserId: Scalars['ID']
}

export interface QueryGetPaymentUserAccountsArgs {
  paymentUserId: Scalars['ID']
}

export interface QueryGetPermissionRoleArgs {
  permissionRoleId: Scalars['ID']
}

export interface QueryGetPermissionRolesArgs {
  organizationId: Scalars['ID']
}

export interface QueryGetPlanArgs {
  planId: Scalars['ID']
}

export interface QueryGetPlansArgs {
  cursorPagination?: Maybe<CursorPagination>
  filters?: Maybe<Array<Maybe<FilterInput>>>
  organizationId: Scalars['ID']
  pagination?: Maybe<Pagination>
  query?: Maybe<Scalars['String']>
  selectedPlans?: Maybe<Array<Maybe<Scalars['ID']>>>
  sort?: Maybe<SortInput>
}

export interface QueryGetProcessorTransactionArgs {
  paymentId: Scalars['ID']
}

export interface QueryGetReasonCodesArgs {
  cursorPagination?: Maybe<CursorPagination>
  filters?: Maybe<Array<Maybe<FilterInput>>>
  organizationId: Scalars['ID']
  query?: Maybe<Scalars['String']>
  reasonCodeType?: Maybe<ReasonCodeType>
  sort?: Maybe<SortInput>
}

export interface QueryGetReferralSourcesArgs {
  cursorPagination?: Maybe<CursorPagination>
  filters?: Maybe<Array<Maybe<FilterInput>>>
  organizationId: Scalars['ID']
  query?: Maybe<Scalars['String']>
  sort?: Maybe<SortInput>
}

export interface QueryGetResolverPermissionsArgs {
  organizationId: Scalars['ID']
}

export interface QueryGetSegmentsArgs {
  organizationId: Scalars['ID']
}

export interface QueryGetServiceArgs {
  serviceId: Scalars['ID']
}

export interface QueryGetServicesArgs {
  cursorPagination?: Maybe<CursorPagination>
  filters?: Maybe<Array<Maybe<FilterInput>>>
  organizationId: Scalars['ID']
  pagination?: Maybe<Pagination>
  query?: Maybe<Scalars['String']>
  sort?: Maybe<SortInput>
}

export interface QueryGetSetupLinkByMacArgs {
  macAddress: Scalars['String']
}

export interface QueryGetStateArgs {
  body?: Maybe<Scalars['String']>
  filters?: Maybe<Array<Maybe<FilterInput>>>
  isAggregateQuery?: Maybe<Scalars['Boolean']>
}

export interface QueryGetSubscriberBillingArgs {
  pagination?: Maybe<Pagination>
  query?: Maybe<Scalars['String']>
  userId: Scalars['ID']
}

export interface QueryGetSubscriberLocationsArgs {
  organizationId: Scalars['ID']
}

export interface QueryGetSubscribersArgs {
  cursorPagination?: Maybe<CursorPagination>
  dataLoaderFilters?: Maybe<Array<Maybe<DataLoaderFilterInput>>>
  filters?: Maybe<Array<Maybe<FilterInput>>>
  organizationId?: Maybe<Scalars['ID']>
  pageKey?: Maybe<Scalars['String']>
  pagination?: Maybe<Pagination>
  query?: Maybe<Scalars['String']>
  sort?: Maybe<SortInput>
}

export interface QueryGetSubscribersFastArgs {
  cursorPagination?: Maybe<CursorPagination>
  filters?: Maybe<Array<Maybe<FilterInput>>>
  organizationId?: Maybe<Scalars['ID']>
  pageKey?: Maybe<Scalars['String']>
  query?: Maybe<Scalars['String']>
  sort?: Maybe<SortInput>
}

export interface QueryGetSubscribersHudArgs {
  filters?: Maybe<Array<Maybe<FilterInput>>>
  organizationId: Scalars['ID']
  query?: Maybe<Scalars['String']>
  sort?: Maybe<SortInput>
}

export interface QueryGetSubscribersPaymentsArgs {
  initiatorInput: Scalars['String']
  organizationId: Scalars['ID']
}

export interface QueryGetSubscriptionArgs {
  subscriptionId: Scalars['ID']
}

export interface QueryGetSubscriptionsArgs {
  organizationId: Scalars['ID']
  pagination?: Maybe<Pagination>
  sort?: Maybe<SortInput>
}

export interface QueryGetTagArgs {
  tagId: Scalars['ID']
}

export interface QueryGetTagsArgs {
  cursorPagination?: Maybe<CursorPagination>
  organizationId: Scalars['ID']
  query?: Maybe<Scalars['String']>
  sort?: Maybe<SortInput>
}

export interface QueryGetTaxArgs {
  taxId?: Maybe<Scalars['ID']>
}

export interface QueryGetTaxesArgs {
  organizationId?: Maybe<Scalars['ID']>
}

export interface QueryGetTowersArgs {
  cursorPagination?: Maybe<CursorPagination>
  filters?: Maybe<Array<Maybe<FilterInput>>>
  organizationId: Scalars['ID']
  pagination?: Maybe<Pagination>
  query?: Maybe<Scalars['String']>
  sort?: Maybe<SortInput>
}

export interface QueryGetTwilioCallsArgs {
  dateSentAfter?: Maybe<Scalars['Date']>
  dateSentBefore?: Maybe<Scalars['Date']>
  limit?: Maybe<Scalars['Int']>
}

export interface QueryGetTwilioMessagesArgs {
  dateSentAfter?: Maybe<Scalars['Date']>
  dateSentBefore?: Maybe<Scalars['Date']>
  limit?: Maybe<Scalars['Int']>
}

export interface QueryGetUserArgs {
  userId: Scalars['ID']
}

export interface QueryGetUserByAccountIdArgs {
  accountId: Scalars['ID']
}

export interface QueryGetUserByAccountSetupCodeArgs {
  accountSetupCode: Scalars['ID']
}

export interface QueryGetUserByEmailArgs {
  email: Scalars['Email']
}

export interface QueryGetUserByMagicLinkCodeArgs {
  code: Scalars['ID']
}

export interface QueryGetZoneArgs {
  id: Scalars['ID']
}

export interface QueryGetZonesArgs {
  organizationId: Scalars['ID']
  query?: Maybe<Scalars['String']>
}

export interface QueryPrevalidateVoIpArgs {
  phoneNumber: Scalars['String']
  port?: Maybe<PortInfo>
  susbcriptionId: Scalars['ID']
}

export interface QueryRetrievePaymentMethodArgs {
  paymentId: Scalars['ID']
}

export interface QueryRetrieveTransactionArgs {
  transactionId: Scalars['ID']
}

export interface QueryRstGetResultArgs {
  id: Scalars['ID']
}

export interface QueryRstGetResultsArgs {
  ip: Scalars['String']
  limit?: Maybe<Scalars['Int']>
  searchAfter?: Maybe<Scalars['String']>
}

export interface QuerySendMessageScheduledArgs {
  eventDescription?: Maybe<Scalars['String']>
  eventTitle?: Maybe<Scalars['String']>
  message?: Maybe<MessageInput>
  oneTime?: Maybe<Scalars['Boolean']>
  scheduledMessageEventId?: Maybe<Scalars['String']>
}

export interface QuerySuspendBillingScheduledArgs {
  reason?: Maybe<Scalars['String']>
  suspend: Scalars['Boolean']
  userId: Scalars['ID']
}

export interface QueryVerifyAddressArgs {
  address: AddressInput
}

export interface QueryVerifyMfaCodeArgs {
  mfaCode: Scalars['String']
  userId: Scalars['ID']
}

export interface QueryVerifyOrgAddressArgs {
  address: AddressInput
  email?: Maybe<Scalars['Email']>
  organizationEmail?: Maybe<Scalars['Email']>
  phoneNumber?: Maybe<Scalars['String']>
}

/** Reason Codes for user's taking a certain action */
export interface ReasonCode {
  __typename?: 'ReasonCode'
  color?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['Date']>
  description?: Maybe<Scalars['String']>
  id: Scalars['ID']
  name: Scalars['String']
  organization: Organization
  reasonCodeType: ReasonCodeType
  subReasons?: Maybe<Array<Maybe<ReasonCode>>>
}

/** Input for Reason Codes */
export interface ReasonCodeInput {
  color?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  name: Scalars['String']
  parentReasonCode?: Maybe<Scalars['ID']>
  reasonCodeType: ReasonCodeType
}

export interface ReasonCodeResult {
  __typename?: 'ReasonCodeResult'
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>
  pageInfo?: Maybe<PageInfo>
  results: Array<Maybe<ReasonCode>>
  total: Scalars['Int']
}

/** Possible Types for reason codes */
export enum ReasonCodeType {
  cancellation = 'cancellation',
  credit = 'credit',
  discount = 'discount',
  suspension = 'suspension'
}

export interface ReasonCodesReport {
  __typename?: 'ReasonCodesReport'
  pageInfo?: Maybe<PageInfo>
  records: Array<Maybe<ReasonCodesReportRecord>>
}

export interface ReasonCodesReportRecord {
  __typename?: 'ReasonCodesReportRecord'
  accountId?: Maybe<Scalars['String']>
  accountType?: Maybe<Scalars['String']>
  cancelReason?: Maybe<Scalars['String']>
  cancelSubreason?: Maybe<Scalars['String']>
  city?: Maybe<Scalars['String']>
  company?: Maybe<Scalars['String']>
  firstName?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['Int']>
  lastName?: Maybe<Scalars['String']>
  subdivision?: Maybe<Scalars['String']>
  subscriberId?: Maybe<Scalars['Int']>
  subscriptionDurationDays?: Maybe<Scalars['Int']>
  subscriptionEndDate?: Maybe<Scalars['Date']>
  subscriptionStartDate?: Maybe<Scalars['Date']>
}

export interface ReferralSource {
  __typename?: 'ReferralSource'
  color?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['Date']>
  description?: Maybe<Scalars['String']>
  id: Scalars['ID']
  name: Scalars['String']
  organization: Organization
  subReferralSources?: Maybe<Array<Maybe<ReferralSource>>>
  updatedAt?: Maybe<Scalars['Date']>
}

/** Input for referral source */
export interface ReferralSourceInput {
  color?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  name: Scalars['String']
  parentReferralSource?: Maybe<Scalars['ID']>
}

export interface ReferralSourceResult {
  __typename?: 'ReferralSourceResult'
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>
  pageInfo?: Maybe<PageInfo>
  results: Array<Maybe<ReferralSource>>
  total: Scalars['Int']
}

export type Report = AccountsReceivableAgingReport | ArAgingReport | AuditTrailReport | AutopayFailingReport | AutopayReport | BillingTimePeriodEndReport | BillingTimePeriodReport | CreditReport | Form477Report | InvoiceReport | PlanCountReport | ReasonCodesReport | RevenueBreakdownReport | RevenueByProductReport | RevenueReport | SignupsBySourceReport | SubscriberReport | TagsReport | TakeRateByZonesReport | TaxReport | VoidedCreditsReport

export enum ReportType {
  accountsReceivableAging = 'accountsReceivableAging',
  arAgingReport = 'arAgingReport',
  auditTrail = 'auditTrail',
  autopayFailingReport = 'autopayFailingReport',
  autopayReport = 'autopayReport',
  averageSubscriberLife = 'averageSubscriberLife',
  billingTimePeriod = 'billingTimePeriod',
  billingTimePeriodEndReport = 'billingTimePeriodEndReport',
  cafIITag = 'cafIITag',
  dailyBillingReport = 'dailyBillingReport',
  dollarsBilledToday = 'dollarsBilledToday',
  form477Report = 'form477Report',
  outstandingCredits = 'outstandingCredits',
  planCountReport = 'planCountReport',
  rdofTag = 'rdofTag',
  reasonCodesReport = 'reasonCodesReport',
  revenueBreakdown = 'revenueBreakdown',
  revenueByProductReport = 'revenueByProductReport',
  revenueReport = 'revenueReport',
  signupsBySourceReport = 'signupsBySourceReport',
  subscriberReport = 'subscriberReport',
  subscribersBilledTimePeriod = 'subscribersBilledTimePeriod',
  subscribersBilledToday = 'subscribersBilledToday',
  subscribersChurnedToday = 'subscribersChurnedToday',
  subscribersOnAutopay = 'subscribersOnAutopay',
  tagsReport = 'tagsReport',
  takeRateByZonesReport = 'takeRateByZonesReport',
  taxReport = 'taxReport',
  voidedBillingEvents = 'voidedBillingEvents',
  voidedCreditsReport = 'voidedCreditsReport',
  voidedDiscounts = 'voidedDiscounts',
  voidedInvoices = 'voidedInvoices'
}

export enum ResolverGroup {
  Addons = 'Addons',
  Analyze = 'Analyze',
  Billing = 'Billing',
  Credits = 'Credits',
  Discounts = 'Discounts',
  Equipment = 'Equipment',
  Funding = 'Funding',
  Integrations = 'Integrations',
  Messaging = 'Messaging',
  Networking = 'Networking',
  Notes = 'Notes',
  Organization = 'Organization',
  Plans = 'Plans',
  Reporting = 'Reporting',
  Segments = 'Segments',
  Services = 'Services',
  Subscribers = 'Subscribers',
  Subscriptions = 'Subscriptions',
  System = 'System',
  Tags = 'Tags',
  Taxes = 'Taxes'
}

export interface ResolverPermission {
  __typename?: 'ResolverPermission'
  editable?: Maybe<Scalars['Boolean']>
  group?: Maybe<ResolverGroup>
  resolverDescription?: Maybe<Scalars['String']>
  resolverName?: Maybe<Scalars['String']>
  roles?: Maybe<Array<Maybe<PermissionRole>>>
}

export interface ResolverPermissionsInput {
  resolverName: Scalars['String']
  roles: Array<Maybe<Scalars['Int']>>
}

export interface RevenueBreakdownRecord {
  __typename?: 'RevenueBreakdownRecord'
  churn?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['ID']>
  plan?: Maybe<Plan>
  revenue?: Maybe<Scalars['Float']>
  subscribersCount?: Maybe<Scalars['Float']>
  unearnedRevenue?: Maybe<Scalars['Float']>
}

export interface RevenueBreakdownReport {
  __typename?: 'RevenueBreakdownReport'
  pageInfo?: Maybe<PageInfo>
  records: Array<Maybe<RevenueBreakdownRecord>>
}

export interface RevenueByProductReport {
  __typename?: 'RevenueByProductReport'
  pageInfo?: Maybe<PageInfo>
  records: Array<Maybe<RevenueByProductReportRecord>>
}

export interface RevenueByProductReportRecord {
  __typename?: 'RevenueByProductReportRecord'
  additions?: Maybe<Scalars['Int']>
  churn?: Maybe<Scalars['Int']>
  company?: Maybe<Scalars['String']>
  count?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['Int']>
  planOrAddon?: Maybe<Scalars['String']>
  planOrAddonId?: Maybe<Scalars['Int']>
  planOrAddonName?: Maybe<Scalars['String']>
  revenue?: Maybe<Scalars['Float']>
  subdivision?: Maybe<Scalars['String']>
}

export interface RevenueReport {
  __typename?: 'RevenueReport'
  pageInfo?: Maybe<PageInfo>
  records: Array<Maybe<RevenueReportRecords>>
}

export interface RevenueReportRecords {
  __typename?: 'RevenueReportRecords'
  accountId?: Maybe<Scalars['String']>
  accountType?: Maybe<Scalars['String']>
  addonsAppAmountDue?: Maybe<Scalars['Float']>
  addonsAppPrice?: Maybe<Scalars['Float']>
  addonsUpgradesAmountDue?: Maybe<Scalars['Float']>
  addonsUpgradesPrice?: Maybe<Scalars['Float']>
  billingPeriodEnd?: Maybe<Scalars['Date']>
  city?: Maybe<Scalars['String']>
  company?: Maybe<Scalars['String']>
  dueDate?: Maybe<Scalars['Date']>
  emergencyServiceFeesAmountDue?: Maybe<Scalars['Float']>
  emergencyServiceFeesPrice?: Maybe<Scalars['Float']>
  firstName?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['Int']>
  internet?: Maybe<Scalars['Float']>
  internetAmountDue?: Maybe<Scalars['Float']>
  invoiceDate?: Maybe<Scalars['Date']>
  invoiceId?: Maybe<Scalars['Int']>
  invoiceStatus?: Maybe<Scalars['String']>
  lastName?: Maybe<Scalars['String']>
  meshAmountDue?: Maybe<Scalars['Float']>
  meshPrice?: Maybe<Scalars['Float']>
  paidDate?: Maybe<Scalars['Date']>
  serviceInstallAmountDue?: Maybe<Scalars['Float']>
  serviceInstallPrice?: Maybe<Scalars['Float']>
  subdivision?: Maybe<Scalars['String']>
  tax?: Maybe<Scalars['Float']>
  total?: Maybe<Scalars['Float']>
  universalServiceFundAmountDue?: Maybe<Scalars['Float']>
  universalServiceFundPrice?: Maybe<Scalars['Float']>
  userId?: Maybe<Scalars['Int']>
  voipAmountDue?: Maybe<Scalars['Float']>
  voipPrice?: Maybe<Scalars['Float']>
}

export interface RingPhoneCallHandling {
  __typename?: 'RingPhoneCallHandling'
  busyCallHandling?: Maybe<CallHandling>
  noAnswerCallHandling?: Maybe<CallHandlingWithTimeout>
  unregisteredCallHandling?: Maybe<CallHandling>
}

export interface RingPhoneCallHandlingInput {
  busyCallHandling?: Maybe<CallHandlingInput>
  noAnswerCallHandling?: Maybe<CallHandlingWithTimeoutInput>
  unregisteredCallHandling?: Maybe<CallHandlingInput>
}

export enum RingType {
  Ring1 = 'Ring1',
  Ring2 = 'Ring2',
  Ring3 = 'Ring3',
  Ring4 = 'Ring4',
  Ring5 = 'Ring5',
  Ring6 = 'Ring6',
  Ring7 = 'Ring7',
  StandardRing = 'StandardRing'
}

export interface RouteCount {
  __typename?: 'RouteCount'
  email?: Maybe<Scalars['Int']>
  sms?: Maybe<Scalars['Int']>
}

export interface RouteGroup {
  __typename?: 'RouteGroup'
  groups?: Maybe<Array<Maybe<Scalars['String']>>>
  organizationId?: Maybe<Scalars['ID']>
}

export interface RouteTotals {
  __typename?: 'RouteTotals'
  email?: Maybe<Scalars['Int']>
  preferred?: Maybe<Scalars['Int']>
  sms?: Maybe<Scalars['Int']>
}

export interface RstData {
  __typename?: 'RstData'
  browserName?: Maybe<Scalars['String']>
  browserVersion?: Maybe<Scalars['String']>
  cpu?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['Date']>
  deviceModel?: Maybe<Scalars['String']>
  deviceType?: Maybe<Scalars['String']>
  deviceVendor?: Maybe<Scalars['String']>
  download?: Maybe<Scalars['Float']>
  engineName?: Maybe<Scalars['String']>
  engineVersion?: Maybe<Scalars['String']>
  geolocationEnabled?: Maybe<Scalars['Boolean']>
  id: Scalars['ID']
  ipAddress?: Maybe<Scalars['String']>
  ispName?: Maybe<Scalars['String']>
  jitter?: Maybe<Scalars['Float']>
  latency?: Maybe<Scalars['Float']>
  location?: Maybe<Location>
  osName?: Maybe<Scalars['String']>
  osVersion?: Maybe<Scalars['String']>
  packetLoss?: Maybe<Scalars['Float']>
  sort?: Maybe<Scalars['String']>
  upload?: Maybe<Scalars['Float']>
}

export interface RstDataInput {
  browserName?: Maybe<Scalars['String']>
  browserVersion?: Maybe<Scalars['String']>
  cpu?: Maybe<Scalars['String']>
  deviceModel?: Maybe<Scalars['String']>
  deviceType?: Maybe<Scalars['String']>
  deviceVendor?: Maybe<Scalars['String']>
  download?: Maybe<Scalars['Float']>
  engineName?: Maybe<Scalars['String']>
  engineVersion?: Maybe<Scalars['String']>
  geolocationEnabled?: Maybe<Scalars['Boolean']>
  ipAddress?: Maybe<Scalars['String']>
  ispName?: Maybe<Scalars['String']>
  jitter?: Maybe<Scalars['Float']>
  latency?: Maybe<Scalars['Float']>
  location?: Maybe<LocationInput>
  osName?: Maybe<Scalars['String']>
  osVersion?: Maybe<Scalars['String']>
  packetLoss?: Maybe<Scalars['Float']>
  upload?: Maybe<Scalars['Float']>
}

export interface RstDataResult {
  __typename?: 'RstDataResult'
  results: Array<Maybe<RstData>>
  total: Scalars['Int']
}

/** Segments (saved queries) */
export interface Segment {
  __typename?: 'Segment'
  filters?: Maybe<Array<Maybe<Filter>>>
  id?: Maybe<Scalars['ID']>
  name: Scalars['String']
  node?: Maybe<SegmentNode>
  sort?: Maybe<Sort>
}

export enum SegmentNode {
  addons = 'addons',
  credits = 'credits',
  discounts = 'discounts',
  invoices = 'invoices',
  payments = 'payments',
  plans = 'plans',
  services = 'services',
  subscribers = 'subscribers'
}

export interface SendgridEvent {
  __typename?: 'SendgridEvent'
  createdAt?: Maybe<Scalars['Date']>
  email?: Maybe<Scalars['String']>
  env?: Maybe<Scalars['String']>
  event?: Maybe<Scalars['String']>
  eventId?: Maybe<Scalars['ID']>
  id: Scalars['ID']
  organizationId?: Maybe<Scalars['ID']>
  recipientId?: Maybe<Scalars['ID']>
  sgMessageId?: Maybe<Scalars['ID']>
}

export interface SentMessage {
  __typename?: 'SentMessage'
  destinationEmail?: Maybe<Scalars['String']>
  eventId?: Maybe<Scalars['String']>
  from?: Maybe<Scalars['String']>
  html?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
  sentAt?: Maybe<Scalars['String']>
  subject?: Maybe<Scalars['String']>
  subscribersInvolved?: Maybe<Array<Maybe<Scalars['ID']>>>
  to?: Maybe<Scalars['String']>
  type?: Maybe<Scalars['String']>
}

/**
 * A Service is a product offered by an Organization
 *
 * Examples include:
 *  name: Velocity Pro 15Mb/3Mb, type: internet
 *  name: Residential VoIP, type: phone
 */
export interface Service {
  __typename?: 'Service'
  active?: Maybe<Scalars['Boolean']>
  avalaraKeyPairs?: Maybe<Array<Maybe<AvalaraKeyPairs>>>
  avalaraSalesType?: Maybe<Scalars['Int']>
  bandwidthCap?: Maybe<Scalars['String']>
  connectionType?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['Date']>
  downloadSpeed?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['ID']>
  name?: Maybe<Scalars['String']>
  organizations: Array<Maybe<Organization>>
  price?: Maybe<Scalars['Float']>
  provisioningId?: Maybe<Scalars['String']>
  smtp?: Maybe<Scalars['Boolean']>
  taxes?: Maybe<Array<Maybe<Tax>>>
  type?: Maybe<ServiceType>
  uploadSpeed?: Maybe<Scalars['String']>
}

export enum ServiceOffer {
  Internet = 'Internet',
  Other = 'Other',
  Telehealth = 'Telehealth',
  VoIP = 'VoIP'
}

export enum ServiceStatus {
  /** Service is active */
  active = 'active',
  /** Service is impaired */
  impaired = 'impaired',
  /** Service is disconnected due to an outage */
  outage = 'outage'
}

/** Service Type enum */
export enum ServiceType {
  /** An internet related service */
  internet = 'internet',
  /** Service with no specific type */
  other = 'other',
  /** VoIP and other phone services */
  phone = 'phone',
  /** A telehealth service */
  telehealth = 'telehealth'
}

export interface ServicesResult {
  __typename?: 'ServicesResult'
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>
  pageInfo?: Maybe<PageInfo>
  results: Array<Maybe<Service>>
}

export interface SetupMfaResult {
  __typename?: 'SetupMfaResult'
  mfaQr?: Maybe<Scalars['String']>
  mfaSecret?: Maybe<Scalars['String']>
}

export interface SignupsBySourceReport {
  __typename?: 'SignupsBySourceReport'
  pageInfo?: Maybe<PageInfo>
  records: Array<Maybe<SignupsBySourceReportRecord>>
}

export interface SignupsBySourceReportRecord {
  __typename?: 'SignupsBySourceReportRecord'
  accountId?: Maybe<Scalars['String']>
  accountStatus?: Maybe<Scalars['String']>
  accountType?: Maybe<Scalars['String']>
  address1?: Maybe<Scalars['String']>
  address2?: Maybe<Scalars['String']>
  city?: Maybe<Scalars['String']>
  company?: Maybe<Scalars['String']>
  dateOfRegistration?: Maybe<Scalars['Date']>
  firstName?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['Int']>
  lastName?: Maybe<Scalars['String']>
  portalIndicator?: Maybe<Scalars['String']>
  referralSource?: Maybe<Scalars['String']>
  state?: Maybe<Scalars['String']>
  subdivision?: Maybe<Scalars['String']>
  subscriberId?: Maybe<Scalars['Int']>
  zip?: Maybe<Scalars['String']>
}

export interface SimultaneousRingCallHandling {
  __typename?: 'SimultaneousRingCallHandling'
  forwardToNumberList?: Maybe<Array<Maybe<Scalars['String']>>>
  noAnswerCallHandling?: Maybe<CallHandlingWithTimeout>
}

export interface SimultaneousRingCallHandlingInput {
  forwardToNumberList?: Maybe<Array<Maybe<Scalars['String']>>>
  noAnswerCallHandling?: Maybe<CallHandlingWithTimeoutInput>
}

export interface SingleMessage {
  __typename?: 'SingleMessage'
  createdAt?: Maybe<Scalars['Date']>
  currentStatus?: Maybe<Scalars['String']>
  deliveredStatus?: Maybe<Scalars['Boolean']>
  errorStatus?: Maybe<Scalars['Boolean']>
  eventId: Scalars['ID']
  id: Scalars['ID']
  organizationId: Scalars['ID']
  recipientId: Scalars['ID']
  route?: Maybe<SingleMessageRoute>
  statusList?: Maybe<Array<Maybe<Scalars['String']>>>
  type?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['Date']>
}

export enum SingleMessageRoute {
  email = 'email',
  sms = 'sms'
}

export interface SmsEventData {
  __typename?: 'SmsEventData'
  delivered?: Maybe<Array<Maybe<SingleMessage>>>
  failed?: Maybe<Array<Maybe<SingleMessage>>>
  queued?: Maybe<Array<Maybe<SingleMessage>>>
  sent?: Maybe<Array<Maybe<SingleMessage>>>
  undelivered?: Maybe<Array<Maybe<SingleMessage>>>
}

export interface SmsTemplate {
  __typename?: 'SmsTemplate'
  message: Scalars['String']
}

export interface SmsTemplateInput {
  message: Scalars['String']
}

export interface SmsTotalsResults {
  __typename?: 'SmsTotalsResults'
  delivered?: Maybe<Scalars['Int']>
  failed?: Maybe<Scalars['Int']>
  queued?: Maybe<Scalars['Int']>
  sent?: Maybe<Scalars['Int']>
  undelivered?: Maybe<Scalars['Int']>
}

export interface SocialMedia {
  __typename?: 'SocialMedia'
  createdAt?: Maybe<Scalars['Date']>
  facebookUrl?: Maybe<Scalars['String']>
  googleUrl?: Maybe<Scalars['String']>
  id: Scalars['ID']
  instagramUrl?: Maybe<Scalars['String']>
  linkedinUrl?: Maybe<Scalars['String']>
  twitterUrl?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['Date']>
}

export interface SocialMediaInput {
  facebookUrl?: Maybe<Scalars['String']>
  googleUrl?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['ID']>
  instagramUrl?: Maybe<Scalars['String']>
  linkedinUrl?: Maybe<Scalars['String']>
  twitterUrl?: Maybe<Scalars['String']>
}

export interface Sort {
  __typename?: 'Sort'
  sortOrder: SortOrder
  sortedField: Scalars['String']
}

export interface SortInput {
  /** The sorting method for pagination, defaults to asc */
  sortOrder?: Maybe<SortOrder>
  /** Field name to sort by */
  sortedField: Scalars['String']
}

/** Sort array results in ascending or descending order */
export enum SortOrder {
  /** Sort array in ascending order */
  asc = 'asc',
  /** Sort array in descending order */
  desc = 'desc'
}

export interface SssConfig {
  __typename?: 'SssConfig'
  alianzaEnabled?: Maybe<Scalars['Boolean']>
  allowPublicAccess?: Maybe<Scalars['Boolean']>
  createAccountStepBeforePlans?: Maybe<Scalars['Boolean']>
  createdAt?: Maybe<Scalars['Date']>
  hideCustomizeStep?: Maybe<Scalars['Boolean']>
  id: Scalars['ID']
  preconstructionMode?: Maybe<Scalars['Boolean']>
  requirePaymentMethodStep?: Maybe<Scalars['Boolean']>
  sssUrl?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['Date']>
}

export interface SssConfigInput {
  alianzaEnabled?: Maybe<Scalars['Boolean']>
  allowPublicAccess?: Maybe<Scalars['Boolean']>
  createAccountStepBeforePlans?: Maybe<Scalars['Boolean']>
  hideCustomizeStep?: Maybe<Scalars['Boolean']>
  id?: Maybe<Scalars['ID']>
  preconstructionMode?: Maybe<Scalars['Boolean']>
  requirePaymentMethodStep?: Maybe<Scalars['Boolean']>
  sssUrl?: Maybe<Scalars['String']>
}

export enum State {
  AK = 'AK',
  AL = 'AL',
  AR = 'AR',
  AS = 'AS',
  AZ = 'AZ',
  CA = 'CA',
  CO = 'CO',
  CT = 'CT',
  DC = 'DC',
  DE = 'DE',
  FL = 'FL',
  GA = 'GA',
  GU = 'GU',
  HI = 'HI',
  IA = 'IA',
  ID = 'ID',
  IL = 'IL',
  IN = 'IN',
  KS = 'KS',
  KY = 'KY',
  LA = 'LA',
  MA = 'MA',
  MD = 'MD',
  ME = 'ME',
  MI = 'MI',
  MN = 'MN',
  MO = 'MO',
  MP = 'MP',
  MS = 'MS',
  MT = 'MT',
  NC = 'NC',
  ND = 'ND',
  NE = 'NE',
  NH = 'NH',
  NJ = 'NJ',
  NM = 'NM',
  NV = 'NV',
  NY = 'NY',
  OH = 'OH',
  OK = 'OK',
  OR = 'OR',
  PA = 'PA',
  PR = 'PR',
  RI = 'RI',
  SC = 'SC',
  SD = 'SD',
  TN = 'TN',
  TX = 'TX',
  UT = 'UT',
  VA = 'VA',
  VI = 'VI',
  VT = 'VT',
  WA = 'WA',
  WI = 'WI',
  WV = 'WV',
  WY = 'WY'
}

export interface StripeAccountInput {
  businessType: StripeBusinessType
  companyAddress: AddressInput
  companyName: Scalars['String']
  companyPhone: Scalars['String']
  companyTaxId: Scalars['String']
  externalAccount?: Maybe<ExternalAccountInput>
  mcc: Scalars['String']
  ownerAddress: AddressInput
  ownerDobDay: Scalars['Int']
  ownerDobMonth: Scalars['Int']
  ownerDobYear: Scalars['Int']
  ownerEmail: Scalars['String']
  ownerFirstName: Scalars['String']
  ownerJobTitle: Scalars['String']
  ownerLastName: Scalars['String']
  ownerPhone: Scalars['String']
  ownerTaxInfo: Scalars['String']
  repAddress: AddressInput
  repBackId?: Maybe<Scalars['Upload']>
  repDobDay: Scalars['Int']
  repDobMonth: Scalars['Int']
  repDobYear: Scalars['Int']
  repEmail: Scalars['String']
  repFirstName: Scalars['String']
  repFrontId?: Maybe<Scalars['Upload']>
  repLastName: Scalars['String']
  repPhone: Scalars['String']
  repTaxInfo: Scalars['String']
  repTitle: Scalars['String']
  tosIp: Scalars['String']
  url: Scalars['String']
}

export { StripeBusinessType }

/** Subscriber Event Categories */
export enum SubscriberEventCategory {
  /** Event is billing related */
  billing = 'billing',
  /** Event is an inbound communication from a user */
  inboundComm = 'inboundComm',
  /** Event is internal to the provider */
  internal = 'internal',
  /** Event is invoice related */
  invoice = 'invoice',
  /** Event is network related */
  network = 'network',
  /** Some other event happened */
  none = 'none',
  /** Event is an outbound communication to a user */
  outboundComm = 'outboundComm',
  /** Event is subscription related */
  subscriber = 'subscriber',
  /** Event is a change in the subscriber status */
  subscriberStatusChange = 'subscriberStatusChange'
}

/** Subscriber Event Types */
export enum SubscriberEventType {
  addonCreated = 'addonCreated',
  addonRemoved = 'addonRemoved',
  cancelledSubscription = 'cancelledSubscription',
  cardAdded = 'cardAdded',
  cardExpired = 'cardExpired',
  cardExpiryReminder = 'cardExpiryReminder',
  cardUpdated = 'cardUpdated',
  createdSubscription = 'createdSubscription',
  creditVoided = 'creditVoided',
  invoiceCreated = 'invoiceCreated',
  invoiceDeleted = 'invoiceDeleted',
  invoiceUpdated = 'invoiceUpdated',
  invoiceVoided = 'invoiceVoided',
  messageSentToSubscriber = 'messageSentToSubscriber',
  mrrUpdated = 'mrrUpdated',
  networkOutage = 'networkOutage',
  paymentFailed = 'paymentFailed',
  paymentInitiated = 'paymentInitiated',
  paymentRefunded = 'paymentRefunded',
  paymentRefuned = 'paymentRefuned',
  paymentSourceAdded = 'paymentSourceAdded',
  paymentSourceDeleted = 'paymentSourceDeleted',
  paymentSourceUpdated = 'paymentSourceUpdated',
  paymentSucceeded = 'paymentSucceeded',
  planUpgraded = 'planUpgraded',
  promotionalCreditsAdded = 'promotionalCreditsAdded',
  promotionalCreditsDeducted = 'promotionalCreditsDeducted',
  refundInitiated = 'refundInitiated',
  renewedSubscription = 'renewedSubscription',
  scheduledSubscriptionCancellation = 'scheduledSubscriptionCancellation',
  scheduledSubscriptionCancellationRemoved = 'scheduledSubscriptionCancellationRemoved',
  startedSubscription = 'startedSubscription',
  subscriberContactedSupport = 'subscriberContactedSupport',
  subscriberCreated = 'subscriberCreated',
  subscriberDeleted = 'subscriberDeleted',
  subscriberEnrolled = 'subscriberEnrolled',
  updatedSubscription = 'updatedSubscription'
}

/** Subscriber Billing */
export interface SubscriberInvoice {
  __typename?: 'SubscriberInvoice'
  amountDue: Scalars['Float']
  billingPeriodEnd: Scalars['Date']
  billingPeriodStart: Scalars['Date']
  discount?: Maybe<Scalars['Float']>
  dueDate: Scalars['Date']
  id: Scalars['ID']
  invoiceDate: Scalars['Date']
  invoiceFilename?: Maybe<Scalars['String']>
  invoiceItems: Array<Maybe<InvoiceItem>>
  invoiceStatus: InvoiceStatus
  notes?: Maybe<Array<Maybe<Note>>>
  organization?: Maybe<Organization>
  paidDate?: Maybe<Scalars['Date']>
  subtotal?: Maybe<Scalars['Float']>
  tax?: Maybe<Scalars['Float']>
  taxes?: Maybe<Array<Maybe<Tax>>>
  user?: Maybe<User>
}

export interface SubscriberInvoicesResult {
  __typename?: 'SubscriberInvoicesResult'
  pageInfo?: Maybe<PageInfo>
  results: Array<Maybe<SubscriberInvoice>>
  taxes?: Maybe<Array<Maybe<Tax>>>
  total: Scalars['Int']
}

export interface SubscriberMutation {
  __typename?: 'SubscriberMutation'
  eventId?: Maybe<Scalars['String']>
  subscribersInvolved?: Maybe<Array<Maybe<Scalars['ID']>>>
  timeStamp?: Maybe<Scalars['String']>
  type?: Maybe<Scalars['String']>
  userAuth?: Maybe<Scalars['String']>
  userInput?: Maybe<Scalars['String']>
}

export interface SubscriberReport {
  __typename?: 'SubscriberReport'
  subscribers: SubscribersResult
}

/** Subscribers HUD */
export interface SubscribersHud {
  __typename?: 'SubscribersHUD'
  annualizedChurnRate: Scalars['Float']
  averageRevenuePerSubscriber: Scalars['Float']
  contractedAnnualizedRecurringRevenue: Scalars['Float']
  prospectsActivatedPercentage: Scalars['Float']
  total: Scalars['Int']
  totalContractValue: Scalars['Float']
}

export enum SubscribersNumber {
  lessThanOneThounsand = 'lessThanOneThounsand',
  moreThanOneMillion = 'moreThanOneMillion',
  oneHundredThounsandToOneMillion = 'oneHundredThounsandToOneMillion',
  oneThounsandToTenThounsand = 'oneThounsandToTenThounsand',
  tenThounsandToOneHundredThounsand = 'tenThounsandToOneHundredThounsand'
}

/** Subscriber result */
export interface SubscribersResult {
  __typename?: 'SubscribersResult'
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>
  pageInfo?: Maybe<PageInfo>
  results: Array<Maybe<User>>
}

/** A Subscription is a resultant object from a User subscribing to a Plan */
export interface Subscription {
  __typename?: 'Subscription'
  active?: Maybe<Scalars['Boolean']>
  additionalServiceSetupRequiredKeys?: Maybe<Array<Maybe<ExternalService>>>
  addons?: Maybe<Array<Maybe<Addon>>>
  cancelReasonCode?: Maybe<ReasonCode>
  cancelSubReasonCode?: Maybe<ReasonCode>
  childSubscription?: Maybe<Subscription>
  contract?: Maybe<Contract>
  createdAt: Scalars['Date']
  discounts?: Maybe<Array<Maybe<Discount>>>
  equipment?: Maybe<Array<Maybe<Equipment>>>
  externalServiceData?: Maybe<ExternalServiceData>
  id: Scalars['ID']
  jobId?: Maybe<Scalars['String']>
  lastAlarmedAt?: Maybe<Scalars['Date']>
  legacySystemId?: Maybe<Scalars['ID']>
  nextDueDate?: Maybe<Scalars['Date']>
  parentSubscription?: Maybe<Subscription>
  plans: Array<Maybe<Plan>>
  price?: Maybe<Scalars['Float']>
  provisioningResponses?: Maybe<Array<Maybe<ProvisioningResponse>>>
  serviceAddress?: Maybe<Address>
  serviceStatus?: Maybe<ServiceStatus>
  status?: Maybe<SubscriptionStatus>
  subscriptionEndDate?: Maybe<Scalars['Date']>
  subscriptionStartDate?: Maybe<Scalars['Date']>
  tax?: Maybe<Scalars['Float']>
  tower?: Maybe<Tower>
  user: User
}

/**
 * SubscriptionDiscountInput type
 *   - Attaches discounts to a subscription. If the discount is applied to a specific
 *   plan, include the plan ID. If the plan ID is not included the discount will be applied
 *   to the invoice total.
 */
export interface SubscriptionDiscountInput {
  addonId?: Maybe<Scalars['ID']>
  discountId: Scalars['ID']
  planId?: Maybe<Scalars['ID']>
}

export interface SubscriptionInput {
  /** Subscription active */
  active?: Maybe<Scalars['Boolean']>
  /** The unique identifiers for addons for a subscription */
  addonIds?: Maybe<Array<Maybe<Scalars['ID']>>>
  autopay?: Maybe<Scalars['Boolean']>
  contract?: Maybe<ContractInput>
  equipment?: Maybe<Array<Maybe<UpdateEquipmentInput>>>
  /** Next billing due date */
  nextDueDate?: Maybe<Scalars['Date']>
  /** The unique identifiers for plans for a subscription */
  planIds?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** The service address for a subscription */
  serviceAddress?: Maybe<AddressInput>
  /** Service Status, defaults to active */
  serviceStatus?: Maybe<ServiceStatus>
  /** The status a subscription, defaults to active */
  status?: Maybe<SubscriptionStatus>
  /** Array of discount that are applied to the subscription */
  subscriptionDiscounts?: Maybe<Array<Maybe<SubscriptionDiscountInput>>>
  /** The date which a subscription ends */
  subscriptionEndDate?: Maybe<Scalars['Date']>
  /** The date which a subscription starts (defaults to now) */
  subscriptionStartDate?: Maybe<Scalars['Date']>
  /** Tower that wireless service is connected to */
  towerId?: Maybe<Scalars['ID']>
  /** The unique identifier of a user for a subscription */
  userId: Scalars['ID']
}

/** Subscription Status can be either active or inactive */
export enum SubscriptionStatus {
  /** A subscription that is active */
  active = 'active',
  /** A subscription that is active and cannot be disconnected */
  active_DND = 'active_DND',
  /** A subscription that is not active */
  inactive = 'inactive',
  /** A subscription that is scheduled to activate at some point in the future */
  pending = 'pending',
  /** A subscription that has been active in the past, but is currently inactive */
  suspended = 'suspended'
}

export interface SuspendBilling {
  __typename?: 'SuspendBilling'
  createdAt?: Maybe<Scalars['Date']>
  endCronString?: Maybe<Scalars['String']>
  endDate?: Maybe<Scalars['Date']>
  endJobId?: Maybe<Scalars['ID']>
  id: Scalars['ID']
  reasonCode?: Maybe<ReasonCode>
  startCronString?: Maybe<Scalars['String']>
  startDate?: Maybe<Scalars['Date']>
  startJobId?: Maybe<Scalars['ID']>
  subReasonCode?: Maybe<ReasonCode>
  suspendBilling?: Maybe<Scalars['Boolean']>
}

export interface SuspendBillingInput {
  endDate?: Maybe<Scalars['Date']>
  reasonCodeId?: Maybe<Scalars['ID']>
  startDate?: Maybe<Scalars['Date']>
  subReasonCodeId?: Maybe<Scalars['ID']>
  suspend?: Maybe<Scalars['Boolean']>
  userId: Scalars['ID']
}

/** Tags describe a user and can be used to get groups of similar users */
export interface Tag {
  __typename?: 'Tag'
  color?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  id: Scalars['ID']
  name: Scalars['String']
  users?: Maybe<Array<Maybe<User>>>
}

/** TagInput requires id only when being updated with a User */
export interface TagInput {
  /** The color for a tag */
  color?: Maybe<Scalars['String']>
  /** The description for a tag */
  description?: Maybe<Scalars['String']>
  /** The name of a tag */
  name: Scalars['String']
}

export interface TagsReport {
  __typename?: 'TagsReport'
  pageInfo?: Maybe<PageInfo>
  records: Array<Maybe<TagsReportRecord>>
}

export interface TagsReportRecord {
  __typename?: 'TagsReportRecord'
  accountId?: Maybe<Scalars['String']>
  accountStatus?: Maybe<Scalars['String']>
  accountType?: Maybe<Scalars['String']>
  balance?: Maybe<Scalars['Float']>
  customerSince?: Maybe<Scalars['Date']>
  firstName?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['Int']>
  lastName?: Maybe<Scalars['String']>
  mrr?: Maybe<Scalars['Float']>
  organization?: Maybe<Scalars['String']>
  suborganization?: Maybe<Scalars['String']>
  userId?: Maybe<Scalars['Int']>
}

export interface TagsResult {
  __typename?: 'TagsResult'
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>
  pageInfo?: Maybe<PageInfo>
  results: Array<Maybe<Tag>>
  total: Scalars['Int']
}

export interface TakeRateByZonesReport {
  __typename?: 'TakeRateByZonesReport'
  pageInfo?: Maybe<PageInfo>
  records: Array<Maybe<TakeRateByZonesReportRecord>>
}

export interface TakeRateByZonesReportRecord {
  __typename?: 'TakeRateByZonesReportRecord'
  accountType?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['ID']>
  netSubscribers?: Maybe<Scalars['Int']>
  newCancelled?: Maybe<Scalars['Int']>
  newSubscribers?: Maybe<Scalars['Int']>
  numSubscribers?: Maybe<Scalars['Int']>
  subdivision?: Maybe<Scalars['String']>
  takeRate?: Maybe<Scalars['Float']>
  totalPassing?: Maybe<Scalars['Int']>
  zoneName?: Maybe<Scalars['String']>
}

export interface Tax {
  __typename?: 'Tax'
  addon?: Maybe<Addon>
  avalaraServiceType?: Maybe<Scalars['Int']>
  avalaraTransactionType?: Maybe<Scalars['Int']>
  id: Scalars['ID']
  jurisdiction?: Maybe<Scalars['String']>
  parentId?: Maybe<Scalars['ID']>
  parentName?: Maybe<Scalars['String']>
  parentType?: Maybe<Scalars['String']>
  service?: Maybe<Service>
  taxAmount?: Maybe<Scalars['Float']>
  taxName?: Maybe<Scalars['String']>
  taxRate?: Maybe<Scalars['Float']>
}

export interface TaxInput {
  addonId?: Maybe<Scalars['ID']>
  avalaraServiceType?: Maybe<Scalars['Int']>
  avalaraTransactionType?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['ID']>
  serviceId?: Maybe<Scalars['ID']>
  taxName?: Maybe<Scalars['String']>
  taxRate?: Maybe<Scalars['Float']>
}

export interface TaxReport {
  __typename?: 'TaxReport'
  pageInfo?: Maybe<PageInfo>
  records: Array<Maybe<TaxReportRecord>>
}

export interface TaxReportRecord {
  __typename?: 'TaxReportRecord'
  category?: Maybe<Scalars['String']>
  dueDate?: Maybe<Scalars['Date']>
  id?: Maybe<Scalars['Int']>
  jurisdiction?: Maybe<Scalars['String']>
  tax?: Maybe<Scalars['Float']>
  taxName?: Maybe<Scalars['String']>
}

export interface Tower {
  __typename?: 'Tower'
  attachmentType?: Maybe<AttachmentType>
  createdAt?: Maybe<Scalars['Date']>
  equipment?: Maybe<Equipment>
  geometryCoordinates?: Maybe<Array<Maybe<Scalars['String']>>>
  geometryType?: Maybe<GeometryType>
  id?: Maybe<Scalars['ID']>
  lat?: Maybe<Scalars['Float']>
  lon?: Maybe<Scalars['Float']>
  name?: Maybe<Scalars['String']>
  status?: Maybe<TowerStatus>
}

export enum TowerStatus {
  down = 'down',
  up = 'up'
}

export interface TowersResult {
  __typename?: 'TowersResult'
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>
  pageInfo?: Maybe<PageInfo>
  results: Array<Maybe<Tower>>
  total: Scalars['Int']
}

export enum TransactionType {
  /** A financial transaction made by ACH transfer */
  ACH = 'ACH',
  /** A refund financial transaction made by ACH transfer */
  achRefund = 'achRefund',
  /** A financial transaction made by card */
  card = 'card',
  /** A refund financial transaction made by card */
  cardRefund = 'cardRefund',
  /** A financial transaction made by cash */
  cash = 'cash',
  /** ARefund financial transaction made by cash */
  cashRefund = 'cashRefund',
  /** A financial transaction made by check */
  check = 'check',
  /** A refund financial transaction made by check */
  checkRefund = 'checkRefund'
}

export interface TwilioCall {
  __typename?: 'TwilioCall'
  accountSid?: Maybe<Scalars['String']>
  annotation?: Maybe<Scalars['String']>
  answeredBy?: Maybe<Scalars['String']>
  apiVersion?: Maybe<Scalars['String']>
  callerName?: Maybe<Scalars['String']>
  dateCreated?: Maybe<Scalars['Date']>
  dateUpdated?: Maybe<Scalars['Date']>
  direction?: Maybe<Scalars['String']>
  duration?: Maybe<Scalars['String']>
  endTime?: Maybe<Scalars['Date']>
  forwardedFrom?: Maybe<Scalars['String']>
  from?: Maybe<Scalars['String']>
  fromFormatted?: Maybe<Scalars['String']>
  groupSid?: Maybe<Scalars['String']>
  parentCallSid?: Maybe<Scalars['String']>
  phoneNumberSid?: Maybe<Scalars['String']>
  price?: Maybe<Scalars['String']>
  priceUnit?: Maybe<Scalars['String']>
  queueTime?: Maybe<Scalars['String']>
  sid?: Maybe<Scalars['String']>
  startTime?: Maybe<Scalars['Date']>
  status?: Maybe<Scalars['String']>
  to?: Maybe<Scalars['String']>
  toFormatted?: Maybe<Scalars['String']>
  trunkSid?: Maybe<Scalars['String']>
  uri?: Maybe<Scalars['String']>
}

export interface TwilioEvent {
  __typename?: 'TwilioEvent'
  createdAt?: Maybe<Scalars['Date']>
  eventId?: Maybe<Scalars['ID']>
  from?: Maybe<Scalars['String']>
  id: Scalars['ID']
  organizationId?: Maybe<Scalars['ID']>
  recipientId?: Maybe<Scalars['ID']>
  smsId?: Maybe<Scalars['ID']>
  status?: Maybe<Scalars['String']>
  to?: Maybe<Scalars['String']>
}

export interface TwilioMessage {
  __typename?: 'TwilioMessage'
  accountSid?: Maybe<Scalars['String']>
  apiVersion?: Maybe<Scalars['String']>
  body?: Maybe<Scalars['String']>
  dateCreated?: Maybe<Scalars['Date']>
  dateSent?: Maybe<Scalars['Date']>
  dateUpdated?: Maybe<Scalars['Date']>
  direction?: Maybe<Scalars['String']>
  errorCode?: Maybe<Scalars['String']>
  errorMessage?: Maybe<Scalars['String']>
  from?: Maybe<Scalars['String']>
  messagingServiceSid?: Maybe<Scalars['String']>
  numMedia?: Maybe<Scalars['String']>
  numSegments?: Maybe<Scalars['String']>
  price?: Maybe<Scalars['String']>
  priceUnit?: Maybe<Scalars['String']>
  sid?: Maybe<Scalars['String']>
  status?: Maybe<Scalars['String']>
  to?: Maybe<Scalars['String']>
  uri?: Maybe<Scalars['String']>
}

export interface UpdateAddonInput {
  /** Is addon activated */
  active?: Maybe<Scalars['Boolean']>
  avalaraSalesType?: Maybe<Scalars['Int']>
  avalaraServiceType?: Maybe<Scalars['Int']>
  avalaraTransactionType?: Maybe<Scalars['Int']>
  /** Specify how frequently customer is billed. To bill a customer every 6 months, enter 6 with a billingCyclePeriod of month */
  billingCyclePeriod?: Maybe<Scalars['Int']>
  /** The billing frequency unit in which a customer is billed (day, week, month, year) */
  billingCycleUnit?: Maybe<BillingCycleUnit>
  /** Description of an addon */
  description?: Maybe<Scalars['String']>
  /** Specify the duration to charge this addon (oneTime, forever, limitedPeriod) */
  duration?: Maybe<BillingDuration>
  /** Fixed Amount price of an addon */
  fixedAmount?: Maybe<Scalars['Float']>
  /** The uploaded image for a plan */
  image?: Maybe<Scalars['Upload']>
  /** Denotes if it's a fee */
  isFee?: Maybe<Scalars['Boolean']>
  /** Name of an addon */
  name?: Maybe<Scalars['String']>
  /** The number of billing cycles to charge the subscriber for a limitedPeriod duration addon */
  numberOfBillingCycles?: Maybe<Scalars['Int']>
  /** Organization ids */
  organizationIds?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Percentage of total to charge for an addon */
  percentage?: Maybe<Scalars['Float']>
  taxes?: Maybe<Array<Maybe<TaxInput>>>
  /** Type of an addon */
  type?: Maybe<BillingType>
}

/** Options for updating a bank account */
export interface UpdateBankAccountInput {
  accountNumber?: Maybe<Scalars['String']>
  bankAccountType?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  routingNumber?: Maybe<Scalars['String']>
}

/** Options for updating a card */
export interface UpdateCardInput {
  card?: Maybe<Scalars['String']>
  city?: Maybe<Scalars['String']>
  country?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  line1?: Maybe<Scalars['String']>
  line2?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  orderId?: Maybe<Scalars['Int']>
  phone?: Maybe<Scalars['Int']>
  postal_code?: Maybe<Scalars['String']>
  state?: Maybe<Scalars['String']>
}

export interface UpdateDiscountInput {
  applicableAddonIds?: Maybe<Array<Maybe<Scalars['ID']>>>
  applicablePlanIds?: Maybe<Array<Maybe<Scalars['ID']>>>
  applyOn?: Maybe<DiscountApplication>
  avalaraDiscountType?: Maybe<Scalars['Int']>
  description?: Maybe<Scalars['String']>
  discountAmount?: Maybe<Scalars['Float']>
  discountPercentage?: Maybe<Scalars['Float']>
  discountType?: Maybe<BillingType>
  duration?: Maybe<BillingDuration>
  enabled?: Maybe<Scalars['Boolean']>
  limitedPeriodMonths?: Maybe<Scalars['Int']>
  maxRedemptions?: Maybe<Scalars['Int']>
  name?: Maybe<Scalars['String']>
  organizationIds?: Maybe<Array<Maybe<Scalars['ID']>>>
  reasonCodeId?: Maybe<Scalars['ID']>
  subReasonCodeId?: Maybe<Scalars['ID']>
  validUntil?: Maybe<Scalars['Date']>
}

export interface UpdateEquipmentInput {
  currentlyProvisioned?: Maybe<Scalars['Boolean']>
  deviceId?: Maybe<Scalars['String']>
  deviceStatus?: Maybe<DeviceStatus>
  id?: Maybe<Scalars['ID']>
  lastProvisionedDate?: Maybe<Scalars['Date']>
  legacySystemId?: Maybe<Scalars['String']>
  make?: Maybe<Scalars['String']>
  model?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  organizationId?: Maybe<Scalars['ID']>
  planId?: Maybe<Scalars['ID']>
  provisionedToSubscriberId?: Maybe<Scalars['ID']>
  serviceId?: Maybe<Scalars['ID']>
  servicePassword?: Maybe<Scalars['String']>
  serviceUsername?: Maybe<Scalars['String']>
  smtp?: Maybe<Scalars['Boolean']>
  staticIp?: Maybe<Scalars['String']>
  subscriberId?: Maybe<Scalars['ID']>
  subscriptionId?: Maybe<Scalars['ID']>
  type?: Maybe<EquipmentType>
}

export interface UpdateInvoiceInput {
  invoiceStatus?: Maybe<InvoiceStatus>
}

export interface UpdatePermissionRoleInput {
  allowedBossRouteGroups?: Maybe<Array<Maybe<Scalars['String']>>>
  defaultBossPath?: Maybe<Scalars['String']>
  inherits?: Maybe<Array<Maybe<Scalars['ID']>>>
  mfaRequired?: Maybe<Scalars['Boolean']>
  organizationId?: Maybe<Scalars['ID']>
  removeAllowedBossRouteGroups?: Maybe<Array<Maybe<Scalars['String']>>>
  role?: Maybe<Scalars['String']>
}

export interface UpdatePlanInput {
  active?: Maybe<Scalars['Boolean']>
  /** Specify how frequently customer is billed. To bill a customer every 6 months, enter 6 */
  billingCyclePeriod?: Maybe<Scalars['Int']>
  /** The billing frequency unit in which a customer is billed */
  billingCycleUnit?: Maybe<BillingCycleUnit>
  childPlanIds?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** The description for a plan */
  description?: Maybe<Scalars['String']>
  externalPlanId?: Maybe<Scalars['ID']>
  /** The uploaded image for a plan */
  image?: Maybe<Scalars['Upload']>
  /** The name for a plan */
  name?: Maybe<Scalars['String']>
  /** Number of billing cycles a subscription should be charged. After the billing cycles are spent, the subscription will be cancelled */
  numberOfBillingCycles?: Maybe<Scalars['Int']>
  /** Unique identifier of an organization for a plan */
  organizationIds?: Maybe<Array<Maybe<Scalars['ID']>>>
  price?: Maybe<Scalars['Float']>
  /** The pricing model for a plan */
  pricingModel?: Maybe<PricingModel>
  recommended?: Maybe<Scalars['Boolean']>
  /** The list of selling points for a plan */
  sellingPoints?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Services that make up the plan */
  serviceIds?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** external plan id (alianza) */
  standAlone?: Maybe<Scalars['Boolean']>
}

export interface UpdateServiceInput {
  active?: Maybe<Scalars['Boolean']>
  avalaraSalesType?: Maybe<Scalars['Int']>
  avalaraServiceType?: Maybe<Scalars['Int']>
  avalaraTransactionType?: Maybe<Scalars['Int']>
  bandwidthCap?: Maybe<Scalars['String']>
  connectionType?: Maybe<ConnectionType>
  downloadSpeed?: Maybe<Scalars['String']>
  name: Scalars['String']
  organizationIds: Array<Maybe<Scalars['ID']>>
  price: Scalars['Float']
  provisioningId?: Maybe<Scalars['String']>
  smtp?: Maybe<Scalars['Boolean']>
  taxes?: Maybe<Array<Maybe<TaxInput>>>
  type: ServiceType
  uploadSpeed?: Maybe<Scalars['String']>
}

export interface UpdateUserInput {
  /** If true, the user's account has not been setup */
  accountSetupNotComplete?: Maybe<Scalars['Boolean']>
  /** An account status for a user */
  accountStatus?: Maybe<AccountStatus>
  /** Residential, Commercial or MDU */
  accountType?: Maybe<AccountType>
  /** User active */
  active?: Maybe<Scalars['Boolean']>
  /** Autopay */
  autopay?: Maybe<Scalars['Boolean']>
  avalaraSubscriberSettings?: Maybe<AvalaraSubscriberSettingsInput>
  /** Name of the company a user belongs to */
  company?: Maybe<Scalars['String']>
  /** The date which a user becomes a customer */
  customerSince?: Maybe<Scalars['Date']>
  /** Device (Used in alianza setup) */
  device?: Maybe<CreateDeviceInput>
  /** The primary email for a user */
  email?: Maybe<Scalars['Email']>
  enableNotifications?: Maybe<Scalars['Boolean']>
  /** First name of a user */
  firstName?: Maybe<Scalars['String']>
  /** Industry of business account */
  industry?: Maybe<Industry>
  /** Invoice method setting */
  invoiceMethod?: Maybe<InvoiceMethod>
  /** If true, the user has a critical job and cannot be disconnected from service */
  isCritical?: Maybe<Scalars['Boolean']>
  /** If true, user is pinned */
  isPinned?: Maybe<Scalars['Boolean']>
  /** Last name of a user */
  lastName?: Maybe<Scalars['String']>
  /** Data source where lead was found */
  leadSource?: Maybe<LeadSource>
  /** Input links */
  links?: Maybe<Array<Maybe<ExternalLinkInput>>>
  /** Mailing address for a user */
  mailingAddress?: Maybe<AddressInput>
  networkNodeId?: Maybe<Scalars['ID']>
  /** notes for a user */
  notes?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Unique identifier of an organization for a user */
  organizationId?: Maybe<Scalars['Int']>
  /** The password for a user */
  password?: Maybe<Scalars['Password']>
  /** Code for email verifying a payment method */
  paymentEmailCode?: Maybe<Scalars['String']>
  /** Payment status, defaults to current */
  paymentStatus?: Maybe<PaymentStatus>
  paymentsConfig?: Maybe<PaymentSetupInput>
  /** The primary phone number for a user */
  phoneNumber?: Maybe<Scalars['String']>
  /** The users preferred method of contact */
  preferredContact?: Maybe<PreferredContact>
  /** Uploaded image for a user's profile */
  profileImage?: Maybe<Scalars['Upload']>
  /** Prospective service address for leads/opportunities */
  prospectiveServiceAddress?: Maybe<AddressInput>
  referralSourceId?: Maybe<Scalars['ID']>
  /** The role of a user */
  role?: Maybe<UserRole>
  /** Service Address for a User */
  serviceAddress?: Maybe<AddressInput>
  /** Tags for a user */
  tags?: Maybe<Array<Maybe<TagInput>>>
}

export interface UploadDataResponse {
  __typename?: 'UploadDataResponse'
  fileUrls?: Maybe<Array<Maybe<Scalars['String']>>>
  message?: Maybe<Scalars['String']>
  success: Scalars['Boolean']
}

/**
 * A User is an entity that can create, read, update, and delete organizations, subscriptions, and plans
 * Users can also subscribe to plans and or services
 */
export interface User {
  __typename?: 'User'
  accountId?: Maybe<Scalars['String']>
  accountStatus?: Maybe<AccountStatus>
  accountType?: Maybe<AccountType>
  acpStatus?: Maybe<AcpStatus>
  active?: Maybe<Scalars['Boolean']>
  autopay?: Maybe<Scalars['Boolean']>
  avalaraSubscriberSettings?: Maybe<AvalaraSubscriberSettings>
  billingScheduledTimePeriods?: Maybe<Array<Maybe<SuspendBilling>>>
  company?: Maybe<Scalars['String']>
  createdAt: Scalars['Date']
  /** Any purchases and unpaid balances in the account */
  currentBalance?: Maybe<Scalars['Float']>
  customerSince?: Maybe<Scalars['Date']>
  device?: Maybe<Device>
  email: Scalars['Email']
  enableNotifications?: Maybe<Scalars['Boolean']>
  equipment?: Maybe<Array<Maybe<Equipment>>>
  firstName?: Maybe<Scalars['String']>
  id: Scalars['ID']
  industry?: Maybe<Scalars['String']>
  invoiceMethod?: Maybe<InvoiceMethod>
  ippay?: Maybe<Scalars['Boolean']>
  isCritical?: Maybe<Scalars['Boolean']>
  isPinned?: Maybe<Scalars['Boolean']>
  lastAlarmedAt?: Maybe<Scalars['Date']>
  lastName?: Maybe<Scalars['String']>
  leadSource?: Maybe<LeadSource>
  legacySystemId?: Maybe<Scalars['String']>
  links?: Maybe<Array<Maybe<ExternalLink>>>
  ltv?: Maybe<Scalars['Float']>
  mailingAddress?: Maybe<Address>
  mfaRequired?: Maybe<Scalars['Boolean']>
  mfaVerified?: Maybe<Scalars['Boolean']>
  mrr?: Maybe<Scalars['Float']>
  networkAlarms?: Maybe<Array<Maybe<NetworkAlarm>>>
  networkNode?: Maybe<NetworkNode>
  notes?: Maybe<Array<Maybe<Note>>>
  notesCount?: Maybe<Scalars['Int']>
  organization?: Maybe<Organization>
  organizationPermissions?: Maybe<OrganizationPermission[]>
  paymentEmailCode?: Maybe<Scalars['String']>
  /** Payment status, defaults to current */
  paymentStatus?: Maybe<PaymentStatus>
  paymentUserAccounts?: Maybe<PaymentUserAccount[]>
  paymentUserId: Scalars['ID']
  paymentsConfig?: Maybe<PaymentSetup>
  paymentsConfigId?: Maybe<Scalars['ID']>
  phoneNumber?: Maybe<Scalars['String']>
  preferredContact?: Maybe<PreferredContact>
  profileImage?: Maybe<Scalars['String']>
  prospectiveServiceAddress?: Maybe<Address>
  referralSource?: Maybe<ReferralSource>
  role: UserRole
  serviceStatus?: Maybe<ServiceStatus>
  subscriptions?: Maybe<Array<Maybe<Subscription>>>
  tags?: Maybe<Array<Maybe<Tag>>>
  uuid?: Maybe<Scalars['String']>
  valueRanking?: Maybe<Scalars['Int']>
}

/** The UserAuth object containing the authenticated user, a JWT token, and a success boolean */
export interface UserAuth {
  __typename?: 'UserAuth'
  /** A code to programatically generate an account for a user */
  accountSetupCode?: Maybe<Scalars['String']>
  /** BOSS route groups the user has permission for */
  allowedBossRouteGroups?: Maybe<Array<Maybe<RouteGroup>>>
  /** Default BOSS path to redirect after successful user auth */
  defaultBossPath?: Maybe<Scalars['String']>
  /** A message to specify the status of an api request */
  message?: Maybe<Scalars['String']>
  /** The mfa QR code for a UserAuth */
  mfaQr?: Maybe<Scalars['String']>
  /** The mfa secret to generate a mfa QR code */
  mfaSecret?: Maybe<Scalars['String']>
  /** A token used to refresh an authentication token */
  refreshToken?: Maybe<Scalars['String']>
  /** If true, the user is authenticated */
  success: Scalars['Boolean']
  /** A token required for authentication */
  token?: Maybe<Scalars['String']>
  /** The user for a UserAuth */
  user?: Maybe<User>
  /** Array of modified user ids */
  userIds?: Maybe<Array<Maybe<Scalars['ID']>>>
}

/** Users can be either consumers, ispCustomers, or superUsers */
export enum UserRole {
  /** A user that can only read specific data from other users in an organization */
  consumer = 'consumer',
  /** A user that can read and write data for a itself */
  ispCustomer = 'ispCustomer',
  /** A user that can read and write data for all users in an organization */
  superUser = 'superUser'
}

/** Verify a bank account using microdeposits or iav */
export enum Verification {
  iav = 'iav',
  microdeposits = 'microdeposits'
}

export interface VerifyAddressResponse {
  __typename?: 'VerifyAddressResponse'
  components?: Maybe<AddressComponents>
  deliverability?: Maybe<Scalars['String']>
  deliverabilityAnalysis?: Maybe<DeliverabilityAnalysis>
  id?: Maybe<Scalars['ID']>
  lastLine?: Maybe<Scalars['String']>
  lobConfidenceScore?: Maybe<LobConfidenceScore>
  primaryLine?: Maybe<Scalars['String']>
  secondaryLine?: Maybe<Scalars['String']>
  urbanization?: Maybe<Scalars['String']>
}

export interface VoIpPrevalidateResponse {
  __typename?: 'VoIPPrevalidateResponse'
  earliestCRD?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
  serviceAvailable?: Maybe<Scalars['Boolean']>
  success?: Maybe<Scalars['Boolean']>
}

export interface VoicemailBox {
  __typename?: 'VoicemailBox'
  accountId?: Maybe<Scalars['String']>
  dtmfOption?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['ID']>
  locale?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  partitionId?: Maybe<Scalars['String']>
  totalUnreadVoicemails?: Maybe<Scalars['Int']>
  totalVoicemails?: Maybe<Scalars['Int']>
  type?: Maybe<Scalars['String']>
  voicemailKeepAfterEmail?: Maybe<Scalars['Boolean']>
  voicemailToEmailEnabled?: Maybe<Scalars['Boolean']>
}

export interface VoidedCreditsReport {
  __typename?: 'VoidedCreditsReport'
  pageInfo?: Maybe<PageInfo>
  records: Array<Maybe<VoidedCreditsReportRecord>>
}

export interface VoidedCreditsReportRecord {
  __typename?: 'VoidedCreditsReportRecord'
  accountId?: Maybe<Scalars['String']>
  accountType?: Maybe<Scalars['String']>
  amount?: Maybe<Scalars['Float']>
  city?: Maybe<Scalars['String']>
  company?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['Date']>
  firstName?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['Int']>
  lastName?: Maybe<Scalars['String']>
  note?: Maybe<Scalars['String']>
  reason?: Maybe<Scalars['String']>
  subdivision?: Maybe<Scalars['String']>
  subreason?: Maybe<Scalars['String']>
  userId?: Maybe<Scalars['Int']>
}

export interface Zone {
  __typename?: 'Zone'
  createdAt?: Maybe<Scalars['Date']>
  geom?: Maybe<Scalars['GeoJSONMultiPolygon']>
  id: Scalars['ID']
  name?: Maybe<Scalars['String']>
  organization?: Maybe<Organization>
  tags?: Maybe<Array<Maybe<Tag>>>
  updatedAt?: Maybe<Scalars['Date']>
}

export interface ZoneInput {
  coordinates?: Maybe<Array<Maybe<Array<Maybe<Array<Maybe<Array<Maybe<Scalars['Float']>>>>>>>>>
  name?: Maybe<Scalars['String']>
  removeGeometry?: Maybe<Scalars['Boolean']>
  removeTagIds?: Maybe<Array<Maybe<Scalars['ID']>>>
  tagIds?: Maybe<Array<Maybe<Scalars['ID']>>>
}

export enum AddressBuildingType {
  primary = 'primary',
  secondary = 'secondary'
}

export interface GenericEventData {
  __typename?: 'genericEventData'
  eventId?: Maybe<Scalars['String']>
  object?: Maybe<Scalars['String']>
  subscribersInvolved?: Maybe<Array<Maybe<Scalars['ID']>>>
  type?: Maybe<Scalars['String']>
}

export interface UploadMosaicCsvResponse {
  __typename?: 'uploadMosaicCsvResponse'
  fileUrls?: Maybe<Array<Maybe<Scalars['String']>>>
  message?: Maybe<Scalars['String']>
  success: Scalars['Boolean']
}

export interface VerifyOrgAddressResponse {
  __typename?: 'verifyOrgAddressResponse'
  organizationId?: Maybe<Scalars['ID']>
  userId?: Maybe<Scalars['ID']>
  verified: Scalars['Boolean']
}

export type ResolverTypeWrapper<T> = Promise<T> | T

export interface ResolverWithResolve<TResult, TParent, TContext, TArgs> {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>
}
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>

export type NextResolverFn<T> = () => Promise<T>

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>

/** Mapping between all available schema types and the resolvers types */
export interface ResolversTypes {
  AccountStatus: AccountStatus
  AccountType: AccountType
  AccountsReceivableAgingHUD: ResolverTypeWrapper<AccountsReceivableAgingHud>
  AccountsReceivableAgingRecord: ResolverTypeWrapper<AccountsReceivableAgingRecord>
  AccountsReceivableAgingReport: ResolverTypeWrapper<AccountsReceivableAgingReport>
  AcpApplication: AcpApplication
  AcpApplicationResponse: ResolverTypeWrapper<AcpApplicationResponse>
  AcpConfig: ResolverTypeWrapper<AcpConfig>
  AcpConfigCreate: AcpConfigCreate
  AcpConfigUpdate: AcpConfigUpdate
  AcpStatus: AcpStatus
  AcpStudyAreaCode: ResolverTypeWrapper<AcpStudyAreaCode>
  AcpStudyAreaCodeInput: AcpStudyAreaCodeInput
  AddPaymentMethodAccountInput: AddPaymentMethodAccountInput
  AddPermissionRoleInput: AddPermissionRoleInput
  Addon: ResolverTypeWrapper<Addon>
  AddonsResult: ResolverTypeWrapper<AddonsResult>
  Address: ResolverTypeWrapper<Address>
  AddressComponents: ResolverTypeWrapper<AddressComponents>
  AddressInput: AddressInput
  AlianzaAddress: ResolverTypeWrapper<AlianzaAddress>
  AlianzaConfig: ResolverTypeWrapper<AlianzaConfig>
  AlianzaConfigInput: AlianzaConfigInput
  AlianzaConfigResponse: ResolverTypeWrapper<AlianzaConfigResponse>
  AlianzaData: ResolverTypeWrapper<AlianzaData>
  AlianzaDataInput: AlianzaDataInput
  AlianzaPhoneNumber: ResolverTypeWrapper<AlianzaPhoneNumber>
  AlianzaPlan: ResolverTypeWrapper<AlianzaPlan>
  AlianzaRateType: AlianzaRateType
  ApplicantType: ApplicantType
  ArAgingHUD: ResolverTypeWrapper<ArAgingHud>
  ArAgingReport: ResolverTypeWrapper<ArAgingReport>
  ArAgingReportRecord: ResolverTypeWrapper<ArAgingReportRecord>
  AttachmentType: AttachmentType
  AuditEvent: ResolverTypeWrapper<AuditEvent>
  AuditEventsResult: ResolverTypeWrapper<AuditEventsResult>
  AuditTrailReport: ResolverTypeWrapper<AuditTrailReport>
  AutopayFailingReport: ResolverTypeWrapper<AutopayFailingReport>
  AutopayFailingReportRecord: ResolverTypeWrapper<AutopayFailingReportRecord>
  AutopayReport: ResolverTypeWrapper<AutopayReport>
  AutopayReportRecord: ResolverTypeWrapper<AutopayReportRecord>
  AvalaraExemption: ResolverTypeWrapper<AvalaraExemption>
  AvalaraExemptions: AvalaraExemptions
  AvalaraKeyPairs: ResolverTypeWrapper<AvalaraKeyPairs>
  AvalaraSettings: ResolverTypeWrapper<AvalaraSettings>
  AvalaraSettingsInput: AvalaraSettingsInput
  AvalaraSubscriberSettings: ResolverTypeWrapper<AvalaraSubscriberSettings>
  AvalaraSubscriberSettingsInput: AvalaraSubscriberSettingsInput
  Balance: ResolverTypeWrapper<Balance>
  BeneficialOwner: BeneficialOwner
  BenefitQualifyingPerson: BenefitQualifyingPerson
  BigInt: ResolverTypeWrapper<Scalars['BigInt']>
  BillingCycleUnit: BillingCycleUnit
  BillingDuration: BillingDuration
  BillingTimePeriodEndReport: ResolverTypeWrapper<BillingTimePeriodEndReport>
  BillingTimePeriodEndReportRecord: ResolverTypeWrapper<BillingTimePeriodEndReportRecord>
  BillingTimePeriodRecord: ResolverTypeWrapper<BillingTimePeriodRecord>
  BillingTimePeriodReport: ResolverTypeWrapper<BillingTimePeriodReport>
  BillingType: BillingType
  BlockType: BlockType
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>
  BossEvent: ResolverTypeWrapper<BossEvent>
  BossEventInput: BossEventInput
  BossEventType: BossEventType
  Bucket: Bucket
  BulkSelection: BulkSelection
  CalixAlarmFacility: CalixAlarmFacility
  CalixUploadType: CalixUploadType
  CallHandling: ResolverTypeWrapper<CallHandling>
  CallHandlingInput: CallHandlingInput
  CallHandlingOptionType: CallHandlingOptionType
  CallHandlingSettings: ResolverTypeWrapper<CallHandlingSettings>
  CallHandlingSettingsInput: CallHandlingSettingsInput
  CallHandlingType: CallHandlingType
  CallHandlingWithTimeout: ResolverTypeWrapper<CallHandlingWithTimeout>
  CallHandlingWithTimeoutInput: CallHandlingWithTimeoutInput
  CallScreeningSettings: ResolverTypeWrapper<CallScreeningSettings>
  CallScreeningSettingsInput: CallScreeningSettingsInput
  CensusMatch: CensusMatch
  ConnectionType: ConnectionType
  Contract: ResolverTypeWrapper<Contract>
  ContractInput: ContractInput
  ContrivedResponse: ResolverTypeWrapper<ContrivedResponse>
  CreateAddonInput: CreateAddonInput
  CreateCreditInput: CreateCreditInput
  CreateDeviceInput: CreateDeviceInput
  CreateDiscountInput: CreateDiscountInput
  CreateEquipmentInput: CreateEquipmentInput
  CreateFinancialTransactionInput: CreateFinancialTransactionInput
  CreateLineInput: CreateLineInput
  CreateMessageTemplateInput: CreateMessageTemplateInput
  CreateOrganizationPermissionInput: CreateOrganizationPermissionInput
  CreatePaymentInput: CreatePaymentInput
  CreatePlanInput: CreatePlanInput
  CreateReturnCheckInput: CreateReturnCheckInput
  CreateSaasSubscriptionResponse: ResolverTypeWrapper<CreateSaasSubscriptionResponse>
  CreateSegmentInput: CreateSegmentInput
  CreateServiceInput: CreateServiceInput
  CreateTowerInput: CreateTowerInput
  CreateUserInput: CreateUserInput
  Credit: ResolverTypeWrapper<Credit>
  CreditReport: ResolverTypeWrapper<CreditReport>
  CreditsResult: ResolverTypeWrapper<CreditsResult>
  CursorPagination: CursorPagination
  CustomCallScreen: ResolverTypeWrapper<CustomCallScreen>
  CustomCallScreenInput: CustomCallScreenInput
  CustomerAgreementInput: CustomerAgreementInput
  CustomerType: CustomerType
  DailyBillingRecord: ResolverTypeWrapper<DailyBillingRecord>
  DailyBillingReport: ResolverTypeWrapper<DailyBillingReport>
  DataLoaderFilterInput: DataLoaderFilterInput
  Date: ResolverTypeWrapper<Scalars['Date']>
  DeliverabilityAnalysis: ResolverTypeWrapper<DeliverabilityAnalysis>
  Demographics: ResolverTypeWrapper<Demographics>
  Device: ResolverTypeWrapper<Device>
  DeviceStatus: DeviceStatus
  DirectoryListingType: DirectoryListingType
  Discount: ResolverTypeWrapper<Discount>
  DiscountApplication: DiscountApplication
  DiscountsResult: ResolverTypeWrapper<DiscountsResult>
  DwollaAccountInput: DwollaAccountInput
  DwollaAutopayAuth: ResolverTypeWrapper<DwollaAutopayAuth>
  DwollaBeneficialOwner: ResolverTypeWrapper<DwollaBeneficialOwner>
  DwollaController: DwollaController
  E7TrapAlarm: E7TrapAlarm
  Email: ResolverTypeWrapper<Scalars['Email']>
  EmailEventData: ResolverTypeWrapper<EmailEventData>
  EmailTemplate: ResolverTypeWrapper<EmailTemplate>
  EmailTemplateInput: EmailTemplateInput
  Equipment: ResolverTypeWrapper<Equipment>
  EquipmentResult: ResolverTypeWrapper<EquipmentResult>
  EquipmentType: EquipmentType
  Event: ResolverTypeWrapper<Event>
  EventFields: EventFields
  ExternalAccountInput: ExternalAccountInput
  ExternalLink: ResolverTypeWrapper<ExternalLink>
  ExternalLinkInput: ExternalLinkInput
  ExternalService: ExternalService
  ExternalServiceData: ResolverTypeWrapper<ExternalServiceData>
  ExternalServiceDataInput: ExternalServiceDataInput
  File: ResolverTypeWrapper<File>
  Filter: ResolverTypeWrapper<Filter>
  FilterCondition: FilterCondition
  FilterInput: FilterInput
  FinancialTransaction: ResolverTypeWrapper<FinancialTransaction>
  FinancialTransactionInput: FinancialTransactionInput
  FinancialTransactionStatus: FinancialTransactionStatus
  FinancialTransactionsResult: ResolverTypeWrapper<FinancialTransactionsResult>
  FindMeEndpoint: ResolverTypeWrapper<FindMeEndpoint>
  FindMeEndpointInput: FindMeEndpointInput
  FindMeFollowMeCallHandling: ResolverTypeWrapper<FindMeFollowMeCallHandling>
  FindMeFollowMeCallHandlingInput: FindMeFollowMeCallHandlingInput
  Float: ResolverTypeWrapper<Scalars['Float']>
  ForgotPasswordResponse: ResolverTypeWrapper<ForgotPasswordResponse>
  Form477Report: ResolverTypeWrapper<Form477Report>
  Form477ReportRecord: ResolverTypeWrapper<Form477ReportRecord>
  FundingApplication: ResolverTypeWrapper<FundingApplication>
  FundingApplicationInput: FundingApplicationInput
  FundingEstimate: FundingEstimate
  FundingOrganizationInviteInput: FundingOrganizationInviteInput
  FundingSingleMessage: ResolverTypeWrapper<FundingSingleMessage>
  FundingType: FundingType
  GenericResponse: ResolverTypeWrapper<GenericResponse>
  GeoJSONFeature: ResolverTypeWrapper<Scalars['GeoJSONFeature']>
  GeoJSONFeatureCollection: ResolverTypeWrapper<Scalars['GeoJSONFeatureCollection']>
  GeoJSONGeometryCollection: ResolverTypeWrapper<Scalars['GeoJSONGeometryCollection']>
  GeoJSONLineString: ResolverTypeWrapper<Scalars['GeoJSONLineString']>
  GeoJSONMultiLineString: ResolverTypeWrapper<Scalars['GeoJSONMultiLineString']>
  GeoJSONMultiPoint: ResolverTypeWrapper<Scalars['GeoJSONMultiPoint']>
  GeoJSONMultiPolygon: ResolverTypeWrapper<Scalars['GeoJSONMultiPolygon']>
  GeoJSONPoint: ResolverTypeWrapper<Scalars['GeoJSONPoint']>
  GeoJSONPolygon: ResolverTypeWrapper<Scalars['GeoJSONPolygon']>
  GeometryType: GeometryType
  GetAccountSetupCodeResponse: ResolverTypeWrapper<GetAccountSetupCodeResponse>
  GetIPPayReportsInput: GetIpPayReportsInput
  GrantApplication: ResolverTypeWrapper<GrantApplication>
  GrantApplicationInput: GrantApplicationInput
  GrantApplicationResult: ResolverTypeWrapper<GrantApplicationResult>
  GrantApplicationSource: GrantApplicationSource
  GrowDrawType: GrowDrawType
  GrowFilter: ResolverTypeWrapper<GrowFilter>
  GrowFilterInput: GrowFilterInput
  GrowFilterType: GrowFilterType
  GrowSegment: ResolverTypeWrapper<GrowSegment>
  GrowSegmentInput: GrowSegmentInput
  ID: ResolverTypeWrapper<Scalars['ID']>
  IdentificationType: IdentificationType
  Industry: Industry
  Int: ResolverTypeWrapper<Scalars['Int']>
  InvoiceItem: ResolverTypeWrapper<InvoiceItem>
  InvoiceItemType: InvoiceItemType
  InvoiceMethod: InvoiceMethod
  InvoiceReport: ResolverTypeWrapper<InvoiceReport>
  InvoiceStatus: InvoiceStatus
  InvoicesResult: ResolverTypeWrapper<InvoicesResult>
  LeadSource: LeadSource
  Line: ResolverTypeWrapper<Line>
  LineType: LineType
  LinesResult: ResolverTypeWrapper<LinesResult>
  LobConfidenceScore: ResolverTypeWrapper<LobConfidenceScore>
  Location: ResolverTypeWrapper<Location>
  LocationInput: LocationInput
  LoginInput: LoginInput
  MapView: ResolverTypeWrapper<MapView>
  MapViewInput: MapViewInput
  Message: ResolverTypeWrapper<Message>
  MessageDashboardOverviewResult: ResolverTypeWrapper<MessageDashboardOverviewResult>
  MessageEvent: ResolverTypeWrapper<MessageEvent>
  MessageEventData: ResolverTypeWrapper<MessageEventData>
  MessageEventInfo: ResolverTypeWrapper<MessageEventInfo>
  MessageEventResultsTotals: ResolverTypeWrapper<MessageEventResultsTotals>
  MessageEventsOverviewResult: ResolverTypeWrapper<MessageEventsOverviewResult>
  MessageEventsResult: ResolverTypeWrapper<MessageEventsResult>
  MessageEventsUser: ResolverTypeWrapper<MessageEventsUser>
  MessageInput: MessageInput
  MessagePathTemplate: ResolverTypeWrapper<MessagePathTemplate>
  MessagePathTemplateInput: MessagePathTemplateInput
  MessageRoute: MessageRoute
  MessageRouteResult: ResolverTypeWrapper<MessageRouteResult>
  MessageTemplate: ResolverTypeWrapper<MessageTemplate>
  MessageTemplateInput: MessageTemplateInput
  MessageTemplateType: MessageTemplateType
  MessageType: MessageType
  MessagingTotals: ResolverTypeWrapper<MessagingTotals>
  Mutation: ResolverTypeWrapper<{}>
  MutualNDAInput: MutualNdaInput
  NetworkAlarm: ResolverTypeWrapper<NetworkAlarm>
  NetworkNode: ResolverTypeWrapper<NetworkNode>
  NetworkNodeResult: ResolverTypeWrapper<NetworkNodeResult>
  Node: Node
  Note: ResolverTypeWrapper<Note>
  NoteInput: NoteInput
  NotesResult: ResolverTypeWrapper<NotesResult>
  Notification: ResolverTypeWrapper<Notification>
  OnboardOrganizationInput: OnboardOrganizationInput
  Organization: ResolverTypeWrapper<Organization>
  OrganizationCode: ResolverTypeWrapper<OrganizationCode>
  OrganizationCodeInput: OrganizationCodeInput
  OrganizationFundingConfig: OrganizationFundingConfig
  OrganizationInput: OrganizationInput
  OrganizationPermission: ResolverTypeWrapper<OrganizationPermission>
  OrganizationPermissionRole: OrganizationPermissionRole
  PDFType: PdfType
  PageInfo: ResolverTypeWrapper<PageInfo>
  Pagination: Pagination
  Password: ResolverTypeWrapper<Scalars['Password']>
  PaymentMethod: ResolverTypeWrapper<PaymentMethod>
  PaymentMethodInput: PaymentMethodInput
  PaymentMethodType: PaymentMethodType
  PaymentProcessor: PaymentProcessor
  PaymentProfile: ResolverTypeWrapper<PaymentProfile>
  PaymentProfileInput: PaymentProfileInput
  PaymentProfileUpdate: PaymentProfileUpdate
  PaymentSetup: ResolverTypeWrapper<PaymentSetup>
  PaymentSetupInput: PaymentSetupInput
  PaymentStatus: PaymentStatus
  PaymentUserAccount: ResolverTypeWrapper<PaymentUserAccount>
  PaymentUserAccountInput: PaymentUserAccountInput
  PaymentUserAccountType: PaymentUserAccountType
  PaymentsConfig: PaymentsConfig
  PermissionRole: ResolverTypeWrapper<PermissionRole>
  Plan: ResolverTypeWrapper<Plan>
  PlanCountRecord: ResolverTypeWrapper<PlanCountRecord>
  PlanCountReport: ResolverTypeWrapper<PlanCountReport>
  PlanName: PlanName
  PlansResult: ResolverTypeWrapper<PlansResult>
  PortInfo: PortInfo
  PortingWireType: PortingWireType
  PreferredContact: PreferredContact
  PricingModel: PricingModel
  PricingTier: ResolverTypeWrapper<PricingTier>
  Processor: Processor
  ProvisioningResponse: ResolverTypeWrapper<ProvisioningResponse>
  Query: ResolverTypeWrapper<{}>
  ReasonCode: ResolverTypeWrapper<ReasonCode>
  ReasonCodeInput: ReasonCodeInput
  ReasonCodeResult: ResolverTypeWrapper<ReasonCodeResult>
  ReasonCodeType: ReasonCodeType
  ReasonCodesReport: ResolverTypeWrapper<ReasonCodesReport>
  ReasonCodesReportRecord: ResolverTypeWrapper<ReasonCodesReportRecord>
  ReferralSource: ResolverTypeWrapper<ReferralSource>
  ReferralSourceInput: ReferralSourceInput
  ReferralSourceResult: ResolverTypeWrapper<ReferralSourceResult>
  Report: ResolversTypes['AccountsReceivableAgingReport'] | ResolversTypes['ArAgingReport'] | ResolversTypes['AuditTrailReport'] | ResolversTypes['AutopayFailingReport'] | ResolversTypes['AutopayReport'] | ResolversTypes['BillingTimePeriodEndReport'] | ResolversTypes['BillingTimePeriodReport'] | ResolversTypes['CreditReport'] | ResolversTypes['Form477Report'] | ResolversTypes['InvoiceReport'] | ResolversTypes['PlanCountReport'] | ResolversTypes['ReasonCodesReport'] | ResolversTypes['RevenueBreakdownReport'] | ResolversTypes['RevenueByProductReport'] | ResolversTypes['RevenueReport'] | ResolversTypes['SignupsBySourceReport'] | ResolversTypes['SubscriberReport'] | ResolversTypes['TagsReport'] | ResolversTypes['TakeRateByZonesReport'] | ResolversTypes['TaxReport'] | ResolversTypes['VoidedCreditsReport']
  ReportType: ReportType
  ResolverGroup: ResolverGroup
  ResolverPermission: ResolverTypeWrapper<ResolverPermission>
  ResolverPermissionsInput: ResolverPermissionsInput
  RevenueBreakdownRecord: ResolverTypeWrapper<RevenueBreakdownRecord>
  RevenueBreakdownReport: ResolverTypeWrapper<RevenueBreakdownReport>
  RevenueByProductReport: ResolverTypeWrapper<RevenueByProductReport>
  RevenueByProductReportRecord: ResolverTypeWrapper<RevenueByProductReportRecord>
  RevenueReport: ResolverTypeWrapper<RevenueReport>
  RevenueReportRecords: ResolverTypeWrapper<RevenueReportRecords>
  RingPhoneCallHandling: ResolverTypeWrapper<RingPhoneCallHandling>
  RingPhoneCallHandlingInput: RingPhoneCallHandlingInput
  RingType: RingType
  RouteCount: ResolverTypeWrapper<RouteCount>
  RouteGroup: ResolverTypeWrapper<RouteGroup>
  RouteTotals: ResolverTypeWrapper<RouteTotals>
  RstData: ResolverTypeWrapper<RstData>
  RstDataInput: RstDataInput
  RstDataResult: ResolverTypeWrapper<RstDataResult>
  Segment: ResolverTypeWrapper<Segment>
  SegmentNode: SegmentNode
  SendgridEvent: ResolverTypeWrapper<SendgridEvent>
  SentMessage: ResolverTypeWrapper<SentMessage>
  Service: ResolverTypeWrapper<Service>
  ServiceOffer: ServiceOffer
  ServiceStatus: ServiceStatus
  ServiceType: ServiceType
  ServicesResult: ResolverTypeWrapper<ServicesResult>
  SetupMfaResult: ResolverTypeWrapper<SetupMfaResult>
  SignupsBySourceReport: ResolverTypeWrapper<SignupsBySourceReport>
  SignupsBySourceReportRecord: ResolverTypeWrapper<SignupsBySourceReportRecord>
  SimultaneousRingCallHandling: ResolverTypeWrapper<SimultaneousRingCallHandling>
  SimultaneousRingCallHandlingInput: SimultaneousRingCallHandlingInput
  SingleMessage: ResolverTypeWrapper<SingleMessage>
  SingleMessageRoute: SingleMessageRoute
  SmsEventData: ResolverTypeWrapper<SmsEventData>
  SmsTemplate: ResolverTypeWrapper<SmsTemplate>
  SmsTemplateInput: SmsTemplateInput
  SmsTotalsResults: ResolverTypeWrapper<SmsTotalsResults>
  SocialMedia: ResolverTypeWrapper<SocialMedia>
  SocialMediaInput: SocialMediaInput
  Sort: ResolverTypeWrapper<Sort>
  SortInput: SortInput
  SortOrder: SortOrder
  SssConfig: ResolverTypeWrapper<SssConfig>
  SssConfigInput: SssConfigInput
  State: State
  String: ResolverTypeWrapper<Scalars['String']>
  StringOrInt: ResolverTypeWrapper<Scalars['StringOrInt']>
  StripeAccountInput: StripeAccountInput
  StripeBusinessType: StripeBusinessType
  SubscriberEventCategory: SubscriberEventCategory
  SubscriberEventType: SubscriberEventType
  SubscriberInvoice: ResolverTypeWrapper<SubscriberInvoice>
  SubscriberInvoicesResult: ResolverTypeWrapper<SubscriberInvoicesResult>
  SubscriberMutation: ResolverTypeWrapper<SubscriberMutation>
  SubscriberReport: ResolverTypeWrapper<SubscriberReport>
  SubscribersHUD: ResolverTypeWrapper<SubscribersHud>
  SubscribersNumber: SubscribersNumber
  SubscribersResult: ResolverTypeWrapper<SubscribersResult>
  Subscription: ResolverTypeWrapper<{}>
  SubscriptionDiscountInput: SubscriptionDiscountInput
  SubscriptionInput: SubscriptionInput
  SubscriptionStatus: SubscriptionStatus
  SuspendBilling: ResolverTypeWrapper<SuspendBilling>
  SuspendBillingInput: SuspendBillingInput
  Tag: ResolverTypeWrapper<Tag>
  TagInput: TagInput
  TagsReport: ResolverTypeWrapper<TagsReport>
  TagsReportRecord: ResolverTypeWrapper<TagsReportRecord>
  TagsResult: ResolverTypeWrapper<TagsResult>
  TakeRateByZonesReport: ResolverTypeWrapper<TakeRateByZonesReport>
  TakeRateByZonesReportRecord: ResolverTypeWrapper<TakeRateByZonesReportRecord>
  Tax: ResolverTypeWrapper<Tax>
  TaxInput: TaxInput
  TaxReport: ResolverTypeWrapper<TaxReport>
  TaxReportRecord: ResolverTypeWrapper<TaxReportRecord>
  Tower: ResolverTypeWrapper<Tower>
  TowerStatus: TowerStatus
  TowersResult: ResolverTypeWrapper<TowersResult>
  TransactionType: TransactionType
  TwilioCall: ResolverTypeWrapper<TwilioCall>
  TwilioEvent: ResolverTypeWrapper<TwilioEvent>
  TwilioMessage: ResolverTypeWrapper<TwilioMessage>
  UpdateAddonInput: UpdateAddonInput
  UpdateBankAccountInput: UpdateBankAccountInput
  UpdateCardInput: UpdateCardInput
  UpdateDiscountInput: UpdateDiscountInput
  UpdateEquipmentInput: UpdateEquipmentInput
  UpdateInvoiceInput: UpdateInvoiceInput
  UpdatePermissionRoleInput: UpdatePermissionRoleInput
  UpdatePlanInput: UpdatePlanInput
  UpdateServiceInput: UpdateServiceInput
  UpdateUserInput: UpdateUserInput
  Upload: ResolverTypeWrapper<Scalars['Upload']>
  UploadDataResponse: ResolverTypeWrapper<UploadDataResponse>
  User: ResolverTypeWrapper<User>
  UserAuth: ResolverTypeWrapper<UserAuth>
  UserRole: UserRole
  Verification: Verification
  VerifyAddressResponse: ResolverTypeWrapper<VerifyAddressResponse>
  VoIPPrevalidateResponse: ResolverTypeWrapper<VoIpPrevalidateResponse>
  VoicemailBox: ResolverTypeWrapper<VoicemailBox>
  VoidedCreditsReport: ResolverTypeWrapper<VoidedCreditsReport>
  VoidedCreditsReportRecord: ResolverTypeWrapper<VoidedCreditsReportRecord>
  Zone: ResolverTypeWrapper<Zone>
  ZoneInput: ZoneInput
  addressBuildingType: AddressBuildingType
  genericEventData: ResolverTypeWrapper<GenericEventData>
  uploadMosaicCsvResponse: ResolverTypeWrapper<UploadMosaicCsvResponse>
  verifyOrgAddressResponse: ResolverTypeWrapper<VerifyOrgAddressResponse>
}

/** Mapping between all available schema types and the resolvers parents */
export interface ResolversParentTypes {
  AccountsReceivableAgingHUD: AccountsReceivableAgingHud
  AccountsReceivableAgingRecord: AccountsReceivableAgingRecord
  AccountsReceivableAgingReport: AccountsReceivableAgingReport
  AcpApplication: AcpApplication
  AcpApplicationResponse: AcpApplicationResponse
  AcpConfig: AcpConfig
  AcpConfigCreate: AcpConfigCreate
  AcpConfigUpdate: AcpConfigUpdate
  AcpStudyAreaCode: AcpStudyAreaCode
  AcpStudyAreaCodeInput: AcpStudyAreaCodeInput
  AddPaymentMethodAccountInput: AddPaymentMethodAccountInput
  AddPermissionRoleInput: AddPermissionRoleInput
  Addon: Addon
  AddonsResult: AddonsResult
  Address: Address
  AddressComponents: AddressComponents
  AddressInput: AddressInput
  AlianzaAddress: AlianzaAddress
  AlianzaConfig: AlianzaConfig
  AlianzaConfigInput: AlianzaConfigInput
  AlianzaConfigResponse: AlianzaConfigResponse
  AlianzaData: AlianzaData
  AlianzaDataInput: AlianzaDataInput
  AlianzaPhoneNumber: AlianzaPhoneNumber
  AlianzaPlan: AlianzaPlan
  ArAgingHUD: ArAgingHud
  ArAgingReport: ArAgingReport
  ArAgingReportRecord: ArAgingReportRecord
  AuditEvent: AuditEvent
  AuditEventsResult: AuditEventsResult
  AuditTrailReport: AuditTrailReport
  AutopayFailingReport: AutopayFailingReport
  AutopayFailingReportRecord: AutopayFailingReportRecord
  AutopayReport: AutopayReport
  AutopayReportRecord: AutopayReportRecord
  AvalaraExemption: AvalaraExemption
  AvalaraExemptions: AvalaraExemptions
  AvalaraKeyPairs: AvalaraKeyPairs
  AvalaraSettings: AvalaraSettings
  AvalaraSettingsInput: AvalaraSettingsInput
  AvalaraSubscriberSettings: AvalaraSubscriberSettings
  AvalaraSubscriberSettingsInput: AvalaraSubscriberSettingsInput
  Balance: Balance
  BeneficialOwner: BeneficialOwner
  BenefitQualifyingPerson: BenefitQualifyingPerson
  BigInt: Scalars['BigInt']
  BillingTimePeriodEndReport: BillingTimePeriodEndReport
  BillingTimePeriodEndReportRecord: BillingTimePeriodEndReportRecord
  BillingTimePeriodRecord: BillingTimePeriodRecord
  BillingTimePeriodReport: BillingTimePeriodReport
  Boolean: Scalars['Boolean']
  BossEvent: BossEvent
  BossEventInput: BossEventInput
  BulkSelection: BulkSelection
  CallHandling: CallHandling
  CallHandlingInput: CallHandlingInput
  CallHandlingSettings: CallHandlingSettings
  CallHandlingSettingsInput: CallHandlingSettingsInput
  CallHandlingWithTimeout: CallHandlingWithTimeout
  CallHandlingWithTimeoutInput: CallHandlingWithTimeoutInput
  CallScreeningSettings: CallScreeningSettings
  CallScreeningSettingsInput: CallScreeningSettingsInput
  Contract: Contract
  ContractInput: ContractInput
  ContrivedResponse: ContrivedResponse
  CreateAddonInput: CreateAddonInput
  CreateCreditInput: CreateCreditInput
  CreateDeviceInput: CreateDeviceInput
  CreateDiscountInput: CreateDiscountInput
  CreateEquipmentInput: CreateEquipmentInput
  CreateFinancialTransactionInput: CreateFinancialTransactionInput
  CreateLineInput: CreateLineInput
  CreateMessageTemplateInput: CreateMessageTemplateInput
  CreateOrganizationPermissionInput: CreateOrganizationPermissionInput
  CreatePaymentInput: CreatePaymentInput
  CreatePlanInput: CreatePlanInput
  CreateReturnCheckInput: CreateReturnCheckInput
  CreateSaasSubscriptionResponse: CreateSaasSubscriptionResponse
  CreateSegmentInput: CreateSegmentInput
  CreateServiceInput: CreateServiceInput
  CreateTowerInput: CreateTowerInput
  CreateUserInput: CreateUserInput
  Credit: Credit
  CreditReport: CreditReport
  CreditsResult: CreditsResult
  CursorPagination: CursorPagination
  CustomCallScreen: CustomCallScreen
  CustomCallScreenInput: CustomCallScreenInput
  CustomerAgreementInput: CustomerAgreementInput
  DailyBillingRecord: DailyBillingRecord
  DailyBillingReport: DailyBillingReport
  DataLoaderFilterInput: DataLoaderFilterInput
  Date: Scalars['Date']
  DeliverabilityAnalysis: DeliverabilityAnalysis
  Demographics: Demographics
  Device: Device
  Discount: Discount
  DiscountsResult: DiscountsResult
  DwollaAccountInput: DwollaAccountInput
  DwollaAutopayAuth: DwollaAutopayAuth
  DwollaBeneficialOwner: DwollaBeneficialOwner
  DwollaController: DwollaController
  E7TrapAlarm: E7TrapAlarm
  Email: Scalars['Email']
  EmailEventData: EmailEventData
  EmailTemplate: EmailTemplate
  EmailTemplateInput: EmailTemplateInput
  Equipment: Equipment
  EquipmentResult: EquipmentResult
  Event: Event
  EventFields: EventFields
  ExternalAccountInput: ExternalAccountInput
  ExternalLink: ExternalLink
  ExternalLinkInput: ExternalLinkInput
  ExternalServiceData: ExternalServiceData
  ExternalServiceDataInput: ExternalServiceDataInput
  File: File
  Filter: Filter
  FilterInput: FilterInput
  FinancialTransaction: FinancialTransaction
  FinancialTransactionInput: FinancialTransactionInput
  FinancialTransactionsResult: FinancialTransactionsResult
  FindMeEndpoint: FindMeEndpoint
  FindMeEndpointInput: FindMeEndpointInput
  FindMeFollowMeCallHandling: FindMeFollowMeCallHandling
  FindMeFollowMeCallHandlingInput: FindMeFollowMeCallHandlingInput
  Float: Scalars['Float']
  ForgotPasswordResponse: ForgotPasswordResponse
  Form477Report: Form477Report
  Form477ReportRecord: Form477ReportRecord
  FundingApplication: FundingApplication
  FundingApplicationInput: FundingApplicationInput
  FundingOrganizationInviteInput: FundingOrganizationInviteInput
  FundingSingleMessage: FundingSingleMessage
  GenericResponse: GenericResponse
  GeoJSONFeature: Scalars['GeoJSONFeature']
  GeoJSONFeatureCollection: Scalars['GeoJSONFeatureCollection']
  GeoJSONGeometryCollection: Scalars['GeoJSONGeometryCollection']
  GeoJSONLineString: Scalars['GeoJSONLineString']
  GeoJSONMultiLineString: Scalars['GeoJSONMultiLineString']
  GeoJSONMultiPoint: Scalars['GeoJSONMultiPoint']
  GeoJSONMultiPolygon: Scalars['GeoJSONMultiPolygon']
  GeoJSONPoint: Scalars['GeoJSONPoint']
  GeoJSONPolygon: Scalars['GeoJSONPolygon']
  GetAccountSetupCodeResponse: GetAccountSetupCodeResponse
  GetIPPayReportsInput: GetIpPayReportsInput
  GrantApplication: GrantApplication
  GrantApplicationInput: GrantApplicationInput
  GrantApplicationResult: GrantApplicationResult
  GrowFilter: GrowFilter
  GrowFilterInput: GrowFilterInput
  GrowSegment: GrowSegment
  GrowSegmentInput: GrowSegmentInput
  ID: Scalars['ID']
  Int: Scalars['Int']
  InvoiceItem: InvoiceItem
  InvoiceReport: InvoiceReport
  InvoicesResult: InvoicesResult
  Line: Line
  LinesResult: LinesResult
  LobConfidenceScore: LobConfidenceScore
  Location: Location
  LocationInput: LocationInput
  LoginInput: LoginInput
  MapView: MapView
  MapViewInput: MapViewInput
  Message: Message
  MessageDashboardOverviewResult: MessageDashboardOverviewResult
  MessageEvent: MessageEvent
  MessageEventData: MessageEventData
  MessageEventInfo: MessageEventInfo
  MessageEventResultsTotals: MessageEventResultsTotals
  MessageEventsOverviewResult: MessageEventsOverviewResult
  MessageEventsResult: MessageEventsResult
  MessageEventsUser: MessageEventsUser
  MessageInput: MessageInput
  MessagePathTemplate: MessagePathTemplate
  MessagePathTemplateInput: MessagePathTemplateInput
  MessageRouteResult: MessageRouteResult
  MessageTemplate: MessageTemplate
  MessageTemplateInput: MessageTemplateInput
  MessagingTotals: MessagingTotals
  Mutation: {}
  MutualNDAInput: MutualNdaInput
  NetworkAlarm: NetworkAlarm
  NetworkNode: NetworkNode
  NetworkNodeResult: NetworkNodeResult
  Note: Note
  NoteInput: NoteInput
  NotesResult: NotesResult
  Notification: Notification
  OnboardOrganizationInput: OnboardOrganizationInput
  Organization: Organization
  OrganizationCode: OrganizationCode
  OrganizationCodeInput: OrganizationCodeInput
  OrganizationFundingConfig: OrganizationFundingConfig
  OrganizationInput: OrganizationInput
  OrganizationPermission: OrganizationPermission
  PageInfo: PageInfo
  Pagination: Pagination
  Password: Scalars['Password']
  PaymentMethod: PaymentMethod
  PaymentMethodInput: PaymentMethodInput
  PaymentProfile: PaymentProfile
  PaymentProfileInput: PaymentProfileInput
  PaymentProfileUpdate: PaymentProfileUpdate
  PaymentSetup: PaymentSetup
  PaymentSetupInput: PaymentSetupInput
  PaymentUserAccount: PaymentUserAccount
  PaymentUserAccountInput: PaymentUserAccountInput
  PaymentsConfig: PaymentsConfig
  PermissionRole: PermissionRole
  Plan: Plan
  PlanCountRecord: PlanCountRecord
  PlanCountReport: PlanCountReport
  PlansResult: PlansResult
  PortInfo: PortInfo
  PricingTier: PricingTier
  ProvisioningResponse: ProvisioningResponse
  Query: {}
  ReasonCode: ReasonCode
  ReasonCodeInput: ReasonCodeInput
  ReasonCodeResult: ReasonCodeResult
  ReasonCodesReport: ReasonCodesReport
  ReasonCodesReportRecord: ReasonCodesReportRecord
  ReferralSource: ReferralSource
  ReferralSourceInput: ReferralSourceInput
  ReferralSourceResult: ReferralSourceResult
  Report: ResolversParentTypes['AccountsReceivableAgingReport'] | ResolversParentTypes['ArAgingReport'] | ResolversParentTypes['AuditTrailReport'] | ResolversParentTypes['AutopayFailingReport'] | ResolversParentTypes['AutopayReport'] | ResolversParentTypes['BillingTimePeriodEndReport'] | ResolversParentTypes['BillingTimePeriodReport'] | ResolversParentTypes['CreditReport'] | ResolversParentTypes['Form477Report'] | ResolversParentTypes['InvoiceReport'] | ResolversParentTypes['PlanCountReport'] | ResolversParentTypes['ReasonCodesReport'] | ResolversParentTypes['RevenueBreakdownReport'] | ResolversParentTypes['RevenueByProductReport'] | ResolversParentTypes['RevenueReport'] | ResolversParentTypes['SignupsBySourceReport'] | ResolversParentTypes['SubscriberReport'] | ResolversParentTypes['TagsReport'] | ResolversParentTypes['TakeRateByZonesReport'] | ResolversParentTypes['TaxReport'] | ResolversParentTypes['VoidedCreditsReport']
  ResolverPermission: ResolverPermission
  ResolverPermissionsInput: ResolverPermissionsInput
  RevenueBreakdownRecord: RevenueBreakdownRecord
  RevenueBreakdownReport: RevenueBreakdownReport
  RevenueByProductReport: RevenueByProductReport
  RevenueByProductReportRecord: RevenueByProductReportRecord
  RevenueReport: RevenueReport
  RevenueReportRecords: RevenueReportRecords
  RingPhoneCallHandling: RingPhoneCallHandling
  RingPhoneCallHandlingInput: RingPhoneCallHandlingInput
  RouteCount: RouteCount
  RouteGroup: RouteGroup
  RouteTotals: RouteTotals
  RstData: RstData
  RstDataInput: RstDataInput
  RstDataResult: RstDataResult
  Segment: Segment
  SendgridEvent: SendgridEvent
  SentMessage: SentMessage
  Service: Service
  ServicesResult: ServicesResult
  SetupMfaResult: SetupMfaResult
  SignupsBySourceReport: SignupsBySourceReport
  SignupsBySourceReportRecord: SignupsBySourceReportRecord
  SimultaneousRingCallHandling: SimultaneousRingCallHandling
  SimultaneousRingCallHandlingInput: SimultaneousRingCallHandlingInput
  SingleMessage: SingleMessage
  SmsEventData: SmsEventData
  SmsTemplate: SmsTemplate
  SmsTemplateInput: SmsTemplateInput
  SmsTotalsResults: SmsTotalsResults
  SocialMedia: SocialMedia
  SocialMediaInput: SocialMediaInput
  Sort: Sort
  SortInput: SortInput
  SssConfig: SssConfig
  SssConfigInput: SssConfigInput
  String: Scalars['String']
  StringOrInt: Scalars['StringOrInt']
  StripeAccountInput: StripeAccountInput
  SubscriberInvoice: SubscriberInvoice
  SubscriberInvoicesResult: SubscriberInvoicesResult
  SubscriberMutation: SubscriberMutation
  SubscriberReport: SubscriberReport
  SubscribersHUD: SubscribersHud
  SubscribersResult: SubscribersResult
  Subscription: {}
  SubscriptionDiscountInput: SubscriptionDiscountInput
  SubscriptionInput: SubscriptionInput
  SuspendBilling: SuspendBilling
  SuspendBillingInput: SuspendBillingInput
  Tag: Tag
  TagInput: TagInput
  TagsReport: TagsReport
  TagsReportRecord: TagsReportRecord
  TagsResult: TagsResult
  TakeRateByZonesReport: TakeRateByZonesReport
  TakeRateByZonesReportRecord: TakeRateByZonesReportRecord
  Tax: Tax
  TaxInput: TaxInput
  TaxReport: TaxReport
  TaxReportRecord: TaxReportRecord
  Tower: Tower
  TowersResult: TowersResult
  TwilioCall: TwilioCall
  TwilioEvent: TwilioEvent
  TwilioMessage: TwilioMessage
  UpdateAddonInput: UpdateAddonInput
  UpdateBankAccountInput: UpdateBankAccountInput
  UpdateCardInput: UpdateCardInput
  UpdateDiscountInput: UpdateDiscountInput
  UpdateEquipmentInput: UpdateEquipmentInput
  UpdateInvoiceInput: UpdateInvoiceInput
  UpdatePermissionRoleInput: UpdatePermissionRoleInput
  UpdatePlanInput: UpdatePlanInput
  UpdateServiceInput: UpdateServiceInput
  UpdateUserInput: UpdateUserInput
  Upload: Scalars['Upload']
  UploadDataResponse: UploadDataResponse
  User: User
  UserAuth: UserAuth
  VerifyAddressResponse: VerifyAddressResponse
  VoIPPrevalidateResponse: VoIpPrevalidateResponse
  VoicemailBox: VoicemailBox
  VoidedCreditsReport: VoidedCreditsReport
  VoidedCreditsReportRecord: VoidedCreditsReportRecord
  Zone: Zone
  ZoneInput: ZoneInput
  genericEventData: GenericEventData
  uploadMosaicCsvResponse: UploadMosaicCsvResponse
  verifyOrgAddressResponse: VerifyOrgAddressResponse
}

export interface AccountsReceivableAgingHudResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountsReceivableAgingHUD'] = ResolversParentTypes['AccountsReceivableAgingHUD']> {
  currentDue?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  pastDue30Days?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  pastDue60Days?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  pastDue90Days?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  revenuePastDue?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  totalDue?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface AccountsReceivableAgingRecordResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountsReceivableAgingRecord'] = ResolversParentTypes['AccountsReceivableAgingRecord']> {
  currentAmountDue?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>
  pastDue30Days?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  pastDue60Days?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  pastDue90Days?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  subscriber?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>
  totalDue?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface AccountsReceivableAgingReportResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountsReceivableAgingReport'] = ResolversParentTypes['AccountsReceivableAgingReport']> {
  accountsReceivableAgingRecords?: Resolver<Array<Maybe<ResolversTypes['AccountsReceivableAgingRecord']>>, ParentType, ContextType>
  hud?: Resolver<ResolversTypes['AccountsReceivableAgingHUD'], ParentType, ContextType>
  pageInfo?: Resolver<Maybe<ResolversTypes['PageInfo']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface AcpApplicationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['AcpApplicationResponse'] = ResolversParentTypes['AcpApplicationResponse']> {
  errors?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  redirectLink?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface AcpConfigResolvers<ContextType = any, ParentType extends ResolversParentTypes['AcpConfig'] = ResolversParentTypes['AcpConfig']> {
  acpId?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  acpKey?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  organization?: Resolver<ResolversTypes['Organization'], ParentType, ContextType>
  studyAreaCodes?: Resolver<Maybe<Array<ResolversTypes['AcpStudyAreaCode']>>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface AcpStudyAreaCodeResolvers<ContextType = any, ParentType extends ResolversParentTypes['AcpStudyAreaCode'] = ResolversParentTypes['AcpStudyAreaCode']> {
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  zip?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface AddonResolvers<ContextType = any, ParentType extends ResolversParentTypes['Addon'] = ResolversParentTypes['Addon']> {
  active?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  appliedCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  avalaraKeyPairs?: Resolver<Maybe<Array<Maybe<ResolversTypes['AvalaraKeyPairs']>>>, ParentType, ContextType>
  billingCyclePeriod?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  billingCycleUnit?: Resolver<Maybe<ResolversTypes['BillingCycleUnit']>, ParentType, ContextType>
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>
  currentlySubscribed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  duration?: Resolver<ResolversTypes['BillingDuration'], ParentType, ContextType>
  endDate?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>
  fixedAmount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  isFee?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  maxSubscriptionApplications?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  numberOfBillingCycles?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  organizations?: Resolver<Maybe<Array<Maybe<ResolversTypes['Organization']>>>, ParentType, ContextType>
  percentage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  startDate?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>
  type?: Resolver<ResolversTypes['BillingType'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface AddonsResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['AddonsResult'] = ResolversParentTypes['AddonsResult']> {
  ids?: Resolver<Maybe<Array<Maybe<ResolversTypes['ID']>>>, ParentType, ContextType>
  pageInfo?: Resolver<Maybe<ResolversTypes['PageInfo']>, ParentType, ContextType>
  results?: Resolver<Array<Maybe<ResolversTypes['Addon']>>, ParentType, ContextType>
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface AddressResolvers<ContextType = any, ParentType extends ResolversParentTypes['Address'] = ResolversParentTypes['Address']> {
  address1?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  address2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  buildingType?: Resolver<Maybe<ResolversTypes['addressBuildingType']>, ParentType, ContextType>
  censusMatch?: Resolver<Maybe<ResolversTypes['CensusMatch']>, ParentType, ContextType>
  censusTract?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  city?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  country?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  county?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  demographics?: Resolver<Maybe<ResolversTypes['Demographics']>, ParentType, ContextType>
  hexCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  householdIncome?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  lastAlarmedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>
  lat?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  lon?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  numberOfAdultsInHousehold?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  numberOfChildrenInHousehold?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  numberOfPersonsInHousehold?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  ownOrRent?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  province?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  serviceStatus?: Resolver<Maybe<ResolversTypes['ServiceStatus']>, ParentType, ContextType>
  state?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  zip?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface AddressComponentsResolvers<ContextType = any, ParentType extends ResolversParentTypes['AddressComponents'] = ResolversParentTypes['AddressComponents']> {
  addressType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  carrierRoute?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  carrierRouteType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  county?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  countyFips?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  defaultBuildingAddress?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  deliveryPointBarcode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  extraSecondaryDesignator?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  extraSecondaryNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  latitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  longitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  pmbDesignator?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  pmbNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  primaryNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  recordType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  secondaryDesignator?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  secondaryNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  state?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  streetName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  streetPostdirection?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  streetPredirection?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  streetSuffix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  zipCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  zipCodePlus4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  zipCodeType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface AlianzaAddressResolvers<ContextType = any, ParentType extends ResolversParentTypes['AlianzaAddress'] = ResolversParentTypes['AlianzaAddress']> {
  businessName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  country?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  hexCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  postDirectional?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  postalCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  preDirectional?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  secondaryLocationDescription?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  state?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  streetName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  streetNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  streetNumberSuffix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  streetSuffix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  unit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface AlianzaConfigResolvers<ContextType = any, ParentType extends ResolversParentTypes['AlianzaConfig'] = ResolversParentTypes['AlianzaConfig']> {
  callHandlingSettings?: Resolver<Maybe<ResolversTypes['CallHandlingSettings']>, ParentType, ContextType>
  callScreeningSettings?: Resolver<Maybe<ResolversTypes['CallScreeningSettings']>, ParentType, ContextType>
  callerIdName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  carrierStatus?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  directoryListingType?: Resolver<Maybe<ResolversTypes['DirectoryListingType']>, ParentType, ContextType>
  phoneNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  voicemailToEmailAddresses?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>
  voicemailToEmailEnabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface AlianzaConfigResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['AlianzaConfigResponse'] = ResolversParentTypes['AlianzaConfigResponse']> {
  config?: Resolver<Maybe<ResolversTypes['AlianzaConfig']>, ParentType, ContextType>
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface AlianzaDataResolvers<ContextType = any, ParentType extends ResolversParentTypes['AlianzaData'] = ResolversParentTypes['AlianzaData']> {
  accountId?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  deviceId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  endUserId?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  endUserUsername?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  externalServiceType?: Resolver<ResolversTypes['ExternalService'], ParentType, ContextType>
  phoneNumber?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  voicemailBoxId?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface AlianzaPhoneNumberResolvers<ContextType = any, ParentType extends ResolversParentTypes['AlianzaPhoneNumber'] = ResolversParentTypes['AlianzaPhoneNumber']> {
  Country?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  accountId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  carrierId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  claimTicketId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  cooldownExpireDate?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>
  cooldownRecoveredDate?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>
  distance?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  functionType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>
  matchesZip?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  partitionId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  phoneNumber?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  prefix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  rateCenter?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  rateCenterReorderName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  state?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface AlianzaPlanResolvers<ContextType = any, ParentType extends ResolversParentTypes['AlianzaPlan'] = ResolversParentTypes['AlianzaPlan']> {
  allow411?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  allowOperator?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  allowOverage?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  allowUnlimitedLocal?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  callRateFor411?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  callRateForOperator?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  defaultPlan?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  partitionId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  planMinutes?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  preventForwarding?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  rateIntraPartitionAsFree?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  rateTypeFor411?: Resolver<Maybe<ResolversTypes['AlianzaRateType']>, ParentType, ContextType>
  rateTypeForOperator?: Resolver<Maybe<ResolversTypes['AlianzaRateType']>, ParentType, ContextType>
  unlimitedDisplay?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface ArAgingHudResolvers<ContextType = any, ParentType extends ResolversParentTypes['ArAgingHUD'] = ResolversParentTypes['ArAgingHUD']> {
  futureDue?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  pastDue1To30Days?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  pastDue31To60Days?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  pastDue61To90Days?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  pastDue90OrMoreDays?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  revenuePastDue?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface ArAgingReportResolvers<ContextType = any, ParentType extends ResolversParentTypes['ArAgingReport'] = ResolversParentTypes['ArAgingReport']> {
  hud?: Resolver<ResolversTypes['ArAgingHUD'], ParentType, ContextType>
  pageInfo?: Resolver<Maybe<ResolversTypes['PageInfo']>, ParentType, ContextType>
  records?: Resolver<Array<Maybe<ResolversTypes['ArAgingReportRecord']>>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface ArAgingReportRecordResolvers<ContextType = any, ParentType extends ResolversParentTypes['ArAgingReportRecord'] = ResolversParentTypes['ArAgingReportRecord']> {
  accountId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  accountType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  company?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  futureDue?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  mrr?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  pastDue1To30Days?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  pastDue31To60Days?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  pastDue61To90Days?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  pastDue90OrMoreDays?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  revenuePastDue?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  subdivision?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  userId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface AuditEventResolvers<ContextType = any, ParentType extends ResolversParentTypes['AuditEvent'] = ResolversParentTypes['AuditEvent']> {
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>
  initiatorUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>
  modifiedUsers?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>
  organization?: Resolver<Maybe<ResolversTypes['Organization']>, ParentType, ContextType>
  resolverName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  sort?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  timestamp?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  variables?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface AuditEventsResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['AuditEventsResult'] = ResolversParentTypes['AuditEventsResult']> {
  results?: Resolver<Maybe<Array<Maybe<ResolversTypes['AuditEvent']>>>, ParentType, ContextType>
  total?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface AuditTrailReportResolvers<ContextType = any, ParentType extends ResolversParentTypes['AuditTrailReport'] = ResolversParentTypes['AuditTrailReport']> {
  events?: Resolver<Array<Maybe<ResolversTypes['AuditEvent']>>, ParentType, ContextType>
  pageInfo?: Resolver<Maybe<ResolversTypes['PageInfo']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface AutopayFailingReportResolvers<ContextType = any, ParentType extends ResolversParentTypes['AutopayFailingReport'] = ResolversParentTypes['AutopayFailingReport']> {
  pageInfo?: Resolver<Maybe<ResolversTypes['PageInfo']>, ParentType, ContextType>
  records?: Resolver<Array<Maybe<ResolversTypes['AutopayFailingReportRecord']>>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface AutopayFailingReportRecordResolvers<ContextType = any, ParentType extends ResolversParentTypes['AutopayFailingReportRecord'] = ResolversParentTypes['AutopayFailingReportRecord']> {
  accountId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  accountType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  amount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  autopay?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  company?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  paymentCreatedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>
  paymentStatus?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  paymentUpdatedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>
  subdivision?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  subscriberId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  transactionType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface AutopayReportResolvers<ContextType = any, ParentType extends ResolversParentTypes['AutopayReport'] = ResolversParentTypes['AutopayReport']> {
  pageInfo?: Resolver<Maybe<ResolversTypes['PageInfo']>, ParentType, ContextType>
  records?: Resolver<Array<Maybe<ResolversTypes['AutopayReportRecord']>>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface AutopayReportRecordResolvers<ContextType = any, ParentType extends ResolversParentTypes['AutopayReportRecord'] = ResolversParentTypes['AutopayReportRecord']> {
  autopay?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  percentOfMrr?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  percentOfSubscribers?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  subscribers?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  totalMrr?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface AvalaraExemptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['AvalaraExemption'] = ResolversParentTypes['AvalaraExemption']> {
  avalaraSettingsId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>
  category?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  domain?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  pcode?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  scope?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  taxType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  userId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface AvalaraKeyPairsResolvers<ContextType = any, ParentType extends ResolversParentTypes['AvalaraKeyPairs'] = ResolversParentTypes['AvalaraKeyPairs']> {
  avalaraServiceType?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  avalaraTransactionType?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  salesType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface AvalaraSettingsResolvers<ContextType = any, ParentType extends ResolversParentTypes['AvalaraSettings'] = ResolversParentTypes['AvalaraSettings']> {
  avalaraPassword?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  avalaraUsername?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  bscl?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  fclt?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  frch?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  reg?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  svcl?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface AvalaraSubscriberSettingsResolvers<ContextType = any, ParentType extends ResolversParentTypes['AvalaraSubscriberSettings'] = ResolversParentTypes['AvalaraSubscriberSettings']> {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>
  incorporated?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  lifeline?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface BalanceResolvers<ContextType = any, ParentType extends ResolversParentTypes['Balance'] = ResolversParentTypes['Balance']> {
  amount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface BigIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
  name: 'BigInt'
}

export interface BillingTimePeriodEndReportResolvers<ContextType = any, ParentType extends ResolversParentTypes['BillingTimePeriodEndReport'] = ResolversParentTypes['BillingTimePeriodEndReport']> {
  pageInfo?: Resolver<Maybe<ResolversTypes['PageInfo']>, ParentType, ContextType>
  records?: Resolver<Array<Maybe<ResolversTypes['BillingTimePeriodEndReportRecord']>>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface BillingTimePeriodEndReportRecordResolvers<ContextType = any, ParentType extends ResolversParentTypes['BillingTimePeriodEndReportRecord'] = ResolversParentTypes['BillingTimePeriodEndReportRecord']> {
  company?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  day?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>
  discounts?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  grossCashFlow?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  grossCredits?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  grossReceipts?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  grossRefunds?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  invoicedSales?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  netCredits?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  netRefunds?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  netSales?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  subdivision?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface BillingTimePeriodRecordResolvers<ContextType = any, ParentType extends ResolversParentTypes['BillingTimePeriodRecord'] = ResolversParentTypes['BillingTimePeriodRecord']> {
  date?: Resolver<ResolversTypes['Date'], ParentType, ContextType>
  discounts?: Resolver<ResolversTypes['Float'], ParentType, ContextType>
  grossCashflow?: Resolver<ResolversTypes['Float'], ParentType, ContextType>
  grossCredits?: Resolver<ResolversTypes['Float'], ParentType, ContextType>
  grossReciepts?: Resolver<ResolversTypes['Float'], ParentType, ContextType>
  grossRefunds?: Resolver<ResolversTypes['Float'], ParentType, ContextType>
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  invoicedSales?: Resolver<ResolversTypes['Float'], ParentType, ContextType>
  netCredits?: Resolver<ResolversTypes['Float'], ParentType, ContextType>
  netRefunds?: Resolver<ResolversTypes['Float'], ParentType, ContextType>
  netSales?: Resolver<ResolversTypes['Float'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface BillingTimePeriodReportResolvers<ContextType = any, ParentType extends ResolversParentTypes['BillingTimePeriodReport'] = ResolversParentTypes['BillingTimePeriodReport']> {
  records?: Resolver<Array<Maybe<ResolversTypes['BillingTimePeriodRecord']>>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface BossEventResolvers<ContextType = any, ParentType extends ResolversParentTypes['BossEvent'] = ResolversParentTypes['BossEvent']> {
  data?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  eventCreated?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  eventType?: Resolver<ResolversTypes['BossEventType'], ParentType, ContextType>
  externalEventId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type BossEventTypeResolvers = EnumResolverSignature<{ PAYMENT_CANCELLED?: any, PAYMENT_FAILED?: any, PAYMENT_REFUND_FAILED?: any, PAYMENT_REFUND_SUCCEEDED?: any, PAYMENT_SUCCEEDED?: any }, ResolversTypes['BossEventType']>

export interface CallHandlingResolvers<ContextType = any, ParentType extends ResolversParentTypes['CallHandling'] = ResolversParentTypes['CallHandling']> {
  forwardToNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  type?: Resolver<Maybe<ResolversTypes['CallHandlingType']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface CallHandlingSettingsResolvers<ContextType = any, ParentType extends ResolversParentTypes['CallHandlingSettings'] = ResolversParentTypes['CallHandlingSettings']> {
  callHandlingOptionType?: Resolver<Maybe<ResolversTypes['CallHandlingOptionType']>, ParentType, ContextType>
  callWaitingEnabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  doNotDisturbEnabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  findMeFollowMeCallHandling?: Resolver<Maybe<ResolversTypes['FindMeFollowMeCallHandling']>, ParentType, ContextType>
  forwardAlwaysToNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  ringPhoneCallHandling?: Resolver<Maybe<ResolversTypes['RingPhoneCallHandling']>, ParentType, ContextType>
  simultaneousRingCallHandling?: Resolver<Maybe<ResolversTypes['SimultaneousRingCallHandling']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface CallHandlingWithTimeoutResolvers<ContextType = any, ParentType extends ResolversParentTypes['CallHandlingWithTimeout'] = ResolversParentTypes['CallHandlingWithTimeout']> {
  forwardToNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  timeout?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  type?: Resolver<Maybe<ResolversTypes['CallHandlingType']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface CallScreeningSettingsResolvers<ContextType = any, ParentType extends ResolversParentTypes['CallScreeningSettings'] = ResolversParentTypes['CallScreeningSettings']> {
  anonymousCallScreen?: Resolver<Maybe<ResolversTypes['BlockType']>, ParentType, ContextType>
  anonymousRingType?: Resolver<Maybe<ResolversTypes['RingType']>, ParentType, ContextType>
  customCallScreenList?: Resolver<Maybe<Array<Maybe<ResolversTypes['CustomCallScreen']>>>, ParentType, ContextType>
  defaultCallScreen?: Resolver<Maybe<ResolversTypes['BlockType']>, ParentType, ContextType>
  defaultRingType?: Resolver<Maybe<ResolversTypes['RingType']>, ParentType, ContextType>
  forwardTn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  tollFreeCallScreen?: Resolver<Maybe<ResolversTypes['BlockType']>, ParentType, ContextType>
  tollFreeRingType?: Resolver<Maybe<ResolversTypes['RingType']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface ContractResolvers<ContextType = any, ParentType extends ResolversParentTypes['Contract'] = ResolversParentTypes['Contract']> {
  endDate?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  startDate?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface ContrivedResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ContrivedResponse'] = ResolversParentTypes['ContrivedResponse']> {
  organization?: Resolver<ResolversTypes['Organization'], ParentType, ContextType>
  plan?: Resolver<ResolversTypes['Plan'], ParentType, ContextType>
  subscription?: Resolver<ResolversTypes['Subscription'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface CreateSaasSubscriptionResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateSaasSubscriptionResponse'] = ResolversParentTypes['CreateSaasSubscriptionResponse']> {
  clientSecret?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  subscriptionId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface CreditResolvers<ContextType = any, ParentType extends ResolversParentTypes['Credit'] = ResolversParentTypes['Credit']> {
  amount?: Resolver<ResolversTypes['Float'], ParentType, ContextType>
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  note?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  organization?: Resolver<Maybe<ResolversTypes['Organization']>, ParentType, ContextType>
  reasonCode?: Resolver<Maybe<ResolversTypes['ReasonCode']>, ParentType, ContextType>
  redeemed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  subReasonCode?: Resolver<Maybe<ResolversTypes['ReasonCode']>, ParentType, ContextType>
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>
  userId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>
  voided?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface CreditReportResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreditReport'] = ResolversParentTypes['CreditReport']> {
  credits?: Resolver<Maybe<Array<Maybe<ResolversTypes['Credit']>>>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface CreditsResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreditsResult'] = ResolversParentTypes['CreditsResult']> {
  ids?: Resolver<Maybe<Array<Maybe<ResolversTypes['ID']>>>, ParentType, ContextType>
  pageInfo?: Resolver<Maybe<ResolversTypes['PageInfo']>, ParentType, ContextType>
  results?: Resolver<Array<Maybe<ResolversTypes['Credit']>>, ParentType, ContextType>
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface CustomCallScreenResolvers<ContextType = any, ParentType extends ResolversParentTypes['CustomCallScreen'] = ResolversParentTypes['CustomCallScreen']> {
  blockType?: Resolver<Maybe<ResolversTypes['BlockType']>, ParentType, ContextType>
  ringType?: Resolver<Maybe<ResolversTypes['RingType']>, ParentType, ContextType>
  telephoneNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface DailyBillingRecordResolvers<ContextType = any, ParentType extends ResolversParentTypes['DailyBillingRecord'] = ResolversParentTypes['DailyBillingRecord']> {
  date?: Resolver<ResolversTypes['Date'], ParentType, ContextType>
  discounts?: Resolver<ResolversTypes['Float'], ParentType, ContextType>
  grossCashflow?: Resolver<ResolversTypes['Float'], ParentType, ContextType>
  grossCredits?: Resolver<ResolversTypes['Float'], ParentType, ContextType>
  grossReciepts?: Resolver<ResolversTypes['Float'], ParentType, ContextType>
  grossRefunds?: Resolver<ResolversTypes['Float'], ParentType, ContextType>
  invoicedSales?: Resolver<ResolversTypes['Float'], ParentType, ContextType>
  netCredits?: Resolver<ResolversTypes['Float'], ParentType, ContextType>
  netRefunds?: Resolver<ResolversTypes['Float'], ParentType, ContextType>
  netSales?: Resolver<ResolversTypes['Float'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface DailyBillingReportResolvers<ContextType = any, ParentType extends ResolversParentTypes['DailyBillingReport'] = ResolversParentTypes['DailyBillingReport']> {
  dailyBillingRecords?: Resolver<Array<Maybe<ResolversTypes['DailyBillingRecord']>>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date'
}

export interface DeliverabilityAnalysisResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeliverabilityAnalysis'] = ResolversParentTypes['DeliverabilityAnalysis']> {
  dpvActive?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  dpvCmra?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  dpvConfirmation?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  dpvFootnotes?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>
  dpvVacant?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  ewsMatch?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  lacsIndicator?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  lacsReturnCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  suiteReturnCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface DemographicsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Demographics'] = ResolversParentTypes['Demographics']> {
  censusBlockGroup?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  createdAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>
  educationOverBachelorRate?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  employmentRate?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  housingUnitsWithChildrenInSchool?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  medianHouseholdIncome?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  numberOfHouseholds?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  numberOfHousingUnits?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  ownerOccupiedHousingUnitRate?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  percentageOfChildrenInSchool?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  population?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  populationDensity?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  singleFamilyHomePrice202009?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  singleFamilyHomePrice202012?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface DeviceResolvers<ContextType = any, ParentType extends ResolversParentTypes['Device'] = ResolversParentTypes['Device']> {
  deviceType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  emergencyPhoneNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  lineNumber?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  macAddress?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface DiscountResolvers<ContextType = any, ParentType extends ResolversParentTypes['Discount'] = ResolversParentTypes['Discount']> {
  active?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  applicableAddons?: Resolver<Maybe<Array<Maybe<ResolversTypes['Addon']>>>, ParentType, ContextType>
  applicablePlans?: Resolver<Maybe<Array<Maybe<ResolversTypes['Plan']>>>, ParentType, ContextType>
  appliedAddonId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>
  appliedCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  appliedPlanId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>
  applyOn?: Resolver<ResolversTypes['DiscountApplication'], ParentType, ContextType>
  avalaraDiscountType?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  discountAmount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  discountPercentage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  discountType?: Resolver<ResolversTypes['BillingType'], ParentType, ContextType>
  duration?: Resolver<ResolversTypes['BillingDuration'], ParentType, ContextType>
  enabled?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  limitedPeriodMonths?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  maxRedemptions?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  maxSubscriptionApplications?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  organizations?: Resolver<Maybe<Array<Maybe<ResolversTypes['Organization']>>>, ParentType, ContextType>
  reasonCode?: Resolver<Maybe<ResolversTypes['ReasonCode']>, ParentType, ContextType>
  redemptions?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  subReasonCode?: Resolver<Maybe<ResolversTypes['ReasonCode']>, ParentType, ContextType>
  validUntil?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface DiscountsResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['DiscountsResult'] = ResolversParentTypes['DiscountsResult']> {
  ids?: Resolver<Maybe<Array<Maybe<ResolversTypes['ID']>>>, ParentType, ContextType>
  pageInfo?: Resolver<Maybe<ResolversTypes['PageInfo']>, ParentType, ContextType>
  results?: Resolver<Array<Maybe<ResolversTypes['Discount']>>, ParentType, ContextType>
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface DwollaAutopayAuthResolvers<ContextType = any, ParentType extends ResolversParentTypes['DwollaAutopayAuth'] = ResolversParentTypes['DwollaAutopayAuth']> {
  authLink?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  bodyText?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  buttonText?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface DwollaBeneficialOwnerResolvers<ContextType = any, ParentType extends ResolversParentTypes['DwollaBeneficialOwner'] = ResolversParentTypes['DwollaBeneficialOwner']> {
  address1?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  city?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  dateOfBirth?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  postalCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  ssn?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  state?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  verificationStatus?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface EmailScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Email'], any> {
  name: 'Email'
}

export interface EmailEventDataResolvers<ContextType = any, ParentType extends ResolversParentTypes['EmailEventData'] = ResolversParentTypes['EmailEventData']> {
  bounce?: Resolver<Maybe<Array<Maybe<ResolversTypes['SingleMessage']>>>, ParentType, ContextType>
  click?: Resolver<Maybe<Array<Maybe<ResolversTypes['SingleMessage']>>>, ParentType, ContextType>
  deferred?: Resolver<Maybe<Array<Maybe<ResolversTypes['SingleMessage']>>>, ParentType, ContextType>
  delivered?: Resolver<Maybe<Array<Maybe<ResolversTypes['SingleMessage']>>>, ParentType, ContextType>
  dropped?: Resolver<Maybe<Array<Maybe<ResolversTypes['SingleMessage']>>>, ParentType, ContextType>
  open?: Resolver<Maybe<Array<Maybe<ResolversTypes['SingleMessage']>>>, ParentType, ContextType>
  processed?: Resolver<Maybe<Array<Maybe<ResolversTypes['SingleMessage']>>>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface EmailTemplateResolvers<ContextType = any, ParentType extends ResolversParentTypes['EmailTemplate'] = ResolversParentTypes['EmailTemplate']> {
  body?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  subject?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface EquipmentResolvers<ContextType = any, ParentType extends ResolversParentTypes['Equipment'] = ResolversParentTypes['Equipment']> {
  createdAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>
  currentlyProvisioned?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  deviceId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  deviceStatus?: Resolver<Maybe<ResolversTypes['DeviceStatus']>, ParentType, ContextType>
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>
  lastAlarmedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>
  lastProvisionedDate?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>
  make?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  model?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  networkAlarms?: Resolver<Maybe<Array<Maybe<ResolversTypes['NetworkAlarm']>>>, ParentType, ContextType>
  networkMapId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  networkNode?: Resolver<Maybe<ResolversTypes['NetworkNode']>, ParentType, ContextType>
  organization?: Resolver<Maybe<ResolversTypes['Organization']>, ParentType, ContextType>
  plan?: Resolver<Maybe<ResolversTypes['Plan']>, ParentType, ContextType>
  provisionedToSubscriber?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>
  service?: Resolver<Maybe<ResolversTypes['Service']>, ParentType, ContextType>
  servicePassword?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  serviceStatus?: Resolver<Maybe<ResolversTypes['ServiceStatus']>, ParentType, ContextType>
  serviceUsername?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  smtp?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  staticIp?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  subscription?: Resolver<Maybe<ResolversTypes['Subscription']>, ParentType, ContextType>
  type?: Resolver<Maybe<ResolversTypes['EquipmentType']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface EquipmentResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['EquipmentResult'] = ResolversParentTypes['EquipmentResult']> {
  ids?: Resolver<Maybe<Array<Maybe<ResolversTypes['ID']>>>, ParentType, ContextType>
  pageInfo?: Resolver<Maybe<ResolversTypes['PageInfo']>, ParentType, ContextType>
  results?: Resolver<Array<Maybe<ResolversTypes['Equipment']>>, ParentType, ContextType>
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface EventResolvers<ContextType = any, ParentType extends ResolversParentTypes['Event'] = ResolversParentTypes['Event']> {
  category?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  eventId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  initiator?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>
  initiatorUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>
  message?: Resolver<Maybe<ResolversTypes['Message']>, ParentType, ContextType>
  object?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  origin?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>
  subscribersInvolved?: Resolver<Maybe<Array<Maybe<ResolversTypes['ID']>>>, ParentType, ContextType>
  subscribersInvolvedUsers?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>
  timeStamp?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface ExternalLinkResolvers<ContextType = any, ParentType extends ResolversParentTypes['ExternalLink'] = ResolversParentTypes['ExternalLink']> {
  createdAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>
  externalId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  urlTemplate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface ExternalServiceDataResolvers<ContextType = any, ParentType extends ResolversParentTypes['ExternalServiceData'] = ResolversParentTypes['ExternalServiceData']> {
  alianza?: Resolver<Maybe<ResolversTypes['AlianzaData']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface FileResolvers<ContextType = any, ParentType extends ResolversParentTypes['File'] = ResolversParentTypes['File']> {
  encoding?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  filename?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  mimetype?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface FilterResolvers<ContextType = any, ParentType extends ResolversParentTypes['Filter'] = ResolversParentTypes['Filter']> {
  condition?: Resolver<ResolversTypes['FilterCondition'], ParentType, ContextType>
  fieldName?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  value?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface FinancialTransactionResolvers<ContextType = any, ParentType extends ResolversParentTypes['FinancialTransaction'] = ResolversParentTypes['FinancialTransaction']> {
  amount?: Resolver<ResolversTypes['Float'], ParentType, ContextType>
  cancelId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>
  createdAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  destination?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  destinationPaymentProfile?: Resolver<Maybe<ResolversTypes['PaymentProfile']>, ParentType, ContextType>
  externalTransactionId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  invoiceId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>
  paymentIntentClientSecret?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>
  paymentMethodType?: Resolver<Maybe<ResolversTypes['PaymentMethodType']>, ParentType, ContextType>
  refundTransactionId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>
  source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  sourcePaymentProfile?: Resolver<Maybe<ResolversTypes['PaymentProfile']>, ParentType, ContextType>
  status?: Resolver<Maybe<ResolversTypes['FinancialTransactionStatus']>, ParentType, ContextType>
  subscriberId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>
  transactionFee?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  transactionType?: Resolver<Maybe<ResolversTypes['TransactionType']>, ParentType, ContextType>
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface FinancialTransactionsResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['FinancialTransactionsResult'] = ResolversParentTypes['FinancialTransactionsResult']> {
  ids?: Resolver<Maybe<Array<Maybe<ResolversTypes['ID']>>>, ParentType, ContextType>
  pageInfo?: Resolver<Maybe<ResolversTypes['PageInfo']>, ParentType, ContextType>
  results?: Resolver<Array<Maybe<ResolversTypes['FinancialTransaction']>>, ParentType, ContextType>
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface FindMeEndpointResolvers<ContextType = any, ParentType extends ResolversParentTypes['FindMeEndpoint'] = ResolversParentTypes['FindMeEndpoint']> {
  ringUserDevice?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  timeout?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  toNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface FindMeFollowMeCallHandlingResolvers<ContextType = any, ParentType extends ResolversParentTypes['FindMeFollowMeCallHandling'] = ResolversParentTypes['FindMeFollowMeCallHandling']> {
  findMeEndpoints?: Resolver<Maybe<Array<Maybe<ResolversTypes['FindMeEndpoint']>>>, ParentType, ContextType>
  timeoutType?: Resolver<Maybe<ResolversTypes['CallHandlingType']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface ForgotPasswordResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ForgotPasswordResponse'] = ResolversParentTypes['ForgotPasswordResponse']> {
  forgotPasswordCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface Form477ReportResolvers<ContextType = any, ParentType extends ResolversParentTypes['Form477Report'] = ResolversParentTypes['Form477Report']> {
  pageInfo?: Resolver<Maybe<ResolversTypes['PageInfo']>, ParentType, ContextType>
  records?: Resolver<Array<Maybe<ResolversTypes['Form477ReportRecord']>>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface Form477ReportRecordResolvers<ContextType = any, ParentType extends ResolversParentTypes['Form477ReportRecord'] = ResolversParentTypes['Form477ReportRecord']> {
  advertisedDownstreamBandwidth?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  advertisedUpstreamBandwidth?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  company?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  consumerConnections?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  subdivision?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  technologyOfTransmission?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  totalConnections?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  tract?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface FundingApplicationResolvers<ContextType = any, ParentType extends ResolversParentTypes['FundingApplication'] = ResolversParentTypes['FundingApplication']> {
  address?: Resolver<Maybe<ResolversTypes['Address']>, ParentType, ContextType>
  aerialInstallationRange?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>
  anticipatedGrantsSources?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>
  anticipatedGrantsSourcesInput?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  applicantFederalDeliquent?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  applicantId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  applicantType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  applicationSubjectToStateReviewUnderExecutiveOrder12372?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  applicationTitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  applicationType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  arpuInput?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  arpuInputRange?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>
  attestation?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  authorizedRepresentative?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  broadbandConstructionTypes?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>
  broadbandConstructionTypesInput?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  broadbandOperationsExperience?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  bssOssUpgrade?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  businessTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  churnRateRange?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>
  communityBeenEngaged?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  communitySupportLetter?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  companiesPartnersNames?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  competitionIdNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  competitors?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  congressionalDistrictsApplicant?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>
  congressionalDistrictsProgram?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>
  contactEmail?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  contactFax?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  contactFirstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  contactLastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  contactOrganizationAffiliation?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  contactPhone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  contactPoint?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  contactPrefix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  contactSuffix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  contactTitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  costEstimates?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  createdAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>
  dateReceived?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>
  debtEquityFinancing?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>
  debtEquityFinancingInput?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  differentiateFromCompetition?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  donationsAmountRange?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>
  donationsSources?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  einTnNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  entityTypes?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>
  entityTypesInput?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  environmentalIdentified?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  estimatedApplicantFunding?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  estimatedFederalFunding?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  estimatedFundingTotal?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  estimatedLocalFunding?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  estimatedOtherFunding?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  estimatedProgramIncomeFunding?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  estimatedStateFunding?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  evidenceEconomicallyDisadvantagedArea?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  existingNetwork?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  familiarMatchCapital?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  federalAgencyName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  federalAwardId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  federalDomesticAssistanceNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  federalEntityId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  fileNames?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>
  financingPartnersType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  fundingOpportunityNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  fundingSoughtEstimateRange?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>
  fundingWonRange?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>
  gaugeDemandSurveys?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  geographicalCoverage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  handsOnPartners?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  haveAttestation?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>
  importantState?: Resolver<Maybe<ResolversTypes['State']>, ParentType, ContextType>
  infraAndServicesDescription?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  initiatorUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>
  interestedAdvisor?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  interestedMatchProduct?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  interestedSubscriberServicePortal?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  legalName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  majorInfraDescription?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  majorityOrSmallPartners?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  manageNetworkHardware?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  manageNetworkHardwareMulti?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>
  manageNetworkSoftware?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  marketingPlan?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  matchCapitalBefore?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  matchCapitalPartnersHelp?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  matchCapitalRange?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>
  matchFundingPartnersRange?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>
  matchFundingRange?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>
  middleMileInfra?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  monitorNetworkSoftware?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  monitorNetworkSoftwareMulti?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>
  necessaryPermitsNeeded?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  networkConstructedTypes?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>
  networkConstructedTypesInput?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  noHomesPassedRange?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>
  onboardingComplete?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  organization?: Resolver<Maybe<ResolversTypes['Organization']>, ParentType, ContextType>
  organizationDuns?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  organizationFoundedYear?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>
  organizationProjectFinancing?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  organizationalUnit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  physicalLimitations?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  potentialFinancingPartners?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  preEnrollmentApplication?: Resolver<Maybe<ResolversTypes['GrantApplication']>, ParentType, ContextType>
  projectCostExplain?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  projectScability?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  projectSummary?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  promoteJobGrowthDescription?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  proposedProjectEndDate?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>
  proposedProjectStartDate?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>
  provideBroadbandImprovements?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  publicPrivatePartnership?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  publishOnIsp?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  serviceOffer?: Resolver<Maybe<Array<Maybe<ResolversTypes['ServiceOffer']>>>, ParentType, ContextType>
  staffingAndTraining?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  startConversation?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  startedOutreach?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  statesServed?: Resolver<Maybe<Array<Maybe<ResolversTypes['State']>>>, ParentType, ContextType>
  submissionType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  subscriberBillingSoftware?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  subscriberBillingSoftwareMulti?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>
  subscriberServicePortal?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  subscriberSignupSite?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  subscribersNumber?: Resolver<Maybe<ResolversTypes['SubscribersNumber']>, ParentType, ContextType>
  subscribersNumberRange?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>
  takeRateRange?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>
  tenyrsNoHomesPassedRange?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>
  tenyrsTakeRateRange?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>
  totalProjectCostRange?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>
  undergroundInstallationRange?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>
  updatedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>
  websitePricePage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  workWithAdvisor?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  workingAdvisor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  zones?: Resolver<Maybe<Array<Maybe<ResolversTypes['Zone']>>>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface FundingSingleMessageResolvers<ContextType = any, ParentType extends ResolversParentTypes['FundingSingleMessage'] = ResolversParentTypes['FundingSingleMessage']> {
  createdAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>
  currentStatus?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  deliveredStatus?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  errorStatus?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  eventId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  fromEmail?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  hardTemplateId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  organizationId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  recipient?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>
  recipientId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  route?: Resolver<Maybe<ResolversTypes['SingleMessageRoute']>, ParentType, ContextType>
  routeInfo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  routeType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  statusList?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>
  subject?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  templateData?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  updatedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface GenericResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['GenericResponse'] = ResolversParentTypes['GenericResponse']> {
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  recordIds?: Resolver<Maybe<Array<Maybe<ResolversTypes['ID']>>>, ParentType, ContextType>
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  userIds?: Resolver<Maybe<Array<Maybe<ResolversTypes['ID']>>>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface GeoJsonFeatureScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['GeoJSONFeature'], any> {
  name: 'GeoJSONFeature'
}

export interface GeoJsonFeatureCollectionScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['GeoJSONFeatureCollection'], any> {
  name: 'GeoJSONFeatureCollection'
}

export interface GeoJsonGeometryCollectionScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['GeoJSONGeometryCollection'], any> {
  name: 'GeoJSONGeometryCollection'
}

export interface GeoJsonLineStringScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['GeoJSONLineString'], any> {
  name: 'GeoJSONLineString'
}

export interface GeoJsonMultiLineStringScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['GeoJSONMultiLineString'], any> {
  name: 'GeoJSONMultiLineString'
}

export interface GeoJsonMultiPointScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['GeoJSONMultiPoint'], any> {
  name: 'GeoJSONMultiPoint'
}

export interface GeoJsonMultiPolygonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['GeoJSONMultiPolygon'], any> {
  name: 'GeoJSONMultiPolygon'
}

export interface GeoJsonPointScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['GeoJSONPoint'], any> {
  name: 'GeoJSONPoint'
}

export interface GeoJsonPolygonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['GeoJSONPolygon'], any> {
  name: 'GeoJSONPolygon'
}

export interface GetAccountSetupCodeResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['GetAccountSetupCodeResponse'] = ResolversParentTypes['GetAccountSetupCodeResponse']> {
  accountSetupCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface GrantApplicationResolvers<ContextType = any, ParentType extends ResolversParentTypes['GrantApplication'] = ResolversParentTypes['GrantApplication']> {
  applicantType?: Resolver<Maybe<ResolversTypes['ApplicantType']>, ParentType, ContextType>
  createdAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  fccIspId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  fundingApplication?: Resolver<Maybe<ResolversTypes['FundingApplication']>, ParentType, ContextType>
  fundingSoughtEstimate?: Resolver<Maybe<ResolversTypes['FundingEstimate']>, ParentType, ContextType>
  fundingTypes?: Resolver<Maybe<Array<Maybe<ResolversTypes['FundingType']>>>, ParentType, ContextType>
  hearAbout?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  howMuchExactly?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>
  interestedInFunding?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  matchFunding?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  organizationName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  rejected?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  someWhereElseName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  states?: Resolver<Maybe<Array<Maybe<ResolversTypes['State']>>>, ParentType, ContextType>
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  website?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface GrantApplicationResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['GrantApplicationResult'] = ResolversParentTypes['GrantApplicationResult']> {
  ids?: Resolver<Maybe<Array<Maybe<ResolversTypes['ID']>>>, ParentType, ContextType>
  pageInfo?: Resolver<Maybe<ResolversTypes['PageInfo']>, ParentType, ContextType>
  results?: Resolver<Array<Maybe<ResolversTypes['GrantApplication']>>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface GrowFilterResolvers<ContextType = any, ParentType extends ResolversParentTypes['GrowFilter'] = ResolversParentTypes['GrowFilter']> {
  condition?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  coordinates?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>
  drawType?: Resolver<Maybe<ResolversTypes['GrowDrawType']>, ParentType, ContextType>
  filterField?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  filterType?: Resolver<ResolversTypes['GrowFilterType'], ParentType, ContextType>
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  lowerBound?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  radius?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  unit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  upload?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  upperBound?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  value?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface GrowSegmentResolvers<ContextType = any, ParentType extends ResolversParentTypes['GrowSegment'] = ResolversParentTypes['GrowSegment']> {
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>
  growFilters?: Resolver<Array<ResolversTypes['GrowFilter']>, ParentType, ContextType>
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface InvoiceItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['InvoiceItem'] = ResolversParentTypes['InvoiceItem']> {
  amountDue?: Resolver<ResolversTypes['Float'], ParentType, ContextType>
  credit?: Resolver<Maybe<ResolversTypes['Credit']>, ParentType, ContextType>
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  discountAmount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  discountPercentage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  display?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  financialTransaction?: Resolver<Maybe<ResolversTypes['FinancialTransaction']>, ParentType, ContextType>
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  price?: Resolver<ResolversTypes['Float'], ParentType, ContextType>
  quantity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  taxAmount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  taxRate?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  type?: Resolver<Maybe<ResolversTypes['InvoiceItemType']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface InvoiceReportResolvers<ContextType = any, ParentType extends ResolversParentTypes['InvoiceReport'] = ResolversParentTypes['InvoiceReport']> {
  invoices?: Resolver<ResolversTypes['InvoicesResult'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface InvoicesResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['InvoicesResult'] = ResolversParentTypes['InvoicesResult']> {
  ids?: Resolver<Maybe<Array<Maybe<ResolversTypes['ID']>>>, ParentType, ContextType>
  pageInfo?: Resolver<Maybe<ResolversTypes['PageInfo']>, ParentType, ContextType>
  results?: Resolver<Array<Maybe<ResolversTypes['SubscriberInvoice']>>, ParentType, ContextType>
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface LineResolvers<ContextType = any, ParentType extends ResolversParentTypes['Line'] = ResolversParentTypes['Line']> {
  createdAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>
  geometryCoordinates?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>
  geometryType?: Resolver<Maybe<ResolversTypes['GeometryType']>, ParentType, ContextType>
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>
  lineType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  organization?: Resolver<Maybe<ResolversTypes['Organization']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface LinesResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['LinesResult'] = ResolversParentTypes['LinesResult']> {
  ids?: Resolver<Maybe<Array<Maybe<ResolversTypes['ID']>>>, ParentType, ContextType>
  pageInfo?: Resolver<Maybe<ResolversTypes['PageInfo']>, ParentType, ContextType>
  results?: Resolver<Array<Maybe<ResolversTypes['Line']>>, ParentType, ContextType>
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface LobConfidenceScoreResolvers<ContextType = any, ParentType extends ResolversParentTypes['LobConfidenceScore'] = ResolversParentTypes['LobConfidenceScore']> {
  level?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  score?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface LocationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Location'] = ResolversParentTypes['Location']> {
  lat?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  lon?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface MapViewResolvers<ContextType = any, ParentType extends ResolversParentTypes['MapView'] = ResolversParentTypes['MapView']> {
  createdAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  lat?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  lon?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  precision?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  updatedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface MessageResolvers<ContextType = any, ParentType extends ResolversParentTypes['Message'] = ResolversParentTypes['Message']> {
  Sender?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>
  customTemplate?: Resolver<Maybe<ResolversTypes['MessageTemplate']>, ParentType, ContextType>
  hardTemplateName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  organizationId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>
  origin?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  recipientIds?: Resolver<Array<Maybe<ResolversTypes['ID']>>, ParentType, ContextType>
  route?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  savedTemplateId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>
  savedTemplateName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  variables?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface MessageDashboardOverviewResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['MessageDashboardOverviewResult'] = ResolversParentTypes['MessageDashboardOverviewResult']> {
  emailMessages?: Resolver<Maybe<Array<Maybe<ResolversTypes['SingleMessage']>>>, ParentType, ContextType>
  emailTotals?: Resolver<Maybe<ResolversTypes['MessageEventResultsTotals']>, ParentType, ContextType>
  messageEvents?: Resolver<Maybe<Array<Maybe<ResolversTypes['MessageEventInfo']>>>, ParentType, ContextType>
  messagingTotals?: Resolver<Maybe<ResolversTypes['MessagingTotals']>, ParentType, ContextType>
  routeTotals?: Resolver<Maybe<ResolversTypes['RouteTotals']>, ParentType, ContextType>
  smsMessages?: Resolver<Maybe<Array<Maybe<ResolversTypes['SingleMessage']>>>, ParentType, ContextType>
  smsTotals?: Resolver<Maybe<ResolversTypes['SmsTotalsResults']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface MessageEventResolvers<ContextType = any, ParentType extends ResolversParentTypes['MessageEvent'] = ResolversParentTypes['MessageEvent']> {
  createdAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>
  deliveredRate?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  emailErrorCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  emailTotals?: Resolver<Maybe<ResolversTypes['MessageEventResultsTotals']>, ParentType, ContextType>
  errorFlag?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  fromEmail?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  fromNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  hardTemplateId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  hardTemplateName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  initiator?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>
  initiatorId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>
  messageTemplateId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  organizationId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>
  recipients?: Resolver<Maybe<Array<Maybe<ResolversTypes['MessageEventsUser']>>>, ParentType, ContextType>
  route?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  routeCount?: Resolver<Maybe<ResolversTypes['RouteCount']>, ParentType, ContextType>
  routeInfo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  routeType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  sentFrom?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  smsErrorCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  smsTotals?: Resolver<Maybe<ResolversTypes['SmsTotalsResults']>, ParentType, ContextType>
  subject?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  templateData?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  textBody?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  totalErrors?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  updatedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface MessageEventDataResolvers<ContextType = any, ParentType extends ResolversParentTypes['MessageEventData'] = ResolversParentTypes['MessageEventData']> {
  recipientsData?: Resolver<Array<Maybe<ResolversTypes['MessageEventsUser']>>, ParentType, ContextType>
  sgEvents?: Resolver<ResolversTypes['MessageEventResultsTotals'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface MessageEventInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['MessageEventInfo'] = ResolversParentTypes['MessageEventInfo']> {
  createdAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>
  emailCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  messageCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  smsCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface MessageEventResultsTotalsResolvers<ContextType = any, ParentType extends ResolversParentTypes['MessageEventResultsTotals'] = ResolversParentTypes['MessageEventResultsTotals']> {
  bounce?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  click?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  deferred?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  delivered?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  dropped?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  group_resubscribe?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  group_unsubscribe?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  open?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  processed?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  spamreport?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  unsubscribe?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface MessageEventsOverviewResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['MessageEventsOverviewResult'] = ResolversParentTypes['MessageEventsOverviewResult']> {
  emailEventData?: Resolver<Maybe<ResolversTypes['EmailEventData']>, ParentType, ContextType>
  messagingTotals?: Resolver<Maybe<ResolversTypes['MessagingTotals']>, ParentType, ContextType>
  smsEventData?: Resolver<Maybe<ResolversTypes['SmsEventData']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface MessageEventsResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['MessageEventsResult'] = ResolversParentTypes['MessageEventsResult']> {
  results?: Resolver<Maybe<Array<Maybe<ResolversTypes['MessageEvent']>>>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface MessageEventsUserResolvers<ContextType = any, ParentType extends ResolversParentTypes['MessageEventsUser'] = ResolversParentTypes['MessageEventsUser']> {
  messageStatus?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  route?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface MessagePathTemplateResolvers<ContextType = any, ParentType extends ResolversParentTypes['MessagePathTemplate'] = ResolversParentTypes['MessagePathTemplate']> {
  back?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  body?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  file?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  from?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  front?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  html?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  replyTo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  subject?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  to?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface MessageRouteResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['MessageRouteResult'] = ResolversParentTypes['MessageRouteResult']> {
  email?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>
  mail?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>
  outstanding?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>
  postcard?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>
  route?: Resolver<ResolversTypes['MessageRoute'], ParentType, ContextType>
  sms?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface MessageTemplateResolvers<ContextType = any, ParentType extends ResolversParentTypes['MessageTemplate'] = ResolversParentTypes['MessageTemplate']> {
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  emailTemplate?: Resolver<Maybe<ResolversTypes['MessagePathTemplate']>, ParentType, ContextType>
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  mailTemplate?: Resolver<Maybe<ResolversTypes['MessagePathTemplate']>, ParentType, ContextType>
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  notificationTemplate?: Resolver<Maybe<ResolversTypes['MessagePathTemplate']>, ParentType, ContextType>
  organizationId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>
  postcardTemplate?: Resolver<Maybe<ResolversTypes['MessagePathTemplate']>, ParentType, ContextType>
  smsTemplate?: Resolver<Maybe<ResolversTypes['MessagePathTemplate']>, ParentType, ContextType>
  supportedRoutes?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  type?: Resolver<Maybe<ResolversTypes['MessageType']>, ParentType, ContextType>
  variableTypes?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface MessagingTotalsResolvers<ContextType = any, ParentType extends ResolversParentTypes['MessagingTotals'] = ResolversParentTypes['MessagingTotals']> {
  emailCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  emailDelivered?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  emailErrorCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  emailEvents?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  eventsCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  messageCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  smsCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  smsDelivered?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  smsErrorCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  smsEvents?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  totalError?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> {
  addInvoiceNoteByUserIds?: Resolver<Array<Maybe<ResolversTypes['Note']>>, ParentType, ContextType, RequireFields<MutationAddInvoiceNoteByUserIdsArgs, 'note' | 'userIds'>>
  addInvoiceNotes?: Resolver<Array<Maybe<ResolversTypes['Note']>>, ParentType, ContextType, RequireFields<MutationAddInvoiceNotesArgs, 'invoiceIds' | 'notes'>>
  addNote?: Resolver<ResolversTypes['Note'], ParentType, ContextType, RequireFields<MutationAddNoteArgs, 'note' | 'userId'>>
  addOrganizationPermission?: Resolver<ResolversTypes['OrganizationPermission'], ParentType, ContextType, RequireFields<MutationAddOrganizationPermissionArgs, 'organizationPermission'>>
  addOrganizationPermissionByEmail?: Resolver<ResolversTypes['OrganizationPermission'], ParentType, ContextType, RequireFields<MutationAddOrganizationPermissionByEmailArgs, 'email' | 'organizationId' | 'permissionRoleId'>>
  addPaymentMethod?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<MutationAddPaymentMethodArgs, never>>
  addPermissionRole?: Resolver<ResolversTypes['GenericResponse'], ParentType, ContextType, RequireFields<MutationAddPermissionRoleArgs, 'permissionRole'>>
  addTags?: Resolver<ResolversTypes['GenericResponse'], ParentType, ContextType, RequireFields<MutationAddTagsArgs, 'tagIds'>>
  addTagsToPlans?: Resolver<ResolversTypes['GenericResponse'], ParentType, ContextType, RequireFields<MutationAddTagsToPlansArgs, 'planIds' | 'tagIds'>>
  cancelPayment?: Resolver<ResolversTypes['GenericResponse'], ParentType, ContextType, RequireFields<MutationCancelPaymentArgs, 'paymentId'>>
  cancelSubscription?: Resolver<ResolversTypes['GenericResponse'], ParentType, ContextType, RequireFields<MutationCancelSubscriptionArgs, 'subscriptionId'>>
  chargeSubscriber?: Resolver<ResolversTypes['FinancialTransaction'], ParentType, ContextType, RequireFields<MutationChargeSubscriberArgs, 'amount' | 'paymentProfileId'>>
  completeAccountSetup?: Resolver<ResolversTypes['UserAuth'], ParentType, ContextType, RequireFields<MutationCompleteAccountSetupArgs, 'accountSetupCode' | 'user'>>
  completeAdditionalServiceSetup?: Resolver<ResolversTypes['GenericResponse'], ParentType, ContextType, RequireFields<MutationCompleteAdditionalServiceSetupArgs, 'externalServiceData' | 'subscriptionId'>>
  createAcpConfig?: Resolver<Maybe<ResolversTypes['AcpConfig']>, ParentType, ContextType, RequireFields<MutationCreateAcpConfigArgs, 'acpConfig'>>
  createAddon?: Resolver<ResolversTypes['Addon'], ParentType, ContextType, RequireFields<MutationCreateAddonArgs, never>>
  createAvalaraExemptions?: Resolver<ResolversTypes['GenericResponse'], ParentType, ContextType, RequireFields<MutationCreateAvalaraExemptionsArgs, 'exemptions' | 'organizationId'>>
  createAvalaraSettings?: Resolver<ResolversTypes['GenericResponse'], ParentType, ContextType, RequireFields<MutationCreateAvalaraSettingsArgs, 'avalaraSettingsInput' | 'organizationId'>>
  createChildSubscriber?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationCreateChildSubscriberArgs, 'parentSubscriptionId'>>
  createCombinedInvoicesPdf?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<MutationCreateCombinedInvoicesPdfArgs, 'invoiceIds'>>
  createCredit?: Resolver<ResolversTypes['GenericResponse'], ParentType, ContextType, RequireFields<MutationCreateCreditArgs, 'credit'>>
  createCsv?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationCreateCsvArgs, never>>
  createCsvReports?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationCreateCsvReportsArgs, never>>
  createDiscount?: Resolver<ResolversTypes['Discount'], ParentType, ContextType, RequireFields<MutationCreateDiscountArgs, 'discount'>>
  createDwollaBeneficialOwner?: Resolver<ResolversTypes['GenericResponse'], ParentType, ContextType, RequireFields<MutationCreateDwollaBeneficialOwnerArgs, 'beneficialOwners' | 'externalId'>>
  createEquipment?: Resolver<ResolversTypes['Equipment'], ParentType, ContextType, RequireFields<MutationCreateEquipmentArgs, 'equipment'>>
  createFinancialTransaction?: Resolver<Array<Maybe<ResolversTypes['FinancialTransaction']>>, ParentType, ContextType, RequireFields<MutationCreateFinancialTransactionArgs, 'financialTransactions'>>
  createFundingApplication?: Resolver<ResolversTypes['FundingApplication'], ParentType, ContextType, RequireFields<MutationCreateFundingApplicationArgs, 'application'>>
  createFundingOrganization?: Resolver<ResolversTypes['Organization'], ParentType, ContextType, RequireFields<MutationCreateFundingOrganizationArgs, 'organization' | 'preEnrollmentApplicationId'>>
  createGrantApplication?: Resolver<ResolversTypes['GenericResponse'], ParentType, ContextType, RequireFields<MutationCreateGrantApplicationArgs, 'application'>>
  createIPPayToken?: Resolver<ResolversTypes['GenericResponse'], ParentType, ContextType, RequireFields<MutationCreateIpPayTokenArgs, 'token'>>
  createInvoice?: Resolver<ResolversTypes['SubscriberInvoice'], ParentType, ContextType, RequireFields<MutationCreateInvoiceArgs, 'userId'>>
  createLine?: Resolver<ResolversTypes['Line'], ParentType, ContextType, RequireFields<MutationCreateLineArgs, never>>
  createMessageTemplate?: Resolver<ResolversTypes['MessageTemplate'], ParentType, ContextType, RequireFields<MutationCreateMessageTemplateArgs, 'messageTemplate'>>
  createOrganization?: Resolver<ResolversTypes['Organization'], ParentType, ContextType, RequireFields<MutationCreateOrganizationArgs, 'organization'>>
  createPayment?: Resolver<ResolversTypes['GenericResponse'], ParentType, ContextType, RequireFields<MutationCreatePaymentArgs, 'createPaymentInput'>>
  createPaymentAccount?: Resolver<ResolversTypes['GenericResponse'], ParentType, ContextType, RequireFields<MutationCreatePaymentAccountArgs, 'organizationId'>>
  createPaymentProfile?: Resolver<ResolversTypes['PaymentProfile'], ParentType, ContextType, RequireFields<MutationCreatePaymentProfileArgs, 'paymentProfile'>>
  createPlan?: Resolver<ResolversTypes['Plan'], ParentType, ContextType, RequireFields<MutationCreatePlanArgs, never>>
  createReasonCodes?: Resolver<Array<Maybe<ResolversTypes['ReasonCode']>>, ParentType, ContextType, RequireFields<MutationCreateReasonCodesArgs, 'organizationId' | 'reasonCodes'>>
  createReferralSources?: Resolver<Array<Maybe<ResolversTypes['ReferralSource']>>, ParentType, ContextType, RequireFields<MutationCreateReferralSourcesArgs, 'organizationId' | 'referralSources'>>
  createRefund?: Resolver<ResolversTypes['GenericResponse'], ParentType, ContextType, RequireFields<MutationCreateRefundArgs, 'financialTransactionIds'>>
  createReturnCheck?: Resolver<ResolversTypes['GenericResponse'], ParentType, ContextType, RequireFields<MutationCreateReturnCheckArgs, 'createReturnCheckInput'>>
  createSaasSubscription?: Resolver<ResolversTypes['CreateSaasSubscriptionResponse'], ParentType, ContextType>
  createSegment?: Resolver<ResolversTypes['Segment'], ParentType, ContextType, RequireFields<MutationCreateSegmentArgs, 'segment'>>
  createService?: Resolver<ResolversTypes['Service'], ParentType, ContextType, RequireFields<MutationCreateServiceArgs, 'service'>>
  createSignedPdf?: Resolver<ResolversTypes['GenericResponse'], ParentType, ContextType, RequireFields<MutationCreateSignedPdfArgs, never>>
  createSubscriber?: Resolver<ResolversTypes['UserAuth'], ParentType, ContextType, RequireFields<MutationCreateSubscriberArgs, 'user'>>
  createSubscription?: Resolver<ResolversTypes['Subscription'], ParentType, ContextType, RequireFields<MutationCreateSubscriptionArgs, 'subscription'>>
  createTag?: Resolver<ResolversTypes['Tag'], ParentType, ContextType, RequireFields<MutationCreateTagArgs, 'organizationId' | 'tag'>>
  createTax?: Resolver<Maybe<ResolversTypes['GenericResponse']>, ParentType, ContextType, RequireFields<MutationCreateTaxArgs, never>>
  createTodaysCombinedInvoicesPdf?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<MutationCreateTodaysCombinedInvoicesPdfArgs, 'organizationId'>>
  createTower?: Resolver<ResolversTypes['Tower'], ParentType, ContextType, RequireFields<MutationCreateTowerArgs, 'tower'>>
  createUser?: Resolver<ResolversTypes['UserAuth'], ParentType, ContextType, RequireFields<MutationCreateUserArgs, 'user'>>
  createZone?: Resolver<ResolversTypes['Zone'], ParentType, ContextType, RequireFields<MutationCreateZoneArgs, 'zone'>>
  deleteAddon?: Resolver<ResolversTypes['GenericResponse'], ParentType, ContextType, RequireFields<MutationDeleteAddonArgs, 'addonId'>>
  deleteAvalaraExemptions?: Resolver<ResolversTypes['GenericResponse'], ParentType, ContextType, RequireFields<MutationDeleteAvalaraExemptionsArgs, 'exemptionIds'>>
  deleteCredit?: Resolver<ResolversTypes['GenericResponse'], ParentType, ContextType, RequireFields<MutationDeleteCreditArgs, 'creditId'>>
  deleteDiscount?: Resolver<ResolversTypes['GenericResponse'], ParentType, ContextType, RequireFields<MutationDeleteDiscountArgs, 'discountId'>>
  deleteDwollaBeneficialOwner?: Resolver<ResolversTypes['GenericResponse'], ParentType, ContextType, RequireFields<MutationDeleteDwollaBeneficialOwnerArgs, 'externalId'>>
  deleteEquipment?: Resolver<ResolversTypes['GenericResponse'], ParentType, ContextType, RequireFields<MutationDeleteEquipmentArgs, 'equipmentId'>>
  deleteFundingApplication?: Resolver<ResolversTypes['GenericResponse'], ParentType, ContextType, RequireFields<MutationDeleteFundingApplicationArgs, 'id'>>
  deleteGrantApplication?: Resolver<ResolversTypes['GenericResponse'], ParentType, ContextType, RequireFields<MutationDeleteGrantApplicationArgs, 'id'>>
  deleteGrowSegment?: Resolver<ResolversTypes['GenericResponse'], ParentType, ContextType, RequireFields<MutationDeleteGrowSegmentArgs, 'segmentId'>>
  deleteInvoice?: Resolver<ResolversTypes['GenericResponse'], ParentType, ContextType, RequireFields<MutationDeleteInvoiceArgs, 'invoiceId'>>
  deleteLine?: Resolver<ResolversTypes['GenericResponse'], ParentType, ContextType, RequireFields<MutationDeleteLineArgs, 'lineId'>>
  deleteMessageTemplate?: Resolver<ResolversTypes['GenericResponse'], ParentType, ContextType, RequireFields<MutationDeleteMessageTemplateArgs, 'messageTemplateId'>>
  deleteOrganization?: Resolver<ResolversTypes['GenericResponse'], ParentType, ContextType, RequireFields<MutationDeleteOrganizationArgs, 'organizationId'>>
  deleteOrganizationPermission?: Resolver<ResolversTypes['GenericResponse'], ParentType, ContextType, RequireFields<MutationDeleteOrganizationPermissionArgs, 'organizationPermissionId'>>
  deletePaymentMethod?: Resolver<ResolversTypes['GenericResponse'], ParentType, ContextType, RequireFields<MutationDeletePaymentMethodArgs, 'paymentId'>>
  deletePermissionRole?: Resolver<ResolversTypes['GenericResponse'], ParentType, ContextType, RequireFields<MutationDeletePermissionRoleArgs, 'permissionRoleId'>>
  deletePlan?: Resolver<ResolversTypes['GenericResponse'], ParentType, ContextType, RequireFields<MutationDeletePlanArgs, 'planId'>>
  deleteReasonCodes?: Resolver<ResolversTypes['GenericResponse'], ParentType, ContextType, RequireFields<MutationDeleteReasonCodesArgs, 'reasonCodeIds'>>
  deleteReferralSources?: Resolver<ResolversTypes['GenericResponse'], ParentType, ContextType, RequireFields<MutationDeleteReferralSourcesArgs, 'referralSourceIds'>>
  deleteSegment?: Resolver<ResolversTypes['GenericResponse'], ParentType, ContextType, RequireFields<MutationDeleteSegmentArgs, 'segmentId'>>
  deleteService?: Resolver<ResolversTypes['GenericResponse'], ParentType, ContextType, RequireFields<MutationDeleteServiceArgs, 'serviceId'>>
  deleteSubscription?: Resolver<ResolversTypes['GenericResponse'], ParentType, ContextType, RequireFields<MutationDeleteSubscriptionArgs, 'subscriptionId'>>
  deleteTag?: Resolver<ResolversTypes['GenericResponse'], ParentType, ContextType, RequireFields<MutationDeleteTagArgs, 'tagId'>>
  deleteTaxes?: Resolver<Maybe<Array<Maybe<ResolversTypes['Tax']>>>, ParentType, ContextType, RequireFields<MutationDeleteTaxesArgs, never>>
  deleteTower?: Resolver<ResolversTypes['GenericResponse'], ParentType, ContextType, RequireFields<MutationDeleteTowerArgs, 'towerId'>>
  deleteUser?: Resolver<ResolversTypes['GenericResponse'], ParentType, ContextType, RequireFields<MutationDeleteUserArgs, 'userId'>>
  deleteZone?: Resolver<ResolversTypes['GenericResponse'], ParentType, ContextType, RequireFields<MutationDeleteZoneArgs, 'id'>>
  disablePaymentProfile?: Resolver<ResolversTypes['PaymentProfile'], ParentType, ContextType, RequireFields<MutationDisablePaymentProfileArgs, 'paymentProfileId'>>
  downloadInvoice?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<MutationDownloadInvoiceArgs, 'invoiceId'>>
  forgotPassword?: Resolver<ResolversTypes['ForgotPasswordResponse'], ParentType, ContextType, RequireFields<MutationForgotPasswordArgs, 'email'>>
  handlePaymentEvents?: Resolver<ResolversTypes['GenericResponse'], ParentType, ContextType, RequireFields<MutationHandlePaymentEventsArgs, 'bossEvent'>>
  importCalixCms?: Resolver<Maybe<ResolversTypes['GenericResponse']>, ParentType, ContextType, RequireFields<MutationImportCalixCmsArgs, never>>
  importCalixTrapAlarm?: Resolver<Maybe<ResolversTypes['GenericResponse']>, ParentType, ContextType, RequireFields<MutationImportCalixTrapAlarmArgs, 'alarm'>>
  importMosaicRecords?: Resolver<Maybe<ResolversTypes['GenericResponse']>, ParentType, ContextType>
  magicLinkAuth?: Resolver<ResolversTypes['UserAuth'], ParentType, ContextType, RequireFields<MutationMagicLinkAuthArgs, 'code'>>
  onboardOrganizationPayment?: Resolver<ResolversTypes['PaymentUserAccount'], ParentType, ContextType, RequireFields<MutationOnboardOrganizationPaymentArgs, 'onboardOrganizationInput' | 'organizationId' | 'paymentProcessor'>>
  onboardSubscriberPayment?: Resolver<ResolversTypes['PaymentUserAccount'], ParentType, ContextType, RequireFields<MutationOnboardSubscriberPaymentArgs, 'paymentProcessor' | 'userId'>>
  regenerateCurrentInvoice?: Resolver<ResolversTypes['GenericResponse'], ParentType, ContextType, RequireFields<MutationRegenerateCurrentInvoiceArgs, 'userId'>>
  removeChildSubscription?: Resolver<ResolversTypes['GenericResponse'], ParentType, ContextType, RequireFields<MutationRemoveChildSubscriptionArgs, 'subscriptionId'>>
  removeInvoiceNote?: Resolver<ResolversTypes['GenericResponse'], ParentType, ContextType, RequireFields<MutationRemoveInvoiceNoteArgs, 'invoiceId' | 'noteId'>>
  removeTags?: Resolver<ResolversTypes['GenericResponse'], ParentType, ContextType, RequireFields<MutationRemoveTagsArgs, 'tagIds' | 'userIds'>>
  removeTagsFromPlans?: Resolver<ResolversTypes['GenericResponse'], ParentType, ContextType, RequireFields<MutationRemoveTagsFromPlansArgs, 'planIds' | 'tagIds'>>
  resendAccountSetup?: Resolver<ResolversTypes['GenericResponse'], ParentType, ContextType, RequireFields<MutationResendAccountSetupArgs, 'userId'>>
  resendFundingInvite?: Resolver<ResolversTypes['GenericResponse'], ParentType, ContextType, RequireFields<MutationResendFundingInviteArgs, 'organizationId' | 'userId'>>
  resetPassword?: Resolver<ResolversTypes['GenericResponse'], ParentType, ContextType, RequireFields<MutationResetPasswordArgs, 'forgotPasswordCode' | 'newPassword'>>
  resumeBilling?: Resolver<ResolversTypes['GenericResponse'], ParentType, ContextType, RequireFields<MutationResumeBillingArgs, 'suspendBillingId'>>
  rstAddData?: Resolver<ResolversTypes['GenericResponse'], ParentType, ContextType, RequireFields<MutationRstAddDataArgs, 'data'>>
  saveGrowSegment?: Resolver<ResolversTypes['GrowSegment'], ParentType, ContextType, RequireFields<MutationSaveGrowSegmentArgs, 'segment'>>
  seenNotification?: Resolver<Maybe<ResolversTypes['GenericResponse']>, ParentType, ContextType, RequireFields<MutationSeenNotificationArgs, 'notificationId'>>
  sendFundingWelcomeEmail?: Resolver<ResolversTypes['GenericResponse'], ParentType, ContextType, RequireFields<MutationSendFundingWelcomeEmailArgs, 'email' | 'name' | 'organizationId' | 'organizationName'>>
  sendInvoice?: Resolver<ResolversTypes['GenericResponse'], ParentType, ContextType, RequireFields<MutationSendInvoiceArgs, 'userId'>>
  sendMagicLink?: Resolver<ResolversTypes['GenericResponse'], ParentType, ContextType, RequireFields<MutationSendMagicLinkArgs, 'email'>>
  sendMessage?: Resolver<ResolversTypes['GenericResponse'], ParentType, ContextType, RequireFields<MutationSendMessageArgs, 'message'>>
  sendWelcomeEmail?: Resolver<ResolversTypes['GenericResponse'], ParentType, ContextType, RequireFields<MutationSendWelcomeEmailArgs, 'userId'>>
  setDefaultMapView?: Resolver<ResolversTypes['GenericResponse'], ParentType, ContextType, RequireFields<MutationSetDefaultMapViewArgs, 'mapView' | 'organizationId'>>
  setupMfa?: Resolver<ResolversTypes['SetupMfaResult'], ParentType, ContextType, RequireFields<MutationSetupMfaArgs, 'userId'>>
  submitAcpApplication?: Resolver<ResolversTypes['AcpApplicationResponse'], ParentType, ContextType, RequireFields<MutationSubmitAcpApplicationArgs, 'application' | 'userId'>>
  suspendBilling?: Resolver<ResolversTypes['GenericResponse'], ParentType, ContextType, RequireFields<MutationSuspendBillingArgs, 'suspendBilling'>>
  unsubscribeUserNotifications?: Resolver<ResolversTypes['GenericResponse'], ParentType, ContextType, RequireFields<MutationUnsubscribeUserNotificationsArgs, 'code'>>
  updateAcpConfig?: Resolver<Maybe<ResolversTypes['AcpConfig']>, ParentType, ContextType, RequireFields<MutationUpdateAcpConfigArgs, 'acpConfig'>>
  updateAddon?: Resolver<Array<Maybe<ResolversTypes['Addon']>>, ParentType, ContextType, RequireFields<MutationUpdateAddonArgs, 'addonIds' | 'updateAddon'>>
  updateAlianzaConfig?: Resolver<ResolversTypes['GenericResponse'], ParentType, ContextType, RequireFields<MutationUpdateAlianzaConfigArgs, 'config'>>
  updateAvalaraExemptions?: Resolver<ResolversTypes['GenericResponse'], ParentType, ContextType, RequireFields<MutationUpdateAvalaraExemptionsArgs, 'exemptions'>>
  updateDiscount?: Resolver<Array<Maybe<ResolversTypes['Discount']>>, ParentType, ContextType, RequireFields<MutationUpdateDiscountArgs, 'discountIds' | 'updateDiscount'>>
  updateEquipment?: Resolver<ResolversTypes['Equipment'], ParentType, ContextType, RequireFields<MutationUpdateEquipmentArgs, 'equipment' | 'equipmentId'>>
  updateFinancialTransaction?: Resolver<Array<Maybe<ResolversTypes['FinancialTransaction']>>, ParentType, ContextType, RequireFields<MutationUpdateFinancialTransactionArgs, 'financialTransactions'>>
  updateFundingApplication?: Resolver<ResolversTypes['FundingApplication'], ParentType, ContextType, RequireFields<MutationUpdateFundingApplicationArgs, 'application' | 'id'>>
  updateGrantApplication?: Resolver<ResolversTypes['GrantApplication'], ParentType, ContextType, RequireFields<MutationUpdateGrantApplicationArgs, 'grantApplication' | 'grantApplicationId'>>
  updateInvoice?: Resolver<Array<Maybe<ResolversTypes['SubscriberInvoice']>>, ParentType, ContextType, RequireFields<MutationUpdateInvoiceArgs, 'invoiceIds' | 'updateInvoice'>>
  updateMessageTemplate?: Resolver<ResolversTypes['MessageTemplate'], ParentType, ContextType, RequireFields<MutationUpdateMessageTemplateArgs, 'messageTemplateId' | 'updateMessageTemplate'>>
  updateNote?: Resolver<ResolversTypes['Note'], ParentType, ContextType, RequireFields<MutationUpdateNoteArgs, 'note' | 'noteId'>>
  updateOrganization?: Resolver<Array<Maybe<ResolversTypes['Organization']>>, ParentType, ContextType, RequireFields<MutationUpdateOrganizationArgs, 'organizationIds' | 'updateOrganization'>>
  updateOrganizationPermission?: Resolver<ResolversTypes['OrganizationPermission'], ParentType, ContextType, RequireFields<MutationUpdateOrganizationPermissionArgs, 'organizationPermissionId' | 'permissionRoleId'>>
  updatePaymentMethod?: Resolver<ResolversTypes['GenericResponse'], ParentType, ContextType, RequireFields<MutationUpdatePaymentMethodArgs, 'paymentId'>>
  updatePaymentProfile?: Resolver<ResolversTypes['PaymentProfile'], ParentType, ContextType, RequireFields<MutationUpdatePaymentProfileArgs, 'paymentProfileUpdate'>>
  updatePermissionRole?: Resolver<ResolversTypes['GenericResponse'], ParentType, ContextType, RequireFields<MutationUpdatePermissionRoleArgs, 'permissionRole' | 'permissionRoleId'>>
  updatePlan?: Resolver<Array<Maybe<ResolversTypes['Plan']>>, ParentType, ContextType, RequireFields<MutationUpdatePlanArgs, 'planIds' | 'updatePlan'>>
  updateReasonCode?: Resolver<ResolversTypes['ReasonCode'], ParentType, ContextType, RequireFields<MutationUpdateReasonCodeArgs, 'reasonCodeId' | 'updateReasonCode'>>
  updateReferralSource?: Resolver<ResolversTypes['ReferralSource'], ParentType, ContextType, RequireFields<MutationUpdateReferralSourceArgs, 'referralSourceId' | 'updateReferralSource'>>
  updateResolverPermissions?: Resolver<ResolversTypes['GenericResponse'], ParentType, ContextType, RequireFields<MutationUpdateResolverPermissionsArgs, 'organizationId' | 'resolverPermissions'>>
  updateSegment?: Resolver<ResolversTypes['Segment'], ParentType, ContextType, RequireFields<MutationUpdateSegmentArgs, 'segmentId' | 'updateSegment'>>
  updateService?: Resolver<Array<Maybe<ResolversTypes['Service']>>, ParentType, ContextType, RequireFields<MutationUpdateServiceArgs, 'serviceIds' | 'updateService'>>
  updateSubscription?: Resolver<ResolversTypes['Subscription'], ParentType, ContextType, RequireFields<MutationUpdateSubscriptionArgs, 'subscriptionId'>>
  updateTag?: Resolver<ResolversTypes['Tag'], ParentType, ContextType, RequireFields<MutationUpdateTagArgs, 'tagId' | 'updateTag'>>
  updateTaxes?: Resolver<Maybe<Array<Maybe<ResolversTypes['Tax']>>>, ParentType, ContextType, RequireFields<MutationUpdateTaxesArgs, never>>
  updateUser?: Resolver<ResolversTypes['GenericResponse'], ParentType, ContextType, RequireFields<MutationUpdateUserArgs, 'updateUser' | 'userIds'>>
  updateZone?: Resolver<ResolversTypes['Zone'], ParentType, ContextType, RequireFields<MutationUpdateZoneArgs, 'id' | 'zone'>>
  uploadData?: Resolver<ResolversTypes['UploadDataResponse'], ParentType, ContextType, RequireFields<MutationUploadDataArgs, 'files' | 'location'>>
  uploadFundingFiles?: Resolver<ResolversTypes['UploadDataResponse'], ParentType, ContextType, RequireFields<MutationUploadFundingFilesArgs, 'files' | 'fundingApplicationId'>>
  uploadMosaicCsv?: Resolver<Maybe<ResolversTypes['uploadMosaicCsvResponse']>, ParentType, ContextType>
  userAuth?: Resolver<ResolversTypes['UserAuth'], ParentType, ContextType, RequireFields<MutationUserAuthArgs, 'login'>>
  verifyBankAccount?: Resolver<ResolversTypes['PaymentProfile'], ParentType, ContextType, RequireFields<MutationVerifyBankAccountArgs, 'firstAmount' | 'paymentProfileId' | 'secondAmount'>>
  verifyPaymentMethod?: Resolver<ResolversTypes['GenericResponse'], ParentType, ContextType, RequireFields<MutationVerifyPaymentMethodArgs, 'verificationStage'>>
  voidCredit?: Resolver<Array<Maybe<ResolversTypes['Credit']>>, ParentType, ContextType, RequireFields<MutationVoidCreditArgs, 'creditIds'>>
  voidPayment?: Resolver<ResolversTypes['FinancialTransaction'], ParentType, ContextType, RequireFields<MutationVoidPaymentArgs, 'financialTransactionId'>>
}

export interface NetworkAlarmResolvers<ContextType = any, ParentType extends ResolversParentTypes['NetworkAlarm'] = ResolversParentTypes['NetworkAlarm']> {
  action?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  alarmCode?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  alarmCodeDescription?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  device?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>
  facility?: Resolver<Maybe<ResolversTypes['CalixAlarmFacility']>, ParentType, ContextType>
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  legacySystemId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>
  location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  networkNode?: Resolver<ResolversTypes['NetworkNode'], ParentType, ContextType>
  objectId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  secondaryObject?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  secondaryObjectId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  serviceAffecting?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  severity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  severityDescription?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  suppressed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  time?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface NetworkNodeResolvers<ContextType = any, ParentType extends ResolversParentTypes['NetworkNode'] = ResolversParentTypes['NetworkNode']> {
  createdAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>
  lastAlarmedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>
  lat?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  legacySystemId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>
  legacySystemStringId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  lon?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  networkAlarms?: Resolver<Maybe<Array<Maybe<ResolversTypes['NetworkAlarm']>>>, ParentType, ContextType>
  provisionId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>
  serviceStatus?: Resolver<Maybe<ResolversTypes['ServiceStatus']>, ParentType, ContextType>
  updatedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface NetworkNodeResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['NetworkNodeResult'] = ResolversParentTypes['NetworkNodeResult']> {
  results?: Resolver<Array<Maybe<ResolversTypes['NetworkNode']>>, ParentType, ContextType>
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface NoteResolvers<ContextType = any, ParentType extends ResolversParentTypes['Note'] = ResolversParentTypes['Note']> {
  archived?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  createdAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>
  creator?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface NotesResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['NotesResult'] = ResolversParentTypes['NotesResult']> {
  results?: Resolver<Array<Maybe<ResolversTypes['Note']>>, ParentType, ContextType>
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface NotificationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Notification'] = ResolversParentTypes['Notification']> {
  body?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  link?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  organizationId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>
  recipientId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  seen?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  seenAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>
  sentAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>
  subject?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface OrganizationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Organization'] = ResolversParentTypes['Organization']> {
  acpConfig?: Resolver<Maybe<ResolversTypes['AcpConfig']>, ParentType, ContextType>
  acpEnabled?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  alarmLastImported?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>
  avalaraSettings?: Resolver<Maybe<ResolversTypes['AvalaraSettings']>, ParentType, ContextType>
  businessAddress?: Resolver<Maybe<ResolversTypes['Address']>, ParentType, ContextType>
  childOrganizations?: Resolver<Maybe<Array<Maybe<ResolversTypes['Organization']>>>, ParentType, ContextType>
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>
  customerAgreementId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  defaultMapView?: Resolver<Maybe<ResolversTypes['MapView']>, ParentType, ContextType>
  defaultSubOrgId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  enableProvisioning?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  equipment?: Resolver<Maybe<Array<Maybe<ResolversTypes['Equipment']>>>, ParentType, ContextType>
  explore?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  financeEmail?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  fundingEnabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  hasSignedTos?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  isEmailAlertsEnabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  lines?: Resolver<Maybe<Array<Maybe<ResolversTypes['Line']>>>, ParentType, ContextType>
  logo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  mark?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  ndaId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  networkNodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['NetworkNode']>>>, ParentType, ContextType>
  organizationCodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['OrganizationCode']>>>, ParentType, ContextType>
  parentOrganization?: Resolver<Maybe<ResolversTypes['Organization']>, ParentType, ContextType>
  paymentProfileOwnerId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>
  paymentUserAccounts?: Resolver<Maybe<Array<ResolversTypes['PaymentUserAccount']>>, ParentType, ContextType>
  paymentUserId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  paymentsConfig?: Resolver<Maybe<ResolversTypes['PaymentSetup']>, ParentType, ContextType>
  phoneNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  qrCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  saasSubscribed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  socialMedia?: Resolver<Maybe<ResolversTypes['SocialMedia']>, ParentType, ContextType>
  sssConfig?: Resolver<Maybe<ResolversTypes['SssConfig']>, ParentType, ContextType>
  tags?: Resolver<Maybe<Array<Maybe<ResolversTypes['Tag']>>>, ParentType, ContextType>
  taxMethod?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  taxRate?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  taxType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  tenantId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  test?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  totalSubscribers?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  towers?: Resolver<Maybe<Array<Maybe<ResolversTypes['Tower']>>>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface OrganizationCodeResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrganizationCode'] = ResolversParentTypes['OrganizationCode']> {
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  default?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  organizationId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface OrganizationPermissionResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrganizationPermission'] = ResolversParentTypes['OrganizationPermission']> {
  createdAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  organization?: Resolver<Maybe<ResolversTypes['Organization']>, ParentType, ContextType>
  organizationId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>
  permissionRole?: Resolver<Maybe<ResolversTypes['PermissionRole']>, ParentType, ContextType>
  registered?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  role?: Resolver<Maybe<ResolversTypes['OrganizationPermissionRole']>, ParentType, ContextType>
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface PageInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo']> {
  hasNext?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  hasPrevious?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  next?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  previous?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  remaining?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  total?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface PasswordScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Password'], any> {
  name: 'Password'
}

export interface PaymentMethodResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaymentMethod'] = ResolversParentTypes['PaymentMethod']> {
  accountNumber?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  amount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  bankAccountType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  bankName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  cardNumber?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  expMonth?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  expYear?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>
  lastFour?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  removed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  routingNumber?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface PaymentProfileResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaymentProfile'] = ResolversParentTypes['PaymentProfile']> {
  credits?: Resolver<Maybe<Array<ResolversTypes['FinancialTransaction']>>, ParentType, ContextType>
  debits?: Resolver<Maybe<Array<ResolversTypes['FinancialTransaction']>>, ParentType, ContextType>
  displayName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  enabled?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  isDefault?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  isVerified?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  paymentMethodId?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  paymentMethodType?: Resolver<ResolversTypes['PaymentMethodType'], ParentType, ContextType>
  paymentUserAccount?: Resolver<ResolversTypes['PaymentUserAccount'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface PaymentSetupResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaymentSetup'] = ResolversParentTypes['PaymentSetup']> {
  defaultPaymentMethod?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  dwollaCustomerUrl?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>
  stripeUserId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>
  terminalId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface PaymentUserAccountResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaymentUserAccount'] = ResolversParentTypes['PaymentUserAccount']> {
  customerId?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  enabled?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  organization?: Resolver<Maybe<ResolversTypes['Organization']>, ParentType, ContextType>
  paymentProcessor?: Resolver<ResolversTypes['PaymentProcessor'], ParentType, ContextType>
  paymentProfiles?: Resolver<Maybe<Array<ResolversTypes['PaymentProfile']>>, ParentType, ContextType>
  paymentUserId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  subscriber?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>
  type?: Resolver<ResolversTypes['PaymentUserAccountType'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface PermissionRoleResolvers<ContextType = any, ParentType extends ResolversParentTypes['PermissionRole'] = ResolversParentTypes['PermissionRole']> {
  allowedBossRouteGroups?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>
  createdAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>
  defaultBossPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  global?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  inherits?: Resolver<Maybe<Array<Maybe<ResolversTypes['PermissionRole']>>>, ParentType, ContextType>
  mfaRequired?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  role?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  updatedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface PlanResolvers<ContextType = any, ParentType extends ResolversParentTypes['Plan'] = ResolversParentTypes['Plan']> {
  active?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  billingCyclePeriod?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  billingCycleUnit?: Resolver<ResolversTypes['BillingCycleUnit'], ParentType, ContextType>
  childPlans?: Resolver<Maybe<Array<Maybe<ResolversTypes['Plan']>>>, ParentType, ContextType>
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>
  currentlySubscribed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  endDate?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>
  externalPlanId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  numberOfBillingCycles?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  organizations?: Resolver<Array<Maybe<ResolversTypes['Organization']>>, ParentType, ContextType>
  price?: Resolver<ResolversTypes['Float'], ParentType, ContextType>
  pricingModel?: Resolver<ResolversTypes['PricingModel'], ParentType, ContextType>
  pricingTier?: Resolver<Maybe<ResolversTypes['PricingTier']>, ParentType, ContextType>
  recommended?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  sellingPoints?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>
  services?: Resolver<Array<Maybe<ResolversTypes['Service']>>, ParentType, ContextType>
  standAlone?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  startDate?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>
  tags?: Resolver<Maybe<Array<Maybe<ResolversTypes['Tag']>>>, ParentType, ContextType>
  taxAmount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  taxMethod?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface PlanCountRecordResolvers<ContextType = any, ParentType extends ResolversParentTypes['PlanCountRecord'] = ResolversParentTypes['PlanCountRecord']> {
  monthlyRevenue?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  monthlySubscriberCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  plan?: Resolver<Maybe<ResolversTypes['Plan']>, ParentType, ContextType>
  todaysRevenue?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  todaysSubscriberCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  yearlyRevenue?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  yearlySubscriberCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface PlanCountReportResolvers<ContextType = any, ParentType extends ResolversParentTypes['PlanCountReport'] = ResolversParentTypes['PlanCountReport']> {
  planCountRecords?: Resolver<Array<Maybe<ResolversTypes['PlanCountRecord']>>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface PlansResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['PlansResult'] = ResolversParentTypes['PlansResult']> {
  ids?: Resolver<Maybe<Array<Maybe<ResolversTypes['ID']>>>, ParentType, ContextType>
  pageInfo?: Resolver<Maybe<ResolversTypes['PageInfo']>, ParentType, ContextType>
  results?: Resolver<Array<Maybe<ResolversTypes['Plan']>>, ParentType, ContextType>
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface PricingTierResolvers<ContextType = any, ParentType extends ResolversParentTypes['PricingTier'] = ResolversParentTypes['PricingTier']> {
  endingUnit?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  planId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  startingUnit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  tierPrice?: Resolver<ResolversTypes['Float'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface ProvisioningResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProvisioningResponse'] = ResolversParentTypes['ProvisioningResponse']> {
  deviceId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  eventType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  success?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> {
  activateSubscriptionsScheduled?: Resolver<ResolversTypes['GenericResponse'], ParentType, ContextType, RequireFields<QueryActivateSubscriptionsScheduledArgs, 'userId'>>
  addressAutocomplete?: Resolver<Array<Maybe<ResolversTypes['Address']>>, ParentType, ContextType, RequireFields<QueryAddressAutocompleteArgs, 'address'>>
  calculateTaxes?: Resolver<ResolversTypes['GenericResponse'], ParentType, ContextType, RequireFields<QueryCalculateTaxesArgs, 'userId'>>
  chargeSubscriberScheduled?: Resolver<ResolversTypes['GenericResponse'], ParentType, ContextType, RequireFields<QueryChargeSubscriberScheduledArgs, 'userId'>>
  createInvoicesScheduled?: Resolver<ResolversTypes['GenericResponse'], ParentType, ContextType, RequireFields<QueryCreateInvoicesScheduledArgs, 'tenantId'>>
  createPaymentScheduled?: Resolver<ResolversTypes['GenericResponse'], ParentType, ContextType, RequireFields<QueryCreatePaymentScheduledArgs, 'createPaymentInput'>>
  generateReport?: Resolver<ResolversTypes['Report'], ParentType, ContextType, RequireFields<QueryGenerateReportArgs, 'organizationIds' | 'reportType'>>
  getAccountSetupCode?: Resolver<ResolversTypes['GetAccountSetupCodeResponse'], ParentType, ContextType, RequireFields<QueryGetAccountSetupCodeArgs, 'address' | 'organizationId' | 'userId'>>
  getAddon?: Resolver<ResolversTypes['Addon'], ParentType, ContextType, RequireFields<QueryGetAddonArgs, 'addonId'>>
  getAddons?: Resolver<ResolversTypes['AddonsResult'], ParentType, ContextType, RequireFields<QueryGetAddonsArgs, 'organizationId'>>
  getAlianzaConfig?: Resolver<ResolversTypes['AlianzaConfigResponse'], ParentType, ContextType>
  getAlianzaPhoneNumbers?: Resolver<Array<Maybe<ResolversTypes['AlianzaPhoneNumber']>>, ParentType, ContextType, RequireFields<QueryGetAlianzaPhoneNumbersArgs, never>>
  getAlianzaPlans?: Resolver<Array<Maybe<ResolversTypes['AlianzaPlan']>>, ParentType, ContextType>
  getAllowedBossRouteGroups?: Resolver<Array<Maybe<ResolversTypes['RouteGroup']>>, ParentType, ContextType>
  getAnalyzeSubscribersMapData?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<QueryGetAnalyzeSubscribersMapDataArgs, 'organizationId'>>
  getAuditEvents?: Resolver<ResolversTypes['AuditEventsResult'], ParentType, ContextType, RequireFields<QueryGetAuditEventsArgs, 'organizationIds'>>
  getAvailableDiscountsForSubscription?: Resolver<Maybe<Array<Maybe<ResolversTypes['Discount']>>>, ParentType, ContextType, RequireFields<QueryGetAvailableDiscountsForSubscriptionArgs, 'organizationId'>>
  getAvalaraExemptions?: Resolver<Array<Maybe<ResolversTypes['AvalaraExemption']>>, ParentType, ContextType, RequireFields<QueryGetAvalaraExemptionsArgs, 'organizationId'>>
  getCensusBlocks?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<QueryGetCensusBlocksArgs, never>>
  getCounty?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<QueryGetCountyArgs, never>>
  getCredit?: Resolver<ResolversTypes['Credit'], ParentType, ContextType, RequireFields<QueryGetCreditArgs, 'creditId'>>
  getCredits?: Resolver<ResolversTypes['CreditsResult'], ParentType, ContextType, RequireFields<QueryGetCreditsArgs, never>>
  getDiscount?: Resolver<ResolversTypes['Discount'], ParentType, ContextType, RequireFields<QueryGetDiscountArgs, 'discountId'>>
  getDiscounts?: Resolver<Maybe<ResolversTypes['DiscountsResult']>, ParentType, ContextType, RequireFields<QueryGetDiscountsArgs, never>>
  getDwollaAutopayAuth?: Resolver<ResolversTypes['DwollaAutopayAuth'], ParentType, ContextType>
  getDwollaBalance?: Resolver<ResolversTypes['Balance'], ParentType, ContextType, RequireFields<QueryGetDwollaBalanceArgs, 'externalId'>>
  getDwollaBeneficialOwner?: Resolver<Array<Maybe<ResolversTypes['DwollaBeneficialOwner']>>, ParentType, ContextType, RequireFields<QueryGetDwollaBeneficialOwnerArgs, 'externalId'>>
  getEquipment?: Resolver<ResolversTypes['EquipmentResult'], ParentType, ContextType, RequireFields<QueryGetEquipmentArgs, 'organizationId'>>
  getFilledMessageTemplate?: Resolver<Maybe<ResolversTypes['MessageTemplate']>, ParentType, ContextType, RequireFields<QueryGetFilledMessageTemplateArgs, 'messageTemplateId' | 'variables'>>
  getFinancialTransaction?: Resolver<ResolversTypes['GenericResponse'], ParentType, ContextType, RequireFields<QueryGetFinancialTransactionArgs, 'invoiceId'>>
  getFinancialTransactions?: Resolver<ResolversTypes['FinancialTransactionsResult'], ParentType, ContextType, RequireFields<QueryGetFinancialTransactionsArgs, 'organizationId'>>
  getFundingApplication?: Resolver<ResolversTypes['FundingApplication'], ParentType, ContextType, RequireFields<QueryGetFundingApplicationArgs, 'id'>>
  getFundingApplications?: Resolver<Array<Maybe<ResolversTypes['FundingApplication']>>, ParentType, ContextType, RequireFields<QueryGetFundingApplicationsArgs, 'organizationId'>>
  getFundingSourcesToken?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<QueryGetFundingSourcesTokenArgs, 'customerId'>>
  getGrantApplication?: Resolver<ResolversTypes['GrantApplication'], ParentType, ContextType, RequireFields<QueryGetGrantApplicationArgs, 'id'>>
  getGrantApplicationMessage?: Resolver<Maybe<Array<Maybe<ResolversTypes['FundingSingleMessage']>>>, ParentType, ContextType, RequireFields<QueryGetGrantApplicationMessageArgs, 'userEmail'>>
  getGrantApplications?: Resolver<Maybe<ResolversTypes['GrantApplicationResult']>, ParentType, ContextType, RequireFields<QueryGetGrantApplicationsArgs, never>>
  getGrowSegments?: Resolver<Array<Maybe<ResolversTypes['GrowSegment']>>, ParentType, ContextType, RequireFields<QueryGetGrowSegmentsArgs, 'organizationId'>>
  getHistoricalPerformance?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<QueryGetHistoricalPerformanceArgs, never>>
  getIP?: Resolver<ResolversTypes['GenericResponse'], ParentType, ContextType>
  getIPPayReports?: Resolver<ResolversTypes['GenericResponse'], ParentType, ContextType, RequireFields<QueryGetIpPayReportsArgs, 'getIPPayReportsInput'>>
  getInstitutions?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  getInvoice?: Resolver<ResolversTypes['SubscriberInvoice'], ParentType, ContextType, RequireFields<QueryGetInvoiceArgs, never>>
  getInvoices?: Resolver<ResolversTypes['InvoicesResult'], ParentType, ContextType, RequireFields<QueryGetInvoicesArgs, never>>
  getLines?: Resolver<ResolversTypes['LinesResult'], ParentType, ContextType, RequireFields<QueryGetLinesArgs, 'organizationId'>>
  getMessageDashboardOverview?: Resolver<ResolversTypes['MessageDashboardOverviewResult'], ParentType, ContextType, RequireFields<QueryGetMessageDashboardOverviewArgs, 'organizationId'>>
  getMessageEventData?: Resolver<ResolversTypes['MessageEventData'], ParentType, ContextType, RequireFields<QueryGetMessageEventDataArgs, never>>
  getMessageEventDataForRecipient?: Resolver<Maybe<Array<Maybe<ResolversTypes['SendgridEvent']>>>, ParentType, ContextType, RequireFields<QueryGetMessageEventDataForRecipientArgs, 'messageId' | 'recipientId'>>
  getMessageEvents?: Resolver<ResolversTypes['MessageEventsResult'], ParentType, ContextType, RequireFields<QueryGetMessageEventsArgs, 'organizationId'>>
  getMessageEventsOverview?: Resolver<ResolversTypes['MessageEventsOverviewResult'], ParentType, ContextType, RequireFields<QueryGetMessageEventsOverviewArgs, 'organizationId'>>
  getMessageRouteResults?: Resolver<Array<Maybe<ResolversTypes['MessageRouteResult']>>, ParentType, ContextType, RequireFields<QueryGetMessageRouteResultsArgs, 'routes' | 'userIds'>>
  getMessageTemplate?: Resolver<Maybe<ResolversTypes['MessageTemplate']>, ParentType, ContextType, RequireFields<QueryGetMessageTemplateArgs, 'messageTemplateId'>>
  getMessageTemplates?: Resolver<Array<Maybe<ResolversTypes['MessageTemplate']>>, ParentType, ContextType, RequireFields<QueryGetMessageTemplatesArgs, 'organizationId'>>
  getNetworkAlarmFieldValues?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType, RequireFields<QueryGetNetworkAlarmFieldValuesArgs, 'field'>>
  getNetworkNodes?: Resolver<ResolversTypes['NetworkNodeResult'], ParentType, ContextType, RequireFields<QueryGetNetworkNodesArgs, 'organizationId'>>
  getNote?: Resolver<Maybe<ResolversTypes['Note']>, ParentType, ContextType, RequireFields<QueryGetNoteArgs, 'noteId'>>
  getNotes?: Resolver<ResolversTypes['NotesResult'], ParentType, ContextType, RequireFields<QueryGetNotesArgs, 'userId'>>
  getNotifications?: Resolver<Array<Maybe<ResolversTypes['Notification']>>, ParentType, ContextType, RequireFields<QueryGetNotificationsArgs, 'userId'>>
  getOrgAddressAutocomplete?: Resolver<Array<Maybe<ResolversTypes['Address']>>, ParentType, ContextType, RequireFields<QueryGetOrgAddressAutocompleteArgs, 'organizationId'>>
  getOrganization?: Resolver<ResolversTypes['Organization'], ParentType, ContextType, RequireFields<QueryGetOrganizationArgs, 'organizationId'>>
  getOrganizationPermission?: Resolver<ResolversTypes['OrganizationPermission'], ParentType, ContextType, RequireFields<QueryGetOrganizationPermissionArgs, 'organizationPermissionId'>>
  getOrganizationPermissions?: Resolver<Array<Maybe<ResolversTypes['OrganizationPermission']>>, ParentType, ContextType, RequireFields<QueryGetOrganizationPermissionsArgs, 'organizationId'>>
  getPaymentMethods?: Resolver<Array<Maybe<ResolversTypes['PaymentMethod']>>, ParentType, ContextType, RequireFields<QueryGetPaymentMethodsArgs, never>>
  getPaymentProfiles?: Resolver<Maybe<Array<Maybe<ResolversTypes['PaymentProfile']>>>, ParentType, ContextType, RequireFields<QueryGetPaymentProfilesArgs, 'paymentUserId'>>
  getPaymentUserAccounts?: Resolver<Maybe<Array<Maybe<ResolversTypes['PaymentUserAccount']>>>, ParentType, ContextType, RequireFields<QueryGetPaymentUserAccountsArgs, 'paymentUserId'>>
  getPermissionRole?: Resolver<ResolversTypes['PermissionRole'], ParentType, ContextType, RequireFields<QueryGetPermissionRoleArgs, 'permissionRoleId'>>
  getPermissionRoles?: Resolver<Array<Maybe<ResolversTypes['PermissionRole']>>, ParentType, ContextType, RequireFields<QueryGetPermissionRolesArgs, 'organizationId'>>
  getPlan?: Resolver<ResolversTypes['Plan'], ParentType, ContextType, RequireFields<QueryGetPlanArgs, 'planId'>>
  getPlans?: Resolver<ResolversTypes['PlansResult'], ParentType, ContextType, RequireFields<QueryGetPlansArgs, 'organizationId'>>
  getProcessorTransaction?: Resolver<ResolversTypes['FinancialTransaction'], ParentType, ContextType, RequireFields<QueryGetProcessorTransactionArgs, 'paymentId'>>
  getReasonCodes?: Resolver<ResolversTypes['ReasonCodeResult'], ParentType, ContextType, RequireFields<QueryGetReasonCodesArgs, 'organizationId'>>
  getReferralSources?: Resolver<ResolversTypes['ReferralSourceResult'], ParentType, ContextType, RequireFields<QueryGetReferralSourcesArgs, 'organizationId'>>
  getResolverPermissions?: Resolver<Array<Maybe<ResolversTypes['ResolverPermission']>>, ParentType, ContextType, RequireFields<QueryGetResolverPermissionsArgs, 'organizationId'>>
  getSegments?: Resolver<Maybe<Array<Maybe<ResolversTypes['Segment']>>>, ParentType, ContextType, RequireFields<QueryGetSegmentsArgs, 'organizationId'>>
  getService?: Resolver<ResolversTypes['Service'], ParentType, ContextType, RequireFields<QueryGetServiceArgs, 'serviceId'>>
  getServices?: Resolver<ResolversTypes['ServicesResult'], ParentType, ContextType, RequireFields<QueryGetServicesArgs, 'organizationId'>>
  getSetupLinkByMAC?: Resolver<ResolversTypes['GenericResponse'], ParentType, ContextType, RequireFields<QueryGetSetupLinkByMacArgs, 'macAddress'>>
  getState?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<QueryGetStateArgs, never>>
  getSubscriberBilling?: Resolver<ResolversTypes['SubscriberInvoicesResult'], ParentType, ContextType, RequireFields<QueryGetSubscriberBillingArgs, 'userId'>>
  getSubscriberLocations?: Resolver<Array<Maybe<ResolversTypes['User']>>, ParentType, ContextType, RequireFields<QueryGetSubscriberLocationsArgs, 'organizationId'>>
  getSubscribers?: Resolver<ResolversTypes['SubscribersResult'], ParentType, ContextType, RequireFields<QueryGetSubscribersArgs, never>>
  getSubscribersFast?: Resolver<ResolversTypes['SubscribersResult'], ParentType, ContextType, RequireFields<QueryGetSubscribersFastArgs, never>>
  getSubscribersHUD?: Resolver<ResolversTypes['SubscribersHUD'], ParentType, ContextType, RequireFields<QueryGetSubscribersHudArgs, 'organizationId'>>
  getSubscribersPayments?: Resolver<ResolversTypes['SubscribersResult'], ParentType, ContextType, RequireFields<QueryGetSubscribersPaymentsArgs, 'initiatorInput' | 'organizationId'>>
  getSubscription?: Resolver<ResolversTypes['Subscription'], ParentType, ContextType, RequireFields<QueryGetSubscriptionArgs, 'subscriptionId'>>
  getSubscriptions?: Resolver<Array<Maybe<ResolversTypes['Subscription']>>, ParentType, ContextType, RequireFields<QueryGetSubscriptionsArgs, 'organizationId'>>
  getTag?: Resolver<ResolversTypes['Tag'], ParentType, ContextType, RequireFields<QueryGetTagArgs, 'tagId'>>
  getTags?: Resolver<ResolversTypes['TagsResult'], ParentType, ContextType, RequireFields<QueryGetTagsArgs, 'organizationId'>>
  getTax?: Resolver<Maybe<ResolversTypes['Tax']>, ParentType, ContextType, RequireFields<QueryGetTaxArgs, never>>
  getTaxes?: Resolver<Maybe<Array<Maybe<ResolversTypes['Tax']>>>, ParentType, ContextType, RequireFields<QueryGetTaxesArgs, never>>
  getTowers?: Resolver<ResolversTypes['TowersResult'], ParentType, ContextType, RequireFields<QueryGetTowersArgs, 'organizationId'>>
  getTwilioCalls?: Resolver<Array<Maybe<ResolversTypes['TwilioCall']>>, ParentType, ContextType, RequireFields<QueryGetTwilioCallsArgs, never>>
  getTwilioMessages?: Resolver<Array<Maybe<ResolversTypes['TwilioMessage']>>, ParentType, ContextType, RequireFields<QueryGetTwilioMessagesArgs, never>>
  getUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<QueryGetUserArgs, 'userId'>>
  getUserByAccountId?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<QueryGetUserByAccountIdArgs, 'accountId'>>
  getUserByAccountSetupCode?: Resolver<ResolversTypes['UserAuth'], ParentType, ContextType, RequireFields<QueryGetUserByAccountSetupCodeArgs, 'accountSetupCode'>>
  getUserByEmail?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<QueryGetUserByEmailArgs, 'email'>>
  getUserByMagicLinkCode?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<QueryGetUserByMagicLinkCodeArgs, 'code'>>
  getZone?: Resolver<ResolversTypes['Zone'], ParentType, ContextType, RequireFields<QueryGetZoneArgs, 'id'>>
  getZones?: Resolver<Array<Maybe<ResolversTypes['Zone']>>, ParentType, ContextType, RequireFields<QueryGetZonesArgs, 'organizationId'>>
  getZonesLegacy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  myOrganizations?: Resolver<Array<Maybe<ResolversTypes['Organization']>>, ParentType, ContextType>
  mySubscriptions?: Resolver<Array<Maybe<ResolversTypes['Subscription']>>, ParentType, ContextType>
  prevalidateVoIP?: Resolver<ResolversTypes['VoIPPrevalidateResponse'], ParentType, ContextType, RequireFields<QueryPrevalidateVoIpArgs, 'phoneNumber' | 'susbcriptionId'>>
  resendVerificationEmail?: Resolver<Maybe<ResolversTypes['GenericResponse']>, ParentType, ContextType>
  resendVerificationEmailScheduled?: Resolver<Maybe<ResolversTypes['GenericResponse']>, ParentType, ContextType>
  retrievePaymentMethod?: Resolver<ResolversTypes['PaymentMethod'], ParentType, ContextType, RequireFields<QueryRetrievePaymentMethodArgs, 'paymentId'>>
  retrieveTransaction?: Resolver<ResolversTypes['FinancialTransaction'], ParentType, ContextType, RequireFields<QueryRetrieveTransactionArgs, 'transactionId'>>
  rstGetResult?: Resolver<ResolversTypes['RstData'], ParentType, ContextType, RequireFields<QueryRstGetResultArgs, 'id'>>
  rstGetResults?: Resolver<ResolversTypes['RstDataResult'], ParentType, ContextType, RequireFields<QueryRstGetResultsArgs, 'ip'>>
  sendMessageScheduled?: Resolver<ResolversTypes['GenericResponse'], ParentType, ContextType, RequireFields<QuerySendMessageScheduledArgs, never>>
  suspendBillingScheduled?: Resolver<ResolversTypes['GenericResponse'], ParentType, ContextType, RequireFields<QuerySuspendBillingScheduledArgs, 'suspend' | 'userId'>>
  uploadMosaicCsvScheduled?: Resolver<ResolversTypes['GenericResponse'], ParentType, ContextType>
  uploadMosaicRecordsScheduled?: Resolver<ResolversTypes['GenericResponse'], ParentType, ContextType>
  verifyAddress?: Resolver<ResolversTypes['VerifyAddressResponse'], ParentType, ContextType, RequireFields<QueryVerifyAddressArgs, 'address'>>
  verifyMfaCode?: Resolver<ResolversTypes['GenericResponse'], ParentType, ContextType, RequireFields<QueryVerifyMfaCodeArgs, 'mfaCode' | 'userId'>>
  verifyOrgAddress?: Resolver<ResolversTypes['verifyOrgAddressResponse'], ParentType, ContextType, RequireFields<QueryVerifyOrgAddressArgs, 'address'>>
}

export interface ReasonCodeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ReasonCode'] = ResolversParentTypes['ReasonCode']> {
  color?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  createdAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  organization?: Resolver<ResolversTypes['Organization'], ParentType, ContextType>
  reasonCodeType?: Resolver<ResolversTypes['ReasonCodeType'], ParentType, ContextType>
  subReasons?: Resolver<Maybe<Array<Maybe<ResolversTypes['ReasonCode']>>>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface ReasonCodeResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['ReasonCodeResult'] = ResolversParentTypes['ReasonCodeResult']> {
  ids?: Resolver<Maybe<Array<Maybe<ResolversTypes['ID']>>>, ParentType, ContextType>
  pageInfo?: Resolver<Maybe<ResolversTypes['PageInfo']>, ParentType, ContextType>
  results?: Resolver<Array<Maybe<ResolversTypes['ReasonCode']>>, ParentType, ContextType>
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface ReasonCodesReportResolvers<ContextType = any, ParentType extends ResolversParentTypes['ReasonCodesReport'] = ResolversParentTypes['ReasonCodesReport']> {
  pageInfo?: Resolver<Maybe<ResolversTypes['PageInfo']>, ParentType, ContextType>
  records?: Resolver<Array<Maybe<ResolversTypes['ReasonCodesReportRecord']>>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface ReasonCodesReportRecordResolvers<ContextType = any, ParentType extends ResolversParentTypes['ReasonCodesReportRecord'] = ResolversParentTypes['ReasonCodesReportRecord']> {
  accountId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  accountType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  cancelReason?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  cancelSubreason?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  company?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  subdivision?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  subscriberId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  subscriptionDurationDays?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  subscriptionEndDate?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>
  subscriptionStartDate?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface ReferralSourceResolvers<ContextType = any, ParentType extends ResolversParentTypes['ReferralSource'] = ResolversParentTypes['ReferralSource']> {
  color?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  createdAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  organization?: Resolver<ResolversTypes['Organization'], ParentType, ContextType>
  subReferralSources?: Resolver<Maybe<Array<Maybe<ResolversTypes['ReferralSource']>>>, ParentType, ContextType>
  updatedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface ReferralSourceResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['ReferralSourceResult'] = ResolversParentTypes['ReferralSourceResult']> {
  ids?: Resolver<Maybe<Array<Maybe<ResolversTypes['ID']>>>, ParentType, ContextType>
  pageInfo?: Resolver<Maybe<ResolversTypes['PageInfo']>, ParentType, ContextType>
  results?: Resolver<Array<Maybe<ResolversTypes['ReferralSource']>>, ParentType, ContextType>
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface ReportResolvers<ContextType = any, ParentType extends ResolversParentTypes['Report'] = ResolversParentTypes['Report']> {
  __resolveType: TypeResolveFn<'AccountsReceivableAgingReport' | 'ArAgingReport' | 'AuditTrailReport' | 'AutopayFailingReport' | 'AutopayReport' | 'BillingTimePeriodEndReport' | 'BillingTimePeriodReport' | 'CreditReport' | 'Form477Report' | 'InvoiceReport' | 'PlanCountReport' | 'ReasonCodesReport' | 'RevenueBreakdownReport' | 'RevenueByProductReport' | 'RevenueReport' | 'SignupsBySourceReport' | 'SubscriberReport' | 'TagsReport' | 'TakeRateByZonesReport' | 'TaxReport' | 'VoidedCreditsReport', ParentType, ContextType>
}

export interface ResolverPermissionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ResolverPermission'] = ResolversParentTypes['ResolverPermission']> {
  editable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  group?: Resolver<Maybe<ResolversTypes['ResolverGroup']>, ParentType, ContextType>
  resolverDescription?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  resolverName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  roles?: Resolver<Maybe<Array<Maybe<ResolversTypes['PermissionRole']>>>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface RevenueBreakdownRecordResolvers<ContextType = any, ParentType extends ResolversParentTypes['RevenueBreakdownRecord'] = ResolversParentTypes['RevenueBreakdownRecord']> {
  churn?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>
  plan?: Resolver<Maybe<ResolversTypes['Plan']>, ParentType, ContextType>
  revenue?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  subscribersCount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  unearnedRevenue?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface RevenueBreakdownReportResolvers<ContextType = any, ParentType extends ResolversParentTypes['RevenueBreakdownReport'] = ResolversParentTypes['RevenueBreakdownReport']> {
  pageInfo?: Resolver<Maybe<ResolversTypes['PageInfo']>, ParentType, ContextType>
  records?: Resolver<Array<Maybe<ResolversTypes['RevenueBreakdownRecord']>>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface RevenueByProductReportResolvers<ContextType = any, ParentType extends ResolversParentTypes['RevenueByProductReport'] = ResolversParentTypes['RevenueByProductReport']> {
  pageInfo?: Resolver<Maybe<ResolversTypes['PageInfo']>, ParentType, ContextType>
  records?: Resolver<Array<Maybe<ResolversTypes['RevenueByProductReportRecord']>>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface RevenueByProductReportRecordResolvers<ContextType = any, ParentType extends ResolversParentTypes['RevenueByProductReportRecord'] = ResolversParentTypes['RevenueByProductReportRecord']> {
  additions?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  churn?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  company?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  planOrAddon?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  planOrAddonId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  planOrAddonName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  revenue?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  subdivision?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface RevenueReportResolvers<ContextType = any, ParentType extends ResolversParentTypes['RevenueReport'] = ResolversParentTypes['RevenueReport']> {
  pageInfo?: Resolver<Maybe<ResolversTypes['PageInfo']>, ParentType, ContextType>
  records?: Resolver<Array<Maybe<ResolversTypes['RevenueReportRecords']>>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface RevenueReportRecordsResolvers<ContextType = any, ParentType extends ResolversParentTypes['RevenueReportRecords'] = ResolversParentTypes['RevenueReportRecords']> {
  accountId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  accountType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  addonsAppAmountDue?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  addonsAppPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  addonsUpgradesAmountDue?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  addonsUpgradesPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  billingPeriodEnd?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  company?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  dueDate?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>
  emergencyServiceFeesAmountDue?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  emergencyServiceFeesPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  internet?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  internetAmountDue?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  invoiceDate?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>
  invoiceId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  invoiceStatus?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  meshAmountDue?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  meshPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  paidDate?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>
  serviceInstallAmountDue?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  serviceInstallPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  subdivision?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  tax?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  total?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  universalServiceFundAmountDue?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  universalServiceFundPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  userId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  voipAmountDue?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  voipPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface RingPhoneCallHandlingResolvers<ContextType = any, ParentType extends ResolversParentTypes['RingPhoneCallHandling'] = ResolversParentTypes['RingPhoneCallHandling']> {
  busyCallHandling?: Resolver<Maybe<ResolversTypes['CallHandling']>, ParentType, ContextType>
  noAnswerCallHandling?: Resolver<Maybe<ResolversTypes['CallHandlingWithTimeout']>, ParentType, ContextType>
  unregisteredCallHandling?: Resolver<Maybe<ResolversTypes['CallHandling']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface RouteCountResolvers<ContextType = any, ParentType extends ResolversParentTypes['RouteCount'] = ResolversParentTypes['RouteCount']> {
  email?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  sms?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface RouteGroupResolvers<ContextType = any, ParentType extends ResolversParentTypes['RouteGroup'] = ResolversParentTypes['RouteGroup']> {
  groups?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>
  organizationId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface RouteTotalsResolvers<ContextType = any, ParentType extends ResolversParentTypes['RouteTotals'] = ResolversParentTypes['RouteTotals']> {
  email?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  preferred?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  sms?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface RstDataResolvers<ContextType = any, ParentType extends ResolversParentTypes['RstData'] = ResolversParentTypes['RstData']> {
  browserName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  browserVersion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  cpu?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  createdAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>
  deviceModel?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  deviceType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  deviceVendor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  download?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  engineName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  engineVersion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  geolocationEnabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  ipAddress?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  ispName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  jitter?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  latency?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  location?: Resolver<Maybe<ResolversTypes['Location']>, ParentType, ContextType>
  osName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  osVersion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  packetLoss?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  sort?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  upload?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface RstDataResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['RstDataResult'] = ResolversParentTypes['RstDataResult']> {
  results?: Resolver<Array<Maybe<ResolversTypes['RstData']>>, ParentType, ContextType>
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface SegmentResolvers<ContextType = any, ParentType extends ResolversParentTypes['Segment'] = ResolversParentTypes['Segment']> {
  filters?: Resolver<Maybe<Array<Maybe<ResolversTypes['Filter']>>>, ParentType, ContextType>
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  node?: Resolver<Maybe<ResolversTypes['SegmentNode']>, ParentType, ContextType>
  sort?: Resolver<Maybe<ResolversTypes['Sort']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface SendgridEventResolvers<ContextType = any, ParentType extends ResolversParentTypes['SendgridEvent'] = ResolversParentTypes['SendgridEvent']> {
  createdAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  env?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  event?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  eventId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  organizationId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>
  recipientId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>
  sgMessageId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface SentMessageResolvers<ContextType = any, ParentType extends ResolversParentTypes['SentMessage'] = ResolversParentTypes['SentMessage']> {
  destinationEmail?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  eventId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  from?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  html?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  sentAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  subject?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  subscribersInvolved?: Resolver<Maybe<Array<Maybe<ResolversTypes['ID']>>>, ParentType, ContextType>
  to?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface ServiceResolvers<ContextType = any, ParentType extends ResolversParentTypes['Service'] = ResolversParentTypes['Service']> {
  active?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  avalaraKeyPairs?: Resolver<Maybe<Array<Maybe<ResolversTypes['AvalaraKeyPairs']>>>, ParentType, ContextType>
  avalaraSalesType?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  bandwidthCap?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  connectionType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  createdAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>
  downloadSpeed?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  organizations?: Resolver<Array<Maybe<ResolversTypes['Organization']>>, ParentType, ContextType>
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  provisioningId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  smtp?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  taxes?: Resolver<Maybe<Array<Maybe<ResolversTypes['Tax']>>>, ParentType, ContextType>
  type?: Resolver<Maybe<ResolversTypes['ServiceType']>, ParentType, ContextType>
  uploadSpeed?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface ServicesResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['ServicesResult'] = ResolversParentTypes['ServicesResult']> {
  ids?: Resolver<Maybe<Array<Maybe<ResolversTypes['ID']>>>, ParentType, ContextType>
  pageInfo?: Resolver<Maybe<ResolversTypes['PageInfo']>, ParentType, ContextType>
  results?: Resolver<Array<Maybe<ResolversTypes['Service']>>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface SetupMfaResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['SetupMfaResult'] = ResolversParentTypes['SetupMfaResult']> {
  mfaQr?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  mfaSecret?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface SignupsBySourceReportResolvers<ContextType = any, ParentType extends ResolversParentTypes['SignupsBySourceReport'] = ResolversParentTypes['SignupsBySourceReport']> {
  pageInfo?: Resolver<Maybe<ResolversTypes['PageInfo']>, ParentType, ContextType>
  records?: Resolver<Array<Maybe<ResolversTypes['SignupsBySourceReportRecord']>>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface SignupsBySourceReportRecordResolvers<ContextType = any, ParentType extends ResolversParentTypes['SignupsBySourceReportRecord'] = ResolversParentTypes['SignupsBySourceReportRecord']> {
  accountId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  accountStatus?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  accountType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  address1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  address2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  company?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  dateOfRegistration?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  portalIndicator?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  referralSource?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  state?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  subdivision?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  subscriberId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  zip?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface SimultaneousRingCallHandlingResolvers<ContextType = any, ParentType extends ResolversParentTypes['SimultaneousRingCallHandling'] = ResolversParentTypes['SimultaneousRingCallHandling']> {
  forwardToNumberList?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>
  noAnswerCallHandling?: Resolver<Maybe<ResolversTypes['CallHandlingWithTimeout']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface SingleMessageResolvers<ContextType = any, ParentType extends ResolversParentTypes['SingleMessage'] = ResolversParentTypes['SingleMessage']> {
  createdAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>
  currentStatus?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  deliveredStatus?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  errorStatus?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  eventId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  organizationId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  recipientId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  route?: Resolver<Maybe<ResolversTypes['SingleMessageRoute']>, ParentType, ContextType>
  statusList?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  updatedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface SmsEventDataResolvers<ContextType = any, ParentType extends ResolversParentTypes['SmsEventData'] = ResolversParentTypes['SmsEventData']> {
  delivered?: Resolver<Maybe<Array<Maybe<ResolversTypes['SingleMessage']>>>, ParentType, ContextType>
  failed?: Resolver<Maybe<Array<Maybe<ResolversTypes['SingleMessage']>>>, ParentType, ContextType>
  queued?: Resolver<Maybe<Array<Maybe<ResolversTypes['SingleMessage']>>>, ParentType, ContextType>
  sent?: Resolver<Maybe<Array<Maybe<ResolversTypes['SingleMessage']>>>, ParentType, ContextType>
  undelivered?: Resolver<Maybe<Array<Maybe<ResolversTypes['SingleMessage']>>>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface SmsTemplateResolvers<ContextType = any, ParentType extends ResolversParentTypes['SmsTemplate'] = ResolversParentTypes['SmsTemplate']> {
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface SmsTotalsResultsResolvers<ContextType = any, ParentType extends ResolversParentTypes['SmsTotalsResults'] = ResolversParentTypes['SmsTotalsResults']> {
  delivered?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  failed?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  queued?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  sent?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  undelivered?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface SocialMediaResolvers<ContextType = any, ParentType extends ResolversParentTypes['SocialMedia'] = ResolversParentTypes['SocialMedia']> {
  createdAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>
  facebookUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  googleUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  instagramUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  linkedinUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  twitterUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  updatedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface SortResolvers<ContextType = any, ParentType extends ResolversParentTypes['Sort'] = ResolversParentTypes['Sort']> {
  sortOrder?: Resolver<ResolversTypes['SortOrder'], ParentType, ContextType>
  sortedField?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface SssConfigResolvers<ContextType = any, ParentType extends ResolversParentTypes['SssConfig'] = ResolversParentTypes['SssConfig']> {
  alianzaEnabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  allowPublicAccess?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  createAccountStepBeforePlans?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  createdAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>
  hideCustomizeStep?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  preconstructionMode?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  requirePaymentMethodStep?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  sssUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  updatedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface StringOrIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['StringOrInt'], any> {
  name: 'StringOrInt'
}

export type StripeBusinessTypeResolvers = EnumResolverSignature<{ COMPANY?: any, GOVERNMENT_ENTITY?: any, INDIVIDUAL?: any, NON_PROFIT?: any }, ResolversTypes['StripeBusinessType']>

export interface SubscriberInvoiceResolvers<ContextType = any, ParentType extends ResolversParentTypes['SubscriberInvoice'] = ResolversParentTypes['SubscriberInvoice']> {
  amountDue?: Resolver<ResolversTypes['Float'], ParentType, ContextType>
  billingPeriodEnd?: Resolver<ResolversTypes['Date'], ParentType, ContextType>
  billingPeriodStart?: Resolver<ResolversTypes['Date'], ParentType, ContextType>
  discount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  dueDate?: Resolver<ResolversTypes['Date'], ParentType, ContextType>
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  invoiceDate?: Resolver<ResolversTypes['Date'], ParentType, ContextType>
  invoiceFilename?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  invoiceItems?: Resolver<Array<Maybe<ResolversTypes['InvoiceItem']>>, ParentType, ContextType>
  invoiceStatus?: Resolver<ResolversTypes['InvoiceStatus'], ParentType, ContextType>
  notes?: Resolver<Maybe<Array<Maybe<ResolversTypes['Note']>>>, ParentType, ContextType>
  organization?: Resolver<Maybe<ResolversTypes['Organization']>, ParentType, ContextType>
  paidDate?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>
  subtotal?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  tax?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  taxes?: Resolver<Maybe<Array<Maybe<ResolversTypes['Tax']>>>, ParentType, ContextType>
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface SubscriberInvoicesResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['SubscriberInvoicesResult'] = ResolversParentTypes['SubscriberInvoicesResult']> {
  pageInfo?: Resolver<Maybe<ResolversTypes['PageInfo']>, ParentType, ContextType>
  results?: Resolver<Array<Maybe<ResolversTypes['SubscriberInvoice']>>, ParentType, ContextType>
  taxes?: Resolver<Maybe<Array<Maybe<ResolversTypes['Tax']>>>, ParentType, ContextType>
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface SubscriberMutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['SubscriberMutation'] = ResolversParentTypes['SubscriberMutation']> {
  eventId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  subscribersInvolved?: Resolver<Maybe<Array<Maybe<ResolversTypes['ID']>>>, ParentType, ContextType>
  timeStamp?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  userAuth?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  userInput?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface SubscriberReportResolvers<ContextType = any, ParentType extends ResolversParentTypes['SubscriberReport'] = ResolversParentTypes['SubscriberReport']> {
  subscribers?: Resolver<ResolversTypes['SubscribersResult'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface SubscribersHudResolvers<ContextType = any, ParentType extends ResolversParentTypes['SubscribersHUD'] = ResolversParentTypes['SubscribersHUD']> {
  annualizedChurnRate?: Resolver<ResolversTypes['Float'], ParentType, ContextType>
  averageRevenuePerSubscriber?: Resolver<ResolversTypes['Float'], ParentType, ContextType>
  contractedAnnualizedRecurringRevenue?: Resolver<ResolversTypes['Float'], ParentType, ContextType>
  prospectsActivatedPercentage?: Resolver<ResolversTypes['Float'], ParentType, ContextType>
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  totalContractValue?: Resolver<ResolversTypes['Float'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface SubscribersResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['SubscribersResult'] = ResolversParentTypes['SubscribersResult']> {
  ids?: Resolver<Maybe<Array<Maybe<ResolversTypes['ID']>>>, ParentType, ContextType>
  pageInfo?: Resolver<Maybe<ResolversTypes['PageInfo']>, ParentType, ContextType>
  results?: Resolver<Array<Maybe<ResolversTypes['User']>>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface SubscriptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> {
  active?: SubscriptionResolver<Maybe<ResolversTypes['Boolean']>, 'active', ParentType, ContextType>
  additionalServiceSetupRequiredKeys?: SubscriptionResolver<Maybe<Array<Maybe<ResolversTypes['ExternalService']>>>, 'additionalServiceSetupRequiredKeys', ParentType, ContextType>
  addons?: SubscriptionResolver<Maybe<Array<Maybe<ResolversTypes['Addon']>>>, 'addons', ParentType, ContextType>
  cancelReasonCode?: SubscriptionResolver<Maybe<ResolversTypes['ReasonCode']>, 'cancelReasonCode', ParentType, ContextType>
  cancelSubReasonCode?: SubscriptionResolver<Maybe<ResolversTypes['ReasonCode']>, 'cancelSubReasonCode', ParentType, ContextType>
  childSubscription?: SubscriptionResolver<Maybe<ResolversTypes['Subscription']>, 'childSubscription', ParentType, ContextType>
  contract?: SubscriptionResolver<Maybe<ResolversTypes['Contract']>, 'contract', ParentType, ContextType>
  createdAt?: SubscriptionResolver<ResolversTypes['Date'], 'createdAt', ParentType, ContextType>
  discounts?: SubscriptionResolver<Maybe<Array<Maybe<ResolversTypes['Discount']>>>, 'discounts', ParentType, ContextType>
  equipment?: SubscriptionResolver<Maybe<Array<Maybe<ResolversTypes['Equipment']>>>, 'equipment', ParentType, ContextType>
  externalServiceData?: SubscriptionResolver<Maybe<ResolversTypes['ExternalServiceData']>, 'externalServiceData', ParentType, ContextType>
  id?: SubscriptionResolver<ResolversTypes['ID'], 'id', ParentType, ContextType>
  jobId?: SubscriptionResolver<Maybe<ResolversTypes['String']>, 'jobId', ParentType, ContextType>
  lastAlarmedAt?: SubscriptionResolver<Maybe<ResolversTypes['Date']>, 'lastAlarmedAt', ParentType, ContextType>
  legacySystemId?: SubscriptionResolver<Maybe<ResolversTypes['ID']>, 'legacySystemId', ParentType, ContextType>
  nextDueDate?: SubscriptionResolver<Maybe<ResolversTypes['Date']>, 'nextDueDate', ParentType, ContextType>
  parentSubscription?: SubscriptionResolver<Maybe<ResolversTypes['Subscription']>, 'parentSubscription', ParentType, ContextType>
  plans?: SubscriptionResolver<Array<Maybe<ResolversTypes['Plan']>>, 'plans', ParentType, ContextType>
  price?: SubscriptionResolver<Maybe<ResolversTypes['Float']>, 'price', ParentType, ContextType>
  provisioningResponses?: SubscriptionResolver<Maybe<Array<Maybe<ResolversTypes['ProvisioningResponse']>>>, 'provisioningResponses', ParentType, ContextType>
  serviceAddress?: SubscriptionResolver<Maybe<ResolversTypes['Address']>, 'serviceAddress', ParentType, ContextType>
  serviceStatus?: SubscriptionResolver<Maybe<ResolversTypes['ServiceStatus']>, 'serviceStatus', ParentType, ContextType>
  status?: SubscriptionResolver<Maybe<ResolversTypes['SubscriptionStatus']>, 'status', ParentType, ContextType>
  subscriptionEndDate?: SubscriptionResolver<Maybe<ResolversTypes['Date']>, 'subscriptionEndDate', ParentType, ContextType>
  subscriptionStartDate?: SubscriptionResolver<Maybe<ResolversTypes['Date']>, 'subscriptionStartDate', ParentType, ContextType>
  tax?: SubscriptionResolver<Maybe<ResolversTypes['Float']>, 'tax', ParentType, ContextType>
  tower?: SubscriptionResolver<Maybe<ResolversTypes['Tower']>, 'tower', ParentType, ContextType>
  user?: SubscriptionResolver<ResolversTypes['User'], 'user', ParentType, ContextType>
}

export interface SuspendBillingResolvers<ContextType = any, ParentType extends ResolversParentTypes['SuspendBilling'] = ResolversParentTypes['SuspendBilling']> {
  createdAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>
  endCronString?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  endDate?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>
  endJobId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  reasonCode?: Resolver<Maybe<ResolversTypes['ReasonCode']>, ParentType, ContextType>
  startCronString?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  startDate?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>
  startJobId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>
  subReasonCode?: Resolver<Maybe<ResolversTypes['ReasonCode']>, ParentType, ContextType>
  suspendBilling?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface TagResolvers<ContextType = any, ParentType extends ResolversParentTypes['Tag'] = ResolversParentTypes['Tag']> {
  color?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  users?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface TagsReportResolvers<ContextType = any, ParentType extends ResolversParentTypes['TagsReport'] = ResolversParentTypes['TagsReport']> {
  pageInfo?: Resolver<Maybe<ResolversTypes['PageInfo']>, ParentType, ContextType>
  records?: Resolver<Array<Maybe<ResolversTypes['TagsReportRecord']>>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface TagsReportRecordResolvers<ContextType = any, ParentType extends ResolversParentTypes['TagsReportRecord'] = ResolversParentTypes['TagsReportRecord']> {
  accountId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  accountStatus?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  accountType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  balance?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  customerSince?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  mrr?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  organization?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  suborganization?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  userId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface TagsResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['TagsResult'] = ResolversParentTypes['TagsResult']> {
  ids?: Resolver<Maybe<Array<Maybe<ResolversTypes['ID']>>>, ParentType, ContextType>
  pageInfo?: Resolver<Maybe<ResolversTypes['PageInfo']>, ParentType, ContextType>
  results?: Resolver<Array<Maybe<ResolversTypes['Tag']>>, ParentType, ContextType>
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface TakeRateByZonesReportResolvers<ContextType = any, ParentType extends ResolversParentTypes['TakeRateByZonesReport'] = ResolversParentTypes['TakeRateByZonesReport']> {
  pageInfo?: Resolver<Maybe<ResolversTypes['PageInfo']>, ParentType, ContextType>
  records?: Resolver<Array<Maybe<ResolversTypes['TakeRateByZonesReportRecord']>>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface TakeRateByZonesReportRecordResolvers<ContextType = any, ParentType extends ResolversParentTypes['TakeRateByZonesReportRecord'] = ResolversParentTypes['TakeRateByZonesReportRecord']> {
  accountType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>
  netSubscribers?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  newCancelled?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  newSubscribers?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  numSubscribers?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  subdivision?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  takeRate?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  totalPassing?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  zoneName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface TaxResolvers<ContextType = any, ParentType extends ResolversParentTypes['Tax'] = ResolversParentTypes['Tax']> {
  addon?: Resolver<Maybe<ResolversTypes['Addon']>, ParentType, ContextType>
  avalaraServiceType?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  avalaraTransactionType?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  jurisdiction?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  parentId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>
  parentName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  parentType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  service?: Resolver<Maybe<ResolversTypes['Service']>, ParentType, ContextType>
  taxAmount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  taxName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  taxRate?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface TaxReportResolvers<ContextType = any, ParentType extends ResolversParentTypes['TaxReport'] = ResolversParentTypes['TaxReport']> {
  pageInfo?: Resolver<Maybe<ResolversTypes['PageInfo']>, ParentType, ContextType>
  records?: Resolver<Array<Maybe<ResolversTypes['TaxReportRecord']>>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface TaxReportRecordResolvers<ContextType = any, ParentType extends ResolversParentTypes['TaxReportRecord'] = ResolversParentTypes['TaxReportRecord']> {
  category?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  dueDate?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  jurisdiction?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  tax?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  taxName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface TowerResolvers<ContextType = any, ParentType extends ResolversParentTypes['Tower'] = ResolversParentTypes['Tower']> {
  attachmentType?: Resolver<Maybe<ResolversTypes['AttachmentType']>, ParentType, ContextType>
  createdAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>
  equipment?: Resolver<Maybe<ResolversTypes['Equipment']>, ParentType, ContextType>
  geometryCoordinates?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>
  geometryType?: Resolver<Maybe<ResolversTypes['GeometryType']>, ParentType, ContextType>
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>
  lat?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  lon?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  status?: Resolver<Maybe<ResolversTypes['TowerStatus']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface TowersResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['TowersResult'] = ResolversParentTypes['TowersResult']> {
  ids?: Resolver<Maybe<Array<Maybe<ResolversTypes['ID']>>>, ParentType, ContextType>
  pageInfo?: Resolver<Maybe<ResolversTypes['PageInfo']>, ParentType, ContextType>
  results?: Resolver<Array<Maybe<ResolversTypes['Tower']>>, ParentType, ContextType>
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface TwilioCallResolvers<ContextType = any, ParentType extends ResolversParentTypes['TwilioCall'] = ResolversParentTypes['TwilioCall']> {
  accountSid?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  annotation?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  answeredBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  apiVersion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  callerName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  dateCreated?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>
  dateUpdated?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>
  direction?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  duration?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  endTime?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>
  forwardedFrom?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  from?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  fromFormatted?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  groupSid?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  parentCallSid?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  phoneNumberSid?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  price?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  priceUnit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  queueTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  sid?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  startTime?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  to?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  toFormatted?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  trunkSid?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  uri?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface TwilioEventResolvers<ContextType = any, ParentType extends ResolversParentTypes['TwilioEvent'] = ResolversParentTypes['TwilioEvent']> {
  createdAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>
  eventId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>
  from?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  organizationId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>
  recipientId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>
  smsId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  to?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface TwilioMessageResolvers<ContextType = any, ParentType extends ResolversParentTypes['TwilioMessage'] = ResolversParentTypes['TwilioMessage']> {
  accountSid?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  apiVersion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  body?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  dateCreated?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>
  dateSent?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>
  dateUpdated?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>
  direction?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  errorCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  errorMessage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  from?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  messagingServiceSid?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  numMedia?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  numSegments?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  price?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  priceUnit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  sid?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  to?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  uri?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload'
}

export interface UploadDataResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['UploadDataResponse'] = ResolversParentTypes['UploadDataResponse']> {
  fileUrls?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> {
  accountId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  accountStatus?: Resolver<Maybe<ResolversTypes['AccountStatus']>, ParentType, ContextType>
  accountType?: Resolver<Maybe<ResolversTypes['AccountType']>, ParentType, ContextType>
  acpStatus?: Resolver<Maybe<ResolversTypes['AcpStatus']>, ParentType, ContextType>
  active?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  autopay?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  avalaraSubscriberSettings?: Resolver<Maybe<ResolversTypes['AvalaraSubscriberSettings']>, ParentType, ContextType>
  billingScheduledTimePeriods?: Resolver<Maybe<Array<Maybe<ResolversTypes['SuspendBilling']>>>, ParentType, ContextType>
  company?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>
  currentBalance?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  customerSince?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>
  device?: Resolver<Maybe<ResolversTypes['Device']>, ParentType, ContextType>
  email?: Resolver<ResolversTypes['Email'], ParentType, ContextType>
  enableNotifications?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  equipment?: Resolver<Maybe<Array<Maybe<ResolversTypes['Equipment']>>>, ParentType, ContextType>
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  industry?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  invoiceMethod?: Resolver<Maybe<ResolversTypes['InvoiceMethod']>, ParentType, ContextType>
  ippay?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  isCritical?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  isPinned?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  lastAlarmedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  leadSource?: Resolver<Maybe<ResolversTypes['LeadSource']>, ParentType, ContextType>
  legacySystemId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  links?: Resolver<Maybe<Array<Maybe<ResolversTypes['ExternalLink']>>>, ParentType, ContextType>
  ltv?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  mailingAddress?: Resolver<Maybe<ResolversTypes['Address']>, ParentType, ContextType>
  mfaRequired?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  mfaVerified?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  mrr?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  networkAlarms?: Resolver<Maybe<Array<Maybe<ResolversTypes['NetworkAlarm']>>>, ParentType, ContextType>
  networkNode?: Resolver<Maybe<ResolversTypes['NetworkNode']>, ParentType, ContextType>
  notes?: Resolver<Maybe<Array<Maybe<ResolversTypes['Note']>>>, ParentType, ContextType>
  notesCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  organization?: Resolver<Maybe<ResolversTypes['Organization']>, ParentType, ContextType>
  organizationPermissions?: Resolver<Maybe<Array<ResolversTypes['OrganizationPermission']>>, ParentType, ContextType>
  paymentEmailCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  paymentStatus?: Resolver<Maybe<ResolversTypes['PaymentStatus']>, ParentType, ContextType>
  paymentUserAccounts?: Resolver<Maybe<Array<ResolversTypes['PaymentUserAccount']>>, ParentType, ContextType>
  paymentUserId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  paymentsConfig?: Resolver<Maybe<ResolversTypes['PaymentSetup']>, ParentType, ContextType>
  paymentsConfigId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>
  phoneNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  preferredContact?: Resolver<Maybe<ResolversTypes['PreferredContact']>, ParentType, ContextType>
  profileImage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  prospectiveServiceAddress?: Resolver<Maybe<ResolversTypes['Address']>, ParentType, ContextType>
  referralSource?: Resolver<Maybe<ResolversTypes['ReferralSource']>, ParentType, ContextType>
  role?: Resolver<ResolversTypes['UserRole'], ParentType, ContextType>
  serviceStatus?: Resolver<Maybe<ResolversTypes['ServiceStatus']>, ParentType, ContextType>
  subscriptions?: Resolver<Maybe<Array<Maybe<ResolversTypes['Subscription']>>>, ParentType, ContextType>
  tags?: Resolver<Maybe<Array<Maybe<ResolversTypes['Tag']>>>, ParentType, ContextType>
  uuid?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  valueRanking?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface UserAuthResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserAuth'] = ResolversParentTypes['UserAuth']> {
  accountSetupCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  allowedBossRouteGroups?: Resolver<Maybe<Array<Maybe<ResolversTypes['RouteGroup']>>>, ParentType, ContextType>
  defaultBossPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  mfaQr?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  mfaSecret?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  refreshToken?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>
  userIds?: Resolver<Maybe<Array<Maybe<ResolversTypes['ID']>>>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface VerifyAddressResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['VerifyAddressResponse'] = ResolversParentTypes['VerifyAddressResponse']> {
  components?: Resolver<Maybe<ResolversTypes['AddressComponents']>, ParentType, ContextType>
  deliverability?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  deliverabilityAnalysis?: Resolver<Maybe<ResolversTypes['DeliverabilityAnalysis']>, ParentType, ContextType>
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>
  lastLine?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  lobConfidenceScore?: Resolver<Maybe<ResolversTypes['LobConfidenceScore']>, ParentType, ContextType>
  primaryLine?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  secondaryLine?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  urbanization?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface VoIpPrevalidateResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['VoIPPrevalidateResponse'] = ResolversParentTypes['VoIPPrevalidateResponse']> {
  earliestCRD?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  serviceAvailable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  success?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface VoicemailBoxResolvers<ContextType = any, ParentType extends ResolversParentTypes['VoicemailBox'] = ResolversParentTypes['VoicemailBox']> {
  accountId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  dtmfOption?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>
  locale?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  partitionId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  totalUnreadVoicemails?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  totalVoicemails?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  voicemailKeepAfterEmail?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  voicemailToEmailEnabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface VoidedCreditsReportResolvers<ContextType = any, ParentType extends ResolversParentTypes['VoidedCreditsReport'] = ResolversParentTypes['VoidedCreditsReport']> {
  pageInfo?: Resolver<Maybe<ResolversTypes['PageInfo']>, ParentType, ContextType>
  records?: Resolver<Array<Maybe<ResolversTypes['VoidedCreditsReportRecord']>>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface VoidedCreditsReportRecordResolvers<ContextType = any, ParentType extends ResolversParentTypes['VoidedCreditsReportRecord'] = ResolversParentTypes['VoidedCreditsReportRecord']> {
  accountId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  accountType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  amount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  company?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  createdAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  note?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  reason?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  subdivision?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  subreason?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  userId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface ZoneResolvers<ContextType = any, ParentType extends ResolversParentTypes['Zone'] = ResolversParentTypes['Zone']> {
  createdAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>
  geom?: Resolver<Maybe<ResolversTypes['GeoJSONMultiPolygon']>, ParentType, ContextType>
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  organization?: Resolver<Maybe<ResolversTypes['Organization']>, ParentType, ContextType>
  tags?: Resolver<Maybe<Array<Maybe<ResolversTypes['Tag']>>>, ParentType, ContextType>
  updatedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface GenericEventDataResolvers<ContextType = any, ParentType extends ResolversParentTypes['genericEventData'] = ResolversParentTypes['genericEventData']> {
  eventId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  object?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  subscribersInvolved?: Resolver<Maybe<Array<Maybe<ResolversTypes['ID']>>>, ParentType, ContextType>
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface UploadMosaicCsvResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['uploadMosaicCsvResponse'] = ResolversParentTypes['uploadMosaicCsvResponse']> {
  fileUrls?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface VerifyOrgAddressResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['verifyOrgAddressResponse'] = ResolversParentTypes['verifyOrgAddressResponse']> {
  organizationId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>
  userId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>
  verified?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface Resolvers<ContextType = any> {
  AccountsReceivableAgingHUD?: AccountsReceivableAgingHudResolvers<ContextType>
  AccountsReceivableAgingRecord?: AccountsReceivableAgingRecordResolvers<ContextType>
  AccountsReceivableAgingReport?: AccountsReceivableAgingReportResolvers<ContextType>
  AcpApplicationResponse?: AcpApplicationResponseResolvers<ContextType>
  AcpConfig?: AcpConfigResolvers<ContextType>
  AcpStudyAreaCode?: AcpStudyAreaCodeResolvers<ContextType>
  Addon?: AddonResolvers<ContextType>
  AddonsResult?: AddonsResultResolvers<ContextType>
  Address?: AddressResolvers<ContextType>
  AddressComponents?: AddressComponentsResolvers<ContextType>
  AlianzaAddress?: AlianzaAddressResolvers<ContextType>
  AlianzaConfig?: AlianzaConfigResolvers<ContextType>
  AlianzaConfigResponse?: AlianzaConfigResponseResolvers<ContextType>
  AlianzaData?: AlianzaDataResolvers<ContextType>
  AlianzaPhoneNumber?: AlianzaPhoneNumberResolvers<ContextType>
  AlianzaPlan?: AlianzaPlanResolvers<ContextType>
  ArAgingHUD?: ArAgingHudResolvers<ContextType>
  ArAgingReport?: ArAgingReportResolvers<ContextType>
  ArAgingReportRecord?: ArAgingReportRecordResolvers<ContextType>
  AuditEvent?: AuditEventResolvers<ContextType>
  AuditEventsResult?: AuditEventsResultResolvers<ContextType>
  AuditTrailReport?: AuditTrailReportResolvers<ContextType>
  AutopayFailingReport?: AutopayFailingReportResolvers<ContextType>
  AutopayFailingReportRecord?: AutopayFailingReportRecordResolvers<ContextType>
  AutopayReport?: AutopayReportResolvers<ContextType>
  AutopayReportRecord?: AutopayReportRecordResolvers<ContextType>
  AvalaraExemption?: AvalaraExemptionResolvers<ContextType>
  AvalaraKeyPairs?: AvalaraKeyPairsResolvers<ContextType>
  AvalaraSettings?: AvalaraSettingsResolvers<ContextType>
  AvalaraSubscriberSettings?: AvalaraSubscriberSettingsResolvers<ContextType>
  Balance?: BalanceResolvers<ContextType>
  BigInt?: GraphQLScalarType
  BillingTimePeriodEndReport?: BillingTimePeriodEndReportResolvers<ContextType>
  BillingTimePeriodEndReportRecord?: BillingTimePeriodEndReportRecordResolvers<ContextType>
  BillingTimePeriodRecord?: BillingTimePeriodRecordResolvers<ContextType>
  BillingTimePeriodReport?: BillingTimePeriodReportResolvers<ContextType>
  BossEvent?: BossEventResolvers<ContextType>
  BossEventType?: BossEventTypeResolvers
  CallHandling?: CallHandlingResolvers<ContextType>
  CallHandlingSettings?: CallHandlingSettingsResolvers<ContextType>
  CallHandlingWithTimeout?: CallHandlingWithTimeoutResolvers<ContextType>
  CallScreeningSettings?: CallScreeningSettingsResolvers<ContextType>
  Contract?: ContractResolvers<ContextType>
  ContrivedResponse?: ContrivedResponseResolvers<ContextType>
  CreateSaasSubscriptionResponse?: CreateSaasSubscriptionResponseResolvers<ContextType>
  Credit?: CreditResolvers<ContextType>
  CreditReport?: CreditReportResolvers<ContextType>
  CreditsResult?: CreditsResultResolvers<ContextType>
  CustomCallScreen?: CustomCallScreenResolvers<ContextType>
  DailyBillingRecord?: DailyBillingRecordResolvers<ContextType>
  DailyBillingReport?: DailyBillingReportResolvers<ContextType>
  Date?: GraphQLScalarType
  DeliverabilityAnalysis?: DeliverabilityAnalysisResolvers<ContextType>
  Demographics?: DemographicsResolvers<ContextType>
  Device?: DeviceResolvers<ContextType>
  Discount?: DiscountResolvers<ContextType>
  DiscountsResult?: DiscountsResultResolvers<ContextType>
  DwollaAutopayAuth?: DwollaAutopayAuthResolvers<ContextType>
  DwollaBeneficialOwner?: DwollaBeneficialOwnerResolvers<ContextType>
  Email?: GraphQLScalarType
  EmailEventData?: EmailEventDataResolvers<ContextType>
  EmailTemplate?: EmailTemplateResolvers<ContextType>
  Equipment?: EquipmentResolvers<ContextType>
  EquipmentResult?: EquipmentResultResolvers<ContextType>
  Event?: EventResolvers<ContextType>
  ExternalLink?: ExternalLinkResolvers<ContextType>
  ExternalServiceData?: ExternalServiceDataResolvers<ContextType>
  File?: FileResolvers<ContextType>
  Filter?: FilterResolvers<ContextType>
  FinancialTransaction?: FinancialTransactionResolvers<ContextType>
  FinancialTransactionsResult?: FinancialTransactionsResultResolvers<ContextType>
  FindMeEndpoint?: FindMeEndpointResolvers<ContextType>
  FindMeFollowMeCallHandling?: FindMeFollowMeCallHandlingResolvers<ContextType>
  ForgotPasswordResponse?: ForgotPasswordResponseResolvers<ContextType>
  Form477Report?: Form477ReportResolvers<ContextType>
  Form477ReportRecord?: Form477ReportRecordResolvers<ContextType>
  FundingApplication?: FundingApplicationResolvers<ContextType>
  FundingSingleMessage?: FundingSingleMessageResolvers<ContextType>
  GenericResponse?: GenericResponseResolvers<ContextType>
  GeoJSONFeature?: GraphQLScalarType
  GeoJSONFeatureCollection?: GraphQLScalarType
  GeoJSONGeometryCollection?: GraphQLScalarType
  GeoJSONLineString?: GraphQLScalarType
  GeoJSONMultiLineString?: GraphQLScalarType
  GeoJSONMultiPoint?: GraphQLScalarType
  GeoJSONMultiPolygon?: GraphQLScalarType
  GeoJSONPoint?: GraphQLScalarType
  GeoJSONPolygon?: GraphQLScalarType
  GetAccountSetupCodeResponse?: GetAccountSetupCodeResponseResolvers<ContextType>
  GrantApplication?: GrantApplicationResolvers<ContextType>
  GrantApplicationResult?: GrantApplicationResultResolvers<ContextType>
  GrowFilter?: GrowFilterResolvers<ContextType>
  GrowSegment?: GrowSegmentResolvers<ContextType>
  InvoiceItem?: InvoiceItemResolvers<ContextType>
  InvoiceReport?: InvoiceReportResolvers<ContextType>
  InvoicesResult?: InvoicesResultResolvers<ContextType>
  Line?: LineResolvers<ContextType>
  LinesResult?: LinesResultResolvers<ContextType>
  LobConfidenceScore?: LobConfidenceScoreResolvers<ContextType>
  Location?: LocationResolvers<ContextType>
  MapView?: MapViewResolvers<ContextType>
  Message?: MessageResolvers<ContextType>
  MessageDashboardOverviewResult?: MessageDashboardOverviewResultResolvers<ContextType>
  MessageEvent?: MessageEventResolvers<ContextType>
  MessageEventData?: MessageEventDataResolvers<ContextType>
  MessageEventInfo?: MessageEventInfoResolvers<ContextType>
  MessageEventResultsTotals?: MessageEventResultsTotalsResolvers<ContextType>
  MessageEventsOverviewResult?: MessageEventsOverviewResultResolvers<ContextType>
  MessageEventsResult?: MessageEventsResultResolvers<ContextType>
  MessageEventsUser?: MessageEventsUserResolvers<ContextType>
  MessagePathTemplate?: MessagePathTemplateResolvers<ContextType>
  MessageRouteResult?: MessageRouteResultResolvers<ContextType>
  MessageTemplate?: MessageTemplateResolvers<ContextType>
  MessagingTotals?: MessagingTotalsResolvers<ContextType>
  Mutation?: MutationResolvers<ContextType>
  NetworkAlarm?: NetworkAlarmResolvers<ContextType>
  NetworkNode?: NetworkNodeResolvers<ContextType>
  NetworkNodeResult?: NetworkNodeResultResolvers<ContextType>
  Note?: NoteResolvers<ContextType>
  NotesResult?: NotesResultResolvers<ContextType>
  Notification?: NotificationResolvers<ContextType>
  Organization?: OrganizationResolvers<ContextType>
  OrganizationCode?: OrganizationCodeResolvers<ContextType>
  OrganizationPermission?: OrganizationPermissionResolvers<ContextType>
  PageInfo?: PageInfoResolvers<ContextType>
  Password?: GraphQLScalarType
  PaymentMethod?: PaymentMethodResolvers<ContextType>
  PaymentProfile?: PaymentProfileResolvers<ContextType>
  PaymentSetup?: PaymentSetupResolvers<ContextType>
  PaymentUserAccount?: PaymentUserAccountResolvers<ContextType>
  PermissionRole?: PermissionRoleResolvers<ContextType>
  Plan?: PlanResolvers<ContextType>
  PlanCountRecord?: PlanCountRecordResolvers<ContextType>
  PlanCountReport?: PlanCountReportResolvers<ContextType>
  PlansResult?: PlansResultResolvers<ContextType>
  PricingTier?: PricingTierResolvers<ContextType>
  ProvisioningResponse?: ProvisioningResponseResolvers<ContextType>
  Query?: QueryResolvers<ContextType>
  ReasonCode?: ReasonCodeResolvers<ContextType>
  ReasonCodeResult?: ReasonCodeResultResolvers<ContextType>
  ReasonCodesReport?: ReasonCodesReportResolvers<ContextType>
  ReasonCodesReportRecord?: ReasonCodesReportRecordResolvers<ContextType>
  ReferralSource?: ReferralSourceResolvers<ContextType>
  ReferralSourceResult?: ReferralSourceResultResolvers<ContextType>
  Report?: ReportResolvers<ContextType>
  ResolverPermission?: ResolverPermissionResolvers<ContextType>
  RevenueBreakdownRecord?: RevenueBreakdownRecordResolvers<ContextType>
  RevenueBreakdownReport?: RevenueBreakdownReportResolvers<ContextType>
  RevenueByProductReport?: RevenueByProductReportResolvers<ContextType>
  RevenueByProductReportRecord?: RevenueByProductReportRecordResolvers<ContextType>
  RevenueReport?: RevenueReportResolvers<ContextType>
  RevenueReportRecords?: RevenueReportRecordsResolvers<ContextType>
  RingPhoneCallHandling?: RingPhoneCallHandlingResolvers<ContextType>
  RouteCount?: RouteCountResolvers<ContextType>
  RouteGroup?: RouteGroupResolvers<ContextType>
  RouteTotals?: RouteTotalsResolvers<ContextType>
  RstData?: RstDataResolvers<ContextType>
  RstDataResult?: RstDataResultResolvers<ContextType>
  Segment?: SegmentResolvers<ContextType>
  SendgridEvent?: SendgridEventResolvers<ContextType>
  SentMessage?: SentMessageResolvers<ContextType>
  Service?: ServiceResolvers<ContextType>
  ServicesResult?: ServicesResultResolvers<ContextType>
  SetupMfaResult?: SetupMfaResultResolvers<ContextType>
  SignupsBySourceReport?: SignupsBySourceReportResolvers<ContextType>
  SignupsBySourceReportRecord?: SignupsBySourceReportRecordResolvers<ContextType>
  SimultaneousRingCallHandling?: SimultaneousRingCallHandlingResolvers<ContextType>
  SingleMessage?: SingleMessageResolvers<ContextType>
  SmsEventData?: SmsEventDataResolvers<ContextType>
  SmsTemplate?: SmsTemplateResolvers<ContextType>
  SmsTotalsResults?: SmsTotalsResultsResolvers<ContextType>
  SocialMedia?: SocialMediaResolvers<ContextType>
  Sort?: SortResolvers<ContextType>
  SssConfig?: SssConfigResolvers<ContextType>
  StringOrInt?: GraphQLScalarType
  StripeBusinessType?: StripeBusinessTypeResolvers
  SubscriberInvoice?: SubscriberInvoiceResolvers<ContextType>
  SubscriberInvoicesResult?: SubscriberInvoicesResultResolvers<ContextType>
  SubscriberMutation?: SubscriberMutationResolvers<ContextType>
  SubscriberReport?: SubscriberReportResolvers<ContextType>
  SubscribersHUD?: SubscribersHudResolvers<ContextType>
  SubscribersResult?: SubscribersResultResolvers<ContextType>
  Subscription?: SubscriptionResolvers<ContextType>
  SuspendBilling?: SuspendBillingResolvers<ContextType>
  Tag?: TagResolvers<ContextType>
  TagsReport?: TagsReportResolvers<ContextType>
  TagsReportRecord?: TagsReportRecordResolvers<ContextType>
  TagsResult?: TagsResultResolvers<ContextType>
  TakeRateByZonesReport?: TakeRateByZonesReportResolvers<ContextType>
  TakeRateByZonesReportRecord?: TakeRateByZonesReportRecordResolvers<ContextType>
  Tax?: TaxResolvers<ContextType>
  TaxReport?: TaxReportResolvers<ContextType>
  TaxReportRecord?: TaxReportRecordResolvers<ContextType>
  Tower?: TowerResolvers<ContextType>
  TowersResult?: TowersResultResolvers<ContextType>
  TwilioCall?: TwilioCallResolvers<ContextType>
  TwilioEvent?: TwilioEventResolvers<ContextType>
  TwilioMessage?: TwilioMessageResolvers<ContextType>
  Upload?: GraphQLScalarType
  UploadDataResponse?: UploadDataResponseResolvers<ContextType>
  User?: UserResolvers<ContextType>
  UserAuth?: UserAuthResolvers<ContextType>
  VerifyAddressResponse?: VerifyAddressResponseResolvers<ContextType>
  VoIPPrevalidateResponse?: VoIpPrevalidateResponseResolvers<ContextType>
  VoicemailBox?: VoicemailBoxResolvers<ContextType>
  VoidedCreditsReport?: VoidedCreditsReportResolvers<ContextType>
  VoidedCreditsReportRecord?: VoidedCreditsReportRecordResolvers<ContextType>
  Zone?: ZoneResolvers<ContextType>
  genericEventData?: GenericEventDataResolvers<ContextType>
  uploadMosaicCsvResponse?: UploadMosaicCsvResponseResolvers<ContextType>
  verifyOrgAddressResponse?: VerifyOrgAddressResponseResolvers<ContextType>
}
