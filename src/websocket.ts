import { io } from "./app";

import { MessageUserRoom } from "./app/models/MessageUserRoom";
import { User } from "./app/models/User";
import { UsersRoom } from "./app/models/UsersRoom";
interface UserRoom {
  id_room: number;
  id_user: number;
}

interface UserRoomMessage {
  message: UserRoom;
  from?: string;
}
//emit => emitir alguma informação
//on => escutando alguma informação
io.on("connection", async (socket) => {
  //usuarios em sala
  const users = await UsersRoom.findMany();

  socket.on("select_room", async (response, callback) => {
    const { id_room, id_user } = response;

    //conectando em alguma sala
    socket.join(id_room);

    const userInRoom = users.find(
      (user: UserRoom) =>
        user.id_user === Number(id_user) && user.id_room === Number(id_room)
    );

    if (userInRoom) {
      await UsersRoom.update({
        where: { id: userInRoom.id },
        data: {
          socket_id: socket.id,
        },
      });
    } else {
      await UsersRoom.create({
        data: {
          id_room: Number(id_room),
          id_user,
          socket_id: socket.id,
          status: true,
        },
      });
    }

    const messagesRoom = await getMessagesRoom(
      Number(id_room),
      Number(id_user)
    );

    callback(messagesRoom);
  });

  socket.on("message", async (response) => {
    const { id_room, id_user, message: text } = response;

    //Salvar as mensagens
    const message = await MessageUserRoom.create({
      data: {
        id_room: Number(id_room),
        id_user,
        message: text,
      },
    });
    //Enviar mensagens para usuarios da sala
    io.to(id_room).emit("message", message);
  });
});

async function getMessagesRoom(room: number, id_user: number) {
  const messages = await MessageUserRoom.findMany({
    include: {
      user: true,
      room: true,
    },
  });
  const messagesRoom = messages.filter((message) => message.id_room === room);

  let messageCustom: UserRoomMessage[] = [];

  const separete = messagesRoom.map((message) => {
    if (message.id_user === id_user) {
      messageCustom.push({
        message,
        from: "me",
      });
    } else {
      messageCustom.push({
        message,
        from: "net",
      });
    }
  });

  return messageCustom;
}
