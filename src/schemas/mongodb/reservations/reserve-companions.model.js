import { Schema } from 'mongoose'

export const reserveCompanionsSchema = new Schema({
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
