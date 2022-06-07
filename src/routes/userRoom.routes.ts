import { Router } from "express";

const userRoomRoutes = Router();

import UserRoomController from "../app/controllers/UserRoomController";

userRoomRoutes.get("/list", UserRoomController.index);
userRoomRoutes.post("/save", UserRoomController.store);

export { userRoomRoutes };
