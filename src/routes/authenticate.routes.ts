import authController from "../app/controllers/AuthController";

import { Router } from "express";
import authMiddleware from "../middlewares/auth";

const authenticateRoutes = Router();

authenticateRoutes.post("/authenticate", authController.authenticate);
authenticateRoutes.post("/create-account", authController.store);
authenticateRoutes.get(
  "/user-logged",
  authMiddleware,
  authController.userLogged
);

export { authenticateRoutes };
