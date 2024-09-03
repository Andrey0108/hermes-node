import UsersSchema from '../schemas/mongodb/users/users.model.js'

export class AuthModel {
  async login (email, password) {
    const emailData = await UsersSchema.findOne({ email })
    if (!emailData) {
      return 'Email or Password not found'
    } else {
      return 'Logged'
    }
  }
}
