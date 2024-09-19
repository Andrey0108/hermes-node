import { ReservationsSchema } from '../../schemas/mongodb/reservations/reservations.schema.js'

export class ReservationsModel {
  async get () {
    const data = await ReservationsSchema.find()
    return data
  }

  async getById (idReservation) {
    const data = await ReservationsSchema.findOne({ idReservation })
    return data
  }

  async post (obj) {
    const data = await ReservationsSchema(obj).save()
    return data
  }

  async patch (idReservation, obj) {
    const data = await ReservationsSchema.findOneAndUpdate({ idReservation }, obj)
    return data
  }

  async delete (idReservation) {
    const data = await ReservationsSchema.findOneAndDelete({ idReservation })
    return data
  }
}
