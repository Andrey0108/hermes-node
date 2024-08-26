import { Schema } from 'mongoose'

export const permissionsSchema = Schema({
  id_permission: String,
  name: String,
  state: String
})
