import { ReserveCompanionsSchema } from '../../schemas/mongodb/reservations/reserve-companions.schema.js'

export class ReserveCompanionsModel {
  async get () {
    const data = await ReserveCompanionsSchema.find()
    return data
  }

  async getById (id_reserve_companion) {
    const data = await ReserveCompanionsSchema.findOne({ id_reserve_companion })
    return data
  }

  async post (obj) {
    const data = await ReserveCompanionsSchema(obj).save()
    return data
  }

  async patch (id_reserve_companion, obj) {
    const data = await ReserveCompanionsSchema.findOneAndUpdate({ id_reserve_companion }, obj)
    return data
  }

  async delete (id_reserve_companion) {
    const data = await ReserveCompanionsSchema.findOneAndDelete({ id_reserve_companion })
    return data
  }
}
