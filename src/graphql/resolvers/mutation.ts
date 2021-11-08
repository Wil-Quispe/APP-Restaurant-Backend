import { ContextType } from '../../interface/common'
import {
  newMenuArgsType,
  OrderMenuArgsType,
  UpdateMenuArgsType,
} from '../../interface/mutation'

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

  updateMenu: async (
    parent: void,
    args: UpdateMenuArgsType,
    context: ContextType,
  ) => {
    const { Models } = context
    const { Menu } = Models
    const { menuId, ...rest } = args

    try {
      const res = await Menu.findByIdAndUpdate(
        { _id: menuId },
        { ...rest },
        { new: true },
      )
      console.log(res)

      return true
    } catch (err) {
      console.log(err)
      return false
    }
  },
}
