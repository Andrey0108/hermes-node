export class RoleController {
  constructor ({ roleModel }) {
    this.roleModel = roleModel
  }

  get = async (req, res) => {
    try {
      const data = await this.roleModel.get()
      res.status(200).json(data)
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' })
    }
  }

  post = async (req, res) => {
    try {
      const { name, permissions } = req.body
      if (!name || !permissions) {
        return res.status(400).json({ error: 'Name and permissions are required' })
      }
      const data = await this.roleModel.post({ name, permissions })
      res.status(201).json(data)
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' })
    }
  }

  put = async (req, res) => {
    try {
      const { id } = req.params
      const { name, permissions } = req.body
      if (!id || (!name && !permissions)) {
        return res.status(400).json({ error: 'ID and at least one field to update are required' })
      }
      const data = await this.roleModel.put(id, { name, permissions })
      if (!data) {
        return res.status(404).json({ error: 'Role not found' })
      }
      res.status(200).json(data)
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' })
    }
  }

  delete = async (req, res) => {
    try {
      const { id } = req.params
      if (!id) {
        return res.status(400).json({ error: 'ID is required' })
      }
      const data = await this.roleModel.delete(id)
      if (!data) {
        return res.status(404).json({ error: 'Role not found' })
      }
      res.status(200).json({ message: 'Role deleted successfully' })
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' })
    }
  }
}
