import { Schema, model } from 'mongoose'

const reservationsSchema = new Schema({
  id_reservation: Number,
  id_detail_programming_package: Number,
  id_customer: Number,
  date_reservation: Date,
  price_reservation: Number,
  number_companions: Number,
  travel_customer: Boolean,
  status: String
})

export const ReservationsSchema = model('Reservations', reservationsSchema)
