export class DetailProgrammingPackageController {
  constructor ({ detailProgrammingPackageModel }) {
    this.detailProgrammingPackageModel = detailProgrammingPackageModel
  }

  get = async (req, res) => {
    const data = await this.detailProgrammingPackageModel.get()
    res.status(200).json(data)
  }

  getById = async (req, res) => {
    const data = await this.detailProgrammingPackageModel.getById(req.params.id)
    res.status(200).json(data)
  }

  post = async (req, res) => {
    const data = await this.detailProgrammingPackageModel.post(req.body)
    res.status(201).json(data)
  }

  patch = async (req, res) => {
    const data = await this.detailProgrammingPackageModel.patch(req.params.id, req.body)
    res.status(200).json(data)
  }

  delete = async (req, res) => {
    const data = await this.detailProgrammingPackageModel.delete(req.params.id)
    res.status(200).json(data)
  }
}
