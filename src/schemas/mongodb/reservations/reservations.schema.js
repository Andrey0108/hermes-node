import { Schema, model } from 'mongoose'

const reservationsSchema = new Schema({
  idReservation: { type: Number, required: true, unique: true },
  idDetailProgrammingPackage: { type: Number, required: true },
  idCustomer: { type: Number, required: true },
  dateReservation: { type: Date, default: Date.now },
  priceReservation: { type: Number, required: true },
  numberCompanions: { type: Number, default: 0 },
  travelCustomer: { type: Boolean, default: false },
  status: {
    type: String,
    required: true,
    enum: ['N', 'C', 'P', 'M', 'R', 'A', 'E', 'F']
  }
})

export const ReservationsSchema = model('Reservations', reservationsSchema)
