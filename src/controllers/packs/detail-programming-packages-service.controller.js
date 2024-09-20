export class DetailProgrammingPackagesServiceController {
  constructor ({ detailProgrammingPackagesServiceModel }) {
    this.detailProgrammingPackagesServiceModel = detailProgrammingPackagesServiceModel
  }

  get = async (req, res) => {
    const data = await this.detailProgrammingPackagesServiceModel.get()
    res.status(200).json(data)
  }

  getById = async (req, res) => {
    const data = await this.detailProgrammingPackagesServiceModel.getById(req.params.id)
    res.status(200).json(data)
  }

  post = async (req, res) => {
    const data = await this.detailProgrammingPackagesServiceModel.post(req.body)
    res.status(201).json(data)
  }

  patch = async (req, res) => {
    const data = await this.detailProgrammingPackagesServiceModel.patch(req.params.id, req.body)
    res.status(200).json(data)
  }

  delete = async (req, res) => {
    const data = await this.detailProgrammingPackagesServiceModel.delete(req.params.id)
    res.status(200).json(data)
  }
}
