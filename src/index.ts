import { GraphQLServer } from 'graphql-yoga'
import { schema } from './graphql/index'
import './db'

const options = {
  playground: '/graphql',
  subscriptions: '/subscriptions',
  port: process.env.PORT || 5000,
}

const server = new GraphQLServer({ schema })
server.start(options, () => console.log('Server is running on localhost:5000'))
