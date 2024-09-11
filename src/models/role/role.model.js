import { RoleSchema } from '../../schemas/mongodb/role/role.schema.js'

export class RoleModel {
  async get () {
    const data = await RoleSchema.find()
    return data
  }

  async post (obj) {
    const data = await RoleSchema.createOne(obj)
    return data
  }

  async put (id, obj) {
    const data = await RoleSchema.updateOne(id, obj)
    return data
  }

  async delete (id) {
    const data = await RoleSchema.deleteOne(id)
    return data
  }
}
