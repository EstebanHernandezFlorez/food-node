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

  async put(id, obj) {
    const data = await EmployeeSchema.findOneAndUpdate({ id }, obj);
    return data;
  }

  async delete(id) {
    const data = await EmployeeSchema.findOneAndDelete({ id });
    return data;
  }
}
