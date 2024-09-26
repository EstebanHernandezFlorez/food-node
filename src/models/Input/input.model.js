import { InputSchema } from '../../schemas/mongodb/input/input.schema.js'
import { ObjectId } from 'mongodb'

export class InputModel {
  async get () {
    const data = await InputSchema.find()
    return data
  }

  async getById (id) {
    const data = await InputSchema.findOne({ id })
    return data
  }

  async post (obj) {
    const data = await InputSchema(obj).save()
    return data
  }

  async put (_id, obj) {
    const data = await InputSchema.findByIdAndUpdate(_id, obj)
    return data
  }

  async delete (_id) {
    const data = await InputSchema.findByIdAndDelete(_id)
    return data
  }
}
