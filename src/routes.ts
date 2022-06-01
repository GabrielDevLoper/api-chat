import { Router } from "express";

const routes = Router();

routes.get("/index", (req, res) => {
    return res.json({ message: "olá mundo" });;
});


export { routes };