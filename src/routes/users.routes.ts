import { Router } from "express";

import UserController from "../app/controllers/UserController";
import adminMiddleware from "../middlewares/admin";

const usersRoutes = Router();

usersRoutes.get("/list", adminMiddleware, UserController.index);
usersRoutes.post("/save", adminMiddleware, UserController.store);

export { usersRoutes };
