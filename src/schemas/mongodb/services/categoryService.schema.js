import { Schema, model } from 'mongoose'

const categoryServiceSchema = new Schema({

  id_categoryService: { type: Number, required: true },
  name: { type: String, required: true }

})

export const CategoryService = model('Services', categoryServiceSchema)
