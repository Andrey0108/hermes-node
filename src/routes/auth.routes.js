import { Router } from 'express'
import { AuthController } from '../controllers/auth.controller.js'

export const createAuthRouter = ({ authModel }) => {
  const authRouter = Router()

  const authController = new AuthController({ authModel })

  authRouter('/login', authController.login)

  return authRouter
}
