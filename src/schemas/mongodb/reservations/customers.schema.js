import { Schema, model } from 'mongoose'
const customersSchema = new Schema({
  id_customer: Number,
  id_user: Number,
  name: String,
  lastName: String,
  phone: String,
  address: String,
  country: Number,
  departament: Number,
  municipality: Number,
  sex: String,
  bloodType: String,
  eps: String,
  state: Boolean
})

export const CustomersSchema = model('Customers', customersSchema)
