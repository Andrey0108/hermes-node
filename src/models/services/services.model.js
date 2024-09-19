import { ServicesSchema } from '../../schemas/mongodb/services/services.schema.js'

export class ServicesModel {
  async get () {
    const data = await ServicesSchema.find()
    return data
  }

  async getById (idService) {
    const data = await ServicesSchema.findOne({ idService })
    return data
  }

  async post (obj) {
    const data = await ServicesSchema(obj).save()
    return data
  }

  async patch (idService, obj) {
    const data = await ServicesSchema.findOneAndUpdate({ idService }, obj)
    return data
  }

  async delete (idService) {
    const data = await ServicesSchema.findOneAndDelete({ idService })
    return data
  }
}
