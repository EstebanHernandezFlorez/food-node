import { Router } from "express";
import { EmployeesController } from "../../controllers/employees/employee.controller.js";

export const createEmployeeRouter = ({ employeeModel }) => {
  const employeeRouter = Router();

  const employeesController = new EmployeesController({ employeeModel });

  employeeRouter.get("/", employeesController.get);
  employeeRouter.post("/", employeesController.post);
  employeeRouter.put("/:id", employeesController.put);
  employeeRouter.delete("/:id", employeesController.delete);

  return employeeRouter;
};
