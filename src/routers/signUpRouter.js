import { Router } from "express";

import { postSignUpUser } from "../controllers/signUpController.js";

const signUpRouter = Router();

signUpRouter.post("/sign-up", postSignUpUser);

export default signUpRouter;