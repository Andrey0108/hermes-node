import { Schema, model } from 'mongoose'

const detailPackageServiceSchema = new Schema({
  id_detail_package_service: { type: Number, required: true },
  id_package: { type: Number, required: true },
  id_service: { type: Number, required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true }
})

export const DetailPackageServiceSchema = model(
  'DetailPackageService',
  detailPackageServiceSchema
)
