import { Schema } from 'mongoose'

export const companionsSchema = new Schema({
  id_reserve_companion: Number,
  id_reservation: Number,
  identification: String,
  name: String,
  lastName: String,
  phone: String,
  sex: String,
  bloodType: String,
  eps: String
})
