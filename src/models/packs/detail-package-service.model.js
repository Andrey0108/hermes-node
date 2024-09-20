import { DetailPackageServiceSchema } from '../../schemas/mongodb/packs/detail-package-service.schema.js'

export class DetailPackageServicesModel {
  async get () {
    const data = await DetailPackageServiceSchema.find()
    return data
  }

  async getById (idDetailPackageService) {
    const data = await DetailPackageServiceSchema.findOne({ idDetailPackageService })
    return data
  }

  async post (obj) {
    const data = await DetailPackageServiceSchema(obj).save()
    return data
  }

  async patch (idDetailPackageService, obj) {
    const data = await DetailPackageServiceSchema.findOneAndUpdate({ idDetailPackageService }, obj)
    return data
  }

  async delete (idDetailPackageService) {
    const data = await DetailPackageServiceSchema.findOneAndDelete({ idDetailPackageService })
    return data
  }
}
