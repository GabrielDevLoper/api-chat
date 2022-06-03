import authController from "../app/controllers/AuthController";

import { Router } from "express";

const authenticateRoutes = Router();

authenticateRoutes.post("/authenticate", authController.authenticate);
authenticateRoutes.post("/create-account", authController.store);
authenticateRoutes.get("/user-logged", authController.userLogged);

export { authenticateRoutes };
