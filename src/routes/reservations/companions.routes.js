import { Router } from 'express'
import { CompanionsController } from '../../controllers/reservations/companions.controller.js'

export const createCompanionsRouter = ({ companionsModel }) => {
  const companionsRouter = Router()

  const companionsController = new CompanionsController({ companionsModel })

  companionsRouter.get('/', companionsController.get)
  companionsRouter.get('/:id', companionsController.getById)
  companionsRouter.post('/', companionsController.post)
  companionsRouter.put('/:id', companionsController.put)
  companionsRouter.delete('/:id', companionsController.delete)

  return companionsRouter
}
