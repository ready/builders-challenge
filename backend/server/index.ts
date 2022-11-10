import { createServer } from 'http'
import { createYoga } from 'graphql-yoga'

import buildSchema from './utils/buildSchema'

async function main () {
  try {
    const PORT = 4000

    const schema = await buildSchema()

    const yoga = createYoga({ schema })

    const server = createServer(yoga)

    server.listen(PORT, () => {
      console.info('Server is running on http://localhost:4000/graphql')
    })
  } catch (error) {
    console.error('Error starting server', error)
  }
}

main()
