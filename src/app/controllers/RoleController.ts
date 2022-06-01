import { Request, Response } from "express";
import RoleService from "../services/RoleService";

class RoleController {  
    async index(req: Request, res: Response){
        const roles = await RoleService.index();

        return res.json(roles);
        
    }
}

export default new RoleController();