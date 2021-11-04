import { connect } from 'mongoose'

export const connectDB = async () => {
  try {
    await connect(
      'mongodb://user1:1234@cluster0-shard-00-00.50mfm.mongodb.net:27017,cluster0-shard-00-01.50mfm.mongodb.net:27017,cluster0-shard-00-02.50mfm.mongodb.net:27017/parkingDB?ssl=true&replicaSet=atlas-142g83-shard-0&authSource=admin&retryWrites=true&w=majority',
    )
    console.log('DB connected')
  } catch (error) {
    console.log('DB connect error', error)
  }
}

connectDB()
