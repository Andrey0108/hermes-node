export class UsersController {
  constructor ({ usersModel }) {
    this.usersModel = usersModel
  }

  getAll = async (req, res) => {
    try {
      const data = await this.usersModel.getAll()
      res.status(200).json(data)
    } catch (error) {
      res.status(500).json({ error: 'No se pudo obtener los usuarios' })
    }
  }

  getById = async (req, res) => {
    try {
      const data = await this.usersModel.getById(req.params.id)
      res.status(200).json(data)
    } catch (error) {
      res.status(500).json({ error: 'No se pudo obtener el usuario' })
    }
  }

  post = async (req, res) => {
    try {
      const data = await this.usersModel.post(req.body)
      res.status(201).json(data)
    } catch (error) {
      res.status(400).json({ error: 'No se creo el usuario' })
    }
  }

  patch = async (req, res) => {
    try {
      const data = await this.usersModel.patch(req.params.id, req.body)
      res.status(200).json(data)
    } catch (error) {
      res.status(400).json({ error: 'No se actualizo el usuario' })
    }
  }

  delete = async (req, res) => {
    try {
      const data = await this.usersModel.delete(req.params.id)
      res.status(200).json(data)
    } catch (error) {
      res.status(500).json({ error: 'No se pudo eliminar el usuario' })
    }
  }
}
