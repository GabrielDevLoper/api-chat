import { Request, Response } from "express";
import UserService from "../services/UserService";

class UserController {
    async store(req: Request, res: Response){
        const { username, email, password, id_role, username_color } = req.body;

        const user = {
            username, 
            email, 
            password, 
            id_role, 
            username_color
        }

        return res.json(await UserService.store(user));
       
    }
    
    async index(req: Request, res: Response){
        const users = await UserService.index();

        return res.json(users);
        
    }
}

export default new UserController();