import { Schema, model } from 'mongoose'

const reserveCompanionsSchema = new Schema({
  id_reserve_companion: { Number, required: true },
  id_reservation: { Number, required: true },
  documentType: { String, required: true },
  identification: { String, required: true },
  name: { String, required: true },
  lastName: { String, required: true },
  phone: { String, required: true },
  sex: { String, required: true, enum: ['h', 'm'] },
  bloodType: { String, required: true, enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'] },
  eps: { String, required: true }
})

export const ReserveCompanionsSchema = model('ReserveCompanions', reserveCompanionsSchema)
