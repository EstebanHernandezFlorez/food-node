import { Schema, model } from 'mongoose'

const reserveCompanionsSchema = new Schema({
  id_reserve_companion: Number,
  id_reservation: Number,
  documentType: String,
  identification: String,
  name: String,
  lastName: String,
  phone: String,
  sex: String,
  bloodType: String,
  eps: String
})

export const ReserveCompanionsSchema = model('ReserveCompanions', reserveCompanionsSchema)
