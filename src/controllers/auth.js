import bcrypt from 'bcryptjs'

export class AuthController {
  constructor ({ authModel }) {
    this.authModel = authModel
  }

  login = async (req, res) => {
    const data = await this.authModel.login()
    res.json(data)
  }

  logout = async (req, res) => {
    const data = await this.authModel.logout()
    res.end(data)
  }

  register = async (req, res) => {
    const user = req.body
    try {
      user.password = await bcrypt.hash(user.password, 10)
      const data = await this.authModel.register(req.body)
      res.status(201).json(data)
    } catch (e) {
      res.status(409).json(e)
    }
  }
}
