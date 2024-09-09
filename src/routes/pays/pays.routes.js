import { Router } from 'express'
import { PaysController } from '../../controllers/pays/pays.controller.js'

export const createPaysRouter = ({ paysModel }) => {
  const paysRouter = Router()

  const paysController = new PaysController({ paysModel })

  paysRouter.get('/', paysController.get)
  paysRouter.post('/', paysController.post)
  paysRouter.put('/:id', paysController.put)
  paysRouter.delete('/:id', paysController.delete)

  return paysRouter
}
