import { Role } from '../../src/app/models/Role'

export async function rooleSeed() {
    const admin = await Role.upsert({
        where: { name: "ADMIN" },
        update: {},
        create: {
            name: "ADMIN"
        }
      });
    
      const comun = await Role.upsert({
        where: { name: "COMUN" },
        update: {},
        create: {
            name: "COMUN"
        }
      });
}
