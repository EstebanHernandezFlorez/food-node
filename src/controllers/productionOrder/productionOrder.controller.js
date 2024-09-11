export class ProductionOrderController {
  constructor ({ productionOrderModel }) {
    this.productionOrderModel = productionOrderModel
  }

  get = async (req, res) => {
    const data = await this.productionOrderModel.get()
    res.status(200).json(data)
  }

  getById = async (req, res) => {
    const data = await this.productionOrderModel.getById(req.params.id)
    res.status(200).json(data)
  }

  post = async (req, res) => {
    const data = await this.productionOrderModel.post(req.body)
    res.status(201).json(data)
  }

  put = async (req, res) => {
    const data = await this.productionOrderModel.put(req.params.id, req.body)
    res.status(200).json(data)
  }

  delete = async (req, res) => {
    const data = await this.productionOrderModel.delete(req.params.id)
    res.status(200).json(data)
  }
}
