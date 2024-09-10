import { Schema, model } from 'mongoose'

const permissionsSchema = new Schema({
  id_permission: { type: Number, required: true },
  name: { type: String, required: true },
  state: { type: Boolean, default: true }
})

export const PermissionsSchema = model('Permissions', permissionsSchema)
