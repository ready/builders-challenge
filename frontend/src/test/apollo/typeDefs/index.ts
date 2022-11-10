import rootTypeDefs from './rootTypeDefs'
import acpTypeDefs from './acpTypeDefs'
import creditTypeDefs from './creditTypeDefs'
import serviceTypeDefs from './serviceTypeDefs'
import paymentTypeDefs from './paymentTypeDefs'

/**
 * An array of type definitions for our graphql backend. This is to be used to generate
 * a graphql schema that's used to mock our graphql api
 */
const typeDefs = [rootTypeDefs, acpTypeDefs, serviceTypeDefs, paymentTypeDefs, creditTypeDefs]

export default typeDefs
