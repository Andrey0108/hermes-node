import { CustomersSchema } from '../../schemas/mongodb/reservations/customers.schema.js'

export class CustomersModel {
  async get () {
    const data = await CustomersSchema.find()
    return data
  }

  async getById (idCustomer) {
    const data = await CustomersSchema.findOne({ idCustomer })
    return data
  }

  async post (obj) {
    const data = await CustomersSchema(obj).save()
    return data
  }

  async patch (idCustomer, obj) {
    const data = await CustomersSchema.findOneAndUpdate({ idCustomer }, obj)
    return data
  }

  async delete (idCustomer) {
    const data = await CustomersSchema.findOneAndDelete({ idCustomer })
    return data
  }
}
