import { Router } from "express";
import financialEventsRouter from "./financialEventsRouter.js";
import signUpRouter from "./signUpRouter.js";
import signInRouter from "./singInRouter.js";

const router = Router();

router.use(signUpRouter);
router.use(signInRouter);
router.use(financialEventsRouter);

export default router;