import { Request, Response } from "express";
import { User } from "../models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

class AuthController {
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
            return res.status(401);
        }

        const isValidPassword = await bcrypt.compare(password, user.password);

        if(!isValidPassword){
            return res.status(401);
        }

        const token = jwt.sign({ id: user.id}, 'secret', { expiresIn: '1d'});

        // @ts-expect-error Aqui vai ocorrer um erro, mas estou ignorando
        delete user.password;

        return res.json({
            user, 
            token
        });
    }
}

export default new AuthController();