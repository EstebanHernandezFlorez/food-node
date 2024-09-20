import { Server } from "./models/server.js";
// routes
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

const server = new Server();
// const authModel = new AuthModel()
const customersModel = new CustomersModel();
const paysModel = new PaysModel();
const employeeModel = new EmployeesModel();

// server.app.use('/auth', createAuthRouter({ authModel }))
server.app.use("/customers", createCustomersRouter({ customersModel }));
server.app.use("/pays", createPaysRouter({ paysModel }));
server.app.use("/employee", createEmployeeRouter({ employeeModel }));

server.dbConnection();
server.listen();
