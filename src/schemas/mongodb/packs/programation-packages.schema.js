import { Schema, model } from 'mongoose'

const programationPackagesSchema = new Schema({
  id_programation: { type: Number, required: true },
  date_start: { type: Date, required: true },
  date_end: { type: Date, required: true },
  date_execution: { type: Date, required: true },
  date_ending: { type: Date, required: true }
})

export const ProgramationPackagesSchema = model('ProgramationPackages', programationPackagesSchema)