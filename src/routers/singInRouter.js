import { Router } from "express";

import { postSignInUser } from "../controllers/signInController.js";

const signInRouter = Router();

signInRouter.post("/sign-in", postSignInUser);

export default signInRouter;


