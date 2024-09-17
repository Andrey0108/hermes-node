import { Schema, model } from 'mongoose'

const customersSchema = new Schema({
  idCustomer: { type: Number, required: true },
  id_user: { type: Number, required: true },
  name: { type: String, required: true },
  lastName: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  country: { type: Number, required: true },
  departament: { type: Number, required: true },
  municipality: { type: Number, required: true },
  sex: { type: String, required: true, enum: ['h', 'm'] },
  bloodType: { type: String, required: true, enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'] },
  eps: { type: String, required: true },
  state: { type: Boolean, default: true }
})

export const CustomersSchema = model('Customers', customersSchema)
