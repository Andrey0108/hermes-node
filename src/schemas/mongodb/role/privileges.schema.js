import { Schema, model } from 'mongoose'

const privilegesSchema = new Schema({
  id_privilege: { type: Number, required: true },
  name: { type: String, required: true },
  state: { type: Boolean, required: true }
})

export const PrivilegesSchema = model('Privileges', privilegesSchema)
