import { Schema, model } from 'mongoose'

const reservationsSchema = new Schema({
  id_reservation: { Number },
  id_detail_programming_package: { Number, required: true },
  id_customer: { Number, required: true },
  date_reservation: { Date, default: Date.now },
  price_reservation: { Number, required: true },
  number_companions: { Number, default: 0 },
  travel_customer: { Boolean, default: false },
  status: {
    String,
    required: true,
    enum: ['N', 'C', 'P', 'M', 'R', 'A', 'E', 'F']
  }
})

export const ReservationsSchema = model('Reservations', reservationsSchema)
