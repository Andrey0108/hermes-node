import { Schema, model } from 'mongoose'

const categoryServiceSchema = new Schema({

  id_categoryService: { type: Number },
  name: { type: String }
})

export const CategoryServiceSchema = model('CategoryServices', categoryServiceSchema)
