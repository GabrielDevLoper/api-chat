import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";

import { usersRoutes } from "./routes/users.routes";
import { roomsRoutes } from "./routes/rooms.routes";
import { messageRoutes } from "./routes/messages.routes";

const app = express();

//Servidor para rotas padrão protocolo http
const serverHttp = http.createServer(app);

//Servidor para utilizar o socket
const io = new Server(serverHttp);

app.use(express.json())
app.use(cors());

app.use("/user", usersRoutes);
app.use("/room", roomsRoutes);
app.use("/message", messageRoutes);


export { serverHttp, io };