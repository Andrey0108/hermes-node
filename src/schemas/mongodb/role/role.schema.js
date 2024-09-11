import { Schema, model } from 'mongoose'

const roleSchema = new Schema({
  id_rol: { type: Number, required: true },
  name: { type: String, required: true },
  state: { type: Boolean, required: true }
})

export const RoleSchema = model('Role', roleSchema)
