export class ProviderController {
  constructor({ providerModel }) {
    this.providerModel = providerModel;
  }

  get = async (req, res) => {
    const data = await this.providerModel.get()
    res.status(200).json(data)
  }

  getById = async (req, res) => {
    const data = await this.providerModel.getById(req.params.id)
    res.status(200).json(data)
  }

  post = async (req, res) => {
    const data = await this.providerModel.post(req.body)
    res.status(201).json(data)
  }

  put = async (req, res) => {
    const data = await this.providerModel.put(req.params.id, req.body)
    res.status(200).json(data)
  }

  delete = async (req, res) => {
    const data = await this.providerModel.delete(req.params.id)
    res.status(200).json(data)
  }
}
