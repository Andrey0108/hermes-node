export class PackagesController {
  constructor ({ packagesModel }) {
    this.packagesModel = packagesModel
  }

  get = async (req, res) => {
    const data = await this.packagesModel.get()
    res.status(200).json(data)
  }

  getById = async (req, res) => {
    const data = await this.packagesModel.getById(req.params.id)
    res.status(200).json(data)
  }

  post = async (req, res) => {
    const data = await this.packagesModel.post(req.body)
    res.status(201).json(data)
  }

  patch = async (req, res) => {
    const data = await this.packagesModel.patch(req.params.id, req.body)
    res.status(200).json(data)
  }

  delete = async (req, res) => {
    const data = await this.packagesModel.delete(req.params.id)
    res.status(200).json(data)
  }
}
