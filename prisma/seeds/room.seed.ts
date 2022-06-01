import { Room } from '../../src/app/models/Room'

export async function roomSeed() {
    await Room.upsert({
        where: { name: "ReactJS" },
        update: {},
        create: {
            name: "ReactJS"
        }
      });
    
    await Room.upsert({
        where: { name: "NodeJS" },
        update: {},
        create: {
            name: "NodeJS"
        }
      });

    await Room.upsert({
        where: { name: "Java" },
        update: {},
        create: {
            name: "Java"
        }
      });
}
