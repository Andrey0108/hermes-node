import { CustomersSchema } from '../../schemas/mongodb/reservations/customers.schema.js'

export class CustomersModel {
  async get () {
    const data = await CustomersSchema.find()
    return data
  }

  async getById (id_customer) {
    const data = await CustomersSchema.findOne({ id_customer })
    return data
  }

  async post (obj) {
    const data = await CustomersSchema(obj).save()
    return data
  }

  async patch (id_customer, obj) {
    const data = await CustomersSchema.findOneAndUpdate({ id_customer }, obj)
    return data
  }

  async delete (id_customer) {
    const data = await CustomersSchema.findOneAndDelete({ id_customer })
    return data
  }
}
