import ListExpensesSchema from "../../schemas/mongodb/labor/listExpenses.schema.js";

export class ListExpensesModel {
  async get() {
    const data = await ListExpensesSchema.find();
    return data;
  }

  async getById(id) {
    const data = await ListExpensesSchema.findOne({ _id: id }); // Changed to use _id
    return data;
  }

  async post(obj) {
    const data = await ListExpensesSchema(obj).save();
    return data;
  }

  async put(_id, obj) {
    const data = await ListExpensesSchema.findByIdAndUpdate(_id, obj, { new: true }); // Added { new: true } to return updated document
    return data;
  }

  async delete(_id) {
    const data = await ListExpensesSchema.findOneAndDelete({ _id }); // Wrapped _id in an object
    return data;
  }
}
