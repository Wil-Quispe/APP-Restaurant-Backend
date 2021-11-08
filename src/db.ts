import { connect } from 'mongoose'

export const connectDB = async () => {
  try {
    await connect(
      'mongodb://user1:user1@cluster0-shard-00-00.newkv.mongodb.net:27017,cluster0-shard-00-01.newkv.mongodb.net:27017,cluster0-shard-00-02.newkv.mongodb.net:27017/restaurantDB?ssl=true&replicaSet=atlas-y7grgx-shard-0&authSource=admin&retryWrites=true&w=majority',
    )
    console.log('DB connected')
  } catch (error) {
    console.log('DB connect error', error)
  }
}

connectDB()
