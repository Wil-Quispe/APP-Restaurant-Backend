import { ContextType } from '../../interface/common'
import { newMenuArgsType, OrderMenuArgsType } from '../../interface/mutation'

export const Mutation = {
  newMenu: async (
    parent: void,
    args: newMenuArgsType,
    context: ContextType,
  ) => {
    const { Models } = context
    const { Menu } = Models

    try {
      const newMenu = await new Menu({ ...args })
      newMenu.save()

      return true
    } catch (err) {
      console.log(err)
      return false
    }
  },

  orderMenu: async (
    parent: void,
    args: OrderMenuArgsType,
    context: ContextType,
  ) => {
    const { Models } = context
    const { Menu } = Models
    const { menuId } = args

    try {
      await Menu.findByIdAndUpdate({ _id: menuId }, { $inc: { quantity: -1 } })

      return true
    } catch (err) {
      console.log(err)
      return false
    }
  },
}
