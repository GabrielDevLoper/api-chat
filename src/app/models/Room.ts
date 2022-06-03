import { prismaClient } from "../../database/prismaClient";

const Room = prismaClient.room;

export { Room };
