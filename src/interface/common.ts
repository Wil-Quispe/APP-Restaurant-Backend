import { PubSub } from 'graphql-yoga'

export interface ContextType {
  Models: ModelsType
  pubsub: PubSub
}

interface ModelsType {
  Menu: any
}
