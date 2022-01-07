import { ContextType, MenuResType } from '../../interface/common'
import {
  DeleteMenuArgsType,
  newMenuArgsType,
  OrderMenuArgsType,
  SignUpArgsType,
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
    const { Models, pubsub } = context
    const { Menu } = Models
    const { menuId } = args

    try {
      const res: MenuResType = await Menu.findByIdAndUpdate(
        { _id: menuId },
        { $inc: { quantity: -1 } },
        { new: true },
      )

      pubsub.publish(`menu-${menuId}`, {
        menu: res.quantity,
      })

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
      await Menu.findByIdAndUpdate({ _id: menuId }, { ...rest })
      return true
    } catch (err) {
      console.log(err)
      return false
    }
  },

  deleteMenu: async (
    parent: void,
    args: DeleteMenuArgsType,
    context: ContextType,
  ) => {
    const { Models } = context
    const { Menu } = Models
    const { menuId } = args

    try {
      await Menu.deleteOne({ _id: menuId })
      return true
    } catch (err) {
      console.log(err)
      return false
    }
  },

  signUp: async (parent: void, args: SignUpArgsType, context: ContextType) => {
    const { Models } = context
    const { User } = Models
    try {
      const newUser = await User.create({ ...args })
      newUser.save()
      return true
    } catch (err) {
      console.log(err)
      return false
    }
  },
}
