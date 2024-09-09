import { CustomersSchema } from '../../schemas/mongodb/reservations/customers.schema.js'

export class CustomersModel {
  async get () {
    const data = await CustomersSchema.find()
    return data
  }

  async getById (id) {
    const data = await CustomersSchema.findOne({ id })
    return data
  }

  async post (obj) {
    const data = await CustomersSchema(obj).save()
    return data
  }

  async put (id, obj) {
    const data = await CustomersSchema.findOneAndUpdate({ id }, obj)
    return data
  }

  async delete (id) {
    const data = await CustomersSchema.findOneAndDelete({ id })
    return data
  }
}
