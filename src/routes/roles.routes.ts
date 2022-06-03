import { Router } from "express";

const rolesRoutes = Router();

import RoleController from "../app/controllers/RoleController";

rolesRoutes.get("/list", RoleController.index);

export { rolesRoutes };
