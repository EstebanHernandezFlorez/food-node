import { EmployeesSchema } from '../../schemas/mongodb/employees/employes.schema.js'

export class EmployeesModel {
  async get () {
    const data = await EmployeesSchema.find()
    return data
  }

  async getById (id) {
    const data = await EmployeesSchema.findOne({ id })
    return data
  }

  async post (obj) {
    const data = await EmployeesSchema(obj).save()
    return data
  }

  async put (id, obj) {
    const data = await EmployeesSchema.findOneAndUpdate({ id }, obj)
    return data
  }

  async delete (id) {
    const data = await EmployeesSchema.findOneAndDelete({ id })
    return data
  }
}
