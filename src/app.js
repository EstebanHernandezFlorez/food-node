import { Server } from './models/server.js'
// routes
import { createAuthRouter } from './routes/auth.routes.js'
import { createCustomersRouter } from './routes/reservations/customers.routes.js'
import { createPaysRouter } from './routes/pays/pays.routes.js'
// models
// import { AuthModel } from './models/auth.model.js'
import { CustomersModel } from './models/reservations/customers.model.js'
import { PaysModel } from './models/pays/pays.model.js'
import './config/db.mongo.js'

const server = new Server()
// const authModel = new AuthModel()
const customersModel = new CustomersModel()
const paysModel = new PaysModel()

// server.app.use('/auth', createAuthRouter({ authModel }))
server.app.use('/customers', createCustomersRouter({ customersModel }))
server.app.use('/pays', createPaysRouter({ paysModel }))

server.dbConnection()
server.listen()
