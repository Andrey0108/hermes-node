import { DetailProgrammingPackagesSchema } from '../../schemas/mongodb/packs/detail-programming-packages.schema.js'

export class DetailProgrammingPackagesSchemaModel {
  async get () {
    const data = await DetailProgrammingPackagesSchema.find()
    return data
  }

  async getById (idDetailProgrammingPackagesSchema) {
    const data = await DetailProgrammingPackagesSchema.findOne({ idDetailProgrammingPackagesSchema })
    return data
  }

  async post (obj) {
    const data = await DetailProgrammingPackagesSchema(obj).save()
    return data
  }

  async patch (idDetailProgrammingPackagesSchema, obj) {
    const data = await DetailProgrammingPackagesSchema.findOneAndUpdate({ idDetailProgrammingPackagesSchema }, obj)
    return data
  }

  async delete (idDetailProgrammingPackagesSchema) {
    const data = await DetailProgrammingPackagesSchema.findOneAndDelete({ idDetailProgrammingPackagesSchema })
    return data
  }
}
