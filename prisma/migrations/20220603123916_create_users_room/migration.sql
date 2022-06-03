-- CreateTable
CREATE TABLE "users_room" (
    "id" SERIAL NOT NULL,
    "id_user" INTEGER NOT NULL,
    "id_room" INTEGER NOT NULL,
    "status" BOOLEAN DEFAULT true,

    CONSTRAINT "users_room_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "users_room" ADD CONSTRAINT "users_room_id_room_fkey" FOREIGN KEY ("id_room") REFERENCES "rooms"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users_room" ADD CONSTRAINT "users_room_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
