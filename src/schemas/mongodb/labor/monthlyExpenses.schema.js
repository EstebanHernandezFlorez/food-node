import { Schema, model } from 'mongoose'

const monthlyExpenseSchema = new Schema({
  fullName: Number,
  typeDocument: String,
  document: Number,
  phone: Date,
  company: Number,
  status: String
})

export const PaysSchema = model('MonthlyExpense', monthlyExpenseSchema)
