import { Router } from 'express'
import { PackagesController } from '../../controllers/packs/packages.controller.js'

export const createPackagesRouter = ({ packagesModel }) => {
  const packagesControllerRouter = Router()

  const packagesControllerController = new PackagesController({ packagesModel })

  packagesControllerRouter.get('/', packagesControllerController.get)
  packagesControllerRouter.get('/:id', packagesControllerController.getById)
  packagesControllerRouter.post('/', packagesControllerController.post)
  packagesControllerRouter.patch('/:id', packagesControllerController.patch)
  packagesControllerRouter.delete('/:id', packagesControllerController.delete)

  return packagesControllerRouter
}
