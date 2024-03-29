import { Schema, model } from 'mongoose'

const menuSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    img: {
      type: String,
    },
    type: {
      type: String,
      required: true,
    },
  },
  { versionKey: false },
)

export default model('Menu', menuSchema)
