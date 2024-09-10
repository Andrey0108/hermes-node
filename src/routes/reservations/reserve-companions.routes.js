import { Router } from 'express'
import { ReserveCompanionsController } from '../../controllers/reservations/reserve-companions.controller.js'

export const createReserveCompanionsRouter = ({ reserveCompanionsModel }) => {
  const reserveCompanionsRouter = Router()

  const reserveCompanionsController = new ReserveCompanionsController({ reserveCompanionsModel })

  reserveCompanionsRouter.get('/', reserveCompanionsController.get)
  reserveCompanionsRouter.get('/:id', reserveCompanionsController.getById)
  reserveCompanionsRouter.post('/', reserveCompanionsController.post)
  reserveCompanionsRouter.patch('/:id', reserveCompanionsController.patch)
  reserveCompanionsRouter.delete('/:id', reserveCompanionsController.delete)

  return reserveCompanionsRouter
}
