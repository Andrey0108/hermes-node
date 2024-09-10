import { Router } from 'express'
import { CustomersController } from '../../controllers/reservations/customers.controller.js'

export const createCustomersRouter = ({ customersModel }) => {
  const customersRouter = Router()

  const customersController = new CustomersController({ customersModel })

  customersRouter.get('/', customersController.get)
  customersRouter.get('/:id', customersController.getById)
  customersRouter.post('/', customersController.post)
  customersRouter.patch('/:id', customersController.patch)
  customersRouter.delete('/:id', customersController.delete)

  return customersRouter
}
