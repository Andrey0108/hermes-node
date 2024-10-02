import { Router } from 'express'
import { ProgramationPackagesController } from '../../controllers/packs/programation-packages.controller.js'

export const createProgramationPackagesRouter = ({ programationPackagesModel }) => {
  const programationPackagesRouter = Router()

  const programationPackagesController = new ProgramationPackagesController({ programationPackagesModel })

  programationPackagesRouter.get('/', programationPackagesController.get)
  programationPackagesRouter.get('/:id', programationPackagesController.getById)
  programationPackagesRouter.post('/', programationPackagesController.post)
  programationPackagesRouter.patch('/:id', programationPackagesController.patch)
  programationPackagesRouter.delete('/:id', programationPackagesController.delete)

  return programationPackagesRouter
}
