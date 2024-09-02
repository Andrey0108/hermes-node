import { usersSchema } from '../schemas/mongodb/users/users.model.js'

export class AuthModel {
  async get () {
    const data = await usersSchema.find()
    return data
  }

  async post (obj) {
    const data = await usersSchema.createOne(obj)
    return data
  }

  async put (id, obj) {
    const data = await usersSchema.updateOne(id, obj)
    return data
  }

  async delete (id) {
    const data = await usersSchema.deleteOne(id)
    return data
  }
}
