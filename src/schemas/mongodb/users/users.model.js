import { Schema, model } from 'mongoose'

export const usersSchema = new Schema({
  id_user: Number,
  id_role: Number,
  documentType: String,
  identification: String,
  email: String,
  password: String,
  state: Boolean
})

export const UsersSchema = model('Users', usersSchema)
