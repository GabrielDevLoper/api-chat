import { Request, Response, NextFunction } from "express";
import { Role } from "../app/models/Role";
import { User } from "../app/models/User";

export default async function adminMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const id = req.userId;

  const user = await User.findUnique({
    where: { id },
  });

  const role = await Role.findUnique({
    where: {
      id: user?.id_role,
    },
  });

  if (role?.name === "ADMIN") {
    console.log("teste");
    return next();
  }

  return res.status(401).json({ message: "Unauthorized" });
}
