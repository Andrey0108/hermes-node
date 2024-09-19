import { ReservationsSchema } from '../../schemas/mongodb/reservations/reservations.schema.js'

export class ReservationsModel {
  async get () {
    const data = await ReservationsSchema.find()
    return data
  }

  async getById (id_reservation) { 
    const data = await ReservationsSchema.findOne({ id_reservation })
    return data
  }

  async post (obj) {
    const data = await ReservationsSchema(obj).save()
    return data
  }

  async patch (id_reservation, obj) {
    const data = await ReservationsSchema.findOneAndUpdate({ id_reservation }, obj)
    return data
  }

  async delete (id_reservation) {
    const data = await ReservationsSchema.findOneAndDelete({ id_reservation })
    return data
  }
}
