import { CompanionsSchema } from '../../schemas/mongodb/reservations/companions.schema.js'

export class CompanionsModel {
  async get () {
    const data = await CompanionsSchema.find()
    return data
  }

  async getById (id) {
    const data = await CompanionsSchema.findOne({ id })
    return data
  }

  async post (obj) {
    const data = await CompanionsSchema(obj).save()
    return data
  }

  async put (id, obj) {
    const data = await CompanionsSchema.findOneAndUpdate({ id }, obj)
    return data
  }

  async delete (id) {
    const data = await CompanionsSchema.findOneAndDelete({ id })
    return data
  }
}
