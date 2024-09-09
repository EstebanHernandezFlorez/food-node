export class ReserveCompanionsController {
  constructor ({ reserveCompanionsModel }) {
    this.reserveCompanionsModel = reserveCompanionsModel
  }

  get = async (req, res) => {
    const data = await this.reserveCompanionsModel.get()
    res.status(200).json(data)
  }

  getById = async (req, res) => {
    const data = await this.reserveCompanionsModel.getById(req.params.id)
    res.status(200).json(data)
  }

  post = async (req, res) => {
    const data = await this.reserveCompanionsModel.post(req.body)
    res.status(201).json(data)
  }

  put = async (req, res) => {
    const data = await this.reserveCompanionsModel.put(req.params.id, req.body)
    res.status(200).json(data)
  }

  delete = async (req, res) => {
    const data = await this.reserveCompanionsModel.delete(req.params.id)
    res.status(200).json(data)
  }
}
