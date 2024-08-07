import { Router } from 'express'
import { AuthController } from '../controllers/auth.js'

export const createAuthRouter = ({ authModel }) => {
  const authRouter = Router()

  const authController = new AuthController({ authModel })

  authRouter.get('/login', authController.login)
  authRouter.get('/register', authController.register)
  authRouter.get('/logout', authController.logout)

  return authRouter
}
