import { Schema, model } from 'mongoose'

const servicesSchema = new Schema({

  idService: { type: Number, required: true },
  idCategoryService: { type: Number, required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  state: { type: Boolean, required: true }
})

export const ServicesSchema = model('Services', servicesSchema)
