import { Schema } from 'mongoose'

export const Users = new Schema({
  id_user: Number,
  id_role: Number,
  documentType: String,
  identification: String,
  email: String,
  password: String,
  state: Boolean
})
