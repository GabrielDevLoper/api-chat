import express from "express";
import cors from "cors";

import { usersRoutes } from "./routes/users.routes";
import { roomsRoutes } from "./routes/rooms.routes";
import { messageRoutes } from "./routes/messages.routes";

const app = express();

app.use(cors());

app.use("/users", usersRoutes);
app.use("/rooms", roomsRoutes);
app.use("/messages", messageRoutes);


export { app };