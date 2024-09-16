export class AuthController {
  constructor ({ authModel }) {
    this.authModel = authModel
  }

  login = async (req, res) => {
    const data = await this.authModel.post(req.body)
    res.status(201).json(data)
  }

  register = async (req, res) => {
    const data = await this.authModel.register(req.body)
    res.status(200).json(data)
  }
}
