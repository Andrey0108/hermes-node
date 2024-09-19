import bcryptjs from 'bcryptjs'
import { UsersSchema } from '../schemas/mongodb/users/users.model.js'

const SALT_ROUNDS = 10

export class AuthModel {
  async login (authLogin) {
    const data = await UsersSchema.findOne({ email: authLogin.email })
    if (!data) throw new Error('User not found')

    const isValid = await bcryptjs.compare(authLogin.password, data.password)
    if (!isValid) throw new Error('Invalid password')

    return {
      idUser: data.idUser,
      idRole: data.idRole,
      identification: data.identification,
      email: data.email
    }
  }

  async register (authRegister) {
    const hashedPassword = await bcryptjs.hash(
      authRegister.password,
      SALT_ROUNDS
    )
    authRegister.password = hashedPassword

    const data = await UsersSchema(authRegister).save()
    return data
  }
}
