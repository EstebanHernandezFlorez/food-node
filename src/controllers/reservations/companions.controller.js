export class CompanionsController {
  constructor ({ companionsModel }) {
    this.companionsModel = companionsModel
  }

  get = async (req, res) => {
    const data = await this.companionsModel.get()
    res.status(200).json(data)
  }

  getById = async (req, res) => {
    const data = await this.companionsModel.getById(req.params.id)
    res.status(200).json(data)
  }

  post = async (req, res) => {
    const data = await this.companionsModel.post(req.body)
    res.status(201).json(data)
  }

  put = async (req, res) => {
    const data = await this.companionsModel.put(req.params.id, req.body)
    res.status(200).json(data)
  }

  delete = async (req, res) => {
    const data = await this.companionsModel.delete(req.params.id)
    res.status(200).json(data)
  }
}
