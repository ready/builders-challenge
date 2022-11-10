import fs from 'fs'
import path from 'path'
import { makeExecutableSchema } from '@graphql-tools/schema'
import { stitchSchemas } from '@graphql-tools/stitch'

export default async function buildSchema () {
  try {
    const entitiesPath = path.join(__dirname, '../entities')
    const entityDirs = await fs.promises.readdir(entitiesPath)

    const subschemas = []

    for (const entityDirname of entityDirs) {
      const typeDefsPath = path.join(entitiesPath, entityDirname, 'typeDefs.js')
      const resolversPath = path.join(entitiesPath, entityDirname, 'resolvers.js')
    
      const typeDefs = await import(typeDefsPath)
      const resolvers = await import(resolversPath)

      subschemas.push({ 
        schema: makeExecutableSchema({ 
          typeDefs: typeDefs.default.default, 
          resolvers: resolvers.default.default 
        })
      })
    }

    return stitchSchemas({ subschemas })
  } catch (error) {
    console.error('Error building schemas', error)
  }
}

