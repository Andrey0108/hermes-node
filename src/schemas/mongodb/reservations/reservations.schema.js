import { Schema, model } from 'mongoose'

const reservationsSchema = new Schema({
  id_reservation: { type: Number, required: true, unique: true },
  id_detail_programming_package: { type: Number, required: true },
  id_customer: { type: Number, required: true },
  date_reservation: { type: Date, default: Date.now },
  price_reservation: { type: Number, required: true },
  number_companions: { type: Number, default: 0 },
  travel_customer: { type: Boolean, default: false },
  status: {
    type: String,
    required: true,
    enum: ['N', 'C', 'P', 'M', 'R', 'A', 'E', 'F']
  }
})

export const ReservationsSchema = model('Reservations', reservationsSchema)
