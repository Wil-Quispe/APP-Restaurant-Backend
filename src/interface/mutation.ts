export interface newMenuArgsType {
  name: string
  price: number
  quantity: number
  img: string
  type: number
}

export interface OrderMenuArgsType {
  menuId: string
}

export interface UpdateMenuArgsType {
  menuId: string
  name: string
  price: number
  quantity: number
  img: string
  type: number
}

export interface DeleteMenuArgsType {
  menuId: string
}

export interface SignUpArgsType {
  name: string
  email: string
  password: string
}
