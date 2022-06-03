import { Router } from "express";

import UserController from "../app/controllers/UserController"
import adminMiddleware from "../middlewares/admin";
import authMiddleware from "../middlewares/auth";

const usersRoutes = Router();

usersRoutes.use(authMiddleware);
usersRoutes.get("/list",  adminMiddleware, UserController.index);
usersRoutes.post("/save", adminMiddleware, UserController.store);

export { usersRoutes };