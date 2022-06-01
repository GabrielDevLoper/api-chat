import { Router } from "express";

const usersRoutes = Router();

import UserController from "../app/controllers/UserController"

usersRoutes.get("/list", UserController.index);
usersRoutes.post("/save", UserController.store);

export { usersRoutes };