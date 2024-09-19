import { Schema, model } from 'mongoose'

const categoryServicesSchema = new Schema({

  id_categoryService: { type: Number, required: true },
  name: { type: String, required: true }

})

export const CategoryServices = model('Services', categoryServicesSchema)
