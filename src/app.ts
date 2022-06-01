import express from "express";
import cors from "cors";

import { usersRoutes } from "./routes/users.routes";
import { roomsRoutes } from "./routes/rooms.routes";
import { messageRoutes } from "./routes/messages.routes";

const app = express();

app.use(express.json())
app.use(cors());

app.use("/user", usersRoutes);
app.use("/room", roomsRoutes);
app.use("/message", messageRoutes);


export { app };