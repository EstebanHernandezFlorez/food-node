import { Router } from 'express'
import { ProductionOrderController } from '../../controllers/productionOrder/productionOrder.controller.js'

export const createPaysRouter = ({ productionOrderModel }) => {
  const productionOrderRouter = Router()

  const productionOrderController = new ProductionOrderController({ productionOrderModel })

  productionOrderRouter.get('/', productionOrderController.get)
  productionOrderRouter.post('/', productionOrderController.post)
  productionOrderRouter.put('/:id', productionOrderController.put)
  productionOrderRouter.delete('/:id', productionOrderController.delete)

  return productionOrderRouter
}
