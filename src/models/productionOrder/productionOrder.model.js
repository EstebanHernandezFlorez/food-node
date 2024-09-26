import { ProductionOrderSchema } from '../../schemas/mongodb/productionOrder/productionOrder.schema.js'

export class ProductionOrderModel {
  async get () {
    const data = await ProductionOrderSchema.find()
    return data
  }

  async getById (id) {
    const data = await ProductionOrderSchema.findOne({ id })
    return data
  }

  async post (obj) {
    const data = await ProductionOrderSchema(obj).save()
    return data
  }

  async put (_id, obj) {
    const data = await ProductionOrderSchema.findOneAndUpdate(_id, obj)
    return data
  }

  async delete (_id) {
    const data = await ProductionOrderSchema.findOneAndDelete(_id)
    return data
  }
}
