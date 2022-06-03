import { Router } from "express";

import UserController from "../app/controllers/UserController"
import authMiddleware from "../middlewares/auth";

const usersRoutes = Router();

usersRoutes.use(authMiddleware);
usersRoutes.get("/list", UserController.index);
usersRoutes.post("/save", UserController.store);

export { usersRoutes };