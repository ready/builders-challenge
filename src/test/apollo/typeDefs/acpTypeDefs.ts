/**
 * ACP type definitions
 */
export default `
input AcpApplication {
  identificationNumber: String!
  identificationType: IdentificationType!
  eligibilityProgramCode: String!
  consentId: Boolean!
  dob: Date!
  isBqp: Boolean!
  bqp: BenefitQualifyingPerson
}

input BenefitQualifyingPerson {
  bqpFirstName: String!
  bqpLastName: String!
  bqpDob: Date!
  bqpIdentificationNumber: String!
  bqpIdentificationType: String!
}

enum IdentificationType {
  SSN
  TRIBAL_ID
}

type AcpConfig {
  authenticationToken: String
  sacs: [SAC!]
}

enum AcpStatus {
  NONE
  UNVERIFIED
  PENDING
  REJECTED
  ACCEPTED
}

type SAC {
  state: String
  code: String
}

type AcpApplicationResponse {
  redirectLink: String!
  errors: [String]!
}
`
