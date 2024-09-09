import { PaysSchema } from '../../schemas/mongodb/pays/pays.schema.js'

export class PaysModel {
  async get () {
    const data = await PaysSchema.find()
    return data
  }

  async getById (id) {
    const data = await PaysSchema.findOne({ id })
    return data
  }

  async post (obj) {
    const data = await PaysSchema(obj).save()
    return data
  }

  async put (id, obj) {
    const data = await PaysSchema.findOneAndUpdate({ id }, obj)
    return data
  }

  async delete (id) {
    const data = await PaysSchema.findOneAndDelete({ id })
    return data
  }
}
