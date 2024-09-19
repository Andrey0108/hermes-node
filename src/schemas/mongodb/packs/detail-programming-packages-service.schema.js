import { Schema, model } from 'mongoose'

const detailProgrammingPackagesServiceSchema = new Schema({
  id_detail_programming_package_service: { type: Number, required: true },
  id_detail_programming_package: { type: Number, required: true },
  id_detail_package_service: { type: Number, required: true },
  quantity: { type: Number, required: true },
  price_service: { type: Number, required: true }
})

export const DetailProgrammingPackagesServiceSchema = model(
  'DetailProgrammingPackagesService',
  detailProgrammingPackagesServiceSchema
)
