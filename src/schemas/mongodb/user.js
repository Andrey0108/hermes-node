import { Schema } from 'mongoose'

export const userSchema = Schema({
  id_user: String,
  id_role: String,
  email: String,
  password: String,
  state: String
})
