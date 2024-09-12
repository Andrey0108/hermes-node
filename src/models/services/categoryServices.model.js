import { CategoryServices } from '../../schemas/mongodb/services/categoryServices.schema'

export class CategoryServiceModel {
  async get () {
    const data = await CategoryServices.find()
    return data
  }

  async getById (id) {
    const data = await CategoryServices.findOne({ id })
    return data
  }

  async post (obj) {
    const data = await CategoryServices.createOne(obj)
    return data
  }

  async put (id, obj) {
    const data = await CategoryServices.findOneAndUpdate({ id }, obj)
    return data
  }

  async delete (id) {
    const data = await CategoryServices.findOneAndDelete({ id })
    return data
  }
}
