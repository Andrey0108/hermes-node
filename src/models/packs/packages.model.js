import { PackagesSchema } from '../../schemas/mongodb/packs/packages.schema.js'

export class PackagesModel {
  async get () {
    const data = await PackagesSchema.find()
    return data
  }

  async getById (idPackages) {
    const data = await PackagesSchema.findOne({ idPackages })
    return data
  }

  async post (obj) {
    const data = await PackagesSchema(obj).save()
    return data
  }

  async patch (idPackages, obj) {
    const data = await PackagesSchema.findOneAndUpdate({ idPackages }, obj)
    return data
  }

  async delete (idPackages) {
    const data = await PackagesSchema.findOneAndDelete({ idPackages })
    return data
  }
}
