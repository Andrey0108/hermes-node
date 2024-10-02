import { DetailProgrammingPackagesServiceSchema } from '../../schemas/mongodb/packs/detail-programming-packages-service.schema.js'

export class DetailProgrammingPackagesServiceModel {
  async get () {
    const data = await DetailProgrammingPackagesServiceSchema.find()
    return data
  }

  async getById (idDetailProgrammingPackagesServiceSchema) {
    const data = await DetailProgrammingPackagesServiceSchema.findOne({ idDetailProgrammingPackagesServiceSchema })
    return data
  }

  async post (obj) {
    const data = await DetailProgrammingPackagesServiceSchema(obj).save()
    return data
  }

  async patch (idDetailProgrammingPackagesServiceSchema, obj) {
    const data = await DetailProgrammingPackagesServiceSchema.findOneAndUpdate({ idDetailProgrammingPackagesServiceSchema }, obj)
    return data
  }

  async delete (idDetailProgrammingPackagesServiceSchema) {
    const data = await DetailProgrammingPackagesServiceSchema.findOneAndDelete({ idDetailProgrammingPackagesServiceSchema })
    return data
  }
}
