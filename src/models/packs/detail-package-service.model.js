import { DetailPackageServicesSchema } from '../../schemas/mongodb/packs/detail-package-service.schema.js'

export class DetailPackageServicesModel {
  async get () {
    const data = await DetailPackageServicesSchema.find()
    return data
  }

  async getById (idDetailPackageService) {
    const data = await DetailPackageServicesSchema.findOne({ idDetailPackageService })
    return data
  }

  async post (obj) {
    const data = await DetailPackageServicesSchema(obj).save()
    return data
  }

  async patch (idDetailPackageService, obj) {
    const data = await DetailPackageServicesSchema.findOneAndUpdate({ idDetailPackageService }, obj)
    return data
  }

  async delete (idDetailPackageService) {
    const data = await DetailPackageServicesSchema.findOneAndDelete({ idDetailPackageService })
    return data
  }
}
