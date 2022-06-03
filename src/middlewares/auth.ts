import { Request, Response, NextFunction } from "express";
import "dotenv/config";
import jwt from "jsonwebtoken";

interface TokenPayload {
  id: number;
  iat: number;
  exp: number;
}

export default function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers.authorization;

  if (!authHeader)
    return res.status(401).json({ message: "Token not provided" });

  const [, token] = authHeader.split(" ");

  try {
    const payload = jwt.verify(token, "secret");

    const { id } = payload as TokenPayload;

    req.userId = id;

    return next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }
}
