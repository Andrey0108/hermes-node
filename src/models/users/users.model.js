import bcryptjs from 'bcryptjs'
import { UsersSchema } from '../../schemas/mongodb/users/users.model.js'

const SALT_ROUNDS = 10
export class UsersModel {
  async getAll () {
    const data = await UsersSchema.find()
    return data
  }

  async getById (idUser) {
    const data = await UsersSchema.findOne({ idUser })

    return {
      idUser: data.idUser,
      idRole: data.idRole,
      documentType: data.documentType,
      identification: data.identification,
      email: data.email
    }
  }

  async post (obj) {
    const hashedPassword = await bcryptjs.hash(obj.password, SALT_ROUNDS)
    obj.password = hashedPassword
    const data = await UsersSchema(obj).save()
    return data
  }

  async patch (idUser, obj) {
    if (obj.password) {
      const hashedPassword = await bcryptjs.hash(obj.password, SALT_ROUNDS)
      obj.password = hashedPassword
    }

    const data = await UsersSchema.findOneAndUpdate({ idUser }, obj)
    return data
  }

  async delete (idUser) {
    const data = await UsersSchema.findOneAndDelete({ idUser })
    return data
  }
}
