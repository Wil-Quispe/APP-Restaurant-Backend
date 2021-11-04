import { makeExecutableSchema } from '@graphql-tools/schema'
import 'graphql-import-node'
import Query from './schemas/query.gql'
import Mutation from './schemas/mutation.gql'
import resolvers from './resolvers/index'

export const schema = makeExecutableSchema({
  typeDefs: [Query, Mutation],
  resolvers,
})
