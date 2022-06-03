import { prismaClient } from "../../database/prismaClient";

const UserRoom = prismaClient.usersRoom;

export { UserRoom };