import { Router } from 'express'
import { DetailPackageServicesController } from '../../controllers/packs/detail-package-service.controller.js'

export const createDetailPackageServicesRouter = ({ detailPackageServicesModel }) => {
  const detailPackageServicesRouter = Router()

  const detailPackageServicesControllerController = new DetailPackageServicesController({ detailPackageServicesModel })

  detailPackageServicesRouter.get('/', detailPackageServicesControllerController.get)
  detailPackageServicesRouter.get('/:id', detailPackageServicesControllerController.getById)
  detailPackageServicesRouter.post('/', detailPackageServicesControllerController.post)
  detailPackageServicesRouter.patch('/:id', detailPackageServicesControllerController.patch)
  detailPackageServicesRouter.delete('/:id', detailPackageServicesControllerController.delete)

  return detailPackageServicesRouter
}
