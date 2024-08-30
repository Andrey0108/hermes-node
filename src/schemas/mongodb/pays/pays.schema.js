import { Schema } from 'mongoose'
export const paysSchema = new Schema({
  id_pay: Number,
  id_reservation: Number,
  date_pay: Date,
  price: Number,
  voucher: String,
  status: String
})
