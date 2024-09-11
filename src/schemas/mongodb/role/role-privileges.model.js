import { Schema, model } from 'mongoose'

const rolePrivilegesSchema = new Schema({
  id_role_privilege: { type: Number, required: true },
  id_role: { type: Number, required: true },
  id_privilege: { type: Number, required: true }
})

export const RolePrivilegesSchema = model('RolePrivileges', rolePrivilegesSchema)
