import { Request, Response } from "express";
import { User } from "../models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { Role } from "../models/Role";

interface User {
    username: string; 
    email: string;
    password: string;
    username_color?: string;
}

class AuthController {
    async store(req: Request, res: Response){
        const { username, email, password } = req.body;

        const userAlreadyExists = await User.findUnique({
            where: { email }
        });

        if(userAlreadyExists){
            return res.json({ message: "user already exists"});
        }

        const role = await Role.findFirst({
            where: {
                name: "COMUN"
            }
        });

        if(!role){
            return res.json({ message: "role not found"});
        }

        try {
            const user = await User.create({
                data: {
                    username,
                    email,
                    password: bcrypt.hashSync(password, 8),
                    id_role: role.id,
                }
            });

            // @ts-ignore
            delete user.password;

            return res.json(user);
        } catch (error) {
            console.log(error);
        }
    }

    async userLogged(req: Request, res: Response){
        const user = await User.findUnique({
            where: { 
                id: req.userId
            }
        });

        // @ts-expect-error Aqui vai ocorrer um erro, mas estou ignorando
        delete user.password;

        return res.json(user);
    }

    async authenticate(req: Request, res: Response){
        const { email, password } = req.body;

        const user = await User.findUnique({
            where: {
                email
            } 
        });

        if(!user){
            return res.status(401).json({message: "User not found"});
        }

        const isValidPassword = await bcrypt.compare(password, user.password);

        if(!isValidPassword){
            return res.status(401).json({message: "Password is invalid or username"});
        }

        const token = jwt.sign({ id: user.id}, 'secret', { expiresIn: '1d'});

        return res.json({
            user, 
            token
        });
    }
}

export default new AuthController();