import { PermissionsSchema } from '../../schemas/mongodb/role/permissions.schema'

export class PermissionsModel {
  async get () {
    const data = await PermissionsSchema.find()
    return data
  }

  async getById (id) {
    const data = await PermissionsSchema.findOne({ id })
    return data
  }

  async post (obj) {
    const data = await PermissionsSchema.createOne(obj)
    return data
  }

  async put (id, obj) {
    const data = await PermissionsSchema.findOneAndUpdate({ id }, obj)
    return data
  }

  async delete (id) {
    const data = await PermissionsSchema.findOneAndDelete({ id })
    return data
  }
}
