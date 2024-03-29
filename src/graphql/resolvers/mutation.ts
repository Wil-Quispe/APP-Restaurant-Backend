import { ContextType, MenuResType } from '../../interface/common'
import {
  DeleteMenuArgsType,
  LoginArgsType,
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
      return {
        signUp: true,
        token: newUser._id,
      }
    } catch (err) {
      return false
    }
  },

  logIn: async (parent: void, args: LoginArgsType, context: ContextType) => {
    const { Models } = context
    const { User } = Models
    const { email, password } = args

    const admin = {
      email: 'admin-boss.com',
      password: 'adminBOSS',
    }

    try {
      if (email === admin.email) {
        if (password === admin.password)
          return {
            logIn: '100',
            token: '61e35b063199aa976ec1f009',
          }
        return '00'
      }

      const emailExist = await User.findOne({ email })
      if (!emailExist) return '0'
      if (password !== emailExist.password) return '0'

      return {
        logIn: '1',
        token: emailExist._id,
      }
    } catch (err) {
      console.log(err)
      return '-1'
    }
  },
}
