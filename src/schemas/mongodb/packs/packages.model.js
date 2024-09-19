import { Schema, model } from 'mongoose'

const packagesSchema = new Schema({
  id_package: { type: Number, required: true },
  name: { type: String, required: true },
  destination: { type: String, required: true },
  price: { type: Number, required: true },
  status: { type: Boolean, required: true }
})

export const PackagesSchema = model('Packages', packagesSchema)