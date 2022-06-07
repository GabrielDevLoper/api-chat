import express from "express";
import http from "http";
import cors from "cors";
import { Server } from "socket.io";
import { routes } from "./routes";

const app = express();

//Servidor para rotas padrão protocolo http
const serverHttp = http.createServer(app);

//Servidor para utilizar o socket
const io = new Server(serverHttp, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

app.use(express.json());
app.use(cors());
app.use(routes);

export { serverHttp, io };
