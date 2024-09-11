import { ProvidersSchema } from '../../schemas/mongodb/provider/provider.schema.js'

export class ProviderModel {
  async get () {
    const data = await ProvidersSchema.find()
    return data
  }

  async getById (id) {
    const data = await ProvidersSchema.findOne({ id })
    return data
  }

  async post (obj) {
    const data = await ProvidersSchema(obj).save()
    return data
  }

  async put (id, obj) {
    const data = await ProvidersSchema.findOneAndUpdate({ id }, obj)
    return data
  }

  async delete (id) {
    const data = await ProvidersSchema.findOneAndDelete({ id })
    return data
  }
}
