import { Schema, model } from 'mongoose'

const privilegesSchema = new Schema({
  id_privilege: Number,
  name: String,
  id_permission: Number
})

export const PrivilegesSchema = model('Privileges', privilegesSchema)
