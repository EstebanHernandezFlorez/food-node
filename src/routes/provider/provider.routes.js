import { Router } from 'express'
import { ProviderController } from '../../controllers/provider/providerController.js'

export const createPaysRouter = ({ ProvidersModel }) => {
  const ProviderRouter = Router()

  const ProvidersController = new ProviderController({ ProvidersModel })

  ProviderRouter.get('/', ProvidersController.get)
  ProviderRouter.post('/', ProvidersController.post)
  ProviderRouter.put('/:id', ProvidersController.put)
  ProviderRouter.delete('/:id', ProvidersController.delete)

  return ProviderRouter
}
