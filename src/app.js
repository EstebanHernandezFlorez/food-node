import { Server } from "./models/server.js";
// routes
<<<<<<< HEAD
//import { createAuthRouter } from './routes/auth.routes.js'
import { createCustomersRouter } from "./routes/reservations/customers.routes.js";
import { createPaysRouter } from "./routes/pays/pays.routes.js";
import { createEmployeeRouter } from "./routes/employees/employesRoutes.js";
// models
// import { AuthModel } from './models/auth.model.js'
import { CustomersModel } from "./models/reservations/customers.model.js";
import { PaysModel } from "./models/pays/pays.model.js";
import { EmployeesModel } from "./models/employees/employeeModels.js";
import "./config/db.mongo.js";
=======
// import { createAuthRouter } from './routes/auth.routes.js'
import { createCustomersRouter } from './routes/reservations/customers.routes.js'
import { createPaysRouter } from './routes/pays/pays.routes.js'
import { createProductionOrderRouter } from './routes/productionOrder/productionOrder.routes.js'
import { createUserRouter } from './routes/user/user.routes.js'
// models
// import { AuthModel } from './models/auth.model.js'
import { CustomersModel } from './models/reservations/customers.model.js'
import { PaysModel } from './models/pays/pays.model.js'
import { ProductionOrderModel } from './models/productionOrder/productionOrder.model.js'
import { UserModel } from './models/user/user.model.js'
import './config/db.mongo.js'
>>>>>>> 5efcba878ed66afecd9c66257860e1f8aef24abc

const server = new Server();
// const authModel = new AuthModel()
<<<<<<< HEAD
const customersModel = new CustomersModel();
const paysModel = new PaysModel();
const employeeModel = new EmployeesModel();

// server.app.use('/auth', createAuthRouter({ authModel }))
server.app.use("/customers", createCustomersRouter({ customersModel }));
server.app.use("/pays", createPaysRouter({ paysModel }));
server.app.use("/employee", createEmployeeRouter({ employeeModel }));
=======
const customersModel = new CustomersModel()
const paysModel = new PaysModel()
const productionOrderModel = new ProductionOrderModel()
const userModel = new UserModel()

// server.app.use('/auth', createAuthRouter({ authModel }))
server.app.use('/customers', createCustomersRouter({ customersModel }))
server.app.use('/pays', createPaysRouter({ paysModel }))
server.app.use('/productionOrder', createProductionOrderRouter({ productionOrderModel }))
server.app.use('/user', createUserRouter({ userModel }))
>>>>>>> 5efcba878ed66afecd9c66257860e1f8aef24abc

server.dbConnection();
server.listen();
