import authController from "../app/controllers/AuthController";
import authMiddleware from "../middlewares/auth";

import { Router } from "express";

const authenticate = Router();

authenticate.post("/authenticate", authController.authenticate);
authenticate.get("/user-logged", authMiddleware, authController.userLogged);

export { authenticate };



