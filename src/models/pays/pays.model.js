import { PaysSchema } from '../../schemas/mongodb/pays/pays.schema.js'

export class PaysModel {
  async get () {
    const data = await PaysSchema.find()
    return data
  }

  async getById (idPay) {
    const data = await PaysSchema.findOne({ idPay })
    return data
  }

  async post (obj) {
    const data = await PaysSchema(obj).save()
    return data
  }

  async patch (idPay, obj) {
    const data = await PaysSchema.findOneAndUpdate({ idPay }, obj)
    return data
  }

  async delete (idPay) {
    const data = await PaysSchema.findOneAndDelete({ idPay })
    return data
  }
}
