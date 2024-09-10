import mongoose from 'mongoose'
import { MONGO_CNN } from '../config.js'

export const dbConnection = async () => {
  try {
    await mongoose.connect(MONGO_CNN)
  } catch (error) {
    console.log(error)
  }
}
