import { rooleSeed } from "./seeds/roole.seed";
import { roomSeed } from "./seeds/room.seed";
import { userSeed } from "./seeds/user.seed";

async function main() {
  rooleSeed();
  roomSeed();
  userSeed();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
