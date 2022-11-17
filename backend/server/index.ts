import { createServer } from 'http'
import { createYoga } from 'graphql-yoga'
import { Knex, knex } from 'knex'

import knexConfig from './knexfile'
import buildSchema from './utils/buildSchema'

async function main () {
  try {
    const PORT = 4000

    // Create knex client
    const knexClient = knex(knexConfig)

    // GraphQL resolver context
    const context = {
      knex: knexClient
    }

    // Combine schemas and resolvers
    const schema = await buildSchema()

    // Server configuration
    const yoga = createYoga({ 
      schema,  
      context // Set resolver context
    })

    // Create server
    const server = createServer(yoga)

    // Start server 
    server.listen(PORT, () => {
      console.info('Server is running on http://localhost:4000/graphql')
    })
  } catch (error) {
    console.error('Error starting server', error)
  }
}

main()
