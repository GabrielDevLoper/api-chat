import { Room } from "../models/Room";

class RoomService {
    async getMessages(id_room: number){
        const messagesInRoom = await Room.findMany({
            where: { id: Number(id_room)},
            include: {
                MessagesUserRoom: {
                    where: {
                        id_room: Number(id_room)
                    }
                }
            }
        });

        return messagesInRoom;
    }
}

export default new RoomService();