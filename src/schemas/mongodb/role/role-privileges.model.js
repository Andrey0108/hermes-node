import { Schema, model } from 'mongoose'

const rolePrivilegesSchema = new Schema({
  id_role_privilege: Number,
  id_role: Number,
  id_privilege: Number
})

export const RolePrivilegesSchema = model('RolePrivileges', rolePrivilegesSchema)
