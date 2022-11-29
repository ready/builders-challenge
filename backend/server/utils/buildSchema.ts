import fs from 'fs'
import path from 'path'
import { makeExecutableSchema } from '@graphql-tools/schema'
import { stitchSchemas } from '@graphql-tools/stitch'
import type { GraphQLSchema } from 'graphql'

/**
 * Dynamically imports all resolvers and typeDefs files from under
 * the server/entities directory
 * @returns the built GraphQL schemas for all resolvers
 */
export default async function buildSchema (): Promise<GraphQLSchema | undefined> {
  try {
    const entitiesPath = path.join(__dirname, './server/entities')
    const entityDirs = await fs.promises.readdir(entitiesPath)

    const subschemas = []

    for (const entityDirname of entityDirs) {
      if (entityDirname === '.DS_Store') continue

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
    return undefined
  }
}
