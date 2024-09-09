export class ReservationsController {
  constructor ({ reservationsModel }) {
    this.reservationsModel = reservationsModel
  }

  get = async (req, res) => {
    const data = await this.reservationsModel.get()
    res.status(200).json(data)
  }

  getById = async (req, res) => {
    const data = await this.reservationsModel.getById(req.params.id)
    res.status(200).json(data)
  }

  post = async (req, res) => {
    const data = await this.reservationsModel.post(req.body)
    res.status(201).json(data)
  }

  put = async (req, res) => {
    const data = await this.reservationsModel.put(req.params.id, req.body)
    res.status(200).json(data)
  }

  delete = async (req, res) => {
    const data = await this.reservationsModel.delete(req.params.id)
    res.status(200).json(data)
  }
}
