import { Request, Response } from "express";
import MessageUserRoomService from "../services/MessageUserRoomService"

class MessageUserRoomController {
    async index(req: Request, res: Response){
        return await MessageUserRoomService.index(req, res);
    }

    async store(req: Request, res: Response){
        const { id_user, id_room, message } = req.body;

        return res.json(await MessageUserRoomService.send({ id_user, id_room, message}));
    }
}

export default new MessageUserRoomController();