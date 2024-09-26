import EmployeeSchema from "../../schemas/mongodb/employees/employes.schema.js";

export class EmployeesModel {
  async get() {
    const data = await EmployeeSchema.find();
    return data;
  }

  async getById(id) {
    const data = await EmployeeSchema.findOne({ id });
    return data;
  }

  async post(obj) {
    const data = await EmployeeSchema(obj).save();
    return data;
  }

  async put (_id, obj) {
    const data = await EmployeeSchema.findByIdAndUpdate(_id, obj)
    return data
  }

  async delete(_id) {
    const data = await EmployeeSchema.findOneAndDelete( _id);
    return data;
  }
}
