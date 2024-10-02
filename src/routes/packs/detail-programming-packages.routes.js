import { Router } from 'express'
import { DetailProgrammingPackageController } from '../../controllers/packs/detail-programming-packages.controller.js'

export const createDetailProgrammingPackageRouter = ({ detailProgrammingPackageModel }) => {
  const detailProgrammingPackageRouter = Router()

  const detailProgrammingPackageControllerController = new DetailProgrammingPackageController({ detailProgrammingPackageModel })

  detailProgrammingPackageRouter.get('/', detailProgrammingPackageControllerController.get)
  detailProgrammingPackageRouter.get('/:id', detailProgrammingPackageControllerController.getById)
  detailProgrammingPackageRouter.post('/', detailProgrammingPackageControllerController.post)
  detailProgrammingPackageRouter.patch('/:id', detailProgrammingPackageControllerController.patch)
  detailProgrammingPackageRouter.delete('/:id', detailProgrammingPackageControllerController.delete)

  return detailProgrammingPackageRouter
}
