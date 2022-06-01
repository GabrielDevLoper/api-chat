import { prismaClient } from "../../database/prismaClient";

const MessageUserRoom = prismaClient.messagesUserRoom;

export { MessageUserRoom };