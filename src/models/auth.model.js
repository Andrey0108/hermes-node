import { UsersSchema } from '../schemas/mongodb/users/users.model.js'
import { encrypt, compare } from '../helpers/handleBcrypt.js'
import { tokenSign } from '../helpers/generateJWT.js'

export class AuthModel {
  async login (authLogin) {
    const { email, password } = authLogin
    await UsersSchema.findOne({ email })
      .then(async (user) => {
        if (!user) return null
        const checkPassword = compare(password, user.password)
        const tokenSession = await tokenSign(user)
      })
      .catch((err) => {
        return err
      })
  }

  async register (authRegister) {
    authRegister.password = encrypt(authRegister.password)
    const data = await UsersSchema(authRegister).save()
    return data
  }
}
