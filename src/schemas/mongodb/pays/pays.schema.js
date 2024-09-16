import { Schema, model } from 'mongoose'

const paysSchema = new Schema({
  id_pay: { type: Number, required: true },
  id_reservation: { type: Number, required: true },
  date_pay: { type: Date, required: true, default: Date.now },
  price: { type: Number, required: true },
  voucher: { type: String, required: true },
  status: { type: String, required: true, enum: ['R', 'P', 'N', 'A'] }
})

export const PaysSchema = model('Pays', paysSchema)
