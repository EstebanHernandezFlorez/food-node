import { Router } from 'express'
import { UserController } from '../../controllers/user/user.controller.js'

export const createUserRouter = ({ userModel }) => {
  const userRouter = Router()

  const userController = new UserController({ userModel })

  userRouter.get('/', userController.get)
  userRouter.post('/', userController.post)
  userRouter.put('/:id', userController.put)
  userRouter.delete('/:id', userController.delete)

  return userRouter
}
