/**
 * Service type definitions
 */
export default `
"""
 A Service is a product offered by an Organization

 Examples include:
  name: Velocity Pro 15Mb/3Mb, type: internet
  name: Residential VoIP, type: phone
"""
    type Service {
      id: ID
      name: String
      type: ServiceType
      connectionType: String
      uploadSpeed: String
      downloadSpeed: String
      bandwidthCap: String
      createdAt: Date
      active: Boolean
      price: Float
      provisioningId: String
      smtp: Boolean
      taxes: [Tax]
      avalaraSalesType: Int
      avalaraKeyPairs: [AvalaraKeyPairs]
      organizations: [Organization]!
    }

    input CreateServiceInput {
      name: String!
      type: ServiceType!
      organizationIds: [ID]!
      connectionType: ConnectionType
      uploadSpeed: String
      downloadSpeed: String
      bandwidthCap: String
      active: Boolean
      price: Float!
      provisioningId: String
      smtp: Boolean
      avalaraSalesType: Int
      avalaraTransactionType: Int
      avalaraServiceType: Int
    }

    input UpdateServiceInput {
      name: String!
      type: ServiceType!
      organizationIds: [ID]!
      connectionType: ConnectionType
      uploadSpeed: String
      downloadSpeed: String
      bandwidthCap: String
      active: Boolean
      price: Float!
      provisioningId: String
      smtp: Boolean
      taxes: [TaxInput]
      avalaraSalesType: Int
      avalaraTransactionType: Int
      avalaraServiceType: Int
    }

    type ServicesResult {
      results: [Service]!
      ids: [ID]
      pageInfo: PageInfo
    }

    """
    Service Type enum
    """
    enum ServiceType {
      "An internet related service"
      internet
      "VoIP and other phone services"
      phone
      "A telehealth service"
      telehealth
      "Service with no specific type"
      other
    }

    """
    Connection Types for internet service
    """
    enum ConnectionType {
      WIRELESS
      FIBER
      DSL
      CABLE
      SATELLITE
      PPPOE
      LTE
      BROADBAND
      WIMAX
      HYBRID
    }
`
