import { Schema, model } from 'mongoose'

const rolSchema = new Schema({
  id_rol: { type: Number, required: true },
  name: { type: String, required: true },
  state: { type: Boolean, required: true }
})

export const RolSchema = model('Role', rolSchema)
