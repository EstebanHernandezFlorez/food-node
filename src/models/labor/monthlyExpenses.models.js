import MonthlyExpenseSchema from "../../schemas/mongodb/labor/monthlyExpenses.schema.js";

export class MonthlyExpensesModel {
  async get() {
    const data = await MonthlyExpenseSchema.find();
    return data;
  }

  async getById(id) {
    const data = await MonthlyExpenseSchema.findOne({ id }); // Changed to use _id
    return data;
  }

  async post(obj) {
    const data = await MonthlyExpenseSchema(obj).save();
    return data;
  }

  async put(_id, obj) {
    const data = await MonthlyExpenseSchema.findByIdAndUpdate(_id, obj); // Added { new: true } to return updated document
    return data;
  }

  async delete(_id) {
    const data = await MonthlyExpenseSchema.findOneAndDelete(_id ); // Wrapped _id in an object
    return data;
  }
}

