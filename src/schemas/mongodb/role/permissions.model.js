import { Schema, model } from 'mongoose'

const permissionsSchema = new Schema({
  id_permission: Number,
  name: String,
  state: Boolean
})

export const PermissionsSchema = model('Permissions', permissionsSchema)
