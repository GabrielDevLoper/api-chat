import { Router } from "express";

const roomsRoutes = Router();

import RoomController from "../app/controllers/RoomController";

roomsRoutes.get("/list", RoomController.index);
roomsRoutes.post("/save", RoomController.store);
roomsRoutes.get("/getMessages/:id_room", RoomController.getMessages);


export { roomsRoutes };