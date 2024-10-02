import { Router } from 'express'
import { PackagesController } from '../../controllers/packs/packages.controller.js'

export const createPackagesRouter = ({ packagesModel }) => {
  const packagesRouter = Router()

  const packagesControllerController = new PackagesController({ packagesModel })

  packagesRouter.get('/', packagesControllerController.get)
  packagesRouter.get('/:id', packagesControllerController.getById)
  packagesRouter.post('/', packagesControllerController.post)
  packagesRouter.patch('/:id', packagesControllerController.patch)
  packagesRouter.delete('/:id', packagesControllerController.delete)

  return packagesRouter
}
