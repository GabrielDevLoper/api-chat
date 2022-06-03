import { Request, Response } from "express";
import { Room } from "../models/Room";
import RoomService from "../services/RoomService";

class RoomController {
  async index(req: Request, res: Response) {
    const rooms = await Room.findMany();

    return res.json(rooms);
  }

  async store(req: Request, res: Response) {
    const { name } = req.body;

    try {
      const room = await Room.create({
        data: {
          name,
        },
      });

      return res.json({ message: "Sala cadastrada com sucesso", room });
    } catch (error) {
      console.log(error);
    }
  }

  async getMessages(req: Request, res: Response) {
    const { id_room } = req.params;

    const messages = await RoomService.getMessages(Number(id_room));

    return res.json(messages);
  }
}

export default new RoomController();
