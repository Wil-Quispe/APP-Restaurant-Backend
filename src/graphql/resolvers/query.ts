import { ContextType } from '../../interface/common'

export const Query = {
  allMenu: async (parent: void, args: void, context: ContextType) => {
    const { Models } = context
    const { Menu } = Models

    try {
      return await Menu.find({})
    } catch (err) {
      console.log(err)
      return []
    }
  },

  typeMenu: async (
    parent: void,
    { type }: { type: string },
    context: ContextType,
  ) => {
    const { Models } = context
    const { Menu } = Models
    try {
      return Menu.find({ type })
    } catch (err) {
      return []
    }
  },

  user: async (parent: void, args: { _id: string }, context: ContextType) => {
    const { Models } = context
    const { User } = Models
    const { _id } = args

    try {
      return await User.findById(_id)
    } catch (err) {
      return false
    }
  },
}
