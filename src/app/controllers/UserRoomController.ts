import { Request, Response } from "express";
import { UsersRoom } from "../models/UsersRoom";

class UserRoomController {
  async store(req: Request, res: Response) {
    const { id_user, id_room } = req.body;

    const userInRoom = await UsersRoom.create({
      data: {
        id_user,
        id_room,
      },
    });

    return res.json(userInRoom);
  }

  async index(req: Request, res: Response) {
    const users = await UsersRoom.findMany();

    return res.json(users);
  }
}

export default new UserRoomController();
