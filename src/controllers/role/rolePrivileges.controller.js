export class RolePrivilegesController {
  constructor ({ rolePrivilegesModel }) {
    this.rolePrivilegesModel = rolePrivilegesModel
  }

  get = async (req, res) => {
    const data = await this.rolePrivilegesModel.get()
    res.status(200).json(data)
  }

  getById = async (req, res) => {
    const data = await this.rolePrivilegesModel.getById(req.params.id)
    res.status(200).json(data)
  }

  post = async (req, res) => {
    const data = await this.rolePrivilegesModel.post(req.body)
    res.status(201).json(data)
  }

  patch = async (req, res) => {
    const data = await this.rolePrivilegesModel.patch(req.params.id, req.body)
    res.status(200).json(data)
  }

  delete = async (req, res) => {
    const data = await this.rolePrivilegesModel.delete(req.params.id)
    res.status(200).json(data)
  }
}
