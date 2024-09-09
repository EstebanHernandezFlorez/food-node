import { ReservationsSchema } from '../../schemas/mongodb/reservations/reservations.schema.js'

export class ReservationsModel {
  async get () {
    const data = await ReservationsSchema.find()
    return data
  }

  async getById (id) {
    const data = await ReservationsSchema.findOne({ id })
    return data
  }

  async post (obj) {
    const data = await ReservationsSchema(obj).save()
    return data
  }

  async put (id, obj) {
    const data = await ReservationsSchema.findOneAndUpdate({ id }, obj)
    return data
  }

  async delete (id) {
    const data = await ReservationsSchema.findOneAndDelete({ id })
    return data
  }
}
