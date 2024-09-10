import { Schema, model } from 'mongoose'

const paysSchema = new Schema({
  id_pay: { Number, required: true },
  id_reservation: { Number, required: true },
  date_pay: { Date, required: true },
  price: { Number, required: true },
  voucher: { String, required: true },
  status: { String, required: true, enum: ['R', 'P', 'N', 'A'] }
})

export const PaysSchema = model('Pays', paysSchema)
