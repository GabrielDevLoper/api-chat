import { rooleSeed } from "./seeds/roole.seed";
import { roomSeed } from "./seeds/room.seed";

async function main() {
    rooleSeed();
    roomSeed();
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  