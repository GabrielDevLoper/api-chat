import { io } from "./app";
import { MessageUserRoom } from "./app/models/MessageUserRoom";
import { UserRoom } from "./app/models/UserRoom";

//emit => emitir alguma informação
//on => escutando alguma informação
io.on("connection", async (socket) => {
  //usuarios em sala
  const users = await UserRoom.findMany();

  socket.on("select_room", async (response, callback) => {
    const { id_room, id_user } = response;

    //conectando em alguma sala
    socket.join(id_room);

    const userInRoom = users.find(
      (user) => user.id_user === id_user && user.id_room === id_room
    );

    if (userInRoom) {
      await UserRoom.update({
        where: { id: userInRoom.id },
        data: {
          socket_id: socket.id,
        },
      });
    } else {
      // Math.floor(Math.random() * 16777215).toString(16),
      await UserRoom.create({
        data: {
          id_room,
          id_user,
          socket_id: socket.id,
          status: true,
        },
      });
    }

    const messagesRoom = getMessagesRoom(id_room);
    callback(messagesRoom);
  });

  socket.on("message", async (response) => {
    const { id_room, id_user, message: text } = response;

    //Salvar as mensagens
    const message = await MessageUserRoom.create({
      data: {
        id_room,
        id_user,
        message: text,
      },
    });
    //Enviar para usuarios da sala
    io.to(id_room).emit("message", message);
  });
});

async function getMessagesRoom(room: number) {
  const messages = await MessageUserRoom.findMany();
  const messagesRoom = messages.filter((message) => message.id_room === room);

  return messagesRoom;
}
