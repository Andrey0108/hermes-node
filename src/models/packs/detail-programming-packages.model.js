import { DetailProgrammingPackage } from '../../schemas/mongodb/packs/detail-programming-packages.schema.js'

export class DetailProgrammingPackageModel {
  async get () {
    const data = await DetailProgrammingPackage.find()
    return data
  }

  async getById (idDetailProgrammingPackage) {
    const data = await DetailProgrammingPackage.findOne({ idDetailProgrammingPackage })
    return data
  }

  async post (obj) {
    const data = await DetailProgrammingPackage(obj).save()
    return data
  }

  async patch (idDetailProgrammingPackage, obj) {
    const data = await DetailProgrammingPackage.findOneAndUpdate({ idDetailProgrammingPackage }, obj)
    return data
  }

  async delete (idDetailProgrammingPackage) {
    const data = await DetailProgrammingPackage.findOneAndDelete({ idDetailProgrammingPackage })
    return data
  }
}
