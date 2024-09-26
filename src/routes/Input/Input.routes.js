import { Router } from 'express'
import { inputController } from '../../controllers/Input/Input.controller.js'

export const createinputRouter = ({ inputModel }) => {
  const inputRouter = Router()

  const inputController = new inputController({ inputModel })

  InputRouter.get('/', inputController.get)
  InputRouter.post('/', inputController.post)
  InputRouter.put('/:id', inputController.put)
  InputRouter.delete('/:id', inputController.delete)

  return inputRouter
}
