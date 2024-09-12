import { PrivilegesSchema } from '../../schemas/mongodb/role/privileges.schema'

export class PrivilegesModel {
  async get () {
    const data = await PrivilegesSchema.find()
    return data
  }

  async getById (id) {
    const data = await PrivilegesSchema.findOne({ id })
    return data
  }

  async post (obj) {
    const data = await PrivilegesSchema.createOne(obj)
    return data
  }

  async put (id, obj) {
    const data = await PrivilegesSchema.findOneAndUpdate({ id }, obj)
    return data
  }

  async delete (id) {
    const data = await PrivilegesSchema.findOneAndDelete({ id })
    return data
  }
}
