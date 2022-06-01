import { Request, Response } from "express";
import { User } from "../models/User";
import { Role } from "../models/Role";
import UserService from "../services/UserService";

class UserController {
    async store(req: Request, res: Response){
        const { username, email, password, id_role, username_color } = req.body;

        const userAlreadyExists = await User.findUnique({
            where: { email }
        });

        if(userAlreadyExists){
            return res.json({ message: "user already exists"});
        }

        const role = await Role.findUnique({
            where: {id: id_role}
        });

        if(!role){
            return res.json({ message: "role not found"});
        }

        try {
            const user = await User.create({
                data: {
                    username,
                    email,
                    password,
                    id_role,
                    username_color: username_color ? username_color : null
                }
            });

            return res.json({ message: "Usuário(a) cadastrado com sucesso", user });
        } catch (error) {
            console.log(error);
        }
    }
    
    async index(req: Request, res: Response){
        const users = await UserService.index();

        return res.json(users);
        
    }
}

export default new UserController();