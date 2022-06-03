import { Role } from "../models/Role";

class RoleService {
  async index() {
    const roles = await Role.findMany();

    return roles;
  }
}

export default new RoleService();
