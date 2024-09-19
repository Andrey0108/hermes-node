import { ProgramationPackagesSchema } from '../../schemas/mongodb/packs/programation-packages.schema'

export class ProgramationPackagesModel {
  async get () {
    const data = await ProgramationPackagesSchema.find()
    return data
  }

  async getById (idProgramationPackages) {
    const data = await ProgramationPackagesSchema.findOne({ idProgramationPackages })
    return data
  }

  async post (obj) {
    const data = await ProgramationPackagesSchema(obj).save()
    return data
  }

  async patch (idProgramationPackages, obj) {
    const data = await ProgramationPackagesSchema.findOneAndUpdate({ idProgramationPackages }, obj)
    return data
  }

  async delete (idProgramationPackages) {
    const data = await ProgramationPackagesSchema.findOneAndDelete({ idProgramationPackages })
    return data
  }
}
