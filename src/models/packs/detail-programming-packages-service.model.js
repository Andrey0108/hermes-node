import { DetailProgrammingPackagesService } from '../../schemas/mongodb/reservations/reserve-companions.schema.js'

export class DetailProgrammingPackagesServiceModel {
  async get () {
    const data = await DetailProgrammingPackagesService.find()
    return data
  }

  async getById (idDetailProgrammingPackagesService) {
    const data = await DetailProgrammingPackagesService.findOne({ idDetailProgrammingPackagesService })
    return data
  }

  async post (obj) {
    const data = await DetailProgrammingPackagesService(obj).save()
    return data
  }

  async patch (idDetailProgrammingPackagesService, obj) {
    const data = await DetailProgrammingPackagesService.findOneAndUpdate({ idDetailProgrammingPackagesService }, obj)
    return data
  }

  async delete (idDetailProgrammingPackagesService) {
    const data = await DetailProgrammingPackagesService.findOneAndDelete({ idDetailProgrammingPackagesService })
    return data
  }
}
