import { prismaClient } from "../../database/prismaClient";

const User = prismaClient.user;

export { User };