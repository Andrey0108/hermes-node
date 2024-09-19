import { Schema, model } from 'mongoose'

const idDetailProgrammingPackage = new Schema({
  idDetailProgrammingPackage: { type: Number, required: true },
  id_package: { type: Number, required: true },
  id_programation: { type: Number, required: true },
  status_programation_package: { type: Boolean, required: true },
  price_package: { type: Number, required: true }
})

export const DetailProgrammingPackagesSchema = model(
  'DetailProgrammingPackages',
  idDetailProgrammingPackage
)
