import { User } from "../models/User";
import { Role } from "../models/Role";


interface User {
    username: string; 
    email: string;
    password: string;
    id_role: number;
    username_color?: string;
}

class UserService {
    async index(){
        try {
            const users = await User.findMany();

            return users;
        } catch (error) {
            console.log(error);
        }
        
    }

    async store({username, email, password, id_role, username_color}: User){
        const userAlreadyExists = await User.findUnique({
            where: { email }
        });

        if(userAlreadyExists){
            return { message: "user already exists"};
        }

        const role = await Role.findUnique({
            where: {id: id_role}
        });

        if(!role){
            return { message: "role not found"};
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

            return { message: "Usuário(a) cadastrado com sucesso" };
        } catch (error) {
            console.log(error);
        }
    }
}

export default new UserService();