export default `
  type Entity {
    id: ID!
    name: String!
    description: String
    createdAt: String!
  }  

  input EntityInput {
    name: String!
    description: String
  }

  type Query {
    getEntity(id: ID!): Entity 
  }
  
  type Mutation {
    createEntity(entity: EntityInput!): Entity!
    updateEntity(id: ID! entity: EntityInput): Entity
    deleteEntity(id: ID!): Boolean!
  }
`
