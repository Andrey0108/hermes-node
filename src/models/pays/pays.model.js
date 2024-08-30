import { paysSchema } from '../../schemas/mongodb/pays/pays.schema.js'

export class PaysModel {
  async get () {
    const data = await paysSchema.find().pretty()
    return data
  }

  async post (obj) {
    const data = await paysSchema.createOne(obj)
    return data
  }

  async put (id, obj) {
    const data = await paysSchema.updateOne(id, obj)
    return data
  }

  async delete (id) {
    const data = await paysSchema.deleteOne(id)
    return data
  }
}
