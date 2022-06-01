import { Router } from "express";

const roomsRoutes = Router();

roomsRoutes.get("/roomsList", (req, res) => {
    return res.json({message: "lista de salas"});;
});

export { roomsRoutes };