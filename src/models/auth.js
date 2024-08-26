import { userSchema } from '../schemas/mongodb/user'

export class AuthModel {

  async get () {
    const data = await userSchema.find().pretty()
    return data
  }

  async post (obj) {
    const data = await userSchema.createOne(obj)
    return data
  }

  async put (id, obj) {
    const data = await userSchema.updateOne(id, obj)
    return data
  }

  async delete (id) {
    const data = await userSchema.deleteOne(id)
    return data
  }
}
