import { RoleSchema } from '../../schemas/mongodb/role/role.schema'

export class RoleModel {
  async get () {
    const data = await RoleSchema.find()
    return data
  }

  async getById (id) {
    const data = await RoleSchema.findOne({ id })
    return data
  }

  async post (obj) {
    const data = await RoleSchema.createOne(obj)
    return data
  }

  async put (id, obj) {
    const data = await RoleSchema.findOneAndUpdate({ id }, obj)
    return data
  }

  async delete (id) {
    const data = await RoleSchema.findOneAndDelete({ id })
    return data
  }
}
