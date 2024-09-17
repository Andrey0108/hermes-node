import { RolePrivilegesSchema } from '../../schemas/mongodb/role/rolePrivilege.schema'

export class RolePrivilegesModel {
  async get () {
    const data = await RolePrivilegesSchema.find()
    return data
  }

  async getById (id) {
    const data = await RolePrivilegesSchema.findOne({ id })
    return data
  }

  async post (obj) {
    const data = await RolePrivilegesSchema.createOne(obj)
    return data
  }

  async put (id, obj) {
    const data = await RolePrivilegesSchema.findOneAndUpdate({ id }, obj)
    return data
  }

  async delete (id) {
    const data = await RolePrivilegesSchema.findOneAndDelete({ id })
    return data
  }
}
