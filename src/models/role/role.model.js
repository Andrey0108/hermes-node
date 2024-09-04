import { roleSchema } from '../../schemas/mongodb/role/role.model.js'

export class RoleModel {
  async get () {
    const data = await roleSchema.find().pretty()
    return data
  }

  async post (obj) {
    const data = await roleSchema.createOne(obj)
    return data
  }

  async put (id, obj) {
    const data = await roleSchema.updateOne(id, obj)
    return data
  }

  async delete (id) {
    const data = await roleSchema.deleteOne(id)
    return data
  }
}
