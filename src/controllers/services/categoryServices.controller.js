export class categoryServicesController {
  constructor ({ categoryServicesModel }) {
    this.categoryServicesModel = categoryServicesModel
  }

  get = async (req, res) => {
    const data = await this.categoryServicesModel.get()
    res.status(200).json(data)
  }

  getById = async (req, res) => {
    const data = await this.categoryServicesModel.getById(req.params.id)
    res.status(200).json(data)
  }

  post = async (req, res) => {
    const data = await this.categoryServicesModel.post(req.body)
    res.status(201).json(data)
  }

  put = async (req, res) => {
    const data = await this.categoryServicesModel.put(req.params.id, req.body)
    res.status(200).json(data)
  }

  delete = async (req, res) => {
    const data = await this.categoryServicesModel.delete(req.params.id)
    res.status(200).json(data)
  }
}
