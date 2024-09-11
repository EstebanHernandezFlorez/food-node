import { Schema, model } from 'mongoose'

const providerSchema = new Schema({
  fullName: Number,
  typeDocument: String,
  document: Number,
  phone: Date,
  company: Number,
  status: String
})

export const PaysSchema = model('Provider', providerSchema)
