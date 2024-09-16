import { Schema, model } from 'mongoose'

export const usersSchema = new Schema({
  id_user: { type: Number, required: true, unique: true },
  id_role: { type: Number, required: true },
  documentType: { type: String, required: true },
  identification: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 6 },
  state: { type: Boolean, default: true }
})

export const UsersSchema = model('Users', usersSchema)
