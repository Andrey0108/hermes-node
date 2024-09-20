import { Router } from 'express'
import { UsersController } from '../../controllers/users/users.controller.js'

export const createUsersRouter = ({ usersModel }) => {
  const usersRouter = Router()

  const usersController = new UsersController({ usersModel })

  usersRouter.get('/', usersController.getAll)
  usersRouter.get('/:id', usersController.getById)
  usersRouter.post('/', usersController.post)
  usersRouter.patch('/:id', usersController.patch)
  usersRouter.delete('/:id', usersController.delete)

  return usersRouter
}
