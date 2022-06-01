import { Router } from "express";

const messageRoutes = Router();

messageRoutes.get("/room/:id_room", (req, res) => {
    const { id_room }  = req.params;
    
    return res.json({message: "Message routes"});;
});


export { messageRoutes };