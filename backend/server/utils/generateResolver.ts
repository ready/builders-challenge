
interface GraphQLResolverParams {
  obj: any
  args: any
  context: any
}
type GraphQLResolver = (params: GraphQLResolverParams) => Promise<any> | any
type GeneratedResolver = (obj: any, args: any, context: any) => Promise<any> | any

/**
 * A utility to transform a written resolver into a GraphQL format
 * @param fn - the resolver to transform
 * @returns a GraphQL formatted resolver
 */
export default function generateResolver (fn: GraphQLResolver): GeneratedResolver {
  return async (obj: any, args: any, context: any): Promise<any> => {
    return await fn({ obj, args, context }) // eslint-disable-line @typescript-eslint/return-await
  }
}
