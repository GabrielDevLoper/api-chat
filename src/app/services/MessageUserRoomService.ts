import { Request, Response } from "express";
import { MessageUserRoom } from "../models/MessageUserRoom";


interface SendMessage {
    id_user: number;
    id_room: number;
    message: string;
}

class MessageUserRoomService {
    async send({ id_user, id_room, message }: SendMessage){
        try {
            await MessageUserRoom.create({
                data: {
                    id_user,
                    id_room,
                    message
                }
            });

            return {message: "mensagem enviada"}
        } catch (error) {
            console.log(error);
        }
    }

    async index(req: Request, res: Response){
        const { id_room } = req.params;

        const messagesUserRoom = await MessageUserRoom.findMany({
            where: { id_room: Number(id_room) }
        });

        return res.json(messagesUserRoom);
    }
}

export default new MessageUserRoomService();