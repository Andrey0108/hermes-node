import { ServicesSchema } from '../../schemas/mongodb/services/services.schema.js'

export class ServicesModel {
  async get () {
    const data = await ServicesSchema.find()
    return data
  }

  async post (obj) {
    const data = await ServicesSchema.createOne(obj)
    return data
  }

  async put (id, obj) {
    const data = await ServicesSchema.findOneAndUpdate({ id }, obj)
    return data
  }

  async delete (id) {
    const data = await ServicesSchema.findOneAndDelete({ id })
    return data
  }
}
