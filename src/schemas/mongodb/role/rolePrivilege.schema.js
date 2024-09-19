import { Schema, model } from 'mongoose'

const rolePrivilegeSchema = new Schema({
  idRole_privilege: { type: Number, required: true },
  idRole: { type: Number, required: true },
  id_privilege: { type: Number, required: true }
})

export const RolePrivilegesSchema = model('RolePrivileges', rolePrivilegeSchema)
