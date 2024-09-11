import { PaysSchema } from '../../schemas/mongodb/pays/pays.schema.js'

export class PaysModel {
  async get () {
    const data = await PaysSchema.find()
    return data
  }

  async getById (id_pay) {
    const data = await PaysSchema.findOne({ id_pay })
    return data
  }

  async post (obj) {
    const data = await PaysSchema(obj).save()
    return data
  }

  async patch (id_pay, obj) {
    const data = await PaysSchema.findOneAndUpdate({ id_pay }, obj)
    return data
  }

  async delete (id_pay) {
    const data = await PaysSchema.findOneAndDelete({ id_pay })
    return data
  }
}
