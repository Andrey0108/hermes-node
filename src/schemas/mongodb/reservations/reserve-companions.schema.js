import { Schema, model } from 'mongoose'

const reserveCompanionsSchema = new Schema({
  idReserveCompanion: { type: Number, required: true },
  idReservation: { type: Number, required: true },
  documentType: { type: String, required: true },
  identification: { type: String, required: true },
  name: { type: String, required: true },
  lastName: { type: String, required: true },
  phone: { type: String, required: true },
  sex: { type: String, required: true, enum: ['h', 'm'] },
  bloodType: { type: String, required: true, enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'] },
  eps: { type: String, required: true }
})

export const ReserveCompanionsSchema = model('ReserveCompanions', reserveCompanionsSchema)
