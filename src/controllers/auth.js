export class AuthController {
  constructor ({ authModel }) {
    this.authModel = authModel
  }

  get = async (req, res) => {
    const data = await this.authModel.get()
    res.status(200).json(data)
  }

  post = async (req, res) => {
    const data = await this.authModel.post(req.body)
    res.status(201).json(data)
  }

  put = async (req, res) => {
    const data = await this.authModel.put(req.params.id, req.body)
    res.status(200).json(data)
  }

  delete = async (req, res) => {
    const data = await this.authModel.delete(req.params.id)
    res.status(200).json(data)
  }
}
