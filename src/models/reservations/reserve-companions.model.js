import { ReserveCompanionsSchema } from '../../schemas/mongodb/reservations/reserve-companions.schema.js'

export class ReserveCompanionsModel {
  async get () {
    const data = await ReserveCompanionsSchema.find()
    return data
  }

  async getById (id) {
    const data = await ReserveCompanionsSchema.findOne({ id })
    return data
  }

  async post (obj) {
    const data = await ReserveCompanionsSchema(obj).save()
    return data
  }

  async put (id, obj) {
    const data = await ReserveCompanionsSchema.findOneAndUpdate({ id }, obj)
    return data
  }

  async delete (id) {
    const data = await ReserveCompanionsSchema.findOneAndDelete({ id })
    return data
  }
}
