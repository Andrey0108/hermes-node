export class ProgramationPackagesController {
  constructor ({ programationPackagesModel }) {
    this.programationPackagesModel = programationPackagesModel
  }

  get = async (req, res) => {
    const data = await this.programationPackagesModel.get()
    res.status(200).json(data)
  }

  getById = async (req, res) => {
    const data = await this.programationPackagesModel.getById(req.params.id)
    res.status(200).json(data)
  }

  post = async (req, res) => {
    const data = await this.programationPackagesModel.post(req.body)
    res.status(201).json(data)
  }

  patch = async (req, res) => {
    const data = await this.programationPackagesModel.patch(req.params.id, req.body)
    res.status(200).json(data)
  }

  delete = async (req, res) => {
    const data = await this.programationPackagesModel.delete(req.params.id)
    res.status(200).json(data)
  }
}
