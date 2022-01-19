import { PubSub } from 'graphql-yoga'
import user from '../models/user'
import menu from '../models/menu'

export interface ContextType {
  Models: ModelsType
  pubsub: PubSub
}

interface ModelsType {
  Menu: typeof menu
  User: typeof user
}

export interface MenuResType {
  _id: string
  name: string
  price: number
  quantity: number
  img: string
  type: number
}
