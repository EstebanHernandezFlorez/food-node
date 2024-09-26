import { Server } from "./models/server.js";
// routes
// import { createAuthRouter } from './routes/auth.routes.js'
import { createCustomersRouter } from './routes/reservations/customers.routes.js'
import { createPaysRouter } from './routes/pays/pays.routes.js'
import { createProductionOrderRouter } from './routes/productionOrder/productionOrder.routes.js'
import { createUserRouter } from './routes/user/user.routes.js'
import { createEmployeeRouter } from "./routes/employees/employesRoutes.js";
import { createProviderRouter} from "./routes/provider/provider.routes.js"
import { createMonthlyExpensesRouter } from "./routes/labor/monthlyExpenses.routes.js"
import { createListExpensesRouter } from "./routes/labor/listExpenses.routes.js";
// models
// import { AuthModel } from './models/auth.model.js'
import { CustomersModel } from './models/reservations/customers.model.js'
import { PaysModel } from './models/pays/pays.model.js'
import { ProductionOrderModel } from './models/productionOrder/productionOrder.model.js'
import { UserModel } from './models/user/user.model.js'
import { EmployeesModel } from "./models/employees/employeeModels.js";
import { ProviderModel } from "./models/provider/providerModels.js";
import { MonthlyExpensesModel } from "./models/labor/monthlyExpenses.models.js"
import { ListExpensesModel } from "./models/labor/listExpenses.models.js"
import './config/db.mongo.js'

const server = new Server();
// const authModel = new AuthModel()
const customersModel = new CustomersModel()
const paysModel = new PaysModel()
const productionOrderModel = new ProductionOrderModel()
const userModel = new UserModel()
const employeeModel = new EmployeesModel()
const providerModel = new ProviderModel()
const monthlyExpensesModel = new MonthlyExpensesModel()
const listExpensesModel = new ListExpensesModel()

// server.app.use('/auth', createAuthRouter({ authModel }))
server.app.use('/customers', createCustomersRouter({ customersModel }))
server.app.use('/pays', createPaysRouter({ paysModel }))
server.app.use('/productionOrder', createProductionOrderRouter({ productionOrderModel }))
server.app.use('/user', createUserRouter({ userModel }))
server.app.use('/employee', createEmployeeRouter({employeeModel}))
server.app.use('/provider', createProviderRouter({providerModel}))
server.app.use('/monthlyExpense',createMonthlyExpensesRouter({monthlyExpensesModel}))
server.app.use('/listExpense',createListExpensesRouter({listExpensesModel}))

server.dbConnection();
server.listen();
