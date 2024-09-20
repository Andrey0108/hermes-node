import { Router } from 'express'
import { DetailPackageServicesController } from '../../controllers/packs/detail-package-service.controller.js'

export const createDetailPackageServicesRouter = ({ detailPackageServicesModel }) => {
  const detailPackageServicesControllerRouter = Router()

  const detailPackageServicesControllerController = new DetailPackageServicesController({ detailPackageServicesModel })

  detailPackageServicesControllerRouter.get('/', detailPackageServicesControllerController.get)
  detailPackageServicesControllerRouter.get('/:id', detailPackageServicesControllerController.getById)
  detailPackageServicesControllerRouter.post('/', detailPackageServicesControllerController.post)
  detailPackageServicesControllerRouter.patch('/:id', detailPackageServicesControllerController.patch)
  detailPackageServicesControllerRouter.delete('/:id', detailPackageServicesControllerController.delete)

  return detailPackageServicesControllerRouter
}
