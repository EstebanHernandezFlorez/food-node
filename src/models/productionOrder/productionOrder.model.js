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

  async put (id, obj) {
    const data = await ProductionOrderSchema.findOneAndUpdate({ id }, obj)
    return data
  }

  async delete (id) {
    const data = await ProductionOrderSchema.findOneAndDelete({ id })
    return data
  }
}
