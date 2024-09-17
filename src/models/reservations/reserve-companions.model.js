import { ReserveCompanionsSchema } from '../../schemas/mongodb/reservations/reserve-companions.schema.js'

export class ReserveCompanionsModel {
  async get () {
    const data = await ReserveCompanionsSchema.find()
    return data
  }

  async getById (idReserveCompanion) {
    const data = await ReserveCompanionsSchema.findOne({ idReserveCompanion })
    return data
  }

  async post (obj) {
    const data = await ReserveCompanionsSchema(obj).save()
    return data
  }

  async patch (idReserveCompanion, obj) {
    const data = await ReserveCompanionsSchema.findOneAndUpdate({ idReserveCompanion }, obj)
    return data
  }

  async delete (idReserveCompanion) {
    const data = await ReserveCompanionsSchema.findOneAndDelete({ idReserveCompanion })
    return data
  }
}
