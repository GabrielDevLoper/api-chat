import { Router } from "express";

const messageRoutes = Router();

import MessageUserController from "../app/controllers/MessageUserRoomController"

messageRoutes.get("/room/:id_room", MessageUserController.index);
messageRoutes.post("/room/send", MessageUserController.store);

export { messageRoutes };