export class DetailPackageServicesController {
  constructor ({ detailPackageServicesModel }) {
    this.detailPackageServicesModel = detailPackageServicesModel
  }

  get = async (req, res) => {
    const data = await this.detailPackageServicesModel.get()
    res.status(200).json(data)
  }

  getById = async (req, res) => {
    const data = await this.detailPackageServicesModel.getById(req.params.id)
    res.status(200).json(data)
  }

  post = async (req, res) => {
    const data = await this.detailPackageServicesModel.post(req.body)
    res.status(201).json(data)
  }

  patch = async (req, res) => {
    const data = await this.detailPackageServicesModel.patch(req.params.id, req.body)
    res.status(200).json(data)
  }

  delete = async (req, res) => {
    const data = await this.detailPackageServicesModel.delete(req.params.id)
    res.status(200).json(data)
  }
}
