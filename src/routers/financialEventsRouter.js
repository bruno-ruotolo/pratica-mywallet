import { Router } from "express";

import {
  getFinancialEvents,
  getFinancialEventsSum,
  postFinancialEvents
} from "../controllers/financialEventsController.js";
import { tokenMiddleware } from "../middlewares/tokenMiddleware.js";


const financialEventsRouter = Router();

financialEventsRouter.post("/financial-events", tokenMiddleware, postFinancialEvents);
financialEventsRouter.get("/financial-events", tokenMiddleware, getFinancialEvents);
financialEventsRouter.get("/financial-events/sum", tokenMiddleware, getFinancialEventsSum);

export default financialEventsRouter;



