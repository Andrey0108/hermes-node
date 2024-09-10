import { Schema, model } from 'mongoose'
const customersSchema = new Schema({
  id_customer: { Number, required: true },
  id_user: { Number, required: true },
  name: { String, required: true },
  lastName: { String, required: true },
  phone: { String, required: true },
  address: { String, required: true },
  country: { Number, required: true },
  departament: { Number, required: true },
  municipality: { Number, required: true },
  sex: { String, required: true, enum: ['h', 'm'] },
  bloodType: { String, required: true, enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'] },
  eps: { String, required: true },
  state: { Boolean, default: true }
})

export const CustomersSchema = model('Customers', customersSchema)
