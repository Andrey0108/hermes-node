export class ServicesController {
  constructor ({ servicesModel }) {
    this.servicesModel = servicesModel
  }

  get = async (req, res) => {
    const data = await this.servicesModel.get()
    res.status(200).json(data)
  }

  getById = async (req, res) => {
    const data = await this.servicesModel.getById(req.params.id)
    res.status(200).json(data)
  }

  post = async (req, res) => {
    const data = await this.servicesModel.post(req.body)
    res.status(201).json(data)
  }

  patch = async (req, res) => {
    const data = await this.servicesModel.patch(req.params.id, req.body)
    res.status(200).json(data)
  }

  delete = async (req, res) => {
    const data = await this.servicesModel.delete(req.params.id)
    res.status(200).json(data)
  }
}
