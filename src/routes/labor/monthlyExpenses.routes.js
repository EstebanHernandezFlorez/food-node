import { Router } from "express";
import { MonthlyExpensesController  } from "../../controllers/labor/monthlyExpenses.controller.js";

export const createMonthlyExpensesRouter = ({ monthlyExpenseModel }) => {
  const monthlyExpensesRouter = Router();

  const monthlyExpensesController = new MonthlyExpensesController({ monthlyExpenseModel });

  monthlyExpensesRouter.get("/", monthlyExpensesController.get);
  monthlyExpensesRouter.post("/", monthlyExpensesController.post);
  monthlyExpensesRouter.put("/:id", monthlyExpensesController.put);

  return monthlyExpensesRouter;
};
  
