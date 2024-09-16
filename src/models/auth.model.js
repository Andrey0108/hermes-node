import bcryptjs from 'bcryptjs'
import { UsersSchema } from '../schemas/mongodb/users/users.model.js'
import { SALT_ROUNDS } from '../config.js'

export class AuthModel {
  async login (authLogin) {
    const data = await UsersSchema.findOne({ email: authLogin.email })
    if (!data) throw new Error('User not found')

    const isValid = await bcryptjs.compare(authLogin.password, data.password)
    if (!isValid) throw new Error('Invalid password')

    return {
      id_role: data.id_role,
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
