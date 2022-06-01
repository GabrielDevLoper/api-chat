import { User } from "../models/User";

class UserService {
    async index(){
        try {
            const users = await User.findMany();

            return users;
        } catch (error) {
            console.log(error);
        }
        
    }
}

export default new UserService();