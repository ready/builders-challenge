/**
 * Credit type definitions
 */
export default `
  type Credit {
    id: ID!
    amount: Float!
    note: String
    organization: Organization
    userId: ID
    user: User
    createdAt: Date!
    redeemed: Boolean
    voided: Boolean
    "Top level reason code"
    reasonCode: ReasonCode
    "Sub reason code"
    subReasonCode: ReasonCode
  }

  input CreateCreditInput {
    userId: ID
    amount: Float!
    note: String
    organizationId: ID
    reasonCodeId: ID
    subReasonCodeId: ID
  }

  type CreditsResult {
    total: Int!
    results: [Credit]!
    ids: [ID]
    pageInfo: PageInfo
  }
`
