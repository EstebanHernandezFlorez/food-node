import ProviderShema from '../../schemas/mongodb/provider/provider.schema.js'

export class ProviderModel {
  async get () {
    const data = await ProviderShema.find()
    return data
  }

  async getById (id) {
    const data = await ProviderShema.findOne({ id })
    return data
  }

  async post (obj) {
    const data = await ProviderShema(obj).save()
    return data
  }

  async put (_id, obj) {
    const data = await ProviderShema.findByIdAndUpdate(_id, obj)
    return data
  }
  

  async delete (id) {
    const data = await ProviderShema.findOneAndDelete(id )
    return data
  }
}

