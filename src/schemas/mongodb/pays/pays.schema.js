import { Schema, model } from 'mongoose'

const paysSchema = new Schema({
  id_pay: Number,
  id_reservation: Number,
  date_pay: Date,
  price: Number,
  voucher: String,
  status: String
})

export const PaysSchema = model('Pays', paysSchema)
