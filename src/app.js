import { Server } from './models/server.js'
// routes
// import { createAuthRouter } from './routes/auth.routes.js'
import { createCustomersRouter } from './routes/reservations/customers.routes.js'
import { createPaysRouter } from './routes/pays/pays.routes.js'
import { createProductionOrderRouter } from './routes/productionOrder/productionOrder.routes.js'
import { createUserRouter } from './routes/user/user.routes.js'
import { createInputRouter } from './routes/Input/Input.routes.js'

// models
// import { AuthModel } from './models/auth.model.js'
import { CustomersModel } from './models/reservations/customers.model.js'
import { PaysModel } from './models/pays/pays.model.js'
import { ProductionOrderModel } from './models/productionOrder/productionOrder.model.js'
import { UserModel } from './models/user/user.model.js'
import { InputModel } from './models/Input/Input.model.js'

import './config/db.mongo.js'

const server = new Server()
// const authModel = new AuthModel()
const customersModel = new CustomersModel()
const paysModel = new PaysModel()
const productionOrderModel = new ProductionOrderModel()
const userModel = new UserModel()
const InputModel = new InputModel()

// server.app.use('/auth', createAuthRouter({ authModel }))
server.app.use('/customers', createCustomersRouter({ customersModel }))
server.app.use('/pays', createPaysRouter({ paysModel }))
server.app.use('/productionOrder', createProductionOrderRouter({ productionOrderModel }))
server.app.use('/user', createUserRouter({ userModel }))
server.app.use('/user', createInputRouter({ InputModel }))


server.dbConnection()
server.listen()
