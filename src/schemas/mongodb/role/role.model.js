import { Schema, model } from 'mongoose'

const roleSchema = new Schema({
  id_role: Number,
  name: String,
  state: Boolean
})

export const RoleSchema = model('Role', roleSchema)
