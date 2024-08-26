import { customersSchema } from '../schemas/mongodb/customers'

export class CustomersModel {
  async get () {
    const data = await customersSchema.find().pretty()
    return data
  }

  async post (obj) {
    const data = await customersSchema.createOne(obj)
    return data
  }

  async put (id, obj) {
    const data = await customersSchema.updateOne(id, obj)
    return data
  }

  async delete (id) {
    const data = await customersSchema.deleteOne(id)
    return data
  }
}
