import { Router } from "express";

const usersRoutes = Router();

interface User {
    username: string;
    email: string;
    password: string;
    id_role?: number;
    username_color?: string;
    created_at?: Date;
    updated_at?: Date;
}

const usersList: User[] = [
    {
        username: "gbarreto.98",
        email:"gabriel.limabarreto@gmail.com",
        password: "123",
        id_role: 1,
    },
    {
        username: "ruan.99",
        email:"gabriel.limabarreto@gmail.com",
        password: "123",
        id_role: 1,
    },
    {
        username: "james.97",
        email:"james.limabarreto@gmail.com",
        password: "123",
        id_role: 1,
    },
    {
        username: "ewellinpaz",
        email:"ewe.paz@gmail.com",
        password: "123",
        id_role: 1,
    },
    {
        username: "juliuo",
        email:"julio.limabarreto@gmail.com",
        password: "123",
        id_role: 1,
    },
]

usersRoutes.get("/index", (req, res) => {
    return res.json(usersList);
});


export { usersRoutes };