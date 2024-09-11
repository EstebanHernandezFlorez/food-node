import { UserSchema } from '../../schemas/mongodb/user/user.schema.js'

export class userModel {
  async get () {
    const data = await UserSchema.find()
    return data
  }

  async getById (id) {
    const data = await UserSchema.findOne({ id })
    return data
  }

  async post (obj) {
    const data = await UserSchema(obj).save()
    return data
  }

  async put (id, obj) {
    const data = await UserSchema.findOneAndUpdate({ id }, obj)
    return data
  }

  async delete (id) {
    const data = await UserSchema.findOneAndDelete({ id })
    return data
  }
}
