import { Schema, model } from 'mongoose'

const servicesSchema = new Schema({

  id_service: { type: Number, required: true },
  id_categoryService: { type: Number, required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  state: { type: Boolean, required: true }
})

export const ServicesSchema = model('Services', servicesSchema)
