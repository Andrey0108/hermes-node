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
    const data = await this.authModel.register()
    res.end(data)
  }
}
