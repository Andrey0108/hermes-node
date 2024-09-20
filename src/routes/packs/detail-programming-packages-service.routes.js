import { Router } from 'express'
import { DetailProgrammingPackagesServiceController } from '../../controllers/packs/detail-programming-packages-service.controller.js'

export const createDetailProgrammingPackagesServiceRouter = ({ detailProgrammingPackageServicesModel }) => {
  const detailProgrammingPackagesServiceRouter = Router()

  const detailProgrammingPackageServiceController = new DetailProgrammingPackagesServiceController({ detailProgrammingPackageServicesModel })

  detailProgrammingPackagesServiceRouter.get('/', detailProgrammingPackageServiceController.get)
  detailProgrammingPackagesServiceRouter.get('/:id', detailProgrammingPackageServiceController.getById)
  detailProgrammingPackagesServiceRouter.post('/', detailProgrammingPackageServiceController.post)
  detailProgrammingPackagesServiceRouter.patch('/:id', detailProgrammingPackageServiceController.patch)
  detailProgrammingPackagesServiceRouter.delete('/:id', detailProgrammingPackageServiceController.delete)

  return detailProgrammingPackagesServiceRouter
}
