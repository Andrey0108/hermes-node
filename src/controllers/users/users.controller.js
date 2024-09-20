export class UsersController {
  constructor ({ usersModel }) {
    this.usersModel = usersModel
  }

  getAll = async (req, res) => {
    const data = await this.usersModel.getAll()
    res.status(200).json(data)
  }

  getById = async (req, res) => {
    const data = await this.usersModel.getById(req.params.id)
    res.status(200).json(data)
  }

  post = async (req, res) => {
    const data = await this.usersModel.post(req.body)
    res.status(201).json(data)
  }

  patch = async (req, res) => {
    const data = await this.usersModel.patch(req.params.id, req.body)
    res.status(200).json(data)
  }

  delete = async (req, res) => {
    const data = await this.usersModel.delete(req.params.id)
    res.status(200).json(data)
  }
}
