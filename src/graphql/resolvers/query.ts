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
}
