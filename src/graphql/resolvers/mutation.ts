import { ContextType } from '../../interface/common'
import { newMenuArgsType } from '../../interface/mutation'

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
}
