import { usersRoutes } from "./routes/users.routes";
import { roomsRoutes } from "./routes/rooms.routes";
import { messageRoutes } from "./routes/messages.routes";
import { rolesRoutes } from "./routes/roles.routes";
import { authenticateRoutes } from "./routes/authenticate.routes";

import authMiddleware from "./middlewares/auth";

import { Router } from "express";

const routes = Router();

routes.use("/authenticate", authenticateRoutes);

routes.use(authMiddleware);
routes.use("/user", usersRoutes);
routes.use("/room", roomsRoutes);
routes.use("/message", messageRoutes);
routes.use("/role", rolesRoutes);

export { routes };