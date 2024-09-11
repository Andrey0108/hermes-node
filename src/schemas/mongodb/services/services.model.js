import { Schema, model } from 'mongoose'

const servicesSchema = new Schema({
  id_service: { type: Number, required: true },
  id_categoryService: { type: Number, required: true },
  name: { type: String },
  price: { type: Number, requierd: true },
  state: { type: Boolean, default: true }

})

export const ServicesSchema = model('Services', servicesSchema)
