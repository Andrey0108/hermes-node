import { Router } from 'express'
import { ProgramationprogramationPackagesControllerController } from '../../controllers/packs/programation-ProgramationPackagesController.controller.js'

export const createprogramationPackagesControllerRouter = ({ ProgramationPackagesModel }) => {
  const ProgramationPackagesControllerControllerRouter = Router()

  const ProgramationPackagesControllerControllerController = new ProgramationprogramationPackagesControllerController({ ProgramationPackagesModel })

  ProgramationPackagesControllerControllerRouter.get('/', ProgramationPackagesControllerControllerController.get)
  ProgramationPackagesControllerControllerRouter.get('/:id', ProgramationPackagesControllerControllerController.getById)
  ProgramationPackagesControllerControllerRouter.post('/', ProgramationPackagesControllerControllerController.post)
  ProgramationPackagesControllerControllerRouter.patch('/:id', ProgramationPackagesControllerControllerController.patch)
  ProgramationPackagesControllerControllerRouter.delete('/:id', ProgramationPackagesControllerControllerController.delete)

  return ProgramationPackagesControllerControllerRouter
}
