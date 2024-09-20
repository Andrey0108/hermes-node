import { Router } from 'express'
import { ServicesController } from '../../controllers/services/services.controller.js'

export const createServicesRouter = ({ servicesModel }) => {
  const servicesRouter = Router()

  const servicesController = new ServicesController({ servicesModel })

  servicesRouter.get('/', servicesController.get)
  servicesRouter.get('/:id', servicesController.getById)
  servicesRouter.post('/', servicesController.post)
  servicesRouter.patch('/:id', servicesController.patch)
  servicesRouter.delete('/:id', servicesController.delete)

  return servicesRouter
}
