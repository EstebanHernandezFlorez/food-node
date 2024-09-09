import { Router } from 'express'
import { AuthController } from '../controllers/auth.controller.js'

export const createAuthRouter = ({ authModel }) => {
  const authRouter = Router()

  const authController = new AuthController({ authModel })

  authRouter.get('/', authController.get)
  authRouter.post('/', authController.post)
  authRouter.put('/:id', authController.put)
  authRouter.delete('/:id', authController.delete)

  return authRouter
}
