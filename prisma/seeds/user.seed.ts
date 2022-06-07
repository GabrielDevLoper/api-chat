import { User } from "../../src/app/models/User";
import bcrypt from "bcryptjs";


export async function userSeed() {
 await User.upsert({
    where: { email: "gabriel@gmail.com" },
    update: {},
    create: {
      username: "gabriel",
      email: "gabriel@gmail.com",
      password: bcrypt.hashSync("123", 8),
      id_role: 1
    },
  });

}
