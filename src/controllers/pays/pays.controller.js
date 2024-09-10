export class PaysController {
  constructor ({ paysModel }) {
    this.paysModel = paysModel
  }

  get = async (req, res) => {
    const data = await this.paysModel.get()
    res.status(200).json(data)
  }

  getById = async (req, res) => {
    const data = await this.paysModel.getById(req.params.id)
    res.status(200).json(data)
  }

  post = async (req, res) => {
    const data = await this.paysModel.post(req.body)
    res.status(201).json(data)
  }

  patch = async (req, res) => {
    const data = await this.paysModel.patch(req.params.id, req.body)
    res.status(200).json(data)
  }

  delete = async (req, res) => {
    const data = await this.paysModel.delete(req.params.id)
    res.status(200).json(data)
  }
}
