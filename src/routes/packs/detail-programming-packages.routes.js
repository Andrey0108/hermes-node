import { Router } from 'express'
import { DetailProgrammingPackageController } from '../../controllers/packs/detail-programming-packages.controller.js'

export const createDetailProgrammingPackageRouter = ({ detailProgrammingPackageModel }) => {
  const detailProgrammingPackageControllerRouter = Router()

  const detailProgrammingPackageControllerController = new DetailProgrammingPackageController({ detailProgrammingPackageModel })

  detailProgrammingPackageControllerRouter.get('/', detailProgrammingPackageControllerController.get)
  detailProgrammingPackageControllerRouter.get('/:id', detailProgrammingPackageControllerController.getById)
  detailProgrammingPackageControllerRouter.post('/', detailProgrammingPackageControllerController.post)
  detailProgrammingPackageControllerRouter.patch('/:id', detailProgrammingPackageControllerController.patch)
  detailProgrammingPackageControllerRouter.delete('/:id', detailProgrammingPackageControllerController.delete)

  return detailProgrammingPackageControllerRouter
}
