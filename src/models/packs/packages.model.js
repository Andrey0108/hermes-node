import { PackagesSchema } from '../../schemas/mongodb/packs/packages.schema.js'

export class PackagesModel {
  async get () {
    const data = await PackagesSchema.find()
    return data
  }

  async getById (idPackage) {
    const data = await PackagesSchema.findOne({ idPackage })
    return data
  }

  async post (obj) {
    const data = await PackagesSchema(obj).save()
    return data
  }

  async patch (idPackage, obj) {
    const data = await PackagesSchema.findOneAndUpdate({ idPackage }, obj)
    return data
  }

  async delete (idPackage) {
    const data = await PackagesSchema.findOneAndDelete({ idPackage })
    return data
  }
}
