import { Router } from "express";
import { ListExpensesController  } from "../../controllers/labor/listExpenses.controller.js";

export const createListExpensesRouter = ({ ListExpensesModel }) => {
  const listExpensesRouter = Router();

  const listExpensesController = new ListExpensesController({ ListExpensesModel });

  listExpensesRouter.get("/", listExpensesController.get);
  listExpensesRouter.post("/", listExpensesController.post);
  listExpensesRouter.put("/:id", listExpensesController.put);
  return listExpensesRouter;
};
  