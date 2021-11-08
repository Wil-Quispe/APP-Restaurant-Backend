import { ContextType } from '../../interface/common'
import { MenuArgsType } from '../../interface/subscription'

export const Subscription = {
  menu: {
    subscribe: (parent: void, args: MenuArgsType, context: ContextType) => {
      const { pubsub } = context
      const { menuId } = args

      return pubsub.asyncIterator(`menu-${menuId}`)
    },
  },
}
