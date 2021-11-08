import { PubSub } from 'graphql-yoga'
import menu from '../models/menu'

export interface ContextType {
  Models: ModelsType
  pubsub: PubSub
}

interface ModelsType {
  Menu: typeof menu
}

export interface MenuResType {
  _id: string
  name: string
  price: number
  quantity: number
}
